import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { formatInTimeZone } from 'date-fns-tz';
import { rem } from 'polished';
import styled from '@emotion/styled';
import { getEventByDateAndSlug, getAllEvents } from '@lib/api';
import { markdownToHtml } from '@lib/markdownToHtml';
import { Section } from '@components/atoms/Section';
import { PageHeader } from '@components/molecules/PageHeader';
import { Head } from '@components/organisms/Head';
import { Image } from '@components/atoms/Image';
import { Typography } from '@components/atoms/Typography';
import { LocationCard } from '@components/organisms/LocationCard';
import { AddToCalendar } from '@components/atoms/AddToCalendar';
import { getLocationString } from '@utils/address';
import { Button } from '@components/atoms/Button';

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  align-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 1rem 0;

  & > * {
    margin: 0 0.5rem 1rem;
    max-width: ${rem(280)};
  }
`;

export default function Event({ event, month }) {
  const router = useRouter();

  const { title, content, startDate, description, image, location, endDate, link } = event;

  const parsedStartDate = new Date(startDate);
  const parsedEndDate = endDate ? new Date(endDate) : null;

  const formattedMonth = formatInTimeZone(parsedStartDate, 'America/Los_Angeles', 'MMMM');

  const calStartDate = formatInTimeZone(parsedStartDate, 'America/Los_Angeles', 'yyyy-MM-dd');
  const calEndDate = parsedEndDate
    ? formatInTimeZone(parsedEndDate, 'America/Los_Angeles', 'yyyy-MM-dd')
    : null;
  let calStartTime = formatInTimeZone(parsedStartDate, 'America/Los_Angeles', 'HH:mm');
  let calEndTime = parsedEndDate
    ? formatInTimeZone(parsedEndDate, 'America/Los_Angeles', 'HH:mm')
    : null;

  let dateFormat = 'MMMM d, yyyy @ h:mm a';

  if (!calEndTime || calStartTime === calEndTime) {
    dateFormat = 'MMMM d, yyyy';
    calStartTime = null;
    calEndTime = null;
  }

  const formattedDate = formatInTimeZone(parsedStartDate, 'America/Los_Angeles', dateFormat, {
    timeZone: 'America/Los_Angeles',
  });

  const labels = {};
  labels[month] = formattedMonth;

  const seoTitle = `${title} - ${formattedDate}`;
  const imageUrl = `${image}`;

  const locationString = getLocationString(location?.name, location?.address);

  const hasLink = !!link && !!link?.href;

  return (
    <>
      <Section maxWidth={800}>
        <Head
          title={seoTitle}
          description={description}
          image={{
            src: imageUrl,
            alt: title,
          }}
        />
        <PageHeader title={title} location={router} subtitle={formattedDate} labels={labels} />
        <Image src={imageUrl} alt={title} />
        {/* eslint-disable-next-line react/no-danger */}
        <article dangerouslySetInnerHTML={{ __html: content }} />
        <ButtonWrapper>
          {hasLink && (
            <Button as="a" href={link?.href} target="_blank" rel="noopener noreferrer">
              {link?.label || 'More Info'}
            </Button>
          )}
          <AddToCalendar
            name={title}
            description={description}
            startDate={calStartDate}
            startTime={calStartTime}
            endDate={calEndDate}
            endTime={calEndTime}
            location={locationString}
            variant={hasLink ? 'secondary' : 'primary'}
          />
        </ButtonWrapper>
      </Section>
      {location && location?.address && (
        <Section align="center" background="secondary" maxWidth={800}>
          <Typography variant="h2">Location</Typography>
          <LocationCard address={location.address} name={location.name} href={location.href} />
        </Section>
      )}
    </>
  );
}

Event.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    location: PropTypes.shape(LocationCard.propTypes),
    link: PropTypes.shape({
      href: PropTypes.string,
      label: PropTypes.string,
    }),
  }).isRequired,
  month: PropTypes.string.isRequired,
};

export async function getStaticProps({ params }) {
  const { year, month, slug } = params;
  const event = getEventByDateAndSlug({ year, month }, slug, [
    'title',
    'startDate',
    'endDate',
    'location',
    'slug',
    'content',
    'image',
    'description',
    'link',
  ]);

  const content = await markdownToHtml(event.content || '');

  return {
    props: {
      event: {
        ...event,
        content,
      },
      year,
      month,
      slug,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllEvents(['slug', 'year', 'month']).map((event) => ({
    params: { ...event },
  }));

  return {
    paths,
    fallback: false,
  };
}
