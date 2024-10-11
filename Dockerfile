# Step 1: Build the Next.js app
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to install dependencies
COPY package.json package-lock.json* ./

# Install all dependencies (including devDependencies for build)
RUN npm install --production=false

# Copy the rest of the application code to the container
COPY . .

# Run npm build command with debug mode to capture more logs
RUN echo "Running npm build..." && npm run build

# Step 2: Create the production image
FROM node:18-alpine AS runner

# Set the working directory inside the container
WORKDIR /app

# Copy the built Next.js app from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Set environment variable to tell Next.js we're in production mode
ENV NODE_ENV=production

# Expose the default port (3000)
EXPOSE 3000

# Run the Next.js app in production mode
CMD ["npm", "run", "start"]
