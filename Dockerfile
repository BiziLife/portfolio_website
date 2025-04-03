# Dockerfile
FROM node:18

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

# Use a static file server like serve
RUN npm install -g serve
CMD ["serve", "-s", "dist"]

EXPOSE 4000
