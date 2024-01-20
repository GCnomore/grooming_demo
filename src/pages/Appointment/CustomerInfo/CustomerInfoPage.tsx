import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FieldValues, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Dropdown from "react-bootstrap/Dropdown";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

import SubmitButton from "../../../components/SubmitButton/SubmitButton";
import LabelInput from "../../../components/LabelInput/LabelInput";
import { setCustomer, setPet, setTotalPetCount } from "../../../data/redux/appointmentSlice";
import { RootDispatch, RootState } from "../../../data/redux/store";
import * as Styled from "./CustomerInfo.styled";
import PageLayout from "../../../components/PageLayout/PageLayout";
import FadeInWrapper from "../../../components/FadeInWrapper/FadeInWrapper";
import ICustomer from "../../../data/models/customer.model";
import AppHeader from "../../../components/AppHeader/AppHeader";
import CustomerInfoBg from '../../../assets/imgs/backgrounds/bg.webp'
import STYLE from "../../../style";

const formSchema = Yup.object().shape({
	firstName: Yup.string()
		.required('This field is required'),
	lastName: Yup.string()
		.required('This field is required'),
	street: Yup.string()
		.required('This field is required'),
	street2: Yup.string()
		.optional(),
	city: Yup.string()
		.required('This field is required'),
	state: Yup.string()
		.required('This field is required'),
	zip: Yup.string()
		.required('This field is required')
		.matches(/^\d{5}(-\d{4})?$/, 'Please enter a valid zip code'),
	phone: Yup.string()
		.required('This field is required')
		.matches(/^\d{10}$/, 'Please enter a valid phone number'),
	email: Yup.string()
		.email('Please enter a valid email')
		.required('This field is required'),
	emergencyContactName: Yup.string()
		.required('This field is required'),
	emergencyContactPhone: Yup.string()
		.required('This field is required')
		.matches(/^\d{10}$/, 'Please enter a valid phone number'),
	preferredContactMethod: Yup.string()
		.optional(),
});

const CustomerInfoPage: React.FC = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useDispatch<RootDispatch>();

	const totalPetCount = useSelector((state: RootState)=> state.slice.totalPetCount);
	const customer = useSelector((state: RootState)=> state.slice.customer);
	const user = useSelector((state: RootState)=> state.slice.user);

	const [phoneNumber, setPhoneNumber] = useState("");
	const [emgPhonenumber, setEmgPhoneNumber] = useState("");
	const [isPetCountChanged, setIsPetCountChanged] = useState(false);
	
	const { trigger, register, handleSubmit, formState: { errors }, setValue } = useForm({mode: "all", resolver: yupResolver(formSchema)});

	useEffect(()=> {
		const isEditPage = location.pathname.includes('edit');
		if(user && !isEditPage) {
			setValue('firstName', user.firstName);
			setValue('lastName', user.lastName);
			setValue('street', user.address.street);
			setValue('street2', user.address.street2);
			setValue('city', user.address.city);
			setValue('state', user.address.state);
			setValue('zip', user.address.zip);
			setValue('phone', user.phone);
			setValue('email', user.email);
			setValue('emergencyContactName', user.emergencyContactName);
			handlePhoneInput('phone', user.phone);
			handlePhoneInput('emg', user.emergencyContactPhone);
			setValue('preferredContactMethod', user.preferredContactMethod);
		}

		if((customer && isEditPage) || customer) {
			setValue('firstName', customer.firstName);
			setValue('lastName', customer.lastName);
			setValue('street', customer.address.street);
			setValue('street2', customer.address.street2);
			setValue('city', customer.address.city);
			setValue('state', customer.address.state);
			setValue('zip', customer.address.zip);
			setValue('phone', customer.phone);
			setValue('email', customer.email);
			setValue('emergencyContactName', customer.emergencyContactName);
			handlePhoneInput('phone', customer.phone);
			handlePhoneInput('emg', customer.emergencyContactPhone);
			setValue('preferredContactMethod', customer.preferredContactMethod);
		}
	}, [])

	const handleNext = (data: FieldValues) => {
		const isEditPage = location.pathname.includes('edit');
		const customerData: Partial<ICustomer> = {...data};

		dispatch(setCustomer(customerData));

		if(isPetCountChanged) {
			dispatch(setPet(null));
		}

		if(isEditPage && !isPetCountChanged) {
			return navigate('/confirm', {replace: true});
		}

		if(totalPetCount > 1) {
			navigate('/service-detail/1');
		} else {
			navigate('/service-detail');
		}
	};

	const setContactMethod = (e: any) => {
		setValue('preferredContactMethod', e.target.value);
	};

	const PetCountBtn = React.forwardRef(({ onClick }: any, ref: any)=> (
		<button 
			ref={ref}
			onClick={(e) => {
				e.preventDefault();
				onClick(e);
			}}
		>
			{totalPetCount > 0 ? totalPetCount : 'Select' }
		</button>
	));

	const handlePhoneInput = (type: 'phone' | 'emg', value: string) => {
		value = value.split('-').join('');

		if(new RegExp(/^\d+$/).test(value)) {
			if(value.length > 10) {
				value = `${value.slice(0, 3)}-${value.slice(3, 6)}-${value.slice(6, 10)}`;
			} else if(value.length > 6) {
				value = `${value.slice(0, 3)}-${value.slice(3, 6)}-${value.slice(6)}`;
			} else if(value.length > 3) {
				value = `${value.slice(0, 3)}-${value.slice(3)}`;
			}
		}

		if(type === 'emg') {
			if(value !== emgPhonenumber) {
				trigger('emergencyContactPhone');
				setEmgPhoneNumber(value);
				setValue('emergencyContactPhone', value.split('-').join(''));
			}
		} else {
			if(value !== phoneNumber) {
				trigger('phone');
				setPhoneNumber(value);
				setValue('phone', value.split('-').join(''));
			}
		}
	}

	const handlePetCountChange = (i: number) => {
		const isEditPage = location.pathname.includes('edit');
		if(isEditPage) {
			setIsPetCountChanged(true);
		}
		dispatch(setTotalPetCount(i))
	}

	return (
		<PageLayout>
			<section className="left-section">
				<FadeInWrapper>
				<AppHeader title="Customer Information" />
					<Styled.FormContainer className="content" id="hook-form" onSubmit={handleSubmit(handleNext)}>
					<Styled.NameSection>
						<LabelInput role='first-name' label="*First Name" error={errors.firstName?.message}>
							<input {...register("firstName")} placeholder="First Name" type="text" name="firstName"/>
						</LabelInput>
						<LabelInput role='last-name' label="*Last Name" error={errors.lastName?.message}>
							<input {...register("lastName")} placeholder="Last Name" type="text" name="lastName"/>
						</LabelInput>
					</Styled.NameSection>

					<Styled.AddressSection>
						<div>
							<LabelInput containerClass="mb-2" role='street-address' label="*Street Address" error={errors.street?.message}>
								<input {...register("street")} placeholder="Street Address" type="text" name="street"  />
							</LabelInput>
							<LabelInput role='street-address' label="Street Address 2">
								<input {...register("street2")} placeholder="Street Address 2" type="text" name="street2" />
							</LabelInput>
						</div>
						<div className="mb-2">
							<LabelInput role='city' label="*City" error={errors.city?.message}>
								<input {...register("city")} placeholder="City" type="text" name="city"/>
							</LabelInput>
							<LabelInput role='state' label="*State" error={errors.state?.message}>
								<input {...register("state")} placeholder="State" type="text" name="state"/>
							</LabelInput>
						</div>
						<div>
							<LabelInput role='zip-code' label="*Zip Code" error={errors.zip?.message}>
								<input {...register("zip")} placeholder="Zip Code" type="text" name="zip"/>
							</LabelInput>
						</div>
					</Styled.AddressSection>

					<Styled.ContactSection>
						<LabelInput role='phone' label="*Phone Number" error={errors.phone?.message}>
							<input placeholder="Phone Number" type="text" name="phone" value={phoneNumber} onChange={(e: any)=> handlePhoneInput('phone', e.target.value)}/>
						</LabelInput>
						<LabelInput role='email' label="*Email Address" error={errors.email?.message}>
							<input {...register("email")} placeholder="Email Address" type="text" name="email"/>
						</LabelInput>
					</Styled.ContactSection>

					<Styled.EmergencyContactSection>
						<LabelInput role='e-contact' label="*Emergency Contact Name" error={errors.emergencyContactName?.message}>
							<input {...register("emergencyContactName")} placeholder="Emergency Contact Name" type="text" name="emergencyContactName"/>
						</LabelInput>
						<LabelInput role='e-phone' label="*Emergency Contact Phone Number" error={errors.emergencyContactPhone?.message}>
							<input placeholder="Emergency Contact Phone Number" type="text" name="emergencyContactPhone" value={emgPhonenumber} onChange={(e: any)=> handlePhoneInput('emg', e.target.value)}/>
						</LabelInput>
					</Styled.EmergencyContactSection>

					<Styled.ContactMethodSection>
						<p>How should we contact you?</p>
						<div>
							<div>
								<p>Phone</p>
								<input onClick={setContactMethod} {...register("preferredContactMethod")} name='contact-method' type="radio" defaultChecked={customer?.preferredContactMethod === 'phone' || !customer?.preferredContactMethod} value="phone"/>
							</div>
							<div>
								<p>Text Message</p>
								<input onClick={setContactMethod} {...register("preferredContactMethod")} name='contact-method' type="radio" defaultChecked={customer?.preferredContactMethod === 'sms'} value="sms"/>
							</div>
						</div>
					</Styled.ContactMethodSection>

					<Styled.PetCountContainer>
						<span>*How Many Pets?</span>
						<Dropdown> 
							<DropdownToggle as={PetCountBtn} />

							<DropdownMenu color={STYLE.MAIN_BG_COLOR}>
							{Array(10).fill(1).map((_, i)=> i + 1).map((i)=> 
								<DropdownItem key={`pet-count-${i}`} onClick={()=> handlePetCountChange(i)}>
									{ i }
								</DropdownItem>
							)}
							</DropdownMenu>
						</Dropdown>
					</Styled.PetCountContainer>

					<SubmitButton disabled={Object.keys(errors).length !== 0 || totalPetCount === 0} />
					</Styled.FormContainer>
				</FadeInWrapper>
			</section>
			<Styled.RightSection className="right-section" imgSrc={CustomerInfoBg} />
		</PageLayout>
	);
};

export default CustomerInfoPage;
