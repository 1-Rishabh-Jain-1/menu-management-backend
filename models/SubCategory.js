import mongoose from 'mongoose';
import Category from './Category.js';

const subCategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String },
    description: { type: String },
    taxApplicability: { type: Boolean },
    tax: { type: Number },
    category: { type: String, required: true }
}, { timestamps: true });

// Middleware to set category ID based on category name and set default taxApplicability and tax
subCategorySchema.pre('save', async function (next) {
    try {
        // Fetch the category by name
        const category = await Category.findOne({ name: this.category });

        if (!category) {
            throw new Error('Category not found');
        }

        // Set the category field to the category ID
        this.category = category._id;

        // Set default taxApplicability and tax from parent category if not provided
        if (this.taxApplicability === undefined || this.tax === undefined) {
            this.taxApplicability = this.taxApplicability === undefined ? category.taxApplicability : this.taxApplicability;
            this.tax = this.tax === undefined ? category.tax : this.tax;
        }

        next();
    } catch (error) {
        next(error);
    }
});

const SubCategory = mongoose.model('SubCategory', subCategorySchema);

export default SubCategory;
