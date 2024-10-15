import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from "@testing-library/react";
import App from "../App";
import NumberOfEvents from "../components/NumberOfEvents";
import userEvent from "@testing-library/user-event";

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  let AppComponent;
  let NumberOfEventsComponent;
  let AppDOM;
  test('Display 32 events by default if no number is specified.', ({ given, when, then }) => {
    given('the user hasn’t specified a number of events', () => {

    });

    when('the user opens the app', () => {
      AppComponent = render(<App />);
    });

    then(/^the app should display (\d+) events by default$/, async (arg0) => {
      AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(32);
      });
    });
});

test('User can change the number of events displayed.', ({ given, when, then }) => {
  given('the user is on the event listing page', () => {
    AppComponent = render(<App />).container.firstChild;
  });

  when('the user changes the number of events to be displayed', async () => {
    const EventListDOM = AppComponent.querySelector('#event-list');
      NumberOfEventsComponent = render(<NumberOfEvents setCurrentNOE={() => { }} setErrorAlert={() => {}} />, { container: EventListDOM }); 
      const user = userEvent.setup();
      const numberOfEvents = NumberOfEventsComponent.getByRole('textbox');
      await user.type(numberOfEvents, '{backspace}{backspace}10'); 

  });

  then('the app should update to show the specified number of events', () => {
    expect(NumberOfEventsComponent.getByRole('textbox')).toHaveValue('10');
  });
});
});