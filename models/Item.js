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
  subCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'SubCategory' }
}, { timestamps: true });

// Middleware to calculate total amount
itemSchema.pre('save', function(next) {
  this.totalAmount = this.baseAmount - this.discount;
  next();
});

const Item = mongoose.model('Item', itemSchema);

export default Item;
