const { exec } = require('child_process');
const path = require('path');

// Define paths
const frontendPath = path.join(__dirname, 'frontend');
const serverPath = path.join(frontendPath, 'server');
const entryExpressPath = path.join(serverPath, 'entry.express.js');

// Function to execute shell commands
function executeCommand(command, options = {}) {
  return new Promise((resolve, reject) => {
    const childProcess = exec(command, options, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(stdout);
    });

    if (childProcess.stderr) {
      childProcess.stderr.on('data', (data) => {
        console.error(data.toString());
      });
    }
  });
}

// Install dependencies in frontend directory
async function installDependencies() {
  try {
    console.log('Installing dependencies in frontend directory...');
    await executeCommand('npm install', { cwd: frontendPath });
    console.log('Dependencies installed successfully.');
  } catch (error) {
    console.error('Error installing dependencies:', error);
    process.exit(1);
  }
}

// Build frontend
async function buildFrontend() {
  try {
    console.log('Building frontend...');
    await executeCommand('npm run build', { cwd: frontendPath });
    console.log('Frontend built successfully.');
  } catch (error) {
    console.error('Error building frontend:', error);
    process.exit(1);
  }
}

// Run entry.express.js
async function runExpressServer() {
  try {
    console.log('Running entry.express.js...');
    const childProcess = exec(`node ${entryExpressPath}`);

    // Listen for the server to start
    childProcess.stdout.on('data', (data) => {
      console.log(data.toString());
      if (data.toString().includes('Server is running')) {
        console.log('Server is running successfully.');
        process.exit(0);
      }
    });

    // Listen for errors
    childProcess.stderr.on('data', (data) => {
      console.error(data.toString());
    });

    // Handle process exit
    childProcess.on('exit', (code) => {
      if (code !== 0) {
        console.error(`Server process exited with code ${code}`);
        process.exit(1);
      }
    });
  } catch (error) {
    console.error('Error running entry.express.js:', error);
    process.exit(1);
  }
}

// Main function to execute all steps
async function main() {
  try {
    await installDependencies();
    await buildFrontend();
    await runExpressServer();
  } catch (error) {
    console.error('An error occurred:', error);
    process.exit(1);
  }
}

// Run main function
main();
