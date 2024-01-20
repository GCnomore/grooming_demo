import _ from 'lodash';

import IPet from "./pet.model";

export default interface ICustomer {
  firstName: string;
  lastName: string;
  address: {
    full: string;
    street: string;
    street2: string;
    city: string;
    state: string;
    zip: string;
  };
  phone: string;
  email: string;
  contactEmail: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  preferredContactMethod: string;
  pet: IPet[];
}

export interface IRegisterCustomer extends Omit<ICustomer, 'pet'> {
  password: string;
  passwordConfirm: string;
  pet?: Partial<IPet>[];
}

export const toCustomer = (data: { [key:string]: any }): ICustomer => {
  const customer: ICustomer = {
    firstName: data.firstName ?? '',
    lastName: data.lastName ?? '',
    address: {
      street: data.street ?? '',
      street2: data.street2 ?? '',
      city: data.city ?? '',
      state: data.state ?? '',
      zip: data.zip ?? '',
      full: `${data.street} ${data.street2}, ${data.city}, ${data.state} ${data.zip}`,
    },
    phone: data.phone ?? '',
    email: data.email ?? '',
    contactEmail: data.email ?? '',
    emergencyContactName: data.emergencyContactName ?? '',
    emergencyContactPhone: data.emergencyContactPhone ?? '',
    preferredContactMethod: data.preferredContactMethod ?? '',
    pet: data.pet ?? [],
  };
  return customer;
}

export const toRegisterCustomer = (data: { [key:string]: any }): IRegisterCustomer => {
  let address: {
    street: string,
    street2: string,
    city: string,
    state: string,
    zip: string,
    full: string,
  };

  if(data.address && data.address.street && data.address.city && data.address.state && data.address.zip && data.address.full) { 
    address = {
      street: data.address.street,
      street2: data.address.street2,
      city: data.address.city,
      state: data.address.state,
      zip: data.address.zip,
      full: data.address.full,
    };
  } else {
    address = {
      street: data.street ?? '',
      street2: data.street2 ?? '',
      city: data.city ?? '',
      state: data.state ?? '',
      zip: data.zip ?? '',
      full: `${data.street} ${data.street2}, ${data.city}, ${data.state} ${data.zip}`,
    }
  }


  const customer: IRegisterCustomer = {
    password: data.password ?? '',
    passwordConfirm: data.passwordConfirm ?? '',
    firstName: data.firstName ?? '',
    lastName: data.lastName ?? '',
    address,
    phone: data.phone ?? '',
    email: data.email ?? '',
    contactEmail: data.email ?? '',
    emergencyContactName: data.emergencyContactName ?? '',
    emergencyContactPhone: data.emergencyContactPhone ?? '',
    preferredContactMethod: data.preferredContactMethod ?? '',
    pet: data.pet ?? [],
  };
  console.log('datatata', data);
  console.log('customercustomer', customer)
  return customer;
}