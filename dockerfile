# Use a lightweight Nginx base image
FROM nginx:alpine

# Set working directory inside container
WORKDIR /usr/share/nginx/html

# Remove default Nginx static files
RUN rm -rf ./*

# Copy your project files into the container
COPY index.html .
COPY style.css .
COPY script.js .
COPY Three.js .
COPY assets ./assets
