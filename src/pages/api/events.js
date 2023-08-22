import { parseISO, format } from 'date-fns';
import { send } from '@lib/email';

const EVENT_TO = 'events@gtalumni.la';
const EVENT_FROM = 'george.p.burdell@gtalumni.la';

const formatEventDate = (date) => {
  let dateStr = date;

  if (!date) {
    return dateStr;
  }

  try {
    const parsedDated = parseISO(date);

    dateStr = format(parsedDated, 'MMMM dd, yyyy h:mm a OOOO');
  } catch (error) {
    console.error(error);
  }

  return dateStr;
};

const getEventSubject = ({ title, startDate }) =>
  `New Event: ${title} on ${formatEventDate(startDate)}`;

const getEventEmailBody = ({
  title,
  startDate,
  endDate,
  description,
  location,
  link,
  contact,
  details,
}) => `
New Event Submission From
  Name: ${contact?.name}
  Email: ${contact?.email}

---
title: ${title}
startDate: ${formatEventDate(startDate)}
endDate: ${formatEventDate(endDate)}
description: ${description}
image:
link:
  href: ${link?.url}
  label: ${link?.label}
location:
  name: ${location?.name}
  href: ${location?.url}
  address:
    street: ${location?.address?.street}
    city: ${location?.address?.city}
    state: ${location?.address?.state}
    zip: ${location?.address?.zip}
---

${details}
`;

const post = async (req, res) => {
  let status = 200;
  let message = 'Event submission received.';

  const data = JSON.parse(req.body);

  try {
    await send({
      from: EVENT_FROM,
      to: EVENT_TO,
      subject: getEventSubject(data),
      text: getEventEmailBody(data),
    });

    status = 201;
    message = 'Event submission received. Thank you!';
  } catch (error) {
    console.error(error);
    status = 500;
    message = 'Error sending event submission.';
  }

  res.status(status).json({ message });
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    post(req, res);
    return;
  }

  res.status(404).json({ message: 'Invalid request method' });
}
