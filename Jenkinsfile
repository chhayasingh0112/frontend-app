pipeline {
    agent any
    
        environment {
        registry = "chaya01/my_frontend_app"
        registryCredential = 'dockerhub'
    }
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout your source code from version control system (e.g., Git)
                git 'https://github.com/chhayasingh0112/frontend-app.git'
            }
        }
        
        stage('Build App Image') {
          steps {
            script {
              dockerImage = docker.build registry + ":V$BUILD_NUMBER"
            }
          }
        }

        stage('Upload Image'){
          steps{
            script {
              docker.withRegistry('', registryCredential) {
                dockerImage.push("V$BUILD_NUMBER")
                dockerImage.push('latest')
              }
            }
          }
        }
        
        stage('Remove Unused docker image') {
          steps{
            sh "docker rmi $registry:V$BUILD_NUMBER"
          }
    }
  }
}
