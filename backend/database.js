
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/devices', require('./routes/deviceRoutes'));
// Add other routes as needed

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
