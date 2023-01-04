import PropTypes from 'prop-types';
import { Section } from '@components/atoms/Section';
import { EventList } from '@components/organisms/EventList';
import { filterUpcomingEvents, sortEvents } from '@utils/events';

export function UpcomingEvents({ className, events, background }) {
  const upcomingEvents = sortEvents(filterUpcomingEvents(events));

  return (
    <Section className={className} maxWidth={800} background={background}>
      <EventList events={upcomingEvents} title="Upcoming Events" />
    </Section>
  );
}

UpcomingEvents.propTypes = {
  className: PropTypes.string,
  events: EventList.propTypes.events,
  background: Section.propTypes.background,
};

UpcomingEvents.defaultProps = {
  className: '',
  events: EventList.defaultProps.events,
  background: Section.defaultProps.background,
};

export default UpcomingEvents;
