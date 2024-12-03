import { Request, Response } from "express";
import { createdResponse, okResponse } from "../utils/successResponses";
import UserModel from "../models/userModel";
import { BadRequestError } from "../utils/errorResponses";

export default class UserController {
  static async getRankings(req: Request, res: Response) {
    const bronzePoint: number = 
      typeof req.query.bronzePoint === 'string' ? 
      parseInt(req.query.bronzePoint) : 1;
    const silverPoint: number = 
      typeof req.query.silverPoint === 'string' ? 
      parseInt(req.query.silverPoint) : 5; 
    const goldPoint: number = 
      typeof req.query.goldPoint === 'string' ? 
      parseInt(req.query.goldPoint) : 10;

    const result = await UserModel.getRankings(bronzePoint, silverPoint, goldPoint);
    return okResponse(
      res, 
      "Query user's ranking successfully.", 
      result, 
      { bronzePoint, silverPoint, goldPoint }
    );
  };
};