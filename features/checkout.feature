Feature: Flujo de Compra Completo

  Background:
    Given Estoy autenticado en la página de Sauce Demo

  Scenario: Completar una compra de un producto de principio a fin
    Given Agrego el producto "Sauce Labs Backpack" al carrito
    When Voy al carrito de compras
    And Hago clic en el botón de checkout
    And Ingreso mi nombre "Juan", apellido "Perez" y código postal "12345"
    And Continúo al siguiente paso del checkout
    Then Verifico que el total de la compra sea correcto
    And Finalizo la compra
    Then Debería ver el mensaje de confirmación "Thank you for your order!"