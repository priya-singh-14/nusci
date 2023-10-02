FROM node:18-alpine

# Environment Type
ENV NODE_ENV=production

# Sets working directory of this contained
WORKDIR /app

# Install dependencies (dev)
COPY ["package.json", "package-lock.json", "./"]
RUN npm install

# Copy website files to the container
COPY . .

CMD ["node", "index.js"]