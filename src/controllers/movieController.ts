import { Request, Response } from "express";
import MovieModel, { Movie } from "../models/movieModel";
import { createdResponse, okResponse } from "../utils/successResponses";

class MovieController {
  static async filterMovieByAwards(req: Request, res: Response) {
    const result = await MovieModel.filterMovieByAwards();
    return okResponse(res, "Query nominated and award-winning movies.", result);
  }
  static async insertMovie(req: Request, res: Response) {
    const movie: Movie = {
      title: req.body.title,
      country: req.body.country,
      budget: req.body.budget,
      mpa_rating: req.body.mpa_rating,
      description: req.body.description,
      released_year: req.body.released_year,
      studio_id: req.body.studio_id
    }
    await MovieModel.insertMovie(movie);
    return createdResponse(res, "Insert successfully");
  }
  static async deleteMovie(req: Request, res: Response) {
    await MovieModel.deleteMovie(parseInt(req.params.id))
    return okResponse(res, "Delete successfully");
  }
  static async updateMovie(req: Request, res: Response) {
    const movie: Movie = {
      title: req.body.title,
      country: req.body.country,
      budget: req.body.budget,
      mpa_rating: req.body.mpa_rating,
      description: req.body.description,
      released_year: req.body.released_year,
      studio_id: req.body.studio_id
    }
    const id = parseInt(req.params.id);
    await MovieModel.updateMovie(id, movie);
    return okResponse(res, "Update successfully");
  }
};

export default MovieController; 