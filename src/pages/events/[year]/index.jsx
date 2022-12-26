import PropTypes from 'prop-types';
import { unique } from 'radash';
import { useRouter } from 'next/router';
import { formatInTimeZone } from 'date-fns-tz';
import { getEventsByYear, getAllEvents } from '@lib/api';
import { EventList } from '@components/organisms/EventList';
import { PageHeader } from '@components/molecules/PageHeader';
import { Section } from '@components/atoms/Section';
import { Head } from '@components/organisms/Head';

export default function EventYear({ events, year }) {
  const title = `Events - ${year}`;
  const router = useRouter();

  const sortedEvents = events.reduce((acc, event) => {
    const { startDate } = event;

    const currDate = new Date(startDate);

    const month = formatInTimeZone(currDate, 'America/Los_Angeles', 'MM');
    const monthName = formatInTimeZone(currDate, 'America/Los_Angeles', 'MMMM');

    if (!acc[month]) {
      acc[month] = {
        title: monthName,
        events: [],
      };
    }

    acc[month].events.push(event);

    return acc;
  }, {});

  return (
    <>
      <Head title={title} description={`Alumni Events for ${year}`} />
      <Section maxWidth={800}>
        <PageHeader title={title} location={router} labels={{ [year]: year }} />
      </Section>
      <Section maxWidth={800}>
        {Object.entries(sortedEvents).map(([month, monthData]) => {
          const { title: monthTitle, events: evts } = monthData;

          return (
            <EventList
              key={month}
              events={evts}
              title={monthTitle}
              href={`/events/${year}/${month}`}
            />
          );
        })}
      </Section>
    </>
  );
}

EventYear.propTypes = {
  events: EventList.propTypes.events,
  year: PropTypes.string.isRequired,
};

EventYear.defaultProps = {
  events: [],
};

export async function getStaticProps({ params }) {
  const { year } = params;

  const events = getEventsByYear({ year }, [
    'title',
    'startDate',
    'endDate',
    'location',
    'slug',
    'content',
    'image',
    'description',
  ]);

  return {
    props: {
      events,
      year,
    },
  };
}

export async function getStaticPaths() {
  let paths = getAllEvents(['year']);

  paths = unique(paths, ({ year }) => year);

  paths = paths.map((path) => ({
    params: {
      year: path.year,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
