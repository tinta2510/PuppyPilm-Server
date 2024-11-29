import pool from "../config/dbConfig";

export interface Movie {
  title: string,
  country: string,
  budget: number,
  mpa_rating: string,
  description: string,
  released_year: number,
  studio_id: number
}

class MovieModel {
  static async filterMovieByAwards () {
    const result = await pool.query(`SELECT * FROM get_award_win_ratio();`);
    return result.rows;
  }
  static async insertMovie (movie: Movie) {
    await pool.query(
      `CALL insert_movie($1, $2, $3, $4, $5, $6, $7);`,
      [movie.title, movie.country, movie.budget, movie.mpa_rating, movie.description,
        movie.released_year, movie.studio_id]
    )
  }
  static async updateMovie (id: number, movie: Partial<Movie>) {
    await pool.query(
      `CALL update_movie($1, $2, $3, $4, $5, $6, $7, $8);`,
      [id, movie.title, movie.country, movie.budget, movie.mpa_rating, 
        movie.description, movie.released_year, movie.studio_id]
    )
  }
  static async deleteMovie (id: number) {
    await pool.query(`CALL delete_movie($1);`, [id]);
  }
};

export default MovieModel;

