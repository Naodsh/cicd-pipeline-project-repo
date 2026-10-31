const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ 
    message: 'Hello from DevOps Pipeline v2!',
    version: process.env.APP_VERSION || '2.0.0',
    environment: process.env.NODE_ENV || 'development',
    updated: 'Now with CI/CD automation!'
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

const server = app.listen(PORT, () => {
  console.log(`Server v2 running on port ${PORT}`);
});

module.exports = server;
