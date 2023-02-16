import mongoose from "mongoose";

type task = {
  title: string;
  reminder?: string;
  note?: string;
  status: string;
  date?: string;
};

interface task2 {
  title: string;
  reminder?: string;
  note?: string;
  status: string;
  date?: string;
}

export { task, task2 };
