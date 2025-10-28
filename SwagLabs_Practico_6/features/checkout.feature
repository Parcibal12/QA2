@Checkout
Feature: Completing a purchase

    Background:
        Given The user is on the login page of Saucedemo
        When The user logs in with a username "standard_user" with a password "secret_sauce"
        Then The user is redirected to the inventory page
        And The cart is cleaned

    Scenario: Checkout process successful with empty cart
        * Goes to the detail cart section
        * Goes to checkout page
        And Fills the form with firstname "Rafael", a lastname "Vargas" and a postal code "0000"
        Then The user should be redirected to the second checkout page
        And The sum of the prices and the subtotal should be equal to 0

        And The user completes the purchase

    Scenario: Checkout process successful with selected products
        * Adds the product with the name "Sauce Labs Bike Light" to the cart
        * Adds the product with the name "Sauce Labs Bolt T-Shirt" to the cart 
        * Goes to the detail cart section
        * Goes to checkout page
        And Fills the form with firstname "Rafael", a lastname "Vargas" and a postal code "0000"
        Then The user should be redirected to the second checkout page
        And The sum of the prices and the subtotal should be equal to 25.98

        And The user completes the purchase