@Inventory
Feature: Inventory page functionality and estructure

    Background:
        Given The user is on the login page of Saucedemo

    Scenario: Correct number of elements placed
        When The user logs in with a username "standard_user" with a password "secret_sauce"
        Then The user is redirected to the inventory page
        Then There should be 6 item cards

    Scenario: Every elements contains a correct structure
        When The user logs in with a username "standard_user" with a password "secret_sauce"
        Then The user is redirected to the inventory page
        Then Every element should contain a title, description, price and an add button
        And Every element should contain a valid image
    


