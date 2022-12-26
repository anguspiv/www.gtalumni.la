import PropTypes from 'prop-types';
import { unique } from 'radash';
import { parseISO } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';
import { useRouter } from 'next/router';
import { getEventsByMonth, getAllEvents } from '@lib/api';
import { EventList } from '@components/organisms/EventList';
import { PageHeader } from '@components/molecules/PageHeader';
import { Section } from '@components/atoms/Section';
import { Head } from '@components/organisms/Head';

export default function EventMonth({ events, month, year }) {
  const router = useRouter();
  const date = parseISO(`${year}-${month}-01`);
  const monthStr = formatInTimeZone(date, 'America/Los_Angeles', 'MMMM');

  const title = `Events - ${monthStr} ${year}`;

  const labels = { [month]: monthStr };

  return (
    <>
      <Head title={title} description={`Alumni Events for ${monthStr} ${year}`} />
      <Section maxWidth={800}>
        <PageHeader title={title} location={router} labels={labels} />
      </Section>
      <Section maxWidth={800}>
        <EventList events={events} />
      </Section>
    </>
  );
}

EventMonth.propTypes = {
  events: EventList.propTypes.events,
  month: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

EventMonth.defaultProps = {
  events: [],
};

export async function getStaticProps({ params }) {
  const { year, month } = params;

  const events = getEventsByMonth({ year, month }, [
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
      month,
      year,
    },
  };
}

export async function getStaticPaths() {
  let paths = getAllEvents(['year', 'month']);

  paths = unique(paths, (path) => `${path.year}-${path.month}`);

  paths = paths.map((path) => ({
    params: {
      year: path.year,
      month: path.month,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
