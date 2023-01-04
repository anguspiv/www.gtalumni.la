import { sort } from 'radash';
import { useRouter } from 'next/router';
import { formatInTimeZone } from 'date-fns-tz';
import { getFutureEvents } from '@lib/api';
import { EventList } from '@components/organisms/EventList';
import { PageHeader } from '@components/molecules/PageHeader';
import { Section } from '@components/atoms/Section';
import { Head } from '@components/organisms/Head';

export default function Events({ events }) {
  const title = 'Events';
  const router = useRouter();

  return (
    <>
      <Head title={title} description="Alumni Events" />
      <Section maxWidth={800}>
        <PageHeader title={title} location={router} />
        {Object.entries(events).map(([key, monthData]) => {
          const { events: evts, month, year } = monthData;

          return (
            <EventList key={key} events={evts} title={key} href={`/events/${year}/${month}`} />
          );
        })}
      </Section>
    </>
  );
}

Events.propTypes = {
  events: EventList.propTypes.events,
};

Events.defaultProps = {
  events: [],
};

export async function getStaticProps() {
  let events = getFutureEvents([
    'title',
    'startDate',
    'endDate',
    'location',
    'slug',
    'content',
    'image',
    'description',
  ]);

  events = sort(events, ({ startDate }) => new Date(startDate), 'desc');

  events = events.reduce((acc, event) => {
    const { startDate } = event;

    const currDate = new Date(startDate);

    const monthLabel = formatInTimeZone(currDate, 'America/Los_Angeles', 'MMMM');
    const year = formatInTimeZone(currDate, 'America/Los_Angeles', 'yyyy');
    const month = formatInTimeZone(currDate, 'America/Los_Angeles', 'MM');

    const listTitle = `${monthLabel} ${year}`;

    if (!acc[listTitle]) {
      acc[listTitle] = {
        events: [],
        year,
        month,
      };
    }

    acc[listTitle].events.push(event);

    return acc;
  }, {});

  return {
    props: {
      events,
    },
  };
}
