import mongoose, { model, Document, Schema } from "mongoose";
import { task2 } from "../allinterface";

interface NewTask extends task2, Document {}

const TaskSchema = new Schema(
  {
    title: {
      type: String,
    },
    date: {
      type: String,
    },
    remainder: {
      type: String,
    },
    note: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const taskModel = model<NewTask>("tasks", TaskSchema);

export default taskModel;
