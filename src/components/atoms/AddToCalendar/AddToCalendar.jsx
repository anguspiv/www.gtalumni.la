import PropTypes from 'prop-types';
import { atcb_action as addEventToCalendar } from 'add-to-calendar-button';
import 'add-to-calendar-button/assets/css/atcb.css';
import { dash } from 'radash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import styled from '@emotion/styled';
import { Button } from '@components/atoms/Button';

const Icon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
`;

export function AddToCalendar({ name, className, ...props }) {
  const onClick = () =>
    addEventToCalendar({
      name,
      options: ['Apple', 'Google', 'iCal', 'Microsoft365', 'Outlook.com', 'Yahoo'],
      timeZone: 'America/Los_Angeles',
      iCalFileName: dash(name),
      ...props,
    });

  return (
    <Button onClick={onClick} type="button" className={className}>
      <Icon icon={faPlus} />
      Add To Calendar
    </Button>
  );
}

AddToCalendar.propTypes = {
  name: PropTypes.string.isRequired,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  startTime: PropTypes.string,
  endTime: PropTypes.string,
  className: PropTypes.string,
};

AddToCalendar.defaultProps = {
  startDate: null,
  endDate: null,
  startTime: null,
  endTime: null,
  className: null,
};

export default AddToCalendar;
