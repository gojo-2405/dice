FROM nginx:alpine
COPY index.html /usr/share/nginx/html/index.html
COPY assets/icons/ /usr/share/nginx/html/assets/icons/
