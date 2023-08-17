Feature: Login

    As a user 
    I want to log in into application 
    So I can access the products page

    Scenario: Valid login
    Given I successfully land on the login page
    When I enter the username as "standard_user"
    And I enter the password as "secret_sauce"
    And I select login
    Then I should successfully land on the products page


    Scenario: Invalid login
    Given I successfully land on the login page
    When I enter the username as "invalid username"
    And I enter the password as "invalid password"
    And I select login
    Then I should see an error messsage

