import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, waitFor, within, } from '@testing-library/react';
import App from "../App";
import userEvent from '@testing-library/user-event';
import { getEvents } from '../api';
import Event from '../components/Event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  test('Events should be collapsed by default when the user opens the app.', ({ given, when, then }) => {
    given('the user hasn’t interacted with any event', () => {

    });

    let AppComponent;
    when('the user opens the app', () => {
      AppComponent = render(<App />);
    });

    then('each event element should be collapsed by default', async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');
      
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
          expect(EventListItems.length).toBe(32);
        });

        const eventDetails = AppDOM.querySelector('.event-details');
        expect(eventDetails).not.toBeInTheDocument();
    });
});

test('User can expand an event to see its details.', ({ given, when, then }) => {
  let EventComponent;
  let allEvents;
  given('an event element is collapsed', async () => {
    allEvents = await getEvents();
    EventComponent = render(<Event event={allEvents[0]} />);
    expect(EventComponent.container.querySelector('.event-details')).not.toBeInTheDocument();
  });

  when('the user clicks on the event', async () => {
    const user = userEvent.setup();
    const showDetails = EventComponent.queryByText('Show Details');
    await user.click(showDetails);
  });

  then('the event details should expand to show more information', () => {
    const eventDetails = EventComponent.container.querySelector('.event-details');
    expect(eventDetails).toBeInTheDocument();
  });
});

test('User can collapse an expanded event to hide its details.', ({ given, when, then }) => {
  let EventComponent;
  let allEvents;
  given('an event element is expanded', async () => {
    allEvents = await getEvents();
    EventComponent = render(<Event event={allEvents[0]} />)
  });

  when('the user clicks on the event again', () => {
    const user = userEvent.setup();
    const hideDetails = EventComponent.queryByText('Hide Details');
    user.click(hideDetails);
  });

  then('the event details should collapse to hide the information', () => {
    const eventDetails = EventComponent.container.querySelector('.event-details');
    expect(eventDetails).not.toBeInTheDocument();
  });
});
});
