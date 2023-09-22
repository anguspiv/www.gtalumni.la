import { sort } from 'radash';
import { getFutureEvents } from '@lib/api';
import { AboutSection } from '@components/organisms/AboutSection';
import { ContactSection } from '@components/organisms/ContactSection';
import { UpcomingEvents } from '@components/organisms/UpcomingEvents';

function Home({ events }) {
  return (
    <>
      <UpcomingEvents events={events} />
      <AboutSection />
      <ContactSection />
    </>
  );
}

Home.propTypes = {
  events: UpcomingEvents.propTypes.events,
};

Home.defaultProps = {
  events: [],
};

export default Home;

export async function getStaticProps() {
  let events = getFutureEvents(
    ['title', 'startDate', 'endDate', 'location', 'slug', 'content', 'image', 'description'],
    2,
  );

  events = sort(events, ({ startDate }) => new Date(startDate), 'desc');

  return {
    props: {
      events,
    },
  };
}
