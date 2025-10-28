@ManageCart
Feature: Manage product cart

    Background:
        Given The user is on the login page of Saucedemo
        
    Scenario: Add a product
        When The user logs in with a username "standard_user" with a password "secret_sauce"
       
        Then The user is redirected to the inventory page
        When Adds the product number 1 to the cart
        Then The button of the product number 1 should have the message: "Remove"
        Then The cart should have counter with 1 elements

        And The cart is cleaned

    Scenario: Remove a product
        When The user logs in with a username "standard_user" with a password "secret_sauce"
        Then The user is redirected to the inventory page
        When Adds the product number 1 to the cart
        And Removes the product number 1 of his cart
        Then The button of the product number 1 should have the message: "Add to cart"
        Then The cart should not to be displayed

        And The cart is cleaned

    Scenario: Remove a product fails
        When The user logs in with a username "error_user" with a password "secret_sauce"
        Then The user is redirected to the inventory page
        When Adds the product number 1 to the cart
        And Removes the product number 1 of his cart
        Then The button of the product number 1 should have the message: "Remove"

    Scenario: Add a product fails
        When The user logs in with a username "error_user" with a password "secret_sauce"
        Then The user is redirected to the inventory page
        When Adds the product number 3 to the cart
        Then The button of the product number 3 should have the message: "Add to cart"

        

    