const matter = require('gray-matter');
const { startOfToday } = require('date-fns');
const fs = require('fs');
const path = require('path');
const { filterEventsByDate, sortEvents } = require('../utils/events');

const eventsDir = path.join(process.cwd(), '_events');

export const getEventByDateAndSlug = ({ year, month }, slug, fields = []) => {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(eventsDir, year, month, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents);

  const items = {};

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }

    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }

    if (field === 'date') {
      items[field] = data.startDate;
    }

    if (field === 'year') {
      items[field] = year;
    }

    if (field === 'month') {
      items[field] = month;
    }
  });

  return items;
};

export const getEventSlugsByMonth = ({ year, month }) => {
  const fullPath = path.join(eventsDir, year, month);

  if (fs.lstatSync(fullPath).isFile()) {
    return [];
  }

  const fileNames = fs.readdirSync(fullPath);

  return fileNames;
};

export const getEventSlugsByYear = ({ year }) => {
  const fullPath = path.join(eventsDir, year);
  const months = fs.readdirSync(fullPath);

  const slugs = months.reduce((acc, month) => {
    const fileNames = getEventSlugsByMonth({ year, month });

    acc[month] = fileNames;

    return acc;
  }, {});

  return slugs;
};

export const getAllEventSlugs = () => {
  const years = fs.readdirSync(eventsDir);

  const slugs = years.reduce((acc, year) => {
    const months = getEventSlugsByYear({ year });

    acc[year] = months;

    return acc;
  }, {});

  return slugs;
};

export const getAllEvents = (fields = []) => {
  const slugs = getAllEventSlugs();

  const events = Object.keys(slugs).reduce((acc, year) => {
    const months = slugs[year];

    const yearEvents = Object.keys(months).reduce((acc2, month) => {
      const monthSlugs = months[month];

      const monthEvents = monthSlugs.map((slug) =>
        getEventByDateAndSlug({ year, month }, slug, fields),
      );

      return [...acc2, ...monthEvents];
    }, []);

    return [...acc, ...yearEvents];
  }, []);

  return events;
};

export const getEventsByMonth = (params, fields = []) => {
  const slugs = getEventSlugsByMonth(params);

  const events = slugs.map((slug) => getEventByDateAndSlug(params, slug, fields));

  return events;
};

export const getEventsByYear = (params, fields = []) => {
  const slugs = getEventSlugsByYear(params);

  const events = Object.keys(slugs).reduce((acc, month) => {
    const monthSlugs = slugs[month];

    const monthEvents = monthSlugs.map((slug) =>
      getEventByDateAndSlug({ ...params, month }, slug, fields),
    );

    return [...acc, ...monthEvents];
  }, []);

  return events;
};

export const getFutureEvents = (fields = []) => {
  const events = getAllEvents(fields);

  const startDate = startOfToday();

  const futureEvents = sortEvents(
    filterEventsByDate(events, {
      startDate,
    }),
  );

  return futureEvents;
};

export default {
  getEventByDateAndSlug,
  getEventSlugsByMonth,
  getEventSlugsByYear,
  getAllEventSlugs,
};
