import { sort } from 'radash';
import { useRouter } from 'next/router';
import { parseISO, format } from 'date-fns';
import { getAllEvents } from '@lib/api';
import { EventList } from '@components/organisms/EventList';
import { PageHeader } from '@components/molecules/PageHeader';
import { Section } from '@components/atoms/Section';
import { Head } from '@components/organisms/Head';

export default function Events({ events }) {
  const title = 'Events';
  const router = useRouter();

  const sortedEvents = events.reduce((acc, event) => {
    const { startDate } = event;
    const monthLabel = format(parseISO(startDate), 'MMMM');
    const year = format(parseISO(startDate), 'yyyy');
    const month = format(parseISO(startDate), 'MM');

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

  return (
    <>
      <Head title={title} description="Alumni Events" />
      <Section maxWidth={800}>
        <PageHeader title={title} location={router} />
        {Object.entries(sortedEvents).map(([key, monthData]) => {
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
  let events = getAllEvents([
    'title',
    'startDate',
    'endDate',
    'location',
    'slug',
    'content',
    'image',
    'description',
  ]);

  events = sort(events, ({ startDate }) => parseISO(startDate), 'desc');

  return {
    props: {
      events,
    },
  };
}
