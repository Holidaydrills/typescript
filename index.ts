import {Controller} from "./controller";
import {AnotherController} from "./AnotherController";
import express, {Request, Response} from "express";
const app = express();
const port = 8000;
const controller = new Controller();
const anotherController = new AnotherController();

app.get('/', (req: Request, res: Response) => {
  // res.send(controller.handleGetRequest());
  res.send(anotherController.baseHandleRequest());
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`)
});