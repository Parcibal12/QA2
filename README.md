
### Instalar Dependencias

```shell
npm install
```
---

## 2. Configuración del Emulador y la Aplicación 📱

### Paso 1: Preparar el Emulador
- Inicia un emulador. Las pruebas fueron desarrolladas y verificadas usando la siguiente configuración:
    * **Dispositivo:** Medium Phone
    * **API:** 33 (Android 13.0)

### Paso 2: Crear el Archivo de Entorno (`.env`)

Este archivo contiene las credenciales y configuraciones específicas de tu emulador para que Appium pueda conectarse.

1.  En la raíz del proyecto, crear un nuevo archivo llamado `.env`.
2.  Copia y pegar el siguiente contenido en él, asegurándose de que los valores coincidan con los del emulador.

    ```
    PLATFORM_NAME=Android
    APPIUM_PLATFORM_VERSION=13.0
    APPIUM_DEVICE_NAME=Medium Phone
    APPIUM_AUTOMATION_NAME=UiAutomator2
    APPIUM_APP_PACKAGE=com.google.android.deskclock
    APPIUM_APP_ACTIVITY=com.android.deskclock.DeskClock
    ```

---

### Ejecutar Todas las Pruebas

Para ejecutar la suite de pruebas completa (los 5 archivos de la carpeta `specs`), usa el siguiente comando:

```shell
npm run wdio
```

### Ejecutar un Único Archivo de Prueba

Si se desea ejecutar solo un archivo de prueba específico para depuración, se puede hacerlo con el siguiente comando, reemplazando el nombre del archivo:

```shell
npx wdio ./wdio.conf.js --spec ./test/specs/alarma_prueba_1_existencia.js
```