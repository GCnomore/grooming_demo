import React from "react";

import * as Styled from './DonePage.styled';
import PageLayout from "../../../components/PageLayout/PageLayout";
import DoneBg from '../../../assets/imgs/backgrounds/thank_you.webp';
import FadeInWrapper from "../../../components/FadeInWrapper/FadeInWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";

const DonePage: React.FC = () => {

   return (
      <PageLayout>
         <section className='left-section'>
            <FadeInWrapper>
               <div className="flex flex-col h-full justify-center items-center w-full py-10 xs:py-20">
                  <h4 className="mb-10">Thank you!</h4>
                  <FontAwesomeIcon className="w-20 h-20" icon={faCalendarCheck} style={{color: "#55b805"}} />
                  <div className="mt-4">
                     <p className="text-center">Your appointment is submitted</p>
                     <p className="text-center">See you then!</p>
                  </div>
               </div>
            </FadeInWrapper>
         </section>
         <FadeInWrapper>
            <Styled.RightSection className='right-section' imgSrc={DoneBg}></Styled.RightSection>
         </FadeInWrapper>
      </PageLayout>
   )
}

export default DonePage;