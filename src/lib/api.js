const matter = require('gray-matter');
const { parseISO, format } = require('date-fns');
const fs = require('fs');
const path = require('path');

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
      const startDate = parseISO(data.startDate);
      items[field] = format(startDate, 'yyyy-MM-dd');
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

export default {
  getEventByDateAndSlug,
  getEventSlugsByMonth,
  getEventSlugsByYear,
  getAllEventSlugs,
};
