// routes/blogRoutes.js
const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

// Define CRUD routes for blogs
router.post('/create-blog', blogController.createBlog); // Create
router.get('/read-blog', blogController.readBlog);      // Read
router.put('/update-blog', blogController.updateBlog);   // Update
router.delete('/delete-blog', blogController.deleteBlog); // Delete

module.exports = router;
