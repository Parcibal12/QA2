Feature: Funcionalidad de Casillas de Verificación

  Scenario: Interactuar con las casillas de verificación
    Given Estoy en la página de casillas de verificación
    When Marco la primera casilla de verificación
    Then La primera casilla de verificación debería estar marcada
    When Desmarco la segunda casilla de verificación
    Then La segunda casilla de verificación debería estar desmarcada