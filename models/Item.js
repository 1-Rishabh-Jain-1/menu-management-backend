import mongoose from 'mongoose';
import SubCategory from './SubCategory.js';

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  description: { type: String },
  taxApplicability: { type: Boolean },
  tax: { type: Number },
  baseAmount: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  totalAmount: { type: Number, required: true },
  subCategory: { type: String, required: true }  // Initially accept the subCategory as a string
}, { timestamps: true });

// Middleware to set subCategory ID based on subCategory name and calculate total amount
itemSchema.pre('save', async function(next) {
  try {
    // Fetch the subCategory by name
    const subCategory = await SubCategory.findOne({ name: this.subCategory });

    if (!subCategory) {
      throw new Error('SubCategory not found');
    }

    // Set the subCategory field to the subCategory ID
    this.subCategory = subCategory._id;

    // Calculate the total amount
    this.totalAmount = this.baseAmount - this.discount;

    next();
  } catch (error) {
    next(error);
  }
});

const Item = mongoose.model('Item', itemSchema);

export default Item;
