import { useState } from 'react';
import { EventForm } from '@components/organisms/EventForm';
import { PageHeader } from '@components/molecules/PageHeader';
import { Section } from '@components/atoms/Section';
import { Head } from '@components/organisms/Head';
import { Typography } from '@components/atoms/Typography';

const eventsApi = '/api/events';

const submitEvent = async (event) => {
  const res = await fetch(eventsApi, {
    method: 'POST',
    body: JSON.stringify(event),
  });

  if (!res.ok) {
    throw new Error(`Error submitting event: ${res.statusText}`);
  }

  const data = await res.json();

  return data;
};

export default function NewEvent() {
  const title = 'Submit a New Event';
  const [message, setMessage] = useState('');

  const onSubmit = async (event) => {
    setMessage('');

    try {
      await submitEvent(event);
      setMessage('Event submission received. Thank you!');
    } catch (error) {
      console.error(error);
      setMessage('Error sending event submission.');
    }
  };

  return (
    <>
      <Head title={title} description="Submit a new event" />
      <Section maxWidth={800}>
        <PageHeader title={title} />
        <EventForm onSubmit={onSubmit} />
        {message && <Typography variant="body1">{message}</Typography>}
      </Section>
    </>
  );
}
