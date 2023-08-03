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
  details: yup.string().max(501, 'Please enter a description that is no more than 500 characters.'),
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
          />
          <Input
            label="Start Date"
            {...register('startDate')}
            type="datetime-local"
            disabled={isFormDisabled}
            id="startDate"
            error={!!errors?.startDate?.message}
            message={errors?.startDate?.message}
          />
          <Input
            label="End Date"
            {...register('endDate')}
            type="datetime-local"
            disabled={isFormDisabled}
            id="endDate"
            error={!!errors?.endDate?.message}
            message={errors?.endDate?.message}
          />
          <TextArea
            label="Description"
            {...register('description')}
            disabled={isFormDisabled}
            id="description"
            error={!!errors?.description?.message}
            message={errors?.description?.message}
            max={250}
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
          />
          <Input
            label="Link URL"
            {...register('link.url')}
            disabled={isFormDisabled}
            id="link-url"
            error={!!errors?.link?.url?.message}
            message={errors?.link?.url?.message}
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
          />
          <Input
            label="Location URL"
            {...register('location.url')}
            disabled={isFormDisabled}
            id="location-url"
            error={!!errors?.location?.url?.message}
            message={errors?.location?.url?.message}
          />
          <Input
            label="Street"
            {...register('location.address.street')}
            disabled={isFormDisabled}
            id="street"
            error={!!errors?.location?.address?.street?.message}
            message={errors?.location?.address?.street?.message}
          />
          <Input
            label="City"
            {...register('location.address.city')}
            disabled={isFormDisabled}
            id="city"
            error={!!errors?.location?.address?.city?.message}
            message={errors?.location?.address?.city?.message}
          />
          <Input
            label="State"
            {...register('location.address.state')}
            disabled={isFormDisabled}
            id="state"
            error={!!errors?.location?.address?.state?.message}
            message={errors?.location?.address?.state?.message}
          />
          <Input
            label="Zip"
            {...register('location.address.zip')}
            disabled={isFormDisabled}
            id="zip"
            error={!!errors?.location?.address?.zip?.message}
            message={errors?.location?.address?.zip?.message}
          />
        </Fieldset>
        <Fieldset>
          <TextArea
            label="Details"
            {...register('details')}
            disabled={isFormDisabled}
            id="details"
            max={800}
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
          />
          <Input
            label="Contact Email"
            {...register('contact.email')}
            disabled={isFormDisabled}
            id="contact-email"
            error={!!errors?.contact?.email?.message}
            message={errors?.contact?.email?.message}
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
