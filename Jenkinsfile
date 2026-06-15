pipeline {
    agent any

    stages {

        stage('Git Checkout') {
            steps {
                git 'https://github.com/zoya9545-web/softtech-devops-platform.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t zoya9545/softtech-web:v2 app/'
            }
        }

        stage('Push Docker Image') {
            steps {
                sh 'docker push zoya9545/softtech-web:v2'
            }
        }
    }
}
