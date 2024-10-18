// // import React, { useState, useRef } from 'react';
// // import { Box, Typography, Card, CardContent, CardMedia, Button, Modal, Rating, IconButton } from '@mui/material';
// // import { styled } from '@mui/system';
// // import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// // import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// // // Styled components
// // const StyledCard = styled(Card)(({ theme }) => ({
// //   display: 'flex',
// //   flexDirection: 'column',
// //   width: 280,
// //   height: 380,
// //   margin: theme.spacing(0, 1),
// //   flexShrink: 0,
// //   transition: 'transform 0.3s ease-in-out',
// //   '&:hover': {
// //     transform: 'scale(1.05)',
// //   },
// // }));

// // const StyledCardMedia = styled(CardMedia)({
// //   height: 160,
// // });

// // const StyledCardContent = styled(CardContent)({
// //   flexGrow: 1,
// //   display: 'flex',
// //   flexDirection: 'column',
// //   justifyContent: 'space-between',
// // });

// // const ScrollableRow = styled(Box)(({ theme }) => ({
// //   display: 'flex',
// //   overflowX: 'auto',
// //   scrollBehavior: 'smooth',
// //   padding: theme.spacing(2, 0),
// //   position: 'relative',
// //   '&::-webkit-scrollbar': {
// //     display: 'none',
// //   },
// //   '-ms-overflow-style': 'none',
// //   'scrollbar-width': 'none',
// // }));

// // const ScrollButton = styled(IconButton)(({ theme }) => ({
// //   position: 'absolute',
// //   top: '50%',
// //   transform: 'translateY(-50%)',
// //   backgroundColor: theme.palette.background.paper,
// //   '&:hover': {
// //     backgroundColor: theme.palette.action.hover,
// //   },
// //   zIndex: 1,
// // }));

// // const StyledModal = styled(Modal)({
// //   display: 'flex',
// //   alignItems: 'center',
// //   justifyContent: 'center',
// // });

// // const ModalContent = styled(Box)(({ theme }) => ({
// //   backgroundColor: theme.palette.background.paper,
// //   boxShadow: theme.shadows[5],
// //   padding: theme.spacing(4),
// //   outline: 'none',
// //   borderRadius: theme.shape.borderRadius,
// //   maxWidth: '90vw',
// //   maxHeight: '90vh',
// //   overflow: 'auto',
// // }));

// // // Course data (unchanged, 20 courses)
// // const courses = [
// //   { id: 1, title: 'NEET Preparation', image: '/assets/images/covers/cover_10.jpg', rating: 4.7, reviews: 1520, description: 'Comprehensive course for NEET (National Eligibility cum Entrance Test) preparation, covering Physics, Chemistry, and Biology.' },
// //   { id: 2, title: 'AIIMS Exam Guide', image: '/api/placeholder/400/300?text=AIIMS', rating: 4.8, reviews: 985, description: 'In-depth study material and practice tests for the All India Institute of Medical Sciences (AIIMS) entrance exam.' },
// //   { id: 3, title: 'JIPMER Crash Course', image: '/api/placeholder/400/300?text=JIPMER', rating: 4.5, reviews: 750, description: 'Intensive crash course for Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER) exam.' },
// //   { id: 4, title: 'MCAT Preparation', image: '/api/placeholder/400/300?text=MCAT', rating: 4.6, reviews: 1100, description: 'Comprehensive Medical College Admission Test (MCAT) preparation course for international medical aspirants.' },
// //   { id: 5, title: 'USMLE Step 1', image: '/api/placeholder/400/300?text=USMLE', rating: 4.9, reviews: 2200, description: 'United States Medical Licensing Examination (USMLE) Step 1 preparation course for medical graduates.' },
// //   { id: 6, title: 'DNB Theory Exam', image: '/api/placeholder/400/300?text=DNB', rating: 4.4, reviews: 680, description: 'Diploma of National Board (DNB) theory exam preparation for post-graduate medical students.' },
// //   { id: 7, title: 'PLAB Exam Prep', image: '/api/placeholder/400/300?text=PLAB', rating: 4.3, reviews: 550, description: 'Preparation course for the Professional and Linguistic Assessments Board (PLAB) exam for international doctors.' },
// //   { id: 8, title: 'MRCP Part 1', image: '/api/placeholder/400/300?text=MRCP', rating: 4.7, reviews: 890, description: 'Membership of the Royal Colleges of Physicians (MRCP) Part 1 exam preparation for postgraduate medical training.' },
// //   { id: 9, title: 'NEXT Exam Guide', image: '/api/placeholder/400/300?text=NEXT', rating: 4.5, reviews: 420, description: 'Comprehensive guide for the National Exit Test (NEXT) for Indian medical graduates.' },
// //   { id: 10, title: 'FMGE Preparation', image: '/api/placeholder/400/300?text=FMGE', rating: 4.2, reviews: 630, description: 'Foreign Medical Graduate Examination (FMGE) preparation course for Indian citizens with foreign medical degrees.' },
// //   { id: 11, title: 'NEET PG Mastery', image: '/api/placeholder/400/300?text=NEET+PG', rating: 4.8, reviews: 1750, description: 'Advanced course for NEET Postgraduate exam, covering all major medical specialties.' },
// //   { id: 12, title: 'USMLE Step 2 CK', image: '/api/placeholder/400/300?text=USMLE+CK', rating: 4.7, reviews: 980, description: 'Comprehensive preparation for USMLE Step 2 Clinical Knowledge exam.' },
// //   { id: 13, title: 'MRCS Part A', image: '/api/placeholder/400/300?text=MRCS', rating: 4.6, reviews: 540, description: 'Membership of the Royal College of Surgeons (MRCS) Part A exam preparation for surgical trainees.' },
// //   { id: 14, title: 'INICET Preparation', image: '/api/placeholder/400/300?text=INICET', rating: 4.4, reviews: 320, description: 'INI-CET (Institute of National Importance Combined Entrance Test) preparation for postgraduate medical courses.' },
// //   { id: 15, title: 'AMC MCQ Exam', image: '/api/placeholder/400/300?text=AMC+MCQ', rating: 4.3, reviews: 290, description: 'Australian Medical Council (AMC) Multiple Choice Question (MCQ) exam preparation for international medical graduates.' },
// //   { id: 16, title: 'FPGEE Study Guide', image: '/api/placeholder/400/300?text=FPGEE', rating: 4.5, reviews: 410, description: 'Foreign Pharmacy Graduate Equivalency Examination (FPGEE) preparation for international pharmacy graduates.' },
// //   { id: 17, title: 'NEET MDS Course', image: '/api/placeholder/400/300?text=NEET+MDS', rating: 4.6, reviews: 580, description: 'Specialized course for NEET Master of Dental Surgery (MDS) exam preparation.' },
// //   { id: 18, title: 'NEET SS Tutorial', image: '/api/placeholder/400/300?text=NEET+SS', rating: 4.7, reviews: 340, description: 'NEET Super Specialty (SS) exam preparation covering various super specialty disciplines.' },
// //   { id: 19, title: 'UPSC CMS Prep', image: '/api/placeholder/400/300?text=UPSC+CMS', rating: 4.4, reviews: 270, description: 'Preparation course for UPSC Combined Medical Services (CMS) examination.' },
// //   { id: 20, title: 'DNB Final Theory', image: '/api/placeholder/400/300?text=DNB+Final', rating: 4.5, reviews: 390, description: 'Comprehensive preparation for DNB Final Theory examinations across various specialties.' },
// // ];

// // const CourseDisplay = () => {
// //   const [selectedCourse, setSelectedCourse] = useState(null);
// //   const [modalOpen, setModalOpen] = useState(false);
// //   const scrollContainerRef = useRef(null);

// //   const handleOpenModal = (course) => {
// //     setSelectedCourse(course);
// //     setModalOpen(true);
// //   };

// //   const handleCloseModal = () => {
// //     setModalOpen(false);
// //   };

// //   const scroll = (scrollOffset) => {
// //     if (scrollContainerRef.current) {
// //       scrollContainerRef.current.scrollLeft += scrollOffset;
// //     }
// //   };

// //   const renderCourseSection = (title, courses) => (
// //     <Box mb={4} position="relative">
// //       <Typography variant="h4" gutterBottom>{title}</Typography>
// //       <ScrollButton
// //         onClick={() => scroll(-300)}
// //         style={{ left: 0 }}
// //       >
// //         <ArrowBackIosNewIcon />
// //       </ScrollButton>
// //       <ScrollableRow ref={scrollContainerRef}>
// //         {courses.map((course) => (
// //           <StyledCard key={course.id}>
// //             <StyledCardMedia
// //               image={course.image}
// //               title={course.title}
// //             />
// //             <StyledCardContent>
// //               <Typography gutterBottom variant="h6" component="div">
// //                 {course.title}
// //               </Typography>
// //               <Rating value={course.rating} precision={0.1} readOnly size="small" />
// //               <Typography variant="body2" color="text.secondary">
// //                 {course.reviews} reviews
// //               </Typography>
// //               <Box mt={2}>
// //                 <Button
// //                   variant="contained"
// //                   color="primary"
// //                   fullWidth
// //                   onClick={() => handleOpenModal(course)}
// //                 >
// //                   Explore
// //                 </Button>
// //               </Box>
// //             </StyledCardContent>
// //           </StyledCard>
// //         ))}
// //       </ScrollableRow>
// //       <ScrollButton
// //         onClick={() => scroll(300)}
// //         style={{ right: 0 }}
// //       >
// //         <ArrowForwardIosIcon />
// //       </ScrollButton>
// //     </Box>
// //   );

// //   return (
// //     <Box sx={{ flexGrow: 1, p: 3 }}>
// //       {renderCourseSection('Popular Medical Entrance Exams', courses.slice(0, 10))}
// //       {renderCourseSection('Advanced Medical Courses', courses.slice(10))}

// //       <StyledModal
// //         open={modalOpen}
// //         onClose={handleCloseModal}
// //         aria-labelledby="course-modal-title"
// //         aria-describedby="course-modal-description"
// //       >
// //         <ModalContent>
// //           {selectedCourse && (
// //             <Box>
// //               <img
// //                 src={selectedCourse.image}
// //                 alt={selectedCourse.title}
// //                 style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '16px' }}
// //               />
// //               <Typography id="course-modal-title" variant="h4" component="h2" gutterBottom>
// //                 {selectedCourse.title}
// //               </Typography>
// //               <Box display="flex" alignItems="center" mb={2}>
// //                 <Rating value={selectedCourse.rating} precision={0.1} readOnly />
// //                 <Typography variant="body2" color="text.secondary" ml={1}>
// //                   ({selectedCourse.reviews} reviews)
// //                 </Typography>
// //               </Box>
// //               <Typography id="course-modal-description" variant="body1" paragraph>
// //                 {selectedCourse.description}
// //               </Typography>
// //               <Button variant="contained" color="primary">
// //                 Enroll Now
// //               </Button>
// //             </Box>
// //           )}
// //         </ModalContent>
// //       </StyledModal>
// //     </Box>
// //   );
// // };

// // export default CourseDisplay;


// import React, { useState, useRef } from 'react';
// import { Box, Typography, Card, CardContent, CardMedia, Button, Modal, Rating, IconButton, Grid } from '@mui/material';
// import { styled } from '@mui/system';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// // Styled components
// const StyledCard = styled(Card)(({ theme }) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   minWidth: '300px',
//   margin: theme.spacing(2),
//   transition: 'transform 0.3s ease-in-out',
//   '&:hover': {
//     transform: 'scale(1.05)',
//   },
  
// }));

// const StyledCardMedia = styled(CardMedia)({
//   height: 140, // Fixed image height
// });

// const StyledCardContent = styled(CardContent)({
//   flexGrow: 1,
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'space-between',
// });

// const ScrollableRow = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   overflowX: 'scroll', // Make it scrollable horizontally
//   scrollBehavior: 'smooth', // Smooth scrolling
//   padding: theme.spacing(2, 0),
//   '&::-webkit-scrollbar': {
//     display: 'none',
//   },
//   '-ms-overflow-style': 'none',
//   'scrollbar-width': 'none',
//   background: '#EBEEF4',
//   borderRadius: '25px'
// }));

// const ScrollButton = styled(IconButton)(({ theme }) => ({
//   position: 'absolute',
//   top: '50%',
//   transform: 'translateY(-50%)',
//   zIndex: 1,
//   backgroundColor: theme.palette.background.paper,
//   '&:hover': {
//     backgroundColor: theme.palette.action.hover,
//   },
// }));

// const StyledModal = styled(Modal)({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// });

// const ModalContent = styled(Box)(({ theme }) => ({
//   backgroundColor: theme.palette.background.paper,
//   boxShadow: theme.shadows[5],
//   padding: theme.spacing(4),
//   outline: 'none',
//   borderRadius: theme.shape.borderRadius,
//   maxWidth: '90vw',
//   maxHeight: '90vh',
//   overflow: 'auto',
// }));

// // Course data (unchanged, 20 courses)
// const myCourses = [
//   { id: 1, title: 'NEET Preparation', image: '/assets/images/covers/cover_3.jpg', rating: 4.7, reviews: 1520, description: 'Comprehensive course for NEET (National Eligibility cum Entrance Test) preparation, covering Physics, Chemistry, and Biology.' },
//   { id: 2, title: 'AIIMS Exam Guide', image: '/assets/images/covers/cover_10.jpg', rating: 4.8, reviews: 985, description: 'In-depth study material and practice tests for the All India Institute of Medical Sciences (AIIMS) entrance exam.' },
//   { id: 3, title: 'JIPMER Crash Course', image: '/assets/images/covers/cover_13.jpg', rating: 4.5, reviews: 750, description: 'Intensive crash course for Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER) exam.' },
//   { id: 4, title: 'MCAT Preparation', image: '/assets/images/covers/cover_15.jpg', rating: 4.6, reviews: 1100, description: 'Comprehensive Medical College Admission Test (MCAT) preparation course for international medical aspirants.' },
//   { id: 5, title: 'USMLE Step 1', image: '/assets/images/covers/cover_16.jpg', rating: 4.9, reviews: 2200, description: 'United States Medical Licensing Examination (USMLE) Step 1 preparation course for medical graduates.' },
//   { id: 6, title: 'DNB Theory Exam', image: '/assets/images/covers/cover_17.jpg', rating: 4.4, reviews: 680, description: 'Diploma of National Board (DNB) theory exam preparation for post-graduate medical students.' },
// ];

// // Course data (unchanged, 20 courses)
// const exploreCourses = [
//   { id: 1, title: 'NEET Preparation', image: '/assets/images/covers/cover_10.jpg', rating: 4.7, reviews: 1520, description: 'Comprehensive course for NEET (National Eligibility cum Entrance Test) preparation, covering Physics, Chemistry, and Biology.' },
//   { id: 2, title: 'AIIMS Exam Guide', image: '/assets/images/covers/cover_10.jpg', rating: 4.8, reviews: 985, description: 'In-depth study material and practice tests for the All India Institute of Medical Sciences (AIIMS) entrance exam.' },
//   { id: 3, title: 'JIPMER Crash Course', image: '/assets/images/covers/cover_10.jpg', rating: 4.5, reviews: 750, description: 'Intensive crash course for Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER) exam.' },
//   { id: 4, title: 'MCAT Preparation', image: '/assets/images/covers/cover_10.jpg', rating: 4.6, reviews: 1100, description: 'Comprehensive Medical College Admission Test (MCAT) preparation course for international medical aspirants.' },
//   { id: 5, title: 'USMLE Step 1', image: '/assets/images/covers/cover_10.jpg', rating: 4.9, reviews: 2200, description: 'United States Medical Licensing Examination (USMLE) Step 1 preparation course for medical graduates.' },
//   { id: 6, title: 'DNB Theory Exam', image: '/assets/images/covers/cover_10.jpg', rating: 4.4, reviews: 680, description: 'Diploma of National Board (DNB) theory exam preparation for post-graduate medical students.' },
//   { id: 7, title: 'PLAB Exam Prep', image: '/assets/images/covers/cover_10.jpg', rating: 4.3, reviews: 550, description: 'Preparation course for the Professional and Linguistic Assessments Board (PLAB) exam for international doctors.' },
//   { id: 8, title: 'MRCP Part 1', image: '/assets/images/covers/cover_10.jpg', rating: 4.7, reviews: 890, description: 'Membership of the Royal Colleges of Physicians (MRCP) Part 1 exam preparation for postgraduate medical training.' },
//   { id: 9, title: 'NEXT Exam Guide', image: '/assets/images/covers/cover_10.jpg', rating: 4.5, reviews: 420, description: 'Comprehensive guide for the National Exit Test (NEXT) for Indian medical graduates.' },
//   { id: 10, title: 'FMGE Preparation', image: '/assets/images/covers/cover_10.jpg', rating: 4.2, reviews: 630, description: 'Foreign Medical Graduate Examination (FMGE) preparation course for Indian citizens with foreign medical degrees.' },
//   { id: 11, title: 'NEET PG Mastery', image: '/assets/images/covers/cover_10.jpg', rating: 4.8, reviews: 1750, description: 'Advanced course for NEET Postgraduate exam, covering all major medical specialties.' },
//   { id: 12, title: 'USMLE Step 2 CK', image: '/assets/images/covers/cover_10.jpg', rating: 4.7, reviews: 980, description: 'Comprehensive preparation for USMLE Step 2 Clinical Knowledge exam.' },
//   { id: 13, title: 'MRCS Part A', image: '/assets/images/covers/cover_10.jpg', rating: 4.6, reviews: 540, description: 'Membership of the Royal College of Surgeons (MRCS) Part A exam preparation for surgical trainees.' },
//   { id: 14, title: 'INICET Preparation', image: '/assets/images/covers/cover_10.jpg', rating: 4.4, reviews: 320, description: 'INI-CET (Institute of National Importance Combined Entrance Test) preparation for postgraduate medical courses.' },
//   { id: 15, title: 'AMC MCQ Exam', image: '/assets/images/covers/cover_10.jpg', rating: 4.3, reviews: 290, description: 'Australian Medical Council (AMC) Multiple Choice Question (MCQ) exam preparation for international medical graduates.' },
//   { id: 16, title: 'FPGEE Study Guide', image: '/assets/images/covers/cover_10.jpg', rating: 4.5, reviews: 410, description: 'Foreign Pharmacy Graduate Equivalency Examination (FPGEE) preparation for international pharmacy graduates.' },
//   { id: 17, title: 'NEET MDS Course', image: '/assets/images/covers/cover_10.jpg', rating: 4.6, reviews: 580, description: 'Specialized course for NEET Master of Dental Surgery (MDS) exam preparation.' },
//   { id: 18, title: 'NEET SS Tutorial', image: '/assets/images/covers/cover_10.jpg', rating: 4.7, reviews: 340, description: 'NEET Super Specialty (SS) exam preparation covering various super specialty disciplines.' },
//   { id: 19, title: 'UPSC CMS Prep', image: '/assets/images/covers/cover_10.jpg', rating: 4.4, reviews: 270, description: 'Preparation course for UPSC Combined Medical Services (CMS) examination.' },
//   { id: 20, title: 'DNB Final Theory', image: '/assets/images/covers/cover_10.jpg', rating: 4.5, reviews: 390, description: 'Comprehensive preparation for DNB Final Theory examinations across various specialties.' },
// ];


// const CourseDisplay = () => {
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [modalOpen, setModalOpen] = useState(false);
//   const exploreScrollRef = useRef(null);

//   const handleOpenModal = (course) => {
//     setSelectedCourse(course);
//     setModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setModalOpen(false);
//   };

//   // Function to handle scrolling by adjusting scrollLeft
//   const scrollExploreCourses = (scrollOffset) => {
//     exploreScrollRef.current.scrollBy({
//       left: scrollOffset,
//       behavior: 'smooth',
//     });
//   };

//   return (
//     <Box sx={{ flexGrow: 1, p: 3 }}>
//       {/* My Courses - Grid, Y-axis scrollable */}
//       <Typography variant="h4" gutterBottom>My Courses</Typography>
//       <Box sx={{ maxHeight: '600px', overflowY: 'auto', mb: 4, background: '#EBEEF4',
//   borderRadius: '25px', p:2 }}>
//         <Grid container spacing={0}>
//           {myCourses.map((course) => (
//             <Grid item xs={12} sm={6} md={4} lg={3} key={course.id}>
//               <StyledCard>
//                 <StyledCardMedia image={course.image} title={course.title} />
//                 <StyledCardContent>
//                   <Typography gutterBottom variant="h6" component="div">
//                     {course.title}
//                   </Typography>
//                   <Rating value={course.rating} precision={0.1} readOnly size="small" />
//                   <Typography variant="body2" color="text.secondary">
//                     {course.reviews} reviews
//                   </Typography>
//                   <Box mt={1}>
//                     <Button
//                       variant="contained"
//                       color="primary"
//                       fullWidth
//                       onClick={() => handleOpenModal(course)}
//                     >
//                       Explore
//                     </Button>
//                   </Box>
//                 </StyledCardContent>
//               </StyledCard>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>

//       {/* Explore All Courses - Horizontal Scrollable */}
//       <Box position="relative" mb={4}>
//         <Typography variant="h4" gutterBottom>Explore All Courses</Typography>
//         {/* Left Scroll Button */}
//         <ScrollButton
//           onClick={() => scrollExploreCourses(-300)}
//           sx={{ left: 0 }}
//         >
//           <ArrowBackIosNewIcon />
//         </ScrollButton>

//         {/* Scrollable Row */}
//         <ScrollableRow ref={exploreScrollRef}>
//           {exploreCourses.map((course) => (
//             <StyledCard key={course.id}>
//               <StyledCardMedia image={course.image} title={course.title} />
//               <StyledCardContent>
//                 <Typography gutterBottom variant="h6" component="div">
//                   {course.title}
//                 </Typography>
//                 <Rating value={course.rating} precision={0.1} readOnly size="small" />
//                 <Typography variant="body2" color="text.secondary">
//                   {course.reviews} reviews
//                 </Typography>
//                 <Box mt={1}>
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     fullWidth
//                     onClick={() => handleOpenModal(course)}
//                   >
//                     Explore
//                   </Button>
//                 </Box>
//               </StyledCardContent>
//             </StyledCard>
//           ))}
//         </ScrollableRow>

//         {/* Right Scroll Button */}
//         <ScrollButton
//           onClick={() => scrollExploreCourses(300)}
//           sx={{ right: 0 }}
//         >
//           <ArrowForwardIosIcon />
//         </ScrollButton>
//       </Box>

//       {/* Modal for Course Detail */}
//       <StyledModal
//         open={modalOpen}
//         onClose={handleCloseModal}
//         aria-labelledby="course-modal-title"
//         aria-describedby="course-modal-description"
//       >
//         <ModalContent>
//           {selectedCourse && (
//             <Box>
//               <img
//                 src={selectedCourse.image}
//                 alt={selectedCourse.title}
//                 style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '16px' }}
//               />
//               <Typography id="course-modal-title" variant="h4" component="h2" gutterBottom>
//                 {selectedCourse.title}
//               </Typography>
//               <Box display="flex" alignItems="center" mb={2}>
//                 <Rating value={selectedCourse.rating} precision={0.1} readOnly />
//                 <Typography variant="body2" color="text.secondary" ml={1}>
//                   ({selectedCourse.reviews} reviews)
//                 </Typography>
//               </Box>
//               <Typography id="course-modal-description" variant="body1" paragraph>
//                 {selectedCourse.description}
//               </Typography>
//               <Button variant="contained" color="primary">
//                 Enroll Now
//               </Button>
//             </Box>
//           )}
//         </ModalContent>
//       </StyledModal>
//     </Box>
//   );
// };

// export default CourseDisplay;


import { useState } from "react";
import {
  Box,
  Icon,
  Table,
  styled,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  IconButton,
  TablePagination,
  InputBase,
  alpha,
  Button,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";

// Styled Table
const StyledTable = styled(Table)(() => ({
  whiteSpace: "pre",
  "& thead": {
    "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } },
  },
  "& tbody": {
    "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } },
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.25),
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  border: `2px solid ${theme.palette.primary.main}`,
  transition: "border-color 0.3s ease, background-color 0.3s ease",
  "&:hover": {
    borderColor: "#007FFF",
    backgroundColor: alpha(theme.palette.common.white, 0.35),
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.primary.main,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1.5, 1.5, 1.5, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "25ch",
    },
    backgroundColor: "#fff",
    borderRadius: "4px",
    boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.15)",
    border: "none",
  },
}));

const subscribarList = [
  {
    name: "john doe",
    date: "18 January, 2019",
    amount: 1000,
    status: "close",
    company: "ABC Fintech LTD.",
  },
  {
    name: "kessy bryan",
    date: "10 January, 2019",
    amount: 9000,
    status: "open",
    company: "My Fintech LTD.",
  },
  {
    name: "james cassegne",
    date: "8 January, 2019",
    amount: 5000,
    status: "close",
    company: "Collboy Tech LTD.",
  },
];

const CourseDisplay = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchText, setSearchText] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [selectedSubscriber, setSelectedSubscriber] = useState(null);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value.toLowerCase());
  };

  const filteredList = subscribarList.filter(
    (subscriber) =>
      subscriber.name.toLowerCase().includes(searchText) ||
      subscriber.company.toLowerCase().includes(searchText) ||
      subscriber.status.toLowerCase().includes(searchText) ||
      subscriber.date.toLowerCase().includes(searchText)
  );

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleOpenModal = (subscriber) => {
    setSelectedSubscriber(subscriber);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedSubscriber(null);
  };

  const handleUpdate = () => {
    // Update logic here
    console.log("Updated:", selectedSubscriber);
    handleCloseModal();
  };

  return (
    <>
      <Box display="flex" alignItems="center" mb={3}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            value={searchText}
            onChange={handleSearchChange}
          />
        </Search>
        <IconButton color="primary" size="large" sx={{ ml: 2 }}>
          <AddIcon />
        </IconButton>
      </Box>

      <Box width="100%" overflow="auto">
        <StyledTable>
          <TableHead>
            <TableRow>
              <TableCell align="left">Farmer Name</TableCell>
              <TableCell align="center">Khasra Number</TableCell>
              <TableCell align="center">Plot Number</TableCell>
              <TableCell align="center">Date of Registration</TableCell>
              <TableCell align="center">Amount</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredList
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((subscriber, index) => (
                <TableRow key={index}>
                  <TableCell align="left">{subscriber.name}</TableCell>
                  <TableCell align="center">{subscriber.company}</TableCell>
                  <TableCell align="center">{subscriber.date}</TableCell>
                  <TableCell align="center">{subscriber.status}</TableCell>
                  <TableCell align="center">${subscriber.amount}</TableCell>
                  <TableCell align="right">
                    <Tooltip title="Edit">
                      <IconButton
                        color="primary"
                        onClick={() => handleOpenModal(subscriber)}
                      >
                        <EditIcon />
                      </IconButton>
                    </Tooltip>

                    <Tooltip title="Delete">
                      <IconButton color="error">
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>

                    <Tooltip title="Update">
                      <IconButton color="success">
                        <SaveIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </StyledTable>

        <TablePagination
          sx={{ px: 2 }}
          page={page}
          component="div"
          rowsPerPage={rowsPerPage}
          count={filteredList.length}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
          nextIconButtonProps={{ "aria-label": "Next Page" }}
          backIconButtonProps={{ "aria-label": "Previous Page" }}
        />
      </Box>

      {/* Update Modal */}
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        PaperProps={{
          style: {
            minWidth: "400px",
            borderRadius: "12px",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        <DialogTitle
          sx={{ textAlign: "center", fontWeight: "bold", color: "#007FFF" }}
        >
          Update Form
        </DialogTitle>
        <DialogContent>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              autoFocus
              margin="dense"
              label="Farmer Name"
              fullWidth
              variant="outlined"
              value={selectedSubscriber?.name || ""}
              onChange={(e) =>
                setSelectedSubscriber({
                  ...selectedSubscriber,
                  name: e.target.value,
                })
              }
              InputLabelProps={{ shrink: true }}
              sx={{ borderRadius: "4px" }}
            />
            <TextField
              margin="dense"
              label="Khasra Number"
              fullWidth
              variant="outlined"
              value={selectedSubscriber?.company || ""}
              onChange={(e) =>
                setSelectedSubscriber({
                  ...selectedSubscriber,
                  company: e.target.value,
                })
              }
              InputLabelProps={{ shrink: true }}
              sx={{ borderRadius: "4px" }}
            />
            <TextField
              margin="dense"
              label="Plot Number"
              fullWidth
              variant="outlined"
              value={selectedSubscriber?.date || ""}
              onChange={(e) =>
                setSelectedSubscriber({
                  ...selectedSubscriber,
                  date: e.target.value,
                })
              }
              InputLabelProps={{ shrink: true }}
              sx={{ borderRadius: "4px" }}
            />
            <TextField
              margin="dense"
              label="Date of Registration"
              fullWidth
              variant="outlined"
              value={selectedSubscriber?.status || ""}
              onChange={(e) =>
                setSelectedSubscriber({
                  ...selectedSubscriber,
                  status: e.target.value,
                })
              }
              InputLabelProps={{ shrink: true }}
              sx={{ borderRadius: "4px" }}
            />
            <TextField
              margin="dense"
              label="Amount"
              fullWidth
              variant="outlined"
              value={selectedSubscriber?.amount || ""}
              onChange={(e) =>
                setSelectedSubscriber({
                  ...selectedSubscriber,
                  amount: e.target.value,
                })
              }
              InputLabelProps={{ shrink: true }}
              sx={{ borderRadius: "4px" }}
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center" }}>
          <Button onClick={handleCloseModal} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleUpdate} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default CourseDisplay;