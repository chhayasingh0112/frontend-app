# Use a lightweight web server to serve the static files
FROM nginx:alpine as production-stage

#clone source code
WORKDIR Team-app

#Copy the built frontend files to the Nginx web server directory
COPY . /usr/share/nginx/html

# Expose the default Nginx port
EXPOSE 80

# Start the Nginx web server
CMD ["nginx", "-g", "daemon off;"]
