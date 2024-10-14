Feature: Show/Hide Event Details

Feature: Show/Hide Event Details

  Scenario: Events should be collapsed by default when the user opens the app.
    Given the user hasn’t interacted with any event
    When the user opens the app
    Then each event element should be collapsed by default

  Scenario: User can expand an event to see its details.
    Given an event element is collapsed
    When the user clicks on the event
    Then the event details should expand to show more information

  Scenario: User can collapse an expanded event to hide its details.
    Given an event element is expanded
    When the user clicks on the event again
    Then the event details should collapse to hide the information
