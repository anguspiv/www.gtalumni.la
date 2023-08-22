import { useRouter } from 'next/router';
import { PageHeader } from '@components/molecules/PageHeader';
import { Section } from '@components/atoms/Section';
import { Head } from '@components/organisms/Head';
import { Typography } from '@components/atoms/Typography';
import { LocationCard } from '@components/organisms/LocationCard';
import { Link } from '@components/atoms/Link';

const title = 'Game Watching';
const description = `
Come join us your fellow Georgia Tech Alumni and watch our Yellow Jackets play!
Even if you aren't a football fan, come out and meet some new people and enjoy
some good food and drinks. Check here for details for each game.`;

const location = {
  name: 'The Garage on Motor',
  href: 'https://garageonmotor.com/',
  address: {
    street: '3387 Motor Ave',
    city: 'Los Angeles',
    state: 'CA',
    zip: '90034',
  },
};

export default function GameWatching() {
  const router = useRouter();

  return (
    <>
      <Head title={title} description={description} />
      <Section maxWidth={800}>
        <PageHeader title={title} location={router} />
        <Typography variant="body1">
          Come join us your fellow Georgia Tech Alumni and watch our Yellow Jackets play! Even if
          you aren&apos;t a football fan, come out and meet us and enjoy some good food and drinks.
          Its a great way to meet other Georgia Tech alumni and friends in the area.
        </Typography>
        <LocationCard address={location.address} name={location.name} href={location.href} />
        <Typography variant="body1">
          For the 2023 season, our main location will be at{' '}
          <Link href={location.href}>The Garage on Motor Ave.</Link> in Culver City. For most games
          we will try and have a table reserved for us. If you are planning on coming, please RSVP
          on our <Link href="https://www.facebook.com/groups/39515948772">Facebook group</Link> so
          we can get a head count, but feel free to come last minute as well!
        </Typography>
        <Typography variant="body1">
          For some games, such as 9am games, the bar might not be open, so we might meet at
          different locations. Please check the <Link href="/events">Events</Link> page or{' '}
          <Link href="https://www.facebook.com/groups/39515948772">Facebook group</Link> for details
          on each game.
        </Typography>
      </Section>
      <Section maxWidth={800} background="secondary">
        <Typography variant="h2">Other Locations</Typography>
        <Typography variant="body1">
          We understand that Los Angeles is a big place and Culver City might not be convenient for
          everyone. If you would like to host a game watching party at a different location, please
          reach out to us at <Link href="mailto:events@gtalumni.la">events@gtalumni.la</Link> and we
          can help you get the word out!
        </Typography>
        <Typography variant="body1">
          If you have any questions, please feel free to reach out in our{' '}
          <Link href="https://www.facebook.com/groups/39515948772/">Facebook group</Link> or email
          us at <Link href="mailto:hello@gtalumni.la">hello@gtalumni.la</Link>.
        </Typography>
      </Section>
    </>
  );
}
