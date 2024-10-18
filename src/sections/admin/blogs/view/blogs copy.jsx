import React, { useState } from 'react';
import {
  Button,
  Modal,
  Box,
  TextField,
  Typography,
  IconButton,
  Pagination,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Grid,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

// Dummy NEET medical blog data
const dummyBlogs = [
  {
    id: 1,
    title: 'Understanding NEET Exam Pattern',
    image: '/assets/images/covers/cover_1.jpg',
    category: 'Exam Preparation',
    description: 'An overview of the NEET exam pattern, including subjects, types of questions, and marking schemes.',
  },
  {
    id: 2,
    title: 'Top 10 Study Tips for NEET',
    image: '/assets/images/covers/cover_2.jpg',
    category: 'Study Tips',
    description: 'Effective strategies and tips to maximize your study time and improve retention for NEET preparation.',
  },
  {
    id: 3,
    title: 'Common Mistakes to Avoid in NEET',
    image: '/assets/images/covers/cover_3.jpg',
    category: 'Exam Tips',
    description: 'Learn about the common pitfalls students face during NEET preparation and how to avoid them.',
  },
  {
    id: 4,
    title: 'How to Manage Time during NEET',
    image: '/assets/images/covers/cover_4.jpg',
    category: 'Time Management',
    description: 'Techniques for effective time management during your NEET exam to maximize scoring potential.',
  },
  {
    id: 5,
    title: 'Best Books for NEET Preparation',
    image: '/assets/images/covers/cover_5.jpg',
    category: 'Resources',
    description: 'A curated list of recommended books and resources to prepare for the NEET exam successfully.',
  },
  {
    id: 6,
    title: 'Understanding NEET Syllabus',
    image: '/assets/images/covers/cover_6.jpg',
    category: 'Syllabus',
    description: 'A detailed breakdown of the NEET syllabus, including essential topics for Biology, Chemistry, and Physics.',
  },
  {
    id: 7,
    title: 'Understanding NEET Exam Pattern',
    image: '/assets/images/covers/cover_1.jpg',
    category: 'Exam Preparation',
    description: 'An overview of the NEET exam pattern, including subjects, types of questions, and marking schemes.',
  },
  {
    id: 8,
    title: 'Top 10 Study Tips for NEET',
    image: '/assets/images/covers/cover_2.jpg',
    category: 'Study Tips',
    description: 'Effective strategies and tips to maximize your study time and improve retention for NEET preparation.',
  },
  {
    id: 9,
    title: 'Common Mistakes to Avoid in NEET',
    image: '/assets/images/covers/cover_3.jpg',
    category: 'Exam Tips',
    description: 'Learn about the common pitfalls students face during NEET preparation and how to avoid them.',
  },
  {
    id: 10,
    title: 'How to Manage Time during NEET',
    image: '/assets/images/covers/cover_4.jpg',
    category: 'Time Management',
    description: 'Techniques for effective time management during your NEET exam to maximize scoring potential.',
  },
  {
    id: 11,
    title: 'Best Books for NEET Preparation',
    image: '/assets/images/covers/cover_5.jpg',
    category: 'Resources',
    description: 'A curated list of recommended books and resources to prepare for the NEET exam successfully.',
  },
  {
    id: 12,
    title: 'Understanding NEET Syllabus',
    image: '/assets/images/covers/cover_6.jpg',
    category: 'Syllabus',
    description: 'A detailed breakdown of the NEET syllabus, including essential topics for Biology, Chemistry, and Physics.',
  },
  {
    id: 13,
    title: 'Understanding NEET Exam Pattern',
    image: '/assets/images/covers/cover_1.jpg',
    category: 'Exam Preparation',
    description: 'An overview of the NEET exam pattern, including subjects, types of questions, and marking schemes.',
  },
  {
    id: 14,
    title: 'Top 10 Study Tips for NEET',
    image: '/assets/images/covers/cover_2.jpg',
    category: 'Study Tips',
    description: 'Effective strategies and tips to maximize your study time and improve retention for NEET preparation.',
  },
  {
    id: 15,
    title: 'Common Mistakes to Avoid in NEET',
    image: '/assets/images/covers/cover_3.jpg',
    category: 'Exam Tips',
    description: 'Learn about the common pitfalls students face during NEET preparation and how to avoid them.',
  },
  {
    id: 16,
    title: 'How to Manage Time during NEET',
    image: '/assets/images/covers/cover_4.jpg',
    category: 'Time Management',
    description: 'Techniques for effective time management during your NEET exam to maximize scoring potential.',
  },
  {
    id: 17,
    title: 'Best Books for NEET Preparation',
    image: '/assets/images/covers/cover_5.jpg',
    category: 'Resources',
    description: 'A curated list of recommended books and resources to prepare for the NEET exam successfully.',
  },
  {
    id: 18,
    title: 'Understanding NEET Syllabus',
    image: '/assets/images/covers/cover_6.jpg',
    category: 'Syllabus',
    description: 'A detailed breakdown of the NEET syllabus, including essential topics for Biology, Chemistry, and Physics.',
  },
];

const Blogs = () => {
  const [blogs, setBlogs] = useState(dummyBlogs);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(4);
  const [showModal, setShowModal] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [form, setForm] = useState({
    title: '',
    image: '',
    category: '',
    description: '',
  });

  const handleAddEditBlog = () => {
    const { title, image, category } = form;
    const description = form.description.replace(/<[^>]+>/g, ''); // Remove HTML tags

    if (editingBlog) {
      const updatedBlogs = blogs.map((blog) =>
        blog.id === editingBlog ? { ...form, description, id: editingBlog } : blog
      );
      setBlogs(updatedBlogs);
    } else {
      const newBlog = { ...form, description, id: blogs.length + 1 };
      setBlogs([...blogs, newBlog]);
    }
    setShowModal(false);
    setForm({ title: '', image: '', category: '', description: '' });
    setEditingBlog(null);
  };

  const handleEditClick = (blog) => {
    setForm(blog);
    setEditingBlog(blog.id);
    setShowModal(true);
  };

  const handleDeleteClick = (id) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleQuillChange = (value) => {
    setForm({ ...form, description: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setForm({ ...form, image: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  return (
    <div className="container mx-auto p-4">
      {/* Add New Blog Button */}
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={() => setShowModal(true)}
        sx={{ mb: 2 }}
      >
        Add New Blog
      </Button>

      {/* Blog List */}
      <div>
        {currentBlogs.map((blog) => (
          <Card key={blog.id} elevation={3} sx={{ display: 'flex',alignItems: 'center', justifyContent: 'space-around', mb: 1, p:1 }}>
            <CardMedia
              component="img"
              alt={blog.title}
              height="140"
              image={blog.image}
              sx={{ width: 150, borderRadius: '10px' }}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <CardContent>
                <Typography variant="h6" component="div">
                  {blog.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {blog.category}
                </Typography>
                <Typography variant="body2" >
                  {blog.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'flex-end' }}>
                <IconButton color="primary" onClick={() => handleEditClick(blog)}>
                  <EditIcon />
                </IconButton>
                <IconButton color="secondary" onClick={() => handleDeleteClick(blog.id)}>
                  <DeleteIcon />
                </IconButton>
              </CardActions>
            </Box>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={(event, value) => setCurrentPage(value)}
        sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}
      />

      {/* Add/Edit Blog Modal */}
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            width: '90%',
            maxWidth: 800,
            borderRadius: 2,
            display: 'flex',
          }}
        >
          <Box sx={{ flex: 1, pr: 2 }}>
            <Typography variant="h6" gutterBottom>
              {editingBlog ? 'Edit Blog' : 'Add New Blog'}
            </Typography>

            <TextField
              fullWidth
              label="Title"
              name="title"
              value={form.title}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Category"
              name="category"
              value={form.category}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              type="file"
              fullWidth
              accept="image/*"
              onChange={handleImageUpload}
              margin="normal"
            />
            {form.image && (
              <CardMedia
                component="img"
                alt="Blog"
                height="100"
                image={form.image}
                sx={{ mt: 2, mb: 2, borderRadius: 1 }}
              />
            )}
            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 3 }}
              onClick={handleAddEditBlog}
            >
              {editingBlog ? 'Update Blog' : 'Add Blog'}
            </Button>
          </Box>

          <Box sx={{ flex: 1, pl: 2 }}>
            <Typography variant="body1" gutterBottom sx={{ mt: 2 }}>
              Description
            </Typography>
            <ReactQuill
              theme="snow"
              value={form.description}
              onChange={handleQuillChange}
              style={{ height: '250px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default Blogs;
