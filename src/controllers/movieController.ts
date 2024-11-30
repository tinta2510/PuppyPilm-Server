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
      mpaRating: req.body.mpaRating,
      description: req.body.description,
      releasedYear: req.body.releasedYear,
      studioId: req.body.studioId
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
      mpaRating: req.body.mpaRating,
      description: req.body.description,
      releasedYear: req.body.releasedYear,
      studioId: req.body.studioId
    }
    const id = parseInt(req.params.id);
    await MovieModel.updateMovie(id, movie);
    return okResponse(res, "Update successfully");
  }
  static async filterMovie(req: Request, res: Response) {
    const title: string | null = typeof req.query.title === 'string' ? req.query.title : null;
    const age: number | null = typeof req.query.age === 'string' ? parseInt(req.query.age) : null;
    const rating: number | null = typeof req.query.rating === 'string' ? parseInt(req.query.rating) : null;
    const releasedYear: number | null = typeof req.query.releasedYear === 'string' ? parseInt(req.query.releasedYear) : null;
    const countryName: string | null = typeof req.query.countryName === 'string' ? req.query.countryName : null;
    const result = await MovieModel.filterMovie(title, age, rating, releasedYear, countryName);
    return okResponse(res, "Get movies by condition successfully", result);
  }
};

export default MovieController; 