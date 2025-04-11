# Use Node.js LTS image
FROM node:18

# Set working directory
WORKDIR /app

# Copy dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Build the Next.js app
RUN npm run build

# Expose port for the app
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
