const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running successfully on Render!');
});

app.post('/api/v2/login', (req, res) => {
  res.json({ status: 'success', message: 'Endpoint active' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

