import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface UserPayload {
  id: string;
  email: string;
  model: string;
  verified: boolean;
  // more to be added
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('getting users stuff')
  if (!req.session?.jwt) {
    console.log('jwt session is empty')
    return next();
  }

  try {
    const payload = jwt.verify(
      req.session.jwt,
      process.env.JWT_KEY!
    ) as UserPayload;
    console.log('currentUser is set')
    req.currentUser = payload;
  } catch (err) {}

  next();
};
