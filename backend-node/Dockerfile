FROM node:20

# Use /favtube as the container root to match repository layout
WORKDIR /favtube

# Copy backend package metadata and install dependencies in backend
# Because build context is project root, backend/package*.json exists
COPY backend-node/package*.json ./backend-node/
WORKDIR /favtube/backend-node
RUN npm install

# Copy the whole project (frontend, backend, packages) into image
WORKDIR /favtube
COPY . .

# Build backend TypeScript and expose port
WORKDIR /favtube/backend-node
EXPOSE 3000
RUN npx tsc

# Run compiled JS in production
CMD ["node","./dist/index.js"]