import pool from "../config/dbConfig";

export interface Movie {
  title: string,
  country: string,
  budget: number,
  mpaRating: string,
  description: string,
  releasedYear: number,
  studioId: number
}

class MovieModel {
  static async getAllMovies() {
    const result = await pool.query(`SELECT * FROM movie;`)
    return result.rows;
  }
  static async filterMovieByAwards () {
    const result = await pool.query(`SELECT * FROM get_award_win_ratio();`);
    return result.rows;
  }
  static async insertMovie (movie: Movie) {
    await pool.query(
      `CALL insert_movie($1, $2, $3, $4, $5, $6, $7);`,
      [movie.title, movie.country, movie.budget, movie.mpaRating, movie.description,
        movie.releasedYear, movie.studioId]
    )
  }
  static async updateMovie (id: number, movie: Partial<Movie>) {
    await pool.query(
      `CALL update_movie($1, $2, $3, $4, $5, $6, $7, $8);`,
      [id, movie.title, movie.country, movie.budget, movie.mpaRating, 
        movie.description, movie.releasedYear, movie.studioId]
    )
  }
  static async deleteMovie (id: number) {
    await pool.query(`CALL delete_movie($1);`, [id]);
  }
  static async filterMovie (
    title: string | null, 
    age: number | null, 
    rating: number | null,
    releasedYear: number | null,
    countryName: string | null
  ) {
    const result = await pool.query(
      `SELECT *
      FROM call_get_movies_by_conditions($1, $2, $3, $4, $5)`, 
      [title, age, rating, releasedYear, countryName]
    )
    return result.rows;
  }
};

export default MovieModel;

