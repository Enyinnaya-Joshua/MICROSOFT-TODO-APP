import express, { Request, Response, Application } from "express";
import cors from "cors";
import "../config/db";
import taskRoute from "../route/task.route";
import userRoute from "../route/user.route";

const port: number = 4000;
const app: Application = express();

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "welcome to my Api",
  });
});

app.use("/api", userRoute);
app.use("/api/task", taskRoute);

app.listen(port, () => {
  console.log(`server is listen to: ${port}`);
});
