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
                // // Create a Dockerfile for your frontend application
                // sh '''
                //     echo "FROM nginx:latest" > Dockerfile
                //     echo "COPY index.html /usr/share/nginx/html" >> Dockerfile
                //     echo "COPY script.js /usr/share/nginx/html" >> Dockerfile
                // '''
                
                // Build Docker image for your frontend application
                sh 'docker build -t chaya01/frontend-app1 .'
                // Tag the image with your Docker Hub username and repository name
            }
        }
        
        stage('Push to Docker Hub') {
            steps {
                // Push the Docker image to Docker Hub
                sh 'docker login -u chaya01 -p Riya@0112'
                // Login to Docker Hub using your credentials
                
                sh 'docker push chaya01/frontend-app1'
                // Push the image to Docker Hub repository
            }
        }
    }
}
