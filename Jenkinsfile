pipeline {
    agent { label 'docker-agent' }

    environment {
        REPOSITORY     = 'https://github.com/MattisAvec2T/test-front-pipeline.git'
        IMAGE_NAME     = 'frontend-node'
        CONTAINER_NAME = 'frontend-node'
        PORT           = '8081'
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

        stage('Test') {
            // Remplacer le script "test" dans package.json par de vrais tests (ex: vitest)
            steps {
                sh 'npm test'
            }
        }

        stage('Build image') {
            // Le build Vite est géré en multi-stage dans le Dockerfile
            steps {
                sh "docker build -t ${IMAGE_NAME}:${BUILD_NUMBER} -t ${IMAGE_NAME}:latest ."
            }
        }

        stage('Deploy') {
            steps {
                sh "docker rm -f ${CONTAINER_NAME} || true"
                sh "docker run -d --name ${CONTAINER_NAME} --network devops -p ${PORT}:80 ${IMAGE_NAME}:latest"
            }
        }

    }

    post {
        success {
            echo "Frontend disponible sur http://localhost:${PORT}"
        }
        failure {
            echo 'Le pipeline a échoué — vérifier les logs ci-dessus.'
        }
    }
}
