const app = require('./app');
require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  res.send({
      message: 'OK - Server is up and running',
      code: 200,
      version: '1.0.0'
  })
});