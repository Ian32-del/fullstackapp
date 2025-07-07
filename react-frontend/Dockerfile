# Build stage
FROM node:20-alpine as build 

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Inject env var into build
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL
RUN npm run build 

# production nginx stage 
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# expose port 
EXPOSE 80

# nginx runs by default 