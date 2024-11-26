import pool from "../config/dbConfig";

class MovieModel {
  static async filterMovie () {
    const result = await pool.query(`SELECT * FROM get_award_win_ratio();`);
    return result.rows;
  }
};

export default MovieModel;

