pipeline {
    agent any
    
    environment {
        registry = "chaya01/frontend-app1"
        registryCredential = 'dockerhub'
    }
      
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/chhayasingh0112/frontend-app.git'
            }
        }
        
        stage('Build App Image') {
            steps {
                script {
                    docker.withRegistry('', registryCredential) {
                        def dockerImage = docker.build("${registry}:V${env.BUILD_NUMBER}")
                        dockerImage.push()
                    }
                }
            }
        }
        
        stage('Upload Image') {
            steps {
                script {
                    docker.withRegistry('', registryCredential) {
                        def dockerImage = docker.image("${registry}:V${env.BUILD_NUMBER}")
                        dockerImage.push('latest')
                    }
                }
            }
        }
        
        stage('Remove Unused Docker Image') {
            steps {
                sh "docker rmi ${registry}:V${env.BUILD_NUMBER}"
            }
        }
    }
}
