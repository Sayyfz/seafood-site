import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const categoryItemsSchema = new Schema({
    name: {
        type: String,
        maxlength: 20,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        maxlength: 4,
    },
}, {
    timestamps: true,
});

export default categoryItemsSchema;