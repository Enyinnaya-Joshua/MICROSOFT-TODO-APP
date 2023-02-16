import { Request, Response } from "express";
import userModel from "../model/user.model";
import mongoose from "mongoose";
import taskModel from "../model/task.model";

export const getTask = async (req: Request, res: Response) => {
  try {
    await taskModel.find();
    res.status(200).json({
      message: "task gotten successfully",
    });
  } catch (error) {
    return res.status(400).json({
      message: "an error occured while getting task",
      data: error,
    });
  }
};

export const createTask = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const user = await userModel.findById(req.params.userID);

    let myDate = Date.now().toLocaleString();

    if (user) {
      const { title, date } = req.body;

      const creatingTask = await taskModel.create({
        title,
        date: date ? date : myDate,
        reminder: "",
        status: false,
        note: "",
      });

      await user?.myday?.push(new mongoose.Types.ObjectId(creatingTask!._id));

      await user?.task?.push(new mongoose.Types.ObjectId(creatingTask!._id));

      user.save();

      return res.status(200).json({
        message: "successful",
        data: creatingTask,
      });
    } else {
      return res.status(404).json({
        message: "user not found",
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "page not found",
    });
  }
};
export const CompleteTask = async (req: Request, res: Response) => {
  try {
    const getUser = await userModel.findById(req.params.userID);

    if (getUser) {
      const completed = await taskModel.findByIdAndUpdate(
        req.params.TaskID,
        {
          status: true,
        },
        {
          new: true,
        }
      );
      return res.status(200).json({
        message: "updated successfully",
        data: completed,
      });
    } else {
      return res.status(400).json({
        message: "Access Denied",
      });
    }
  } catch (err) {
    return res.status(404).json({
      message: "an error occurred While Creating task",
    });
  }
};
export const UnCompleteTask = async (req: Request, res: Response) => {
  try {
    const getUser = await userModel.findById(req.params.userID);

    if (getUser) {
      const completed = await taskModel.findByIdAndUpdate(
        req.params.TaskID,
        {
          status: false,
        },
        {
          new: true,
        }
      );
      return res.status(200).json({
        message: "updated successfully",
        data: completed,
      });
    } else {
      return res.status(400).json({
        message: "Access Denied",
      });
    }
  } catch (err) {
    return res.status(404).json({
      message: "an error occurred While Creating task",
    });
  }
};
