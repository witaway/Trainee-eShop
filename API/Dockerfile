FROM node:12
ARG APP_DIR=API
RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}
COPY package*.json ./
RUN npm i
COPY . .
EXPOSE 8000
CMD ["npm", "start"]