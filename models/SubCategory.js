import mongoose from 'mongoose';
import Category from './Category.js';

// Define the schema for the SubCategory model
const subCategorySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true }, // Name is required and must be unique
    image: { type: String }, // URL of the subcategory image
    description: { type: String }, // Brief description of the subcategory
    taxApplicability: { type: Boolean }, // Indicates if tax is applicable
    tax: { type: Number }, // Tax value
    category: { type: String, required: true } // Category is required accepted as a string (category name)
}, { timestamps: true }); // Adds createdAt and updatedAt timestamps to the object

// Middleware to handle pre-save operations
subCategorySchema.pre('save', async function (next) {
    try {
        // Fetch the associated category by name
        const category = await Category.findOne({ name: this.category });

        // If the category does not exist, throw an error
        if (!category) {
            throw new Error('Category not found');
        }

        // Set the category field to the category's ID
        this.category = category._id;

        // If taxApplicability or tax are not provided, inherit them from the parent category
        if (this.taxApplicability === undefined || this.tax === undefined) {
            this.taxApplicability = this.taxApplicability === undefined ? category.taxApplicability : this.taxApplicability;
            this.tax = this.tax === undefined ? category.tax : this.tax;
        }

        next(); // Proceed to save
    } catch (error) {
        next(error); // Pass any errors to the next middleware
    }
});

// Create the SubCategory model based on the schema
const SubCategory = mongoose.model('SubCategory', subCategorySchema);

export default SubCategory;