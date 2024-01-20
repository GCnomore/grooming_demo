import IBreed from "./breed.model";
import { IService } from "./store.model";

export default interface IPet {
  type: string;
  name: string;
  breed: IBreed;
  age: number;
  weight: number;
  size: string;
  preferredServices?: IService[];
  trimImg?: string | null;
  trimDesc?: string;
  birthday?: string;
}