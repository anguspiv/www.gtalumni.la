import PropType from 'prop-types';
import { formatInTimeZone } from 'date-fns-tz';
import Image from 'next/image';
import Link from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { AddToCalendar } from '@components/atoms/AddToCalendar';
import { getLocationString } from '@utils/address';
import { media } from '@styles/utils/breakpoints';
import { Button } from '@components/atoms/Button';

const Card = styled.div`
  display: grid;
  grid-temaplate-rows: auto 1fr auto;
  grid-template-columns: 1fr;
  grid-template-areas: 'media' 'content' 'footer';
  width: 100%;
  border: 1px solid var(--gt-color-light-gray);
  border-radius: 0.5rem;
  background-color: var(--gt-color-white);
  overflow: hidden;
  min-width: 320px;
  align-items: stretch;

  ${media.md} {
    grid-template-columns: minmax(240px, 320px) 1fr;
    grid-template-rows: 1fr auto;
    grid-template-areas: 'media content' 'media footer';
  }
`;

const CardMedia = styled.div`
  grid-area: media;
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
`;

const CardContent = styled.div`
  grid-area: content;
  padding: 0.5rem 1rem 0rem;
  text-align: center;

  ${media.md} {
    text-align: left;
  }
`;

const CardFooter = styled.div`
  grid-area: footer;
  display: flex;
  justify-content: stretch;
`;

const EventLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: inherit;
`;

const Title = styled.h4`
  margin: 0 auto;
  color: var(--gt-color-navy);
  font-family: var(--gt-font-family-title);
  transition: all 0.2s ease-in-out;

  ${EventLink}:hover {
    color: var(--gt-color-blue);
    text-decoration: underline;
  }
`;

const StartDate = styled.p`
  margin: 0;
  color: var(--gt-color-dark-gold);
  font-weight: 600;
  transition: color 0.2s ease-in-out;
`;

const Description = styled.p`
  text-align: left;
  margin: 1rem 0;
`;

const footerButtonCSS = css`
  flex: 1 1 50%;
  border-radius: 0;
  box-shadow: none;
  width: 50%;
`;

const CalButton = styled(AddToCalendar)`
  ${footerButtonCSS}
  border-bottom-left-radius: 0.5rem;

  ${media.md} {
    border-bottom-left-radius: 0;
  }
`;

const InfoButton = styled(Button)`
  ${footerButtonCSS}
  border-bottom-right-radius: 0.5rem;

  &: hover {
    color: var(--gt-color-blue);
    border-color: var(--gt-color-blue);
  }
`;

const getEventUrl = (startDate, slug) => {
  const date = new Date(startDate);
  const formattedDate = formatInTimeZone(date, 'America/Los_Angeles', 'yyyy/MM');

  return `/events/${formattedDate}/${slug}`;
};

export function EventCard({
  title,
  startDate,
  endDate,
  description,
  image,
  location,
  slug,
  className,
}) {
  const parsedStart = new Date(startDate);
  const parsedEnd = new Date(endDate);

  const calStartDate = formatInTimeZone(parsedStart, 'America/Los_Angeles', 'yyyy-MM-dd');
  const calStartTime = formatInTimeZone(parsedStart, 'America/Los_Angeles', 'HH:mm');
  const calEndDate = endDate
    ? formatInTimeZone(parsedEnd, 'America/Los_Angeles', 'yyyy-MM-dd')
    : null;
  const calEndTime = endDate ? formatInTimeZone(parsedEnd, 'America/Los_Angeles', 'HH:mm') : null;

  const displayDate = formatInTimeZone(parsedStart, 'America/Los_Angeles', 'MMM. do @ h:mm a');

  const url = getEventUrl(startDate, slug);
  const locationStr = getLocationString(location.name, location.address);

  return (
    <Card className={className} data-testid="event-card">
      {image && (
        <CardMedia>
          <Image src={image} alt={title} layout="fill" />
        </CardMedia>
      )}
      <CardContent>
        <StartDate>{displayDate}</StartDate>
        <Title>
          <Link passHref href={url}>
            <EventLink href={url}>{title}</EventLink>
          </Link>
        </Title>
        <Description>{description}</Description>
      </CardContent>
      <CardFooter>
        <CalButton
          name={title}
          startDate={calStartDate}
          startTime={calStartTime}
          endDate={calEndDate}
          endTime={calEndTime}
          description={description}
          location={locationStr}
        />
        <Link href={url} passHref>
          <InfoButton as="a" href={url} variant="secondary">
            Learn More
          </InfoButton>
        </Link>
      </CardFooter>
    </Card>
  );
}

EventCard.propTypes = {
  title: PropType.string,
  startDate: PropType.string,
  description: PropType.string,
  image: PropType.string,
  location: PropType.shape({
    name: PropType.string,
    address: PropType.shape({
      street: PropType.string,
      street2: PropType.string,
      city: PropType.string,
      state: PropType.string,
      zip: PropType.string,
    }),
  }),
  endDate: PropType.string,
  slug: PropType.string.isRequired,
  className: PropType.string,
};

EventCard.defaultProps = {
  title: '',
  startDate: '',
  description: '',
  image: '',
  location: {
    name: '',
    address: {
      street: '',
      street2: '',
      city: '',
      state: '',
      zip: '',
    },
  },
  endDate: '',
  className: '',
};

export default EventCard;
