import mongoose from 'mongoose';
import categoryItemsSchema from './CategoryItemsModel.js';

const Schema = mongoose.Schema;

const categorySchema = new Schema({
    title: {
        type: String,
        required: true,
        maxlength: 30,
    },
    content: {
        type: [categoryItemsSchema]
    }
}, {
    timestamps: true,
});

export default mongoose.model('Category', categorySchema);