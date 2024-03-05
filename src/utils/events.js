import { startOfToday, addMonths, endOfDay } from 'date-fns';

export const filterEventsByDate = (events, { startDate, endDate }) =>
  events?.filter((event) => {
    const eventStartDate = new Date(event.startDate);

    if (startDate && eventStartDate < startDate) {
      return false;
    }

    if (endDate && eventStartDate > endDate) {
      return false;
    }

    return true;
  });

export const filterUpcomingEvents = (events) => {
  const startDate = startOfToday();
  const endDate = endOfDay(addMonths(startDate, 3));

  return filterEventsByDate(events, { startDate, endDate });
};

export const sortEvents = (events) => {
  const sortedEvents = [...events];

  return sortedEvents.sort((a, b) => {
    const aDate = new Date(a.startDate);
    const bDate = new Date(b.startDate);
    return aDate - bDate;
  });
};

export default {
  filterEventsByDate,
  filterUpcomingEvents,
  sortEvents,
};
