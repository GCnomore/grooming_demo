import IPet from "./pet.model";

interface IUser {
	_id: string;
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
	emergencyContactName: string;
	emergencyContactPhone: string;
	preferredContactMethod: string;
	email: string;
	contactEmail: string;
	pet: IPet[];
}


export default IUser;