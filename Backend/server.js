const WebSocket = require('ws');
const axios = require('axios');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('New client connected');

  ws.on('message', async (message) => {
    console.log(`Received message: ${message}`);

    try {
      // Forward the message to the Flask server
      const response = await axios.post('http://127.0.0.1:5000/query', {
        message: message
      });

      // Send the Flask server's response back to the WebSocket client
      ws.send(`Server response: ${response.data.response}`);
    } catch (error) {
      console.error('Error querying the chatbot:', error);
      ws.send('Error processing your request.');
    }
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });

  ws.send('Welcome to the WebSocket server!');
});

console.log('WebSocket server is listening on ws://localhost:8080');
