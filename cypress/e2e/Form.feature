@regression
Feature: marcel - Form Page
  Background: the user visits Marcel web app
    Given the user visit Marcel app

  Scenario Outline:  Validate form results on marcel formpage
    Given the user clicks on Contact Link
    When the user clicks on dropdown arrow down selects first item
    And the user type some Address '<address>' on input address
    And the user enter first name '<firstName>' and last name '<lastName>'
    And the user type some Phone '<phone>' on input phone
    And the user type a specific '<emailaddress>' address on input email
    And the user enters a message on '<comment>' textarea field
    When the user click on send button
    Then the user should be  presented with an alert box which contains text '<expectedAlertText>'

    Examples:
      | address   | firstName                   | lastName | phone     | emailaddress            | comment                    | expectedAlertText          |
      | Address 1 | KF Test Automation Services | Ferko    | 777555000 | sdet-email7180@test.com | Short message}[]!#Hi123;Z. | Wiadomość została wysłana! |
