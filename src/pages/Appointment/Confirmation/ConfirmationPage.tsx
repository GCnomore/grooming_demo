import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';

import ConfirmationBg from '../../../assets/imgs/backgrounds/done.webp';
import AppHeader from '../../../components/AppHeader/AppHeader';
import PageLayout from '../../../components/PageLayout/PageLayout';
import { RootState } from '../../../data/redux/store';
import FadeInWrapper from '../../../components/FadeInWrapper/FadeInWrapper';
import toPhoneNumber from '../../../util/toPhoneNumber';
import upperAllFirst from '../../../util/upperAllFirst';
import * as Styled from './ConfirmationPage.styled';
import SubmitButton from '../../../components/SubmitButton/SubmitButton';
import dayjs from 'dayjs';
import { ServiceCard } from '../PetInformation/PetInformation.styled';
import { Link } from 'react-router-dom';

const ConfirmationPage:React.FC = () => {
   const navigate = useNavigate();
   const { 
      customer, 
      totalPetCount, 
      groomingShop,
      apptTime,
      apptDate,
   } = useSelector((state: RootState) => state.slice);

   const handleSubmit = (e: React.MouseEvent) => {
      e.preventDefault();
      sessionStorage.removeItem('sID');
      navigate('/done');
   }

   const renderPetInformation = ():React.JSX.Element[] => {
      if(customer) {
         return customer.pet.map((p, i)=> {
            return (
               <Styled.ServiceDetail key={p + '-service-' + _.uniqueId()}>
                  <div className='flex w-full justify-between'>
                     <h4>Service Detail - {_.upperFirst(p.name)}</h4>
                     <Link className='text-xs self-center' to={`/edit/service-detail/${i + 1}`}>Edit</Link>
                  </div>
                  <div className='text-sm'>
                     <div className='flex'>
                        <h5 className='text-base mb-0 mr-2'>{ upperAllFirst(p.name) }</h5>
                        <span className='text-xs self-center'>{ upperAllFirst(p.breed.name) } &#183; { p.age } years old &#183; { p.weight }lb.</span>
                     </div>
                     <span>
                        {
                           p.trimImg  
                              ? 
                                 <div className='mb-4'>
                                    <p>Trim Image: </p>
                                    <img className='max-h-[200px]' alt='trim' src={p.trimImg ?? ''} /> 
                                 </div>
                              :
                                 <div><b>No Image</b></div>
                        }
                        <div className='flex w-full'>
                           <p className='mr-2 flex-shrink-0'>Trim Description:</p>
                           <p className='w-full break-all'>{ p.trimDesc ? p.trimDesc : 'N/A' }</p>
                        </div>
                     </span>
                  </div>

                  <div className='mt-2'>
                     {
                        p.preferredServices?.map((item)=> (
                           <ServiceCard className='mb-2' key={_.uniqueId()} selected={true} >
                              <div>
                                 <p>{item.name}</p>
                                 <p>${item.price}</p>
                              </div>
                              <p>{item.description}</p>
                           </ServiceCard>
                        ))
                     }
                  </div>
               </Styled.ServiceDetail>
            );
         });
      } else {
         return [<></>];
      }
   }

   return (
      <PageLayout>
         <section className='left-section'>
            <FadeInWrapper>
            <AppHeader title='Confirmation' />
               <div className='content overflow-y-auto'>
                  <Styled.CustomerInfoContainer>
                     <div className='flex w-full justify-between'>
                        <h3>Your Information</h3>
                        <Link className='text-xs self-center' to={'/edit/customer-info'}>Edit</Link>
                     </div>

                     <Styled.Appointment>
                        <h4>Appointment</h4>
                        <div className='text-sm'>
                           <p>{ upperAllFirst(groomingShop?.name) }</p>
                           <p>{ upperAllFirst(groomingShop?.address.street) } { upperAllFirst(groomingShop?.address.street2) }</p>
                           <p>{ upperAllFirst(groomingShop?.address.city) }, { groomingShop?.address.state.toUpperCase() } {groomingShop?.address.zip}</p>
                           <p>{ toPhoneNumber(groomingShop?.phone) }</p>
                        </div>
                        <div className='mt-2 text-sm'>
                           <p className='text-base'><b>When:</b></p>
                           <span>{ dayjs(apptDate).format('MM/DD/YYYY') }&nbsp;</span>
                           <span>@&nbsp;{ apptTime }</span>
                        </div>
                     </Styled.Appointment>

                     <Styled.Contact>
                        <h4>Contact</h4>
                        <div className='text-sm'>
                           <p><b>{ upperAllFirst(customer?.firstName) } { upperAllFirst(customer?.lastName) }</b></p>
                           <p>{ upperAllFirst(customer?.address.street) } { upperAllFirst(customer?.address.street2) }</p>
                           <p>{ upperAllFirst(customer?.address.city) }, { customer?.address.state.toUpperCase() } {customer?.address.zip}</p>
                           <p>{ toPhoneNumber(customer?.phone) }</p>
                           <p>{ customer?.email}</p>
                           <p>Contact Method: {customer?.preferredContactMethod === 'phone' ? 'Phone' : 'Text'}</p>
                        </div>
                     </Styled.Contact>
                  </Styled.CustomerInfoContainer>

                  <Styled.PetInfoContainer>
                     <div className='flex w-full justify-between'>
                        <h3>Pet Information {totalPetCount > 1 && <span>&#40;{totalPetCount} pets&#41;</span>}</h3>
                     </div>
                     {renderPetInformation()}
                  </Styled.PetInfoContainer>

               </div>
            </FadeInWrapper>
            <div>
               <SubmitButton buttonText="Submit" btnAction={handleSubmit} />
            </div>
         </section>
         <FadeInWrapper>
            <Styled.RightSection className='right-section' imgSrc={ConfirmationBg}></Styled.RightSection>
         </FadeInWrapper>
      </PageLayout>
   )
}

export default ConfirmationPage;