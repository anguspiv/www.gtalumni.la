import { render, screen, fireEvent } from '@testing-library/react';
import { atcb_action as addEventToCalendar } from 'add-to-calendar-button';
import { AddToCalendar } from './AddToCalendar';

jest.mock('add-to-calendar-button', () => ({
  atcb_action: jest.fn(),
}));

describe('<AddToCalendar />', () => {
  it('display the add to calendar button', () => {
    expect.assertions(2);

    const name = 'My Event';
    const startDate = '2022-10-14T05:00:00';
    const endDate = '2022-05-14T05:00:00';

    render(
      <AddToCalendar name={name} startDate={startDate} endDate={endDate} className="test-class" />,
    );

    expect(screen.getByRole('button', { name: 'Add To Calendar' })).toHaveClass('test-class');

    fireEvent.click(screen.getByText('Add To Calendar'));

    const call = addEventToCalendar.mock.calls[0][0];

    expect(call).toMatchObject({
      name,
      startDate,
      endDate,
      iCalFileName: 'my-event',
    });
  });
});
