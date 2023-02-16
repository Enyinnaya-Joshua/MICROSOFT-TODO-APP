import { Request, Response } from "express";
import userModel from "../model/user.model";
import mongoose from "mongoose";

export const getAlluser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const users = await userModel.find();
    return res.status(200).json({
      message: "users gotten successfully",
      data: users,
    });
  } catch (error) {
    return res.status(400).json({
      message: "an error occured",
    });
  }
};

export const singleUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const user = await userModel.findById(req.params.id).populate([
      {
        path: "myday",
        options: {
          createdAt: -1,
        },
      },
      {
        path: "task",
      },
    ]);
    return res.status(200).json({
      message: "user gotten successfully",
      data: user,
    });
  } catch (error: any) {
    console.log(error);

    return res.status(400).json({
      message: "an error occured in singleUser",
      data: error.message,
    });
  }
};

export const Register = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { name, email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (user) {
      return res.status(400).json({
        message: "user already exit with this email",
      });
    } else {
      const regUser = await userModel.create({
        email,
        password,
        name,
      });
    }

    return res.status(200).json({
      message: "user successfully registered",
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      message: "an error occured",
    });
  }
};

export const Login = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { email } = req.body;

    const user = await userModel.findOne({ email });

    if (user) {
      return res.status(200).json({
        message: `welcome ${user.name}`,
        data: user,
      });
    } else {
      return res.status(401).json({
        message: "user with this email doesn't exist",
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: "an error occured",
      data: error,
    });
  }
};
