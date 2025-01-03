import { Request, Response } from "express";
import { createdResponse, okResponse } from "../utils/successResponses";
import UserModel, { User } from "../models/userModel";
import { BadRequestError, UnauthorizedError } from "../utils/errorResponses";
import bcrypt from "bcryptjs";

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

  static async createUser(req: Request, res: Response) {
    const { email, password, role } = req.body;
    if (!email) 
      throw new BadRequestError("Email is required");
    if (!password)
      throw new BadRequestError("Password is required");

    // Check if the email already exists
    const existingUser = await UserModel.getUserByEmail(email);
    if (existingUser)
      throw new BadRequestError("Email already exists");

    const hashedPassword = bcrypt.hashSync(password, 8);
    const user: User = { email, password: hashedPassword, role: "user" };
    await UserModel.createUser(user);
    return createdResponse(res, "User created successfully");
  };

  static async createAdmin(req: Request, res: Response) {
    const { email, password, role } = req.body;
    if (!email) 
      throw new BadRequestError("Email is required");
    if (!password)
      throw new BadRequestError("Password is required");

    // Check if the email already exists
    const existingUser = await UserModel.getUserByEmail(email);
    if (existingUser)
      throw new BadRequestError("Email already exists");

    // // Check if the user creating the new user is an admin
    // if (req.user.role !== 'admin') {
    //   throw new UnauthorizedError("Only admins can create another admin");
    // }

    // const hashedPassword = bcrypt.hashSync(password, 8); // Uncomment when use hashed password
    const user: User = { email, password: password, role: "admin" };
    await UserModel.createUser(user);
    return createdResponse(res, "Admin created successfully");
  }
};