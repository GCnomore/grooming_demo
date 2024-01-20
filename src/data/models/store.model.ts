export default interface IStore {
  _id: string;
  name: string;
  address: {
    full: string;
    street: string;
    street2: string;
    city: string;
    state: string;
    zip: string;
  };
  email: string;
  phone: string;
  contactName: string;
  website?: string;
  petLimit: {
    all: boolean;
    limit: number;
  };
  hours: {
    [key: string]: string;
  };
  lat: string;
  lng: string;
  holidays?: string[];
  cereatedAt?: Date;
  updatedAt?: Date;
  extraServices?: IService[]
}

export interface IService {
  name: string;
  description: string;
  price: number;
  isMult: boolean;
}