Feature: Funcionalidad del Inventario de Productos

  Background:
    Given Estoy en la página de login de Sauce Demo
    When Ingreso el usuario "standard_user" y la contraseña "secret_sauce"
    And Hago clic en el botón de login
    Then Estoy en la página de inventario

  Scenario: Agregar un producto al carrito desde la página de inventario
    When Agrego el producto "Sauce Labs Backpack" al carrito
    Then El ícono del carrito debería mostrar "1"

  Scenario: Ordenar productos por precio (de menor a mayor)
    When Ordeno los productos por "Price (low to high)"
    Then Los productos deberían estar ordenados correctamente por precio ascendente