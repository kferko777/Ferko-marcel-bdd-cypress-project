@smoke
Feature: marcel- Company Page
  
    Scenario: Validate navbar random links 
        Given the user visit Marcel app
        When the user clicks on o Firmie Link
        Then the user should see content about company
        And the user clicks on Aktualności
        And the user clicks on Kariera Link
        And the user clicks on Aktualny Oferty Pracy Link
        Then the user clicks on Contact Link
        