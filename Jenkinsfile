pipeline {
    agent any

    tools {
        // Correcto. Asegúrate de que 'Node18' (o 'Node22')
        // exista en tu Global Tool Configuration de Jenkins.
        nodejs 'Node18' 
    }

    environment {
        // Carga las credenciales que ya creaste (¡Perfecto!)
        BROWSERSTACK_USERNAME = credentials('browserstack-username')
        BROWSERSTACK_ACCESS_KEY = credentials('browserstack-access-key')
        
        // --- ¡AQUÍ ESTÁ LA CORRECCIÓN! ---
        // Esta es la variable clave que faltaba.
        // Apunta al APK que tu colega ya subió a BrowserStack.
        APP_PATH = 'bs://c162f76b1193ac30a7781f9c254fe685f135a227'

        // Estas variables ya no son necesarias porque APP_PATH se encarga,
        // las comentamos para evitar conflictos.
        // APPIUM_APP_PACKAGE = 'com.google.android.deskclock'
        // APPIUM_APP_ACTIVITY = 'com.android.deskclock.DeskClock'

        // Las variables de Allure (¡Correcto!)
        ALLURE_RESULTS = "${env.WORKSPACE}/allure-results"
        ALLURE_REPORT  = "${env.WORKSPACE}/allure-report"
    }

    stages {
        
        // La etapa 'Checkout' es manejada automáticamente por Jenkins
        // al usar "Pipeline from SCM", por eso no la necesitas explícitamente.

        stage('Build (Instalar dependencias)') {
             steps {
                // Se ejecuta en la raíz del workspace (donde está package.json)
                echo 'Instalando dependencias de Node.js...'
                // Usamos 'bat' porque tu log muestra que estás en Windows
                bat 'npm install'
            }
        }

      
         stage('Test (Ejecutar en BrowserStack)') {
            steps {
                echo "Ejecutando pruebas @Smoke en BrowserStack..."
                // Esta línea ahora funcionará porque Jenkins proveerá la variable APP_PATH
                // (siempre y cuando wdio.browserstack.conf.js esté configurado para usarla)
                bat 'npx wdio wdio.browserstack.conf.js --cucumberOpts.tags="@Smoke"'
            } 
         }

        stage('Report (Generar Reporte Allure)') {
            // Esta etapa se saltará si la etapa 'Test' falla, lo cual es correcto.
            steps {
                echo "Generando reporte HTML de Allure..."
                bat "npx allure generate %ALLURE_RESULTS% --clean -o %ALLURE_REPORT%"
            }
        }

        stage('Publish report (Publicar Reporte Allure)') {
            steps {
                echo "Publicando reporte Allure en Jenkins..."
                allure([
                    includeProperties: false,
                    jdk: '',
                    // Apunta a los resultados en la raíz (¡Correcto!)
                    results: [[path: 'allure-results']] 
                ])
            }
         }
    }

    post {
        // 'always' se ejecuta siempre, sin importar si el build falló o tuvo éxito
        always {
            echo "Pipeline finalizada. Limpiando workspace."
            // La limpieza (Clean) debe ir aquí, al final.
            cleanWs()
        }
    }
}