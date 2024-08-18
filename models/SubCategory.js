import mongoose from 'mongoose';
import Category from './Category.js';

const subCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  description: { type: String },
  taxApplicability: { type: Boolean },
  tax: { type: Number },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true }
}, { timestamps: true });

// Middleware to set default taxApplicability and tax from parent category
subCategorySchema.pre('save', async function(next) {
  if (this.taxApplicability === undefined || this.tax === undefined) {
    const category = await Category.findById(this.category);
    if (category) {
      this.taxApplicability = this.taxApplicability === undefined ? category.taxApplicability : this.taxApplicability;
      this.tax = this.tax === undefined ? category.tax : this.tax;
    }
  }
  next();
});

const SubCategory = mongoose.model('SubCategory', subCategorySchema);

export default SubCategory;
