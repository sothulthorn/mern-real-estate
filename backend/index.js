const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require('./routes/user.route');

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('Connected to MongoDB successfully');
  })
  .catch((err) => console.log(err));

const app = express();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// API Routes
app.use('/api/user', userRouter);