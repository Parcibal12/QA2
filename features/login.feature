Feature: Funcionalidad de Login de Sauce Demo

  Scenario: Inicio de sesión exitoso con credenciales válidas
    Given Estoy en la página de login de Sauce Demo
    When Ingreso el usuario "standard_user" y la contraseña "secret_sauce"
    And Hago clic en el botón de login
    Then Debería ser redirigido a la página de inventario

  Scenario: Intento de inicio de sesión con un usuario bloqueado
    Given Estoy en la página de login de Sauce Demo
    When Ingreso el usuario "locked_out_user" y la contraseña "secret_sauce"
    And Hago clic en el botón de login
    Then Debería ver un mensaje de error que dice "Epic sadface: Sorry, this user has been locked out."

  Scenario: Intento de inicio de sesión con credenciales inválidas
    Given Estoy en la página de login de Sauce Demo
    When Ingreso el usuario "invalid_user" y la contraseña "invalid_password"
    And Hago clic en el botón de login
    Then Debería ver un mensaje de error que dice "Epic sadface: Username and password do not match any user in this service"