import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Select from 'react-dropdown-select';
import { FieldValues, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import _ from 'lodash';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import * as Styled from './PetInformation.styled';
import PageLayout from '../../../components/PageLayout/PageLayout';
import ServiceDetailBg from '../../../assets/imgs/backgrounds/service_detail.webp';
import AppHeader from '../../../components/AppHeader/AppHeader';
import SubmitButton from '../../../components/SubmitButton/SubmitButton';
import FadeInWrapper from '../../../components/FadeInWrapper/FadeInWrapper';
import PetSize from '../../../assets/icons/dog.webp';
import { editPet, setBreeds, setCurrentPetCount, addPet } from '../../../data/redux/appointmentSlice';
import { RootDispatch, RootState } from '../../../data/redux/store';
import ImageUpload from '../../../components/ImageUpload/ImageUpload';
import LabelInput from '../../../components/LabelInput/LabelInput';
import IPet from '../../../data/models/pet.model';
import IBreed from '../../../data/models/breed.model';
import { IService } from '../../../data/models/store.model';
import demo_breeds from '../../../assets/jsons/breeds.json';

const formSchema = Yup.object().shape({
	name: Yup.string()
		.required('This field is required'),
	age: Yup.number().min(1).integer().typeError('Numbers only')
		.required('This field is required'),
   size: Yup.string()
      .optional(),
	birthday: Yup.string().matches(/^\d{2}\/\d{2}\/\d{4}$/, { excludeEmptyString: true, message: "Please use MM/DD/YYYY format" })
		.optional(),
   weight: Yup.number().positive().typeError('Numbers only')
      .required('This field is required'),
	breed: Yup.object({ _id: Yup.string(), name: Yup.string() })
		.required('This field is required'),
	trimDesc: Yup.string().min(2, 'Upload image or describe in words')
		.optional(),
   preferredServices: Yup.object().optional()
});

type PetForm = Yup.InferType<typeof formSchema>;
type PetFromProps = keyof PetForm;

const PetInformationPage: React.FC = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch<RootDispatch>();

   const { count } = useParams();
   const location = useLocation();
   
   const currentPetCount = Number(location.pathname.split('/').slice(-1)) > 0 ? 
                           Number(location.pathname.split('/').slice(-1)) : 
                           1;

   const breeds = useSelector((state: RootState) => state.slice.breeds);
   const customer = useSelector((state: RootState) => state.slice.customer);
   const totalPetCount = useSelector((state: RootState) => state.slice.totalPetCount);
   const user = useSelector((state: RootState)=> state.slice.user);
   const groomingShop = useSelector((state: RootState)=> state.slice.groomingShop);

   const [trimImg, setTrimImg] = useState<string | null | undefined>(null);
   const [petBreed, setPetBreed] = useState<IBreed[]>([]);
   const [petSize, setPetSize] = useState<string>('');
   const [selectedServices, setSelectedServices] = useState<IService[]>([]);

   const formRef = useRef<HTMLFormElement | null>(null);
   const leftSectionRef = useRef<HTMLElement>(null);
   
   const { register, watch, getValues, setValue, clearErrors, reset, trigger, formState: { errors } } = useForm({ mode: 'all', resolver: yupResolver(formSchema) });

   useEffect(()=> {
      dispatch(setCurrentPetCount(count ? Number(count) : 1));
      dispatch(setBreeds(demo_breeds));

      if(customer && customer?.pet.length > 0) {
         setValue('name', customer.pet[0].name);
         setValue('age', customer.pet[0].age);
         setValue('birthday', customer.pet[0].birthday);
         setValue('weight', customer.pet[0].weight);
         setValue('breed', customer.pet[0].breed);
         setPetBreed([customer.pet[0].breed]);
         setValue('trimDesc', customer.pet[0].trimDesc);
         setSelectedServices(customer.pet[0].preferredServices ?? []);
         setTrimImg(customer.pet[0].trimImg)
      }
   }, []);

   // when user moves on to next pet's form
   useEffect(()=> {
      if(currentPetCount > 1) {
         resetForm();
      }

      const isEditPage = location.pathname.includes('edit');
      if(user && !isEditPage) {
         if(totalPetCount > 1) {
            setValue('name', user.pet[currentPetCount - 1]?.name ?? '');
            setValue('age', user.pet[currentPetCount - 1]?.age ?? '');
            setValue('birthday', user.pet[currentPetCount - 1]?.birthday ?? '');
            setValue('weight', user.pet[currentPetCount - 1]?.weight ?? '');
            setValue('breed', user.pet[currentPetCount - 1]?.breed ?? '');
            setPetBreed([user.pet[currentPetCount - 1]?.breed ?? '']);
         } else {
            setValue('name', user.pet[0].name);
            setValue('age', user.pet[0].age);
            setValue('birthday', user.pet[0].birthday);
            setValue('weight', user.pet[0].weight);
            setValue('breed', user.pet[0].breed);
            setPetBreed([user.pet[0].breed]);
            setTrimImg(user.pet[0].trimImg);
         }
      }

   }, [currentPetCount]);

   // when user move on to either previous or next form
   useEffect(()=> {
      leftSectionRef.current?.scrollTo(0, 0);

      if(count && customer?.pet[Number(count) - 1]) {
         const data = customer?.pet[Number(count) - 1];
         const values: PetForm = {
            name: data.name,
            age: data.age,
            birthday: data.birthday,
            weight: data.weight,
            size: data.size,
            trimDesc: data.trimDesc,
            preferredServices: data.preferredServices,
            breed: data.breed,
         };

         setPetBreed([data.breed]);
         // @ts-ignore
         Object.keys(values).forEach((key: PetFromProps)=>{
            setValue(key, values[key]);
         });
      }
   }, [count]);

   // listen for pet weight to check corresponding pet size
   useEffect(()=> {
      setPetSize(calcPetSize());
   }, [watch('weight')]);

   const resetForm = (): void => {
      reset();
      setTrimImg(null);
      setValue('trimDesc', '');
      setPetBreed([]);
   };

   const calcPetSize = (): string => {
      const weight: number = customer?.pet[currentPetCount - 1]?.weight ?? Number(getValues().weight);
      switch (true) {
         case weight < 12:
            setValue('size', 'xs');
            return 'xs';

         case weight >= 12 && weight <= 25:
            setValue('size', 'sm');
            return 'sm';

         case weight > 25 && weight <= 50:
            setValue('size', 'md');
            return 'md';

         case weight > 50 && weight <= 100:
            setValue('size', 'lg');
            return 'lg';

         case weight > 100:
            setValue('size', 'xl');
            return 'xl';

         default:
            return '';
      }
   };

   const handlePetBreedSelect = (values: IBreed[]) => {
      setPetBreed(values);
      setValue('breed', values[0]);
   }

   const handleNext = (e: React.MouseEvent): void => {
      e.preventDefault();
      const data: FieldValues = getValues();
      const isEditPage = location.pathname.includes('edit');
      const pet: IPet = {
         type: 'dog',
         name: data.name,
         age: data.age,
         birthday: data.birthday,
         weight: data.weight,
         size: data.size,
         breed: petBreed[0],
         trimImg,
         trimDesc: data.trimDesc,
         preferredServices: selectedServices
      };

      if(isEditPage) {
         dispatch(editPet({pet, index: currentPetCount - 1}));
         return navigate('/confirm', {replace: true});
      }

      if(customer && customer.pet.filter((p)=> p.name === pet.name).length > 0) {
         const petIndex = customer.pet.findIndex((p)=> p.name === pet.name);
         dispatch(editPet({pet, index: petIndex}));
      } else {
         dispatch(addPet(pet));
      }

      if(currentPetCount < totalPetCount) {
         dispatch(setCurrentPetCount(currentPetCount + 1));
         navigate('/service-detail/' + (currentPetCount + 1).toString());
         clearErrors();
         formRef.current?.scrollTo(0, 0);
      } else {
         navigate('/confirm');
      }
   };

   const handleCreateNew = (e: {name: string, _id: string}): void => {
      setPetBreed([e]);
      setValue('breed', e);
   };

   const handleImageUploadError = (): void => {
      alert('You can only upload image files');
   };

   const handleBackClick = () => {
      navigate(-1);
      formRef.current?.scrollTo(0, 0);
   }

   const renderServices = () => {
      return groomingShop?.extraServices?.map((item)=> {
         const selected = selectedServices.filter((s)=> s.name === item.name).length > 0;
         return (
            <Styled.ServiceCard key={_.uniqueId()} selected={selected} onClick={()=> handleServiceSelect(item)}>
               <div>
                  <p>{item.name}</p>
                  <p>${item.price}</p>
               </div>
               <p>{item.description}</p>
            </Styled.ServiceCard>
      )})
   }

   const handleServiceSelect = (item: IService) => {
      if(selectedServices.filter((s)=>s.name === item.name).length > 0) {
         const updatedSelection = selectedServices.filter((s)=>s.name !== item.name);
         setSelectedServices(updatedSelection);
      } else {
         setSelectedServices([...selectedServices, item]);
      }
   }

   return (
      <PageLayout>
         <section className='left-section' ref={leftSectionRef}>
         <FadeInWrapper>
            <AppHeader title='Pet Information' onBackClick={handleBackClick} />
               <Styled.Form ref={formRef} className='content' id='hook-form'>
                  {/* Work on V2 */}
                  {/* <Styled.PetTypeContainer>
                     <span>Pet type</span>
                     <div>
                        <img style={{width: '120px'}} src={Dog} />
                     </div>
                     <Styled.Caption>This shop only accepts dogs</Styled.Caption>
                  </Styled.PetTypeContainer> */}
                  <Styled.PetProfileContainer>
                     {
                        totalPetCount > 1 ? <h3>Pet Profile {count} of {totalPetCount}</h3> : <h3>Pet Profile</h3>
                     }
                     <LabelInput label='*Name' role='pet-name' error={errors.name && '* This field is required'}>
                        <input {...register('name')} placeholder='Pet Name' type="text" />
                     </LabelInput>
                     <div className='age-birthday'>
                        <LabelInput label='*Age' role='pet-age' error={errors.age && errors.age.message?.toString()}>
                           <input {...register('age')} placeholder='Pet Age' type="text" />
                        </LabelInput>
                        <LabelInput label='Pet Birthday (Optional)' role='pet-birthday' error={errors.birthday && 'Please use MM/DD/YYYY format'}>
                           <input {...register('birthday')} placeholder='MM/DD/YYYY' type="text" />
                        </LabelInput>
                     </div>
                     <LabelInput label='*Weight (lb)' role='pet-weight' error={errors.weight && errors.weight.message}>
                        <input {...register('weight')} placeholder='Pet Weight' type="number" name='weight' min={0} />
                     </LabelInput>
                  </Styled.PetProfileContainer>

                  <Styled.PetSizeContainer>
                     <h3>Pet size</h3>
                     <ul>
                        <li>
                           <p>X-Small</p>
                           <div>
                              <img alt='pet size' src={PetSize} />
                           </div>
                           <p>Under 12lb.</p>
                           <input name='pet-size' disabled={true} type="radio" checked={petSize === 'xs'} value='xs'/>
                        </li>
                        <li>
                           <p>Small</p>
                           <div>
                              <img alt='pet size' src={PetSize} />
                           </div>
                           <p>12lb. ~ 25lb.</p>
                           <input name='pet-size' disabled={true} type="radio" checked={petSize === 'sm'} value='sm' />
                        </li>
                        <li>
                           <p>Medium</p>
                           <div>
                              <img alt='pet size' src={PetSize} />
                           </div>
                           <p>26lb. ~ 50lb.</p>
                           <input name='pet-size' disabled={true} type="radio" checked={petSize === 'md'} value='md' />
                        </li>
                        <li>
                           <p>Large</p>
                           <div>
                              <img alt='pet size' src={PetSize} />
                           </div>
                           <p>51lb. ~ 100lb.</p>
                           <input name='pet-size' disabled={true} type="radio" checked={petSize === 'lg'} value='lg' />
                        </li>
                        <li>
                           <p>X-Large</p>
                           <div>
                              <img alt='pet size' src={PetSize} />
                           </div>
                           <p>Over 100lb.</p>
                           <input name='pet-size' disabled={true} type="radio" checked={petSize === 'xl'} value='xl' />
                        </li>
                     </ul>
                  </Styled.PetSizeContainer>
                  
                  <Styled.BreedContainer>
                     <h3>Breed</h3>
                     {breeds && 
                        <Select 
                           className='breed-select' 
                           values={petBreed} 
                           options={breeds} 
                           multi={false}
                           color='#ff964f'
                           labelField="name"
                           searchBy='name'
                           valueField="_id"
                           clearable={true}
                           create={true}
                           onCreateNew={handleCreateNew}
                           onClearAll={()=> setPetBreed([])}
                           onChange={handlePetBreedSelect} 
                        />}
                  </Styled.BreedContainer>

                  <Styled.TrimContainer>
                     <h3>Trim</h3>
                     <div>
                        <Styled.ImageContainer>
                           <Styled.EmptyImageContainer>
                              <ImageUpload text='Upload Image' onError={handleImageUploadError} trimImge={trimImg} setTrimImg={setTrimImg} />
                           </Styled.EmptyImageContainer>
                        </Styled.ImageContainer>
                        <Styled.DescriptionContainer>
                           <p>Don't have image?</p>
                           <p>Describe in words below</p>
                           <LabelInput role='pet-trim'  error={!trimImg && errors.trimDesc ? 'Upload image or describe in words' : undefined} >
                              <input {...register('trimDesc')} placeholder='Describe Trim' type="text" name='trimDesc' maxLength={200} onChangeCapture={()=> trigger('trimDesc')} />
                           </LabelInput>
                        </Styled.DescriptionContainer>
                     </div>
                  </Styled.TrimContainer>

                  <Styled.ExtraServicesContainer>
                     <h3>Services</h3>
                     <div className='flex flex-wrap justify-between mt-6'>
                        {renderServices()}
                     </div>
                  </Styled.ExtraServicesContainer>
               </Styled.Form>
               <SubmitButton 
                  disabled={Object.keys(errors).length !== 0 || !petBreed[0] || (!trimImg && getValues().trimDesc === '')} 
                  buttonText="Next"
                  btnAction={handleNext}
               />
         </FadeInWrapper>
         </section>
         <FadeInWrapper>
            <Styled.RightSection className='right-section' imgSrc={ServiceDetailBg} />
         </FadeInWrapper>
      </PageLayout>
   );
};

export default PetInformationPage;

