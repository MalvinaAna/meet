# Meet app

## Objective
To build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

## Features

### Feature 1: Filter Events By City

#### As a user, I should be able to filter events by city so that I can see a list of events taking place in that city.

##### Scenario 1:

- Given user hasn’t searched for any city;
- When the user opens the app;
- Then the user should see a list of upcoming events.

##### Scenario 2:

- Given the main page is open;
- When user starts typing in the city textbox;
- Then the user should receive a list of cities (suggestions) that match what they’ve typed.


##### Scenario 3:

- Given user was typing “Berlin” in the city textbox AND the list of suggested cities is showing;
- When the user selects a city (e.g., “Berlin, Germany”) from the list;
- Then their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.

### Feature 2: Show/Hide Event Details

#### As a user, I should be able to see event details when I choose to expand an event so that I can get more information about the event.
#### As a user, I should be able to collapse an event to hide its details so that I can keep my event list concise.

##### Scenario 1:

- Given the user hasn’t interacted with any event;
- When the user opens the app;
- Then each event element should be collapsed by default.

##### Scenario 2:

- Given an event element is collapsed;
- When the user clicks on the event;
- Then the event details should expand to show more information.


##### Scenario 3:

- Given an event element is expanded;
- When the user clicks on the event again;
- Then the event details should collapse to hide the information.

### Feature 3: Specify Number of Events

#### As a user, I should be able to see 32 events by default if I haven't specified a number so that I can see a reasonable number of events initially.
#### As a user, I should be able to change the number of events displayed so that I can see more or fewer events based on my preference.

##### Scenario 1:

- Given the user hasn’t specified a number of events;
- When the user opens the app;
- Then the app should display 32 events by default.

##### Scenario 2:

- Given the user is on the event listing page;
- When the user changes the number of events to be displayed;
- Then the app should update to show the specified number of events.

### Feature 4: Use the App When Offline

#### As a user, I should be able to see cached data when there’s no internet connection so that I can still view event information offline.
#### As a user, I should see an error when I change search settings while offline so that I know that the change cannot be processed without an internet connection.

##### Scenario 1:

- Given the user has previously accessed the app with an internet connection;
- When there is no internet connection;
- Then the app should display cached event data.

##### Scenario 2:

- Given the user is offline;
- When the user tries to change the search settings (city, number of events);
- Then the app should display an error message indicating that the settings cannot be changed without an internet connection.


### Feature 5: Add an App Shortcut to the Home Screen

#### As a user, I should be able to install the meet app as a shortcut on my device's home screen so that I can access the app more quickly and conveniently.

##### Scenario 1:

- Given the user is using the app in a browser;
- When the user opts to add the app to their home screen;
- Then the app should provide an option to install it as a shortcut on the home screen.


## Feature 6: Display Charts Visualizing Event Details

#### As a user, I should be able to see a chart showing the number of upcoming events in each city so that I can quickly understand the event distribution across different cities.

##### Scenario 1:

- Given the user is viewing the event details;
- When the event details are displayed;
- Then the app should show a chart visualizing the number of upcoming events in each city.
