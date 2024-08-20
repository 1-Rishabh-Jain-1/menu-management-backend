import mongoose from 'mongoose';
import SubCategory from './SubCategory.js';

// Define the schema for the Item model
const itemSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Name is required
  image: { type: String }, // URL of the item image
  description: { type: String }, // Brief description of the item
  taxApplicability: { type: Boolean }, // Indicates if tax is applicable
  tax: { type: Number }, // Tax value
  baseAmount: { type: Number, required: true }, // Base price of the item, required
  discount: { type: Number, default: 0 }, // Discount on the item, default is 0
  totalAmount: { type: Number, required: true }, // Total amount after discount, required
  subCategory: { type: String, required: true }  // Accept the subCategory as a string (subcategory name)
}, { timestamps: true }); // Adds createdAt and updatedAt timestamps to the object

// Middleware to handle pre-save operations
itemSchema.pre('save', async function(next) {
  try {
    // Fetch the associated subcategory by name
    const subCategory = await SubCategory.findOne({ name: this.subCategory });

    // If the subcategory does not exist, throw an error
    if (!subCategory) {
      throw new Error('SubCategory not found');
    }

    // Set the subCategory field to the subcategory's ID
    this.subCategory = subCategory._id;

    // Calculate the total amount by subtracting the discount from the base amount
    this.totalAmount = this.baseAmount - this.discount;

    next(); // Proceed to save
  } catch (error) {
    next(error); // Pass any errors to the next middleware
  }
});

// Create the Item model based on the schema
const Item = mongoose.model('Item', itemSchema);

export default Item;