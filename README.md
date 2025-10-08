# First-Project-without-Prompt-and-2nd-with-pr

Node.js tutorial project demonstrating basic Express server with multiple endpoints.

## Prerequisites

- Node.js 18+ (20 LTS or 22 LTS recommended)
- npm (comes with Node.js)

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Server

Start the server:
```bash
npm start
```

Server runs on http://localhost:3000

## Endpoints

- `GET /` - Returns "Hello world"
- `GET /evening` - Returns "Good evening"

## Testing

### Using curl:
```bash
curl http://localhost:3000/
curl http://localhost:3000/evening
```

### Using browser:
- Open http://localhost:3000/
- Open http://localhost:3000/evening

## Project Structure

- `server.js` - Main application file with Express server setup and routes
- `package.json` - Project configuration and dependencies