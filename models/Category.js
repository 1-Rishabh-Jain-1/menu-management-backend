import mongoose from 'mongoose';

// Define the schema for the Category model
const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }, // Name is required and must be unique
  image: { type: String }, // URL of the category image
  description: { type: String }, // Brief description of the category
  taxApplicability: { type: Boolean, default: false }, // Indicates if tax is applicable, default is false
  tax: { type: Number, default: 0 }, // Default tax value, set to 0
  taxType: { type: String, enum: ['Percentage', 'Fixed'], default: 'fixed' } // Tax can be either 'Percentage' or 'Fixed', default is 'fixed'
}, { timestamps: true }); // Adds createdAt and updatedAt timestamps to the object

// Create the Category model based on the schema
const Category = mongoose.model('Category', categorySchema);

export default Category;