import mongoose from "mongoose";
import { ObjectId } from 'mongodb'
import Category from "../models/CategoryModel.js";

export const getMenuItems = async (req, res) => {
    const categories = await Category.find({});
    res.status(200).json(categories);
};

export const createMenuCategory = async (req, res) => {
    console.log(req.body);
    try {
        const category = await Category.create(req.body);
        res.status(200).json(category);
    } catch(error) {
        res.status(400).json({ error: error.message });
    };
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
        .then(() =>  res.json(item));
};

export const editMenuItemById = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'id is not valid' });
    };

    const category = await Category.findOne({"content._id": id});

    if(!category)
        return res.status(404).json({ err: 'Item not found' });

    // let item = category.content.id(id);

    const itemIndex = category.content.findIndex(x => x.id == id);
    category.content[itemIndex] = req.body;
    
    category.save()
        .then((item) => {
            res.status(200).json(category.content[itemIndex]);
        }).catch(err => res.status(404).json({ err }));
};