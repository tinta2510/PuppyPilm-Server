import { Request, Response } from "express";
import MovieModel from "../models/movieModel";
import { okResponse } from "../utils/successResponses";

class MovieController {
  static async filterMovie(req: Request, res: Response) {
    const result = await MovieModel.filterMovie();
    return okResponse(res, "Query nominated and award-winning movies.", result);
  }
};

export default MovieController; 