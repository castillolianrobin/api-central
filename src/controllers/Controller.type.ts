import type { RequestHandler } from "express";

export interface ResourceController {
  list?: RequestHandler;
  get?: RequestHandler;
  add?: RequestHandler;
  update?: RequestHandler;
  delete?: RequestHandler;
}