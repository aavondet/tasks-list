FROM node:12.13.0-alpine AS alpine

WORKDIR /src

COPY package.json .
RUN npm install 
COPY . .

EXPOSE 3001

# Default command
CMD ["node", "./src/index.js"]