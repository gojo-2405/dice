# Use official Nginx image as base
FROM nginx:alpine

# Set working directory inside container
WORKDIR /usr/share/nginx/html

# Remove default Nginx static files
RUN rm -rf ./*

# Copy your project files (HTML, CSS, JS) into container
COPY index.html .
COPY style.css .
COPY script.js .

# If you have assets (icons, fonts, etc.), copy them too
COPY assets ./assets

# Expose port 80 for web traffic
EXPOSE 80

# Nginx will automatically serve files from /usr/share/nginx/html
