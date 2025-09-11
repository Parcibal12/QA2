Feature: Funcionalidad de Menú Desplegable

  Scenario: Seleccionar una opción del menú desplegable
    Given Estoy en la página de menú desplegable
    When Selecciono la "Option 2" del menú
    Then La "Option 2" debería estar seleccionada