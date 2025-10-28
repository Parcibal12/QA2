# Swag Labs

Practica de automatización en la página Swag Labs

## Configuraciones

Se ha creado un archivo `.env` para guardado de las variables de entorno el cual se puede crear mediante el siguiente comando:

```shell
cp .env.example .env
```

Instale todas las dependencias para ejecutar el proyecto

```shell
npm install
```

## Comandos

Antes de cada ejecucion puede eliminar la carpeta de `allure-results` si desea con el comando:

```shell
npm run clean
```

Para ejecutar los test:

```shell
npm run wdio
```

O para ejecutar un tag en especifico:

```shell
npx wdio --cucumberOpts.tagExpression="@tag"
```

Para levantar el reporte de allure

```shell
npm run serve
```

## Observaciones

Se han etiquetado algunos scenarios como `@skip` para que no afecten al reporte final.
Puede eliminar estos tags para obtener el reporte completo

Los navegadores usados son:
1. Chrome
2. Firefox
3. Edge





