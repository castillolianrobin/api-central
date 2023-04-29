import { Request, Response } from "express";
import { ResourceController } from "./Controller.type";

export class UserController implements ResourceController {
  get(req: Request, res: Response) {
    res.send('get');
  }

  list(req: Request, res: Response) {
    res.send('list');
  }
}