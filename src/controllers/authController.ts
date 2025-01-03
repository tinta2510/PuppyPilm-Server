import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import UserModel from "../models/userModel";
import { okResponse, createdResponse } from "../utils/successResponses";
import { BadRequestError } from "../utils/errorResponses";

const JWT_SECRET = process.env.JWT_SECRET || "tatrungtin";

class AuthController {
  static async login(req: Request, res: Response) {
    const { username, password } = req.body;
    if (!username) 
      throw new BadRequestError("Username is required");
    if (!password)
      throw new BadRequestError("Password is required");
    
    const user = await UserModel.getUserByUsername(username);
    if (!user || !bcrypt.compareSync(password, user.password)) {
      throw new BadRequestError("Invalid username or password");
    }

    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: "1h" });
    return okResponse(res, "Login successful", { token });
  }

  static async logout(req: Request, res: Response) {
    // For stateless JWT, logout can be handled on the client side by deleting the token
    return okResponse(res, "Logout successful");
  }
}

export default AuthController;