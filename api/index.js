const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postsRoute = require('./routes/posts');
const categoryRoute = require('./routes/categories');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const helmet = require('helmet');
const axios = require('axios'); // Import Axios library

dotenv.config();
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, "/images")));

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  }
});
const upload = multer({ storage: storage });
app.post('/api/upload', upload.single('file'), (req, res) => {
  return res.status(200).json('File has been uploaded');
});

app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/posts', postsRoute);
app.use('/api/categories', categoryRoute);

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

// Example of using Axios to make an API request
app.get('/api/example', (req, res) => {
  // Make a GET request to your backend server (assuming you have an endpoint at https://ublogger.onrender.com/api/data)
  axios.get('https://ublogger.onrender.com/api/data')
    .then(response => {
      res.json(response.data); // Send the data received from the backend server as a response
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    });
});

// Don't use app.listen here, as you don't need to run the backend server locally anymore

module.exports = app; // Export the app to use it in other files if needed
