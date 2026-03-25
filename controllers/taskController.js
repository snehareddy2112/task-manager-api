import asyncHandler from "express-async-handler";
import Task from "../models/Task.js";

export const createTask = asyncHandler(async (req, res) => {
  const { title, description } = req.body;

  if (!title) {
    res.status(400);
    throw new Error("Title is required");
  }

  const task = await Task.create({
    title,
    description,
    userId: req.user._id,
  });

  res.status(201).json({
    status: "success",
    data: task,
    message: "Task created",
  });
});

export const getTasks = asyncHandler(async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 5;
  const skip = (page - 1) * limit;

  const tasks = await Task.find({ userId: req.user._id })
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: -1 });

  res.json({
    status: "success",
    data: tasks,
    message: "Tasks fetched",
  });
});

export const getTaskById = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(404);
    throw new Error("Task not found");
  }

  if (task.userId.toString() !== req.user._id.toString()) {
    res.status(403);
    throw new Error("Access denied");
  }

  res.json({
    status: "success",
    data: task,
    message: "Task fetched",
  });
});

export const updateTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(404);
    throw new Error("Task not found");
  }

  if (task.userId.toString() !== req.user._id.toString()) {
    res.status(403);
    throw new Error("Access denied");
  }

  task.title = req.body.title || task.title;
  task.description = req.body.description || task.description;
  task.status = req.body.status || task.status;

  const updatedTask = await task.save();

  res.json({
    status: "success",
    data: updatedTask,
    message: "Task updated",
  });
});

export const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(404);
    throw new Error("Task not found");
  }

  if (task.userId.toString() !== req.user._id.toString()) {
    res.status(403);
    throw new Error("Access denied");
  }

  await task.deleteOne();

  res.json({
    status: "success",
    message: "Task deleted",
  });
});