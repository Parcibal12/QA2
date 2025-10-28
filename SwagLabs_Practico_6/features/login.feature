@Login
Feature: Login in Swag Labs page

  Background:
    Given The user is on the login page of Saucedemo

  @Smoke
  Scenario Template: Login with valid username and password
    When The user logs in with a username "<username>" with a password "<password>"
    Then The user is redirected to the inventory page

    Examples:
      | username                | password     |
      | standard_user           | secret_sauce |
      | problem_user            | secret_sauce |
      | performance_glitch_user | secret_sauce |
      | error_user              | secret_sauce |
      | visual_user             | secret_sauce |

  Scenario Template: Login with an invalid username or password
    When The user logs in with a username "<username>" with a password "<password>"
    Then The system displays the message: "<message>"

    Examples:
      | username      | password         | message                                                                   |
      | invalid_user  | secret_sauce     | Epic sadface: Username and password do not match any user in this service |
      | standard_user | invalid_password | Epic sadface: Username and password do not match any user in this service |

  Scenario: Login with a blocked user
    When The user logs in with a username "locked_out_user" with a password "secret_sauce"
    Then The system displays the message: "Epic sadface: Sorry, this user has been locked out."

  
    