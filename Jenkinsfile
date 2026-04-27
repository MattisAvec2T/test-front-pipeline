pipeline {
    agent { label 'docker-agent' }

    environment {
        REPOSITORY = 'https://github.com/MattisAvec2T/test-front-pipeline.git'
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: "${REPOSITORY}"
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

    }

    post {
        success {
            echo 'Frontend — install OK.'
        }
        failure {
            echo 'Le pipeline a échoué — vérifier les logs ci-dessus.'
        }
    }
}
