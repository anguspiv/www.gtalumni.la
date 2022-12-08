import PropType from 'prop-types';
import { parseISO, format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import styled from '@emotion/styled';
import { AddToCalendar } from '@components/atoms/AddToCalendar';
import { getLocationString } from '@utils/address';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  overflow: hidden;
  min-width: 320px;
`;

const CardLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  flex: 0 1 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const ImageFrame = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  flex: 0 0 auto;
`;

const CardContent = styled.div`
  padding: 0.5rem 1rem 0rem;
  text-align: center;
  flex: 0 1 100%;
`;

const Title = styled.h5`
  margin: 0;
  color: var(--gt-color-navy);
`;

const StartDate = styled.p`
  margin: 0;
  color: var(--gt-color-dark-gold);
  font-weight: 600;
`;

const Description = styled.p`
  text-align: left;
  margin: 1rem 0;
`;

const Button = styled(AddToCalendar)`
  flex: 0 0 auto;
`;

const getEventUrl = (startDate, slug) => {
  const date = parseISO(startDate);
  const formattedDate = format(date, 'yyyy/MM');

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
  const date = parseISO(startDate);
  const formattedDate = format(date, 'MMMM d, yyyy');
  const formattedTime = format(date, 'h:mm a');

  const calStartDate = format(date, 'yyyy-MM-dd');
  const calStartTime = format(date, 'HH:mm');
  const calEndDate = endDate ? format(parseISO(endDate), 'yyyy-MM-dd') : null;
  const calEndTime = endDate ? format(parseISO(endDate), 'HH:mm') : null;

  const url = getEventUrl(startDate, slug);
  const locationStr = getLocationString(location.name, location.address);

  return (
    <Card className={className} data-testid="event-card">
      <Link href={url} passHref>
        <CardLink href={url}>
          {image && (
            <ImageFrame>
              <Image src={image} alt={title} layout="fill" />
            </ImageFrame>
          )}
          <CardContent>
            <Title>{title}</Title>
            <StartDate>
              {formattedDate} @ {formattedTime}
            </StartDate>
            <Description>{description}</Description>
          </CardContent>
        </CardLink>
      </Link>
      <Button
        name={title}
        startDate={calStartDate}
        startTime={calStartTime}
        endDate={calEndDate}
        endTime={calEndTime}
        description={description}
        location={locationStr}
      />
    </Card>
  );
}

EventCard.propTypes = {
  title: PropType.string.isRequired,
  startDate: PropType.string.isRequired,
  description: PropType.string.isRequired,
  image: PropType.string.isRequired,
  location: PropType.shape({
    name: PropType.string.isRequired,
    address: PropType.shape({
      street: PropType.string.isRequired,
      street2: PropType.string,
      city: PropType.string.isRequired,
      state: PropType.string.isRequired,
      zip: PropType.string.isRequired,
    }).isRequired,
  }).isRequired,
  endDate: PropType.string,
  slug: PropType.string.isRequired,
  className: PropType.string,
};

EventCard.defaultProps = {
  endDate: null,
  className: '',
};

export default EventCard;
