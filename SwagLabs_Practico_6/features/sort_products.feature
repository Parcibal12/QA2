@SortProducts
Feature: Sort products

    Background:
        Given The user is on the login page of Saucedemo
      
    @Smoke
    Scenario: Sort by name in ascending order
        When The user logs in with a username "standard_user" with a password "secret_sauce"
        Then The user is redirected to the inventory page
        When Clicks the filter by "name" in "a-z" order
        Then The products should be in right order by name

    Scenario: Sort by name in descending order
        When The user logs in with a username "standard_user" with a password "secret_sauce"
        Then The user is redirected to the inventory page
        When Clicks the filter by "name" in "z-a" order
        Then The products should be in right order by name

    Scenario: Sort by price in ascending order
        When The user logs in with a username "standard_user" with a password "secret_sauce"
        Then The user is redirected to the inventory page
        When Clicks the filter by "price" in "low-high" order
        Then The products should be in right order by price

    @Smoke
    Scenario: Sort by price in descending order
        When The user logs in with a username "standard_user" with a password "secret_sauce"
        Then The user is redirected to the inventory page
        When Clicks the filter by "price" in "high-low" order
        Then The products should be in right order by price

    @Smoke
    @SortFail
    Scenario: Sort functionality gets crashed with price sorting
        When The user logs in with a username "error_user" with a password "secret_sauce"
        Then The user is redirected to the inventory page
        When Clicks the filter by "price" in "high-low" order
        Then The products should not be int he right order by price

    @SortFail
    Scenario: Sort functionality gets crashed with name sorting
        When The user logs in with a username "error_user" with a password "secret_sauce"
        Then The user is redirected to the inventory page
        When Clicks the filter by "name" in "z-a" order
        Then The products should not be int he right order by name

    

    