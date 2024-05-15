# Use an official Node runtime as a parent image
FROM node:14

# Set the working directory
WORKDIR /backend

# Copy the current directory contents into the container at /backend
COPY . /backend

# Install any needed packages specified in package.json
RUN npm install

# Make port 3001 available to the world outside this container
EXPOSE 3001

# Define environment variable
ENV NODE_ENV production

# Run server.js when the container launches
CMD ["sh", "-c", "API_PORT=${API_PORT:-3001} node server.js"]
