Feature: Funcionalidad de Pasar el Ratón sobre Elementos

  Scenario: Mostrar información al pasar el ratón sobre una imagen
    Given Estoy en la página de hovers
    When Paso el ratón sobre la primera imagen
    Then La información del primer usuario debería ser visible