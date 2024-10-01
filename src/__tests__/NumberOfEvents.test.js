import { render, within } from '@testing-library/react';
import NumberOfEvents from '../components/NumberOfEvents';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('<NumberOfEvents /> component', () => {
let NumberOfEventsComponent;
let setCurrentNOE;
 beforeEach(() => {
  setCurrentNOE = jest.fn(); 
  NumberOfEventsComponent = render(<NumberOfEvents currentNOE={32} setCurrentNOE={setCurrentNOE} />);
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

describe('<NumberOfEvents /> integration', () => {
  test('the number of events changes based on the user input', async () => {
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    const NumberOfEventsInput = within(AppDOM).getByTestId('numberOfEventsInput');

    await user.type(NumberOfEventsInput, '{backspace}{backspace}10');

    const EventListDOM = AppDOM.querySelector('#event-list');
    const allRenderedEventItems = within(EventListDOM).queryAllByRole('listitem');
    expect(allRenderedEventItems.length).toBe(10);
  });
});