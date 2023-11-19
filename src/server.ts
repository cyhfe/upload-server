import express, { NextFunction, Response, Request } from "express";
import router from "./router";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  res.status(500);
  res.json({ message: `had an error: ${err}` });
});

export default app;
