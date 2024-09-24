import { render } from '@testing-library/react';
import NumberOfEvents from '../components/NumberOfEvents';
import userEvent from '@testing-library/user-event';

describe('<NumberOfEvents /> component', () => {
let NumberOfEventsComponent;
 beforeEach(() => {
  NumberOfEventsComponent = render(<NumberOfEvents />);
 })

  test('renders textbox input for number of events', () => {
    const inputElement = NumberOfEventsComponent.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });

  test('default value of the input field is 32', () => {
    const inputElement = NumberOfEventsComponent.getByRole('textbox');
    expect(inputElement).toHaveValue('32');
  });

  test('value of the textbox changes when user types in it', async () => {
    const user = userEvent.setup();
    const inputElement = NumberOfEventsComponent.getByRole('textbox');

    await user.type(inputElement, '{backspace}{backspace}10');
    expect(inputElement).toHaveValue('10');
  });
});
