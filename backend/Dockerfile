# Use an official Node runtime as a parent image
FROM node:14

# Set the working directory
WORKDIR /backend

# Copy the current directory contents into the container at /backend
COPY . /backend

# Install any needed packages specified in package.json
RUN npm install

# Expose the port specified by the environment variable or fallback to 3001
EXPOSE ${API_PORT:-3001}

# Define environment variable
ENV NODE_ENV production

# Run server.js when the container launches
CMD ["sh", "-c", "node server.js"]
