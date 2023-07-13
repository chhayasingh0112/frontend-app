pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout your source code from version control system (e.g., Git)
                git 'https://github.com/chhayasingh0112/frontend-app.git'
            }
        }
        
        stage('Dockerize') {
            steps {
                 // Create a Dockerfile for your frontend application
                 sh '''
                     echo "FROM nginx:latest" > Dockerfile
                     echo "COPY index.html /usr/share/nginx/html" >> Dockerfile
                     echo "COPY script.js /usr/share/nginx/html" >> Dockerfile
                    '''
                
                // Build Docker image for your frontend application
                sh 'docker build -t chaya01/frontend-app1 .'
                // Tag the image with your Docker Hub username and repository name
            }
        }
        
      stage('Docker Push') {
    	agent any
      steps {
      	withCredentials([usernamePassword(credentialsId: 'dockerHub', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')]) {
        	sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPassword}"
          sh 'docker push shanem/spring-petclinic:latest'
        }
      }
    }
  }
}
