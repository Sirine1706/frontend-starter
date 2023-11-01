import { IUser } from "./models.d";

export declare interface JWTState {
  isAuthenticated?: boolean;
  isInitialised?: boolean;
  user?: IUser | null;
  token?: string | null;
  status?: string;
}

export declare interface User extends Document {
  name: string;
  _id: string;
  lastName: string;
  email?: string;
  password: string;
  profilePicUrl?: string;
  roles?: { code: "ADMIN" | "USER" }[];
  verified?: boolean;
  verificationCodeExpiredAt?: Date | null | undefined;
  status?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export declare interface DecodedToken {
  [key: string]: string | number | date;
}

export declare type LoginPromise = () => Promise<void>;
