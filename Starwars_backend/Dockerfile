FROM node:14.17.0
 
WORKDIR /
 
COPY package*.json ./
 
RUN npm install
 
COPY . .
 
EXPOSE 8082
 
CMD ["node", "index.js"]

