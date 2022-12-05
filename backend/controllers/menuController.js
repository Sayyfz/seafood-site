import mongoose from "mongoose";
import Category from "../models/CategoryModel.js";

export const getMenuItems = async (req, res) => {
    const categories = await Category.find({});
    res.status(200).json(categories);
};

export const createMenuCategory = async (req, res) => {
    let emptyFields = [];

    if(!req.body.title) {
        emptyFields.push('اسم القائمة');
    };

    if(emptyFields.length > 0) {
        res.status(400).json({ error: 'من فضلك أدخل البيانات المطلوبة' , emptyFields})
    };

    try {
        const category = await Category.create(req.body);
        return res.status(200).json(category);
    } catch(error) {
        res.status(400).json({ error: error.message });
    };
};

export const createMenuItem = async (req, res) => {
    
    let emptyFields = [];

    if(!req.body.name) {
        emptyFields.push('اسم الوجبة');
    };
    if(!req.body.price) {
        emptyFields.push('السعر');
    };

    if(emptyFields.length > 0) {
        res.status(400).json({ error: 'من فضلك أدخل البيانات المطلوبة' , emptyFields})
    };

    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Id is not valid' });
    };

    const category = await Category.findOne({ "_id": id });

    if(!category)
        return res.status(404).json({ msg: 'Category not found' });

    category.content.push(req.body);
    category.save()
        .then(() => res.json(category.content[category.content.length - 1]))
        .catch(err => res.status(404).json({ err: 'error saving category' }));
};

export const deleteMenuItemById = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return  res.status(404).json({ message: 'id is not valid' });
    };

    const category = await Category.findOne({"content._id": id});

    if(!category)
        return res.status(404).json({ msg: 'Item not found' });

    let item = category.content.id(id);
    category.content = category.content.filter(i => i != item);

    category.save()
        .then(() =>  res.json(category.content))
        .catch((err) => res.json(err));
};

export const deleteCategoryById = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return  res.status(404).json({ message: 'id is not valid' });
    };

    const category = await Category.findByIdAndDelete({ "_id": id });

    if(!category)
        return res.status(404).json({ msg: 'Category not found' });
        
    return res.status(200).json(category);
};

export const editMenuItemById = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'id is not valid' });
    };

    const category = await Category.findOne({"content._id": id});
    
    if(!category) {
        return res.status(404).json({ err: 'Category not found' });
    };

    const itemIndex = category.content.findIndex(x => x.id == id);
    category.content[itemIndex] = req.body;
    
    category.save()
        .then(() => {
            res.status(200).json(category.content[itemIndex]);
        }).catch(err => res.status(404).json({ err }));
};

export const editCategoryById = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'id is not valid' });
    };
    const category = await Category.findByIdAndUpdate(id, req.body, {new: true});

    if(!category)
        return res.status(404).json({ err: 'Category not found' });

    return res.status(200).json(category);
};