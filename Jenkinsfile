pipeline {
    agent any

    tools {
        // Correcto. Asegúrate de que 'Node18' (o 'Node22')
        // exista en tu Global Tool Configuration.
        nodejs 'Node18' 
    }

    environment {
        // Carga las credenciales que ya creaste (¡Perfecto!)
        BROWSERSTACK_USERNAME = credentials('browserstack-username')
        BROWSERSTACK_ACCESS_KEY = credentials('browserstack-access-key')
        

        APPIUM_APP_PACKAGE = 'com.google.android.deskclock'
        APPIUM_APP_ACTIVITY = 'com.android.deskclock.DeskClock'

        // Las variables de Allure apuntan a la raíz (¡Correcto!)
        ALLURE_RESULTS = "${env.WORKSPACE}/allure-results"
        ALLURE_REPORT  = "${env.WORKSPACE}/allure-report"
    }

    stages {
        
        // ETAPA 'Clean' ELIMINADA
        // (Conflicto: Borraba el código antes de la etapa 'Build')

        // ETAPA 'Checkout' ELIMINADA
        // (Redundante: Jenkins ya clona el repo y la rama automáticamente)

        stage('Build (Instalar dependencias)') {
            steps {
                // Se ejecuta en la raíz del workspace (donde está package.json)
                echo 'Instalando dependencias de Node.js...'
                bat 'npm install'
            }
        }

        stage('Test (Ejecutar en BrowserStack)') {
            steps {
                echo "Ejecutando pruebas @Smoke en BrowserStack..."
                // Ejecuta usando la configuración de BrowserStack
                bat 'npx wdio wdio.browserstack.conf.js --cucumberOpts.tags="@Smoke"'
            } 
        }

        stage('Report (Generar Reporte Allure)') {
            steps {
                echo "Generando reporte HTML de Allure..."
                // Usa las variables de entorno
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
        always {
            echo "Pipeline finalizada. Limpiando workspace."
            // La limpieza (Clean) debe ir aquí, al final.
            cleanWs()
        }
    }
}