import { Schema } from "mongoose";
import { IUserRes, IUsersAndCount } from "./Schema/userSchema";
import { IPostRes } from "./Schema/postSchema";
import { ILikeCountRes } from "./Schema/likeSchema";

export type ID = Schema.Types.ObjectId

export interface ICoords {
  type: "Point";
  coordinates: [number, number];
}

export interface IUserAddress {
  country: string;
  state: string;
  district: string;
  city: string;
  zip: number;
}

export type AllResTypes = IUserRes | IUserRes[] | IUsersAndCount | IPostRes | IPostRes[] | ILikeCountRes | null;

export interface IApiRes<T extends AllResTypes> {
  status: number;
  message: string;
  data: T;
}