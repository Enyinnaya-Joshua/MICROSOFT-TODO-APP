import mongoose, { Document, model, Schema } from "mongoose";
import { task } from "../allinterface";

interface userData {
  name: string;
  email: string;
  password: string;
  myday: any[];
  important: task[];
  planned: task[];
  assigned: task[];
  task: any[];
}

interface myData extends userData, Document {}

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "please enter your name"],
    },
    email: {
      type: String,
      required: [true, "please enter your email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "please enter your password"],
      minlength: 8,
    },
    myday: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "tasks",
      },
    ],
    important: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "tasks",
      },
    ],
    planned: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "tasks",
      },
    ],
    assigned: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "tasks",
      },
    ],
    task: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "tasks",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const userData = model<myData>("todoUser", userSchema);

export default userData;
