// controllers/blogController.js

exports.createBlog = (req, res) => {
    res.status(201).json({ message: 'Blog created successfully' });
};

exports.readBlog = (req, res) => {
    res.status(200).json({ message: 'Blog read successfully' });
};

exports.updateBlog = (req, res) => {
    res.status(200).json({ message: 'Blog updated successfully' });
};

exports.deleteBlog = (req, res) => {
    res.status(200).json({ message: 'Blog deleted successfully' });
};

