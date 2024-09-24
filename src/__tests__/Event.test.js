import { render } from '@testing-library/react';
import Event from '../components/Event';
import userEvent from "@testing-library/user-event";
import mockData from "../mock-data";

describe('<Event /> component', () => {
  let EventComponent;
  const event = mockData[0];
  beforeEach(() => {
    EventComponent = render(<Event event={event}/>);
  });

  test('renders event title', () => {
    const eventTitle = EventComponent.queryByText(event.summary);
    expect(eventTitle).toBeInTheDocument();
  });

  test('renders event location', () => {
    const eventLocation = EventComponent.queryByText(event.location);
    expect(eventLocation).toBeInTheDocument();
  });

  test('renders event start time', () => {
    const eventStartTime = EventComponent.queryByText(event.created);
    expect(eventStartTime).toBeInTheDocument();
});

test('renders show details button', () => {
    const showDetailsButton = EventComponent.queryByText('Show Details');
    expect(showDetailsButton).toBeInTheDocument();
});

test('by default event details should be hidden', () => {
    const eventDetails = EventComponent.container.querySelector('.event-details');
    expect(eventDetails).not.toBeInTheDocument();
});

test('renders event details when user clicks on the Show details button', async () => {
    const user = userEvent.setup();
    
    const showDetailsButton = EventComponent.queryByText('Show Details');
    await user.click(showDetailsButton);

    const eventDetailsContainer = EventComponent.container.firstChild;
    const eventDetails = eventDetailsContainer.querySelector('.event-details');
    expect(eventDetails).toBeInTheDocument();
});

test('hides event details when user clicks on the Hide details button', async () => {
    const user = userEvent.setup();
    
    const showDetailsButton = EventComponent.queryByText('Show Details');
    await user.click(showDetailsButton);
    
    const hideDetailsButton = EventComponent.queryByText('Hide Details');
    await user.click(hideDetailsButton);

    const eventDetailsContainer = EventComponent.container.firstChild;
    const eventDetails = eventDetailsContainer.querySelector('.event-details');
    expect(eventDetails).not.toBeInTheDocument();
});
})

