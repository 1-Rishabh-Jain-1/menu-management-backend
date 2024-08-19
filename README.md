# Menu Management Backend

This is a backend application built with Node.js and Express.js to manage categories, subcategories, and items for a menu management system. The application uses MongoDB as its database, and Mongoose as the ODM to interact with the database.

Find the working demo of the APIs on the Loom video: [API demo link](https://www.loom.com/share/3876ef9f074c42b3b54570cd9102130d?sid=77d979c5-7345-43ec-a9c8-c92001c57f24)

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Troubleshooting](#troubleshooting)
- [Contact](#contact)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/menu-management-backend.git
   cd menu-management-backend
   ```


2. **Install dependencies:**

```bash
npm install
```


3. **Set up environment variables:**

Create a `.env` file in the root directory of the project and configure the following variables:

```bash
MONGO_URI=mongodb://localhost:27017/menu_management # Replace with your MongoDB connection string
PORT=3000 # You can change the port if necessary
```


## Getting Started

This guide will help you set up and run the application on your local machine for development and testing purposes.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v14.x or higher)
- **npm** (v6.x or higher)
- **MongoDB** (v4.x or higher) - either running locally or through a cloud service like MongoDB Atlas
- **Git** (optional but recommended for version control)

## Running the Application

1. **Start MongoDB:**

   Ensure that your MongoDB instance is running. You can start a local MongoDB instance by running the following command in your terminal:

   ```bash
   mongod
   ```
2. **Run the application:**

   Start the server by running:

```bash
npm start
```

This will run the application in development mode using `nodemon`, which automatically restarts the server when file changes are detected.

3. **Access the API:**

The API will be accessible at `http://localhost:3000`. You can test the API endpoints using Postman or any other API testing tool.

## API Endpoints

Below is a summary of the main API endpoints available in this project:

### Categories

- **POST** `/api/categories`

  - Create a new category.Project StructureProject Structure
  - Example:
    ```json
    { 
      "name": "Dessert", 
      "taxApplicability": true, 
      "tax": 15, 
      "taxType": "Percentage" 
    }
    ```
- **GET** `/api/categories`

  - Get all categories.
- **GET** `/api/categories/:id`

  - Get a category by ID.
- **PUT** `/api/categories/:id`

  - Update an existing category by ID.

### Subcategories

- **POST** `/api/subcategories`

  - Create a new subcategory.
  - Example:
    ```json
    { 
      "name": "Cakes", 
      "category": "Dessert" 
    }
    ```
- **GET** `/api/subcategories`

  - Get all subcategories.
- **GET** `/api/subcategories/:id`

  - Get a subcategory by ID.
- **GET** `/api/subcategories/category/:categoryId`

  - Get all subcategories under a specific category.
- **PUT** `/api/subcategories/:id`

  - Update an existing subcategory by ID.

### Items

- **POST** `/api/items`

  - Create a new item.
  - Example:
    ```json
    { 
      "name": "Chocolate Cake", 
      "baseAmount": 100, 
      "subCategory": "Cakes" 
    }
    ```
- **GET** `/api/items`

  - Get all items.
- **GET** `/api/items/:id`

  - Get an item by ID.
- **GET** `/api/items/subcategory/:subCategoryId`

  - Get all items under a specific subcategory.
- **GET** `/api/items/category/:categoryId`

  - Get all items under a specific category (via subcategories).
- **PUT** `/api/items/:id`

  - Update an existing item by ID.

## Project Structure

Here's a brief overview of the project structure:

```bash
menu-management-backend/
├── controllers/         # Controllers for handling API requests
├── models/              # Mongoose models for MongoDB collections
├── routes/              # Express routes for handling different resource endpoints
├── .env                 # Environment variables configuration
├── server.js            # Main server entry point
├── README.md            # Project documentation
└── package.json         # npm dependencies and scripts
```

## Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for Node.js
- **MongoDB** - NoSQL database
- **Mongoose** - ODM (Object Data Modeling) library for MongoDB
- **Nodemon** - Tool for automatically restarting the server during development

## Troubleshooting

**Common Issues:**

- **MongoDB Connection:** Ensure MongoDB is running locally or that you have provided the correct connection string for a remote MongoDB instance.
- **Environment Variables:** Double-check that your `.env` file is properly configured with the correct values, especially for `MONGODB_URI`.
- **PUT Requests:** If you encounter issues with PUT requests not working, verify the URL structure and ensure you're sending the correct ID in the request parameters.

## Contact

If you have any questions or need further clarification, feel free to reach out:

- **Your Name** - [rarishabhjain@gmail.com](mailto:rarishabhjain@gmail.com)
- **LinkedIn** - [LinkedIn Link](https://www.linkedin.com/in/-rishabh-jain-/)

<!-- Replace with your Loom video link -->
