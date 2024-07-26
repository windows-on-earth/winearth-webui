# Declare base image
FROM node:lts-alpine3.20
# Build Step
WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

CMD ["cp", "-r", "/app/out/.", "/app/dist"]