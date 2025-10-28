@CartDetails
Feature: Details of the shopping cart

    Background:
        Given The user is on the login page of Saucedemo
        When The user logs in with a username "standard_user" with a password "secret_sauce"
        Then The user is redirected to the inventory page
        And The cart is cleaned

    Scenario Template: The cart contains a t-shirt
        When Adds the product with the name "<name>" to the cart
        And Goes to the detail cart section
        Then The item list have 1 elements
        And The details contain an element with a name: "<name>"

        Examples:
            | name                              |
            | Sauce Labs Bolt T-Shirt           |
            | Test.allTheThings() T-Shirt (Red) |
    
    Scenario: The cart is not empty
        * Adds the product number 1 to the cart
        * Adds the product number 2 to the cart
        * Adds the product number 5 to the cart
        And Goes to the detail cart section
        Then The item list have 3 elements

    Scenario: The cart is empty
        When Goes to the detail cart section
        Then The item list have 0 elements
         