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
        
        // ID de la App en BrowserStack (¡Perfecto!)
        APP_PATH='bs://c162f76b1193ac30a7781f9c254fe685f135a227'

        // Las variables de Allure ahora apuntan a la raíz
        ALLURE_RESULTS = "${env.WORKSPACE}/allure-results"
        ALLURE_REPORT  = "${env.WORKSPACE}/allure-report"
    }

    stages {
        
        // Las etapas 'Clean' y 'Checkout' se eliminaron.
        // Jenkins ya clona la rama 'BrowserstackJenkins' automáticamente.

        stage('Build (Instalar dependencias)') {
            steps {
                // Ya no se necesita dir(), se ejecuta en la raíz
                echo 'Instalando dependencias de Node.js...'
                bat 'npm install'
            }
        }

        stage('Test (Ejecutar en BrowserStack)') {
            steps {
                // Ya no se necesita dir()
                echo "Ejecutando pruebas @Smoke en BrowserStack..."
                // Este comando usa las variables de entorno definidas arriba
                bat 'npx wdio wdio.browserstack.conf.js --cucumberOpts.tags="@Smoke"'
            } 
        }

        stage('Generar Reporte Allure') {
            steps {
                // Ya no se necesita dir()
                echo "Generando reporte HTML de Allure..."
                bat "npx allure generate %ALLURE_RESULTS% --clean -o %ALLURE_REPORT%"
            }
        }

        stage('Publicar Reporte Allure') {
            steps {
                echo "Publicando reporte Allure en Jenkins..."
                allure([
                    includeProperties: false,
                    jdk: '',
                    // La ruta ahora es la raíz
                    results: [[path: 'allure-results']] 
                ])
            }
        }
    }

    post {
        always {
            echo "Pipeline finalizada. Limpiando workspace."
            cleanWs()
        }
    }
}