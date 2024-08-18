import express from 'express';
import pkg from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const { json } = pkg;
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(json());

// DB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Placeholder Routes
app.get('/', (req, res) => {
  res.send("Welcome to Menu Management API");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
