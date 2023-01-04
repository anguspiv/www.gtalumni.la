import { startOfDay, addMonths, endOfDay } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

export const filterUpcomingEvents = (events = []) => {
  let today = utcToZonedTime(new Date(), 'America/Los_Angeles');
  today = startOfDay(today);
  const end = endOfDay(addMonths(today, 1));

  return events.filter(({ startDate }) => {
    const start = new Date(startDate);
    return start >= today && start <= end;
  });
};

export const sortEvents = (events = []) => {
  const sortedEvents = [...events];

  return sortedEvents.sort((a, b) => {
    const aDate = new Date(a.startDate);
    const bDate = new Date(b.startDate);
    return aDate - bDate;
  });
};

export default {
  filterUpcomingEvents,
  sortEvents,
};
