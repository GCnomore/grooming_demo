import IPet from "./pet.model";

type Pet = Omit<IPet, 'trimImg'>;

export default interface IAppointment {
   date: Date;
   customerEmail: string;
   customerId: string;
   clientId: string;
   pet: Pet[];
   cutStyle?: string[];
   cutImage?: File[];
   services: string[];
 }
