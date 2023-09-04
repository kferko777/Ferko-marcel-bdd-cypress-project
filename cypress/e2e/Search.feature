@regression
Feature: marcel - Search Page
  Background: the user visits Marcel web app
    Given the user visit Marcel app

  Scenario Outline: Validate Search results for Learning
    Given the user clicks on search filter <filter>
    When the user clicks on more below Szkolenia
    Then results for webinar are displayed

    Examples:
      | filter    |
      | Szkolenia |

  Scenario Outline: Validate Search results for java programmer
    Given the user clicks on search filter <filter>
    When the user searches for java programmer jobs
    And the user clicks on Aktualne oferty pracy Link jobs
    Then the user should see job with title Programista Java is displayed

    Examples:
      | filter           |
      | Programista Java |
