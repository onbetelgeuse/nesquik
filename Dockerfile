### STAGE 1: Build ###

# We label our stage as 'builder'
FROM node:alpine as builder

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json /app/

RUN cd /app && npm set progress=false && npm install

# Copy project files into the docker image
COPY . /app/


## Build the angular app in production mode and store the artifacts in dist folder
ARG configuration=production


RUN cd /app && npm run build -- --output-path=./dist/out --configuration $configuration


### STAGE 2: Setup ###

FROM nginx:alpine

## Copy our default nginx config
COPY nginx/default.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]