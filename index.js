const { spawn } = require('child_process');

// Command to run backend
const backendCommand = 'npm';
const backendArgs = ['run', 'start:backend'];

// Command to run frontend
const frontendCommand = 'npm';
const frontendArgs = ['run', 'start:frontend'];

// Function to start a command in a separate shell
const startCommand = (command, args) => {
  return new Promise((resolve, reject) => {
    const childProcess = spawn(command, args, { shell: true, stdio: 'inherit' });

    childProcess.on('error', (error) => {
      reject(error);
    });

    childProcess.on('exit', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Command '${command} ${args.join(' ')}' exited with code ${code}`));
      }
    });
  });
};

// Run backend and frontend commands in separate shells
const runCommands = async () => {
  console.log('Starting backend and frontend in separate shells...');
  try {
    await Promise.all([
      startCommand(backendCommand, backendArgs),
      startCommand(frontendCommand, frontendArgs)
    ]);
    console.log('Both backend and frontend processes have started successfully.');
  } catch (error) {
    console.error('Error starting backend or frontend:', error.message);
  }
};

runCommands();
