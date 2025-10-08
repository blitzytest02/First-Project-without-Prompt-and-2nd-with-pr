// Import the Express framework - a minimal and flexible Node.js web application framework
// that provides a robust set of features for web and mobile applications
const express = require('express');

// Initialize the Express application
// This creates an instance of an Express application that will handle HTTP requests
const app = express();

// Define the port for the server to listen on
// Uses the PORT environment variable if available, otherwise defaults to 3000
// Environment variables allow flexibility for different deployment environments
const PORT = process.env.PORT || 3000;

// Route 1: Root endpoint
// Handles GET requests to the root path '/'
// Returns a plain text response "Hello world"
app.get('/', (req, res) => {
  res.send('Hello world');
});

// Route 2: Evening greeting endpoint
// Handles GET requests to the '/evening' path
// Returns a plain text response "Good evening"
app.get('/evening', (req, res) => {
  res.send('Good evening');
});

// Start the HTTP server and listen for incoming requests on the specified port
// The callback function executes once the server successfully starts
const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Try visiting:`);
  console.log(`  - http://localhost:${PORT}/`);
  console.log(`  - http://localhost:${PORT}/evening`);
});

// Error handling for server startup failures
// This event listener catches errors that occur during server initialization
server.on('error', (error) => {
  // Check if the error is due to the port already being in use
  if (error.code === 'EADDRINUSE') {
    console.error(`Error: Port ${PORT} is already in use.`);
    console.error(`Please try one of the following:`);
    console.error(`  1. Stop the process using port ${PORT}`);
    console.error(`  2. Use a different port: PORT=3001 node server.js`);
    process.exit(1);
  } else {
    // Handle any other server errors
    console.error('Server error:', error.message);
    process.exit(1);
  }
});

// Graceful shutdown handling
// Listen for termination signals and close the server gracefully
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('\nSIGINT signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
    process.exit(0);
  });
});
