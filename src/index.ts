import express, { Application, Request, Response } from "express";

const app: Application = express();

app.get("/", async (_req: Request, res: Response) => {
  return res.status(200).json({
    message: "Hello World!",
  });
});

export const listen = app.listen(8080);

export default app;
