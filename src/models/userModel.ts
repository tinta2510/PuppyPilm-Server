import pool from "../config/dbConfig";

export interface User {
  id?: number;
  email: string;
  password: string;
  displayedName?: string;
  houseNumber?: string;
  street?: string;
  district?: string;
  city?: string;
  dob?: Date;
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

  static async getUserByEmail(email: string): Promise<User | null> {
    const result = await pool.query(`SELECT * FROM "USER" WHERE email = $1`, [email]);
    return result.rows[0] || null;
  }

  static async createUser(user: User) {
    await pool.query(
      `INSERT INTO "USER" (email, password, displayed_name, house_number, street, district, city, dob, role) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
      [user.email, user.password, user.displayedName, user.houseNumber, user.street, user.district, user.city, user.dob, user.role]
    );
  }
};