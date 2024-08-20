import express from 'express';
import pkg from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import categoryRoutes from './routes/categoryRoutes.js';
import subcategoryRoutes from './routes/subcategoryRoutes.js';
import itemRoutes from './routes/itemRoutes.js';

const { json } = pkg; // Destructure the `json` middleware from `body-parser` package
dotenv.config(); // Load environment variables from the .env file

const app = express(); // Initialize the Express application
const PORT = process.env.PORT || 3000; // Set the server port, defaulting to 3000 if not specified

// Middleware to parse JSON request bodies
app.use(json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI) // Connect to MongoDB using the URI from environment variables
    .then(() => console.log("MongoDB connected")) // Log message on successful connection
    .catch(err => console.log(err)); // Log error on connection failure

// Routes
app.use('/api/categories', categoryRoutes); // Use category routes for requests to /api/categories
app.use('/api/subcategories', subcategoryRoutes); // Use subcategory routes for requests to /api/subcategories
app.use('/api/items', itemRoutes); // Use item routes for requests to /api/items

// Start the server and listen on the specified port from the environment variables
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
