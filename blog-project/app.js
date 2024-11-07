// app.js
const express = require('express');
const blogRoutes = require('./routes/blogRoutes');

const app = express();
app.use(express.json()); // Middleware to parse JSON request bodies

// Set up routes
app.use('/api/blog', blogRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
te