import pool from "../config/dbConfig";

export interface User {
  id?: number;
  username: string;
  password: string;
  role: 'admin' | 'user';
}

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

  static async getUserByUsername(username: string): Promise<User | null> {
    const result = await pool.query(`SELECT * FROM "USER" WHERE username = $1`, [username]);
    return result.rows[0] || null;
  }

  static async createUser(user: User) {
    await pool.query(
      `INSERT INTO "USER" (username, password, role) VALUES ($1, $2, $3)`,
      [user.username, user.password, user.role]
    );
  }
};