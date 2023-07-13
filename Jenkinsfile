pipeline {
    agent any
    
      
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout your source code from version control system (e.g., Git)
                git 'https://github.com/chhayasingh0112/frontend-app.git'
            }
        }
        
    stage('Docker Build') {
    	agent any
         steps {
      	   sh 'docker build -t chaya01/my_frontend_app:latest .'
      }
    }
    stage('Docker Push') {
    	agent any
          steps {
      	    withCredentials([usernamePassword(credentialsId: 'dockerHub', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')]) {
        	sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPassword}"
            sh 'docker push chaya01/my_frontend_app:latest'
        }
      }
    }
  }
}
