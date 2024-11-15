const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db')
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');


// Initialize app
const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());
// app.use('/public/uploads', express.static('public/uploads')); // Serve uploaded files
app.use('/public', express.static('public'));  // Serve the "public" folder as static files


// MongoDB connection
connectDB()

// Define routes
app.use('/api/users', userRoutes);

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
