import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { parseISO, format } from 'date-fns';
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
import { getHost } from '@utils/env';
import { getLocationString } from '@utils/address';

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

const imageHost = getHost();

export default function Event({ event, month }) {
  const router = useRouter();

  const { title, content, startDate, shortDescription, image, location, endDate } = event;

  const parsedStartDate = parseISO(startDate);
  const parsedEndDate = parseISO(endDate);

  const formattedDate = format(parsedStartDate, 'MMMM d, yyyy @ h:mm a');
  const formattedMonth = format(parsedStartDate, 'MMMM');

  const calStartDate = format(parsedStartDate, 'yyyy-MM-dd');
  const calEndDate = format(parsedEndDate, 'yyyy-MM-dd');
  const calStartTime = format(parsedStartDate, 'HH:mm');
  const calEndTime = format(parsedEndDate, 'HH:mm');

  const labels = {};
  labels[month] = formattedMonth;

  const seoTitle = `${title} - ${formattedDate}`;
  const imageUrl = `${imageHost}${image}`;

  const locationString = getLocationString(location.title, location.address);

  return (
    <>
      <Section maxWidth={800}>
        <Head
          title={seoTitle}
          description={shortDescription}
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
          <AddToCalendar
            name={title}
            description={shortDescription}
            startDate={calStartDate}
            startTime={calStartTime}
            endDate={calEndDate}
            endTime={calEndTime}
            location={locationString}
          />
        </ButtonWrapper>
      </Section>
      <Section align="center" background="secondary" maxWidth={800}>
        <Typography variant="h2">Location</Typography>
        <LocationCard address={location.address} title={location.title} href={location.href} />
      </Section>
    </>
  );
}

Event.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    shortDescription: PropTypes.string,
    image: PropTypes.string,
    location: PropTypes.shape(LocationCard.propTypes),
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
    'shortDescription',
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
