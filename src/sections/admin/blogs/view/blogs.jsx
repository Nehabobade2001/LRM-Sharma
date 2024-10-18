import React, { useEffect, useState } from 'react';
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
  Chip,
  Container,
  Stack,
  Autocomplete,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import AddCategoryModal from '../AddCategoryModal';
import axios from '../../../../../axiosConfig';

// Dummy blog data
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


// Predefined categories and subcategories
// const categories = [
//   { category: 'Exam Preparation', subcategories: ['Pattern', 'Strategies'] },
//   { category: 'Study Tips', subcategories: ['Retention', 'Planning'] },
//   { category: 'Exam Tips', subcategories: ['Common Mistakes', 'Time Management'] },
//   { category: 'Resources', subcategories: ['Books', 'Online Courses'] },
//   { category: 'Syllabus', subcategories: ['Biology', 'Chemistry', 'Physics'] },
// ];

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(9);
  const [showModal, setShowModal] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [form, setForm] = useState({
    title: '',
    image: '',
    category: '',
    subcategory: '',
    description: '',
  });
  const [imagePreview, setImagePreview] = useState(null); // For image preview
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSubcategory, setSelectedSubcategory] = useState('All');
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('/api/blog/getAllBlogs');
        console.log(response.data.blogs);
        setBlogs(response.data.blogs);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  // Handle adding/editing blog
  const handleAddEditBlog = () => {
    const { title, image, category, subcategory, description } = form;

    if (editingBlog) {
      const updatedBlogs = blogs.map((blog) =>
        blog.id === editingBlog ? { ...form, id: editingBlog } : blog
      );
      setBlogs(updatedBlogs);
    } else {
      const newBlog = { ...form, id: blogs.length + 1 };
      setBlogs([...blogs, newBlog]);
    }
    setShowModal(false);
    setForm({ title: '', image: '', category: '', subcategory: '', description: '' });
    setEditingBlog(null);
    setImagePreview(null); // Reset image preview
  };

  // Handle editing blog
  const handleEditClick = (blog) => {
    setForm(blog);
    setEditingBlog(blog.id);
    setImagePreview(blog.image); // Set image preview
    setShowModal(true);
  };

  const handleDeleteClick = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleQuillChange = (value) => {
    setForm({ ...form, description: value });
  };

  // Handle image upload with preview
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result); // Set image preview
      setForm({ ...form, image: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // Handle category autocomplete
  const handleCategoryChange = (event, value) => {
    setForm({ ...form, category: value });
    // setForm({ ...form, subcategory: '' }); // Reset subcategory when category changes
  };

  // Handle subcategory autocomplete
  const handleSubcategoryChange = (event, value) => {
    setForm({ ...form, subcategory: value });
  };

  // Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;

  // Filter blogs based on selected category and subcategory
  const filteredBlogs = blogs.filter((blog) => {
    if (selectedCategory === 'All') return true;
    if (selectedSubcategory === 'All') return blog.category === selectedCategory;
    return blog.category === selectedCategory && blog.subcategory === selectedSubcategory;
  });

  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);


  const [modalOpen, setModalOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const handleAddCategory = (category, subcategory) => {
    setCategories((prev) => [
      ...prev,
      { category, subcategories: [subcategory] }
    ]);
  };

  return (
    <>
      <Container maxWidth="xl">

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 3,
            mt: 3,
            // bgcolor: '#fff'
          }}
        >
          <Stack direction="row" spacing={3} >
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => setShowModal(true)}
              sx={{ mb: 2 }}
            >
              Add New Blog
            </Button>
  <Button variant="contained"  startIcon={<AddIcon />} color="primary" onClick={handleOpen}>
        Add Category/Subcategory
      </Button>

      <AddCategoryModal
        open={modalOpen}
        handleClose={handleClose}
        handleAddCategory={handleAddCategory}
      />
            {/* Category Filter */}
            <Autocomplete
              value={selectedCategory}
              onChange={(event, value) => setSelectedCategory(value)}
              options={['All', ...categories.map(({ category }) => category)]}
              renderInput={(params) => <TextField {...params} label="Category" />}
              sx={{ mb: 2, width: 250 }}
            />

            {/* Subcategory Filter */}
            <Autocomplete
              value={selectedSubcategory}
              onChange={(event, value) => setSelectedSubcategory(value)}
              options={
                selectedCategory !== 'All'
                  ? ['All', ...categories.find((cat) => cat.category === selectedCategory)?.subcategories || []]
                  : ['All']
              }
              renderInput={(params) => <TextField {...params} label="Subcategory" />}
              disabled={selectedCategory === 'All'}
              sx={{ mb: 2, width: 250 }}
            />
          </Stack>

          {/* Blog Count Chip */}
          <Chip 
  size='medium' 
  label={
    <>
      Blog Count: <strong>{filteredBlogs.length}</strong>
    </>
  } 
  color="default" 
/>

        </Box>
        {/* Blog List */}
        <Grid container spacing={2}>
          {currentBlogs.map((blog, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                elevation={3}
                style={{ display: 'flex', flexDirection: 'column', marginBottom: '16px' }}
              >
                <CardMedia
                  component="img"
                  alt={blog.title}
                  // height="200"
                  image={blog.blogImage.url}
                  style={{ borderRadius: '10px', width: 200, alignSelf: 'center' }}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {blog.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {blog.category.name} - {blog.subCategory.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    dangerouslySetInnerHTML={{ __html: blog.description }}
                  />
                </CardContent>
                <CardActions style={{ justifyContent: 'flex-end' }}>
                  <IconButton color="primary" onClick={() => handleEditClick(blog)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="secondary" onClick={() => handleDeleteClick(blog.id)}>
                    <DeleteIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

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
              p: 2,
              width: '60%',
              borderRadius: 2,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Modal Header */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
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
            <ReactQuill value={form.description} onChange={handleQuillChange}  style={{ height: '200px' }} />

            {/* Image Upload and Preview */}
            <Box sx={{ mt: 8 }}>
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
      </Container>
    </>
  );
};

export default Blogs;
