import { PropTypes } from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styled from '@emotion/styled';
import { Input } from '@components/molecules/Input';
import { TextArea } from '@components/molecules/TextArea';
import { Button } from '@components/atoms/Button';

const schema = yup.object({
  title: yup.string().required('Please enter a title for the event.'),
  startDate: yup
    .date()
    .typeError('Please enter a valid start date and time for the event. (PST)')
    .required('Please enter a start date for the event.')
    .min(new Date(), 'Please enter a future start date event.'),
  endDate: yup
    .date('Please enter a valid end date and time for the event. (PST)')
    .typeError('Please enter a valid end date and time for the event. (PST)')
    .nullable()
    .min(yup.ref('startDate'), 'Please enter an end date after the start date.'),
  link: yup.object({
    url: yup.string().url('Please enter a valid url for the link'),
    label: yup.string().when('url', {
      is: (val) => !!val,
      then: (field) => field.required('Please enter a label for the link URL.'),
    }),
  }),
  location: yup.object({
    name: yup
      .string()
      .when(['url', 'address.street', 'address.city', 'address.state', 'address.zip'], {
        is: (...vals) => vals.some((val) => !!val),
        then: (field) => field.required('Please enter a name for the location.'),
      }),
    url: yup.string().url('Please enter a valid URL.'),
    address: yup.object({
      street: yup.string(),
      city: yup.string().when('street', {
        is: (val) => !!val,
        then: (field) => field.required('Please enter a city for the location.'),
      }),
      state: yup.string().when(['street', 'city'], {
        is: (...vals) => vals.some((val) => !!val),
        then: (field) => field.required('Please enter a state for the location.'),
      }),
      zip: yup.string(),
    }),
  }),
  description: yup.string().required('Please enter a description for the event.'),
  details: yup.string().max(801, 'Please enter a description that is no more than 800 characters.'),
  contact: yup.object({
    name: yup.string().required('Please enter a name for the contact.'),
    email: yup
      .string()
      .email('Please enter a valid email address.')
      .required('Please enter an email address for the contact.'),
  }),
});

const Fieldset = styled.fieldset`
  border: none;
  padding: 1rem 0;
  border-top: thin solid var(--gt-color-medium-gray);
  &:first-of-type {
    border-top: none;
  }
`;

const TitleInfo = 'An title for the event such as "Game Watching - GT vs UVA" or "Happy Hour"';

const StartDateInfo = 'The start date and time of the event. All times are in PST.';

const EndDateInfo = 'The end date and time of the event. All times are in PST.';

const DescriptionInfo =
  'A short description of the event. This will be displayed on the event card, and any social media posts.';

const LinkInfo =
  'An optional link to display as a button on the event page. If a link is provided, a label is required. Some examples might be a registration page, or a link to a live stream.';

const LinkLabelInfo = `The label for the link to be displayed on the Event Page. ${LinkInfo}`;

const LinkUrlInfo = `The URL for the link to be displayed on the Event Page. ${LinkInfo}`;

const LocationNameInfo = 'The name of the location for the event.';

const LocationUrlInfo =
  'An optional URL for the location of the event. Such as the location website.';

const LocationStreetInfo = 'The street address for the location of the event.';

const LocationCityInfo = 'The city for the location of the event.';

const LocationStateInfo = 'The state for the location of the event.';

const LocationZipInfo = 'The zip code for the location of the event.';

const DetailsInfo = 'Additional details about the event. This will be displayed on the event page.';

const ContactNameInfo =
  'Please give us your name, so that we may contact you if we have any questions.';

const ContactEmailInfo =
  'Please give us your email address, so that we may contact you if we have any questions.';

export function EventForm({ onSubmit, values }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = useForm({
    defaultValues: values,
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const isSubmitDisabled = !isDirty || isSubmitting;

  const isFormDisabled = isSubmitting;

  return (
    <div>
      <h1>Event Form</h1>
      <form
        onSubmit={handleSubmit((val) => onSubmit(val))}
        name="eventForm"
        aria-label="Submit a new Event"
      >
        <Fieldset>
          <Input
            label="Title"
            {...register('title')}
            id="title"
            error={!!errors?.title?.message}
            message={errors?.title?.message}
            popup={TitleInfo}
            disabled={isFormDisabled}
          />
          <Input
            label="Start Date"
            {...register('startDate')}
            type="datetime-local"
            disabled={isFormDisabled}
            id="startDate"
            error={!!errors?.startDate?.message}
            message={errors?.startDate?.message}
            popup={StartDateInfo}
          />
          <Input
            label="End Date"
            {...register('endDate')}
            type="datetime-local"
            disabled={isFormDisabled}
            id="endDate"
            error={!!errors?.endDate?.message}
            message={errors?.endDate?.message}
            popup={EndDateInfo}
          />
          <TextArea
            label="Description"
            {...register('description')}
            disabled={isFormDisabled}
            id="description"
            error={!!errors?.description?.message}
            message={errors?.description?.message}
            max={250}
            popup={DescriptionInfo}
          />
        </Fieldset>
        <Fieldset>
          <Input
            label="Link Label"
            {...register('link.label')}
            disabled={isFormDisabled}
            id="link-label"
            error={!!errors?.link?.label?.message}
            message={errors?.link?.label?.message}
            popup={LinkLabelInfo}
          />
          <Input
            label="Link URL"
            {...register('link.url')}
            disabled={isFormDisabled}
            id="link-url"
            error={!!errors?.link?.url?.message}
            message={errors?.link?.url?.message}
            popup={LinkUrlInfo}
          />
        </Fieldset>
        <Fieldset>
          <Input
            label="Location Name"
            {...register('location.name')}
            disabled={isFormDisabled}
            id="location-name"
            error={!!errors?.location?.name?.message}
            message={errors?.location?.name?.message}
            popup={LocationNameInfo}
          />
          <Input
            label="Location URL"
            {...register('location.url')}
            disabled={isFormDisabled}
            id="location-url"
            error={!!errors?.location?.url?.message}
            message={errors?.location?.url?.message}
            popup={LocationUrlInfo}
          />
          <Input
            label="Street"
            {...register('location.address.street')}
            disabled={isFormDisabled}
            id="street"
            error={!!errors?.location?.address?.street?.message}
            message={errors?.location?.address?.street?.message}
            popup={LocationStreetInfo}
          />
          <Input
            label="City"
            {...register('location.address.city')}
            disabled={isFormDisabled}
            id="city"
            error={!!errors?.location?.address?.city?.message}
            message={errors?.location?.address?.city?.message}
            popup={LocationCityInfo}
          />
          <Input
            label="State"
            {...register('location.address.state')}
            disabled={isFormDisabled}
            id="state"
            error={!!errors?.location?.address?.state?.message}
            message={errors?.location?.address?.state?.message}
            popup={LocationStateInfo}
          />
          <Input
            label="Zip"
            {...register('location.address.zip')}
            disabled={isFormDisabled}
            id="zip"
            error={!!errors?.location?.address?.zip?.message}
            message={errors?.location?.address?.zip?.message}
            popup={LocationZipInfo}
          />
        </Fieldset>
        <Fieldset>
          <TextArea
            label="Details"
            {...register('details')}
            disabled={isFormDisabled}
            id="details"
            max={800}
            popup={DetailsInfo}
            error={!!errors?.details?.message}
            message={errors?.details?.message}
          />
        </Fieldset>
        <Fieldset>
          <Input
            label="Contact Name"
            {...register('contact.name')}
            disabled={isFormDisabled}
            id="contact-name"
            error={!!errors?.contact?.name?.message}
            message={errors?.contact?.name?.message}
            popup={ContactNameInfo}
          />
          <Input
            label="Contact Email"
            {...register('contact.email')}
            disabled={isFormDisabled}
            id="contact-email"
            error={!!errors?.contact?.email?.message}
            message={errors?.contact?.email?.message}
            popup={ContactEmailInfo}
          />
        </Fieldset>
        <Button type="submit" disabled={isSubmitDisabled}>
          Submit
        </Button>
      </form>
    </div>
  );
}

EventForm.propTypes = {
  onSubmit: PropTypes.func,
  values: PropTypes.shape({
    title: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    link: PropTypes.shape({
      url: PropTypes.string,
      label: PropTypes.string,
    }),
    location: PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
      address: PropTypes.shape({
        street: PropTypes.string,
        city: PropTypes.string,
        state: PropTypes.string,
        zip: PropTypes.string,
      }),
    }),
    description: PropTypes.string,
    details: PropTypes.string,
    contact: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
    }),
  }),
};

EventForm.defaultProps = {
  onSubmit: null,
  values: null,
};

export default EventForm;
