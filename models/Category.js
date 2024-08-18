import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  image: { type: String },
  description: { type: String },
  taxApplicability: { type: Boolean, default: false },
  tax: { type: Number, default: 0 },
  taxType: { type: String, enum: ['Percentage', 'Fixed'], default: 'fixed' }
}, { timestamps: true });

const Category = mongoose.model('Category', categorySchema);

export default Category;
