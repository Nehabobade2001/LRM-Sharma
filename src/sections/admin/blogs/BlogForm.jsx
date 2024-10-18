import React, { useState, useEffect } from 'react';
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Grid,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Autocomplete } from '@mui/material';
import ReactQuill from 'react-quill'; // Make sure to install react-quill
import 'react-quill/dist/quill.snow.css'; // Import styles for ReactQuill
import axios from 'axios';

const BlogForm = ({ showModal, setShowModal, editingBlog, setEditingBlog, blogs, setBlogs, categories }) => {
  const [form, setForm] = useState({
    title: '',
    category: null,
    subcategory: null,
    description: '',
    image: null,
  });
  const [imagePreview, setImagePreview] = useState('');

  // Load existing blog data if editing
  useEffect(() => {
    if (editingBlog) {
      const blog = blogs.find((b) => b.id === editingBlog);
      if (blog) {
        setForm({
          title: blog.title,
          category: blog.category,
          subcategory: blog.subcategory,
          description: blog.description,
          image: blog.image, // Assuming the blog object contains image URL
        });
        setImagePreview(blog.image); // Set the image preview
      }
    } else {
      setForm({ title: '', category: null, subcategory: null, description: '', image: null });
      setImagePreview('');
    }
  }, [editingBlog, blogs]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCategoryChange = (event, newValue) => {
    setForm((prevData) => ({ ...prevData, category: newValue, subcategory: null })); // Reset subcategory on category change
  };

  const handleSubcategoryChange = (event, newValue) => {
    setForm((prevData) => ({ ...prevData, subcategory: newValue }));
  };

  const handleQuillChange = (value) => {
    setForm((prevData) => ({ ...prevData, description: value }));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setForm((prevData) => ({ ...prevData, image: file }));
      setImagePreview(URL.createObjectURL(file)); // Set the preview for the uploaded image
    }
  };

  const handleAddEditBlog = async () => {
    try {
      const formData = new FormData();
      formData.append('title', form.title);
      formData.append('category', form.category);
      formData.append('subcategory', form.subcategory);
      formData.append('description', form.description);
      if (form.image) formData.append('image', form.image); // Only append if an image is uploaded

      if (editingBlog) {
        // Update blog logic
        await axios.put(`/api/admin/updateBlog/${editingBlog}`, formData);
        setBlogs((prevBlogs) =>
          prevBlogs.map((b) => (b.id === editingBlog ? { ...b, ...form } : b))
        );
        setEditingBlog(null);
      } else {
        // Create blog logic
        const response = await axios.post('/api/admin/createBlog', formData);
        setBlogs((prevBlogs) => [...prevBlogs, response.data]);
      }
      setShowModal(false); // Close modal
    } catch (error) {
      console.error("Error saving blog:", error);
    }
  };

  return (
    <Modal open={showModal} onClose={() => setShowModal(false)}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 2,
          width: '60%',
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Modal Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h6" gutterBottom>
            {editingBlog ? 'Edit Blog' : 'Add New Blog'}
          </Typography>
          <IconButton onClick={() => setShowModal(false)}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Title Field */}
        <TextField
          label="Title"
          variant="outlined"
          value={form.title}
          name="title"
          onChange={handleChange}
          sx={{ mb: 2 }}
          required
        />

        {/* Category and Subcategory Autocomplete */}
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={6}>
            <Autocomplete
              value={form.category}
              onChange={handleCategoryChange}
              options={categories.map(({ category }) => category)}
              renderInput={(params) => <TextField {...params} label="Category" />}
              required
            />
          </Grid>

          <Grid item xs={6}>
            <Autocomplete
              value={form.subcategory}
              onChange={handleSubcategoryChange}
              options={
                form.category
                  ? categories.find((cat) => cat.category === form.category)?.subcategories || []
                  : []
              }
              renderInput={(params) => <TextField {...params} label="Subcategory" />}
              disabled={!form.category}
            />
          </Grid>
        </Grid>

        {/* Description Field */}
        <ReactQuill value={form.description} onChange={handleQuillChange} style={{ height: '200px' }} />

        {/* Image Upload and Preview */}
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" component="label">
            Upload Image
            <input type="file" hidden onChange={handleImageUpload} />
          </Button>
          {imagePreview && (
            <Box mt={2}>
              <Typography variant="subtitle1">Image Preview:</Typography>
              <img src={imagePreview} alt="Preview" style={{ width: '100%', maxHeight: '200px', objectFit: 'contain' }} />
            </Box>
          )}
        </Box>

        {/* Submit Button */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddEditBlog}
            sx={{ textTransform: 'none' }}
          >
            {editingBlog ? 'Update Blog' : 'Add Blog'}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default BlogForm;
