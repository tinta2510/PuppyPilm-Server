import pool from "../config/dbConfig";

export default class UserModel {
  static async getRankings(
    bronzePoint: number = 1, 
    silverPoint: number = 5, 
    goldPoint: number = 10
  ) {
    const result = await pool.query(
      `SELECT * FROM calculate_points($1, $2, $3);`,
      [bronzePoint, silverPoint, goldPoint]
    );
    return result.rows;
  }
};