const Task = require('../models/Task.js');

const create = async (req, res, next) => {
    const TaskParams = req.body;
    try {
        const task = await Task.create(TaskParams);
        res.status(201).send(task);
    } catch (err) {
        next();
    }
};

const get = async (req, res, next) => {
    try {
        const tasks = await Task.find();
        res.status(200).send(tasks);
    } catch (err) {
        next();
    }
};

const getByUser = async (req, res, next) => {
    const user = req.params.user;
    try {
        const tasks = await Task.find({ user: user });
        res.status(200).send(tasks);
    } catch (err) {
        next();
    }
};

const edit = async (req, res, next) => {
    const modified = req.body;
    const id = req.params.id;
    try {
        const task = await Task.findByIdAndUpdate(id, modified);
        res.status(200).send(task);
    } catch (err) {
        next();
    }
};

const deleteById = async (req, res, next) => {
    const id = req.params.id;
    try {
        const task = await Task.findByIdAndRemove(id);
        res.status(200).send(task);
    } catch (err) {
        next();
    }
};

const TaskController = {
    create,
    get,
    getByUser,
    edit,
    deleteById
}

module.exports = TaskController;