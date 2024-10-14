Feature: Specify Number of Events

  Scenario: Display 32 events by default if no number is specified.
    Given the user hasn’t specified a number of events
    When the user opens the app
    Then the app should display 32 events by default

  Scenario: User can change the number of events displayed.
    Given the user is on the event listing page
    When the user changes the number of events to be displayed
    Then the app should update to show the specified number of events