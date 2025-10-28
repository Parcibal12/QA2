@CompletePurchase
Feature: Making a purchase

    @Smoke
    Scenario: Successful purchase   
        Given The user is on the login page of Saucedemo
        When The user logs in with a username "standard_user" with a password "secret_sauce"
        Then The user is redirected to the inventory page
        And Every element should contain a valid image

        * Adds the product with the name "Sauce Labs Onesie" to the cart
        * Adds the product with the name "Sauce Labs Backpack" to the cart
        * Adds the product with the name "Sauce Labs Bike Light" to the cart 
        * Adds the product with the name "Sauce Labs Bolt T-Shirt" to the cart 
        * Adds the product with the name "Sauce Labs Fleece Jacket" to the cart 
        * Adds the product with the name "Test.allTheThings() T-Shirt (Red)" to the cart

        Then The cart should have counter with 6 elements 

        When Goes to the detail cart section
        And Goes to checkout page

        When Fills the form with firstname "Rafael", a lastname "Vargas" and a postal code "0000"
        And The sum of the prices and the subtotal should be equal to 129.94
        And The user completes the purchase

        Then The header should have the message "Thank you for your order!"
        And The full text should contains "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
        And The check image should be displayed

        And Goes back to home
        And The cart is cleaned


    @Smoke
    Scenario: Unsuccessful purchase - Invalid firstName  
        Given The user is on the login page of Saucedemo
        When The user logs in with a username "standard_user" with a password "secret_sauce"
        Then The user is redirected to the inventory page
        And Every element should contain a valid image

        When Goes to the detail cart section
        And Goes to checkout page

        When Fills the form with firstname "", a lastname "Vargas" and a postal code "0000"
        Then A warning should be displayed with the message "Error: First Name is required"

    @Smoke
    Scenario: Unsuccessful purchase - Invalid postal code  
        Given The user is on the login page of Saucedemo
        When The user logs in with a username "standard_user" with a password "secret_sauce"
        Then The user is redirected to the inventory page
        And Every element should contain a valid image

        When Goes to the detail cart section
        And Goes to checkout page

        When Fills the form with firstname "Rafael", a lastname "Vargas" and a postal code ""
        Then A warning should be displayed with the message "Error: Postal Code is required"

    Scenario: Unsuccessful purchage - Buttton items don not work
        Given The user is on the login page of Saucedemo
        When The user logs in with a username "error_user" with a password "secret_sauce"
        Then The user is redirected to the inventory page
        And The cart is cleaned
        And Every element should contain a valid image

        * Adds the product with the name "Sauce Labs Onesie" to the cart
        * Adds the product with the name "Sauce Labs Backpack" to the cart
        * Adds the product with the name "Sauce Labs Bike Light" to the cart 
        * Adds the product with the name "Sauce Labs Bolt T-Shirt" to the cart 
        * Adds the product with the name "Sauce Labs Fleece Jacket" to the cart 
        * Adds the product with the name "Test.allTheThings() T-Shirt (Red)" to the cart
    
        Then The cart should not have counter with 6 elements 

    Scenario: Unsuccessful purchase - bad images
        Given The user is on the login page of Saucedemo
        When The user logs in with a username "problem_user" with a password "secret_sauce"
        Then The user is redirected to the inventory page
        And The cart is cleaned
        And Any element should not contain a valid image

    Scenario: Unsuccessful purchase - Bad checkout form (lastname)
        Given The user is on the login page of Saucedemo
        When The user logs in with a username "problem_user" with a password "secret_sauce"
        Then The user is redirected to the inventory page
        And The cart is cleaned
        
        When Goes to the detail cart section
        And Goes to checkout page

        When Fills the form with firstname "Rafael", a lastname "Vargas" and a postal code "0000"
        Then A warning should be displayed with the message "Error: Last Name is required"








        