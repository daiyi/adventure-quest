FROM node:boron

# Create the in-image app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


# Install app to docker image
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 4999

CMD [ "npm", "start" ]

