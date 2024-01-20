import styled from 'styled-components';
import STYLE from '../../../style';

const InfoSection = styled.div`
   margin-bottom: 2.5rem;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   > h3 {
      margin-bottom: 0.5rem;
      font-size: 1rem;
   }
`;

export const Form = styled.form`
   height: 100%;
   display: flex;
   flex-direction: column;
   padding-top: 2rem;
`;

export const PetProfileContainer = styled(InfoSection)`
   input {
      ${STYLE.INPUT};
   }

   .age-birthday {
      display: flex;
      width: 100%;
      justify-content: space-between;
      
      @media screen and (max-width: 480px) {
         align-items: flex-end;
      }

      input {
         width: 98%;
      }
   }
`;

export const PetTypeContainer = styled(InfoSection)`
   
`;

export const PetSizeContainer = styled(InfoSection)`
   ul {
      width: 100%;
      display: flex;
      justify-content: space-between;

      @media screen and (max-width: 768px) {
         justify-content: center;
         flex-wrap: wrap; 
      }

      li {
         font-size: ${STYLE.LABEL_FONT_SIZE};
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         cursor: pointer;

         @media screen and (max-width: 768px) {
            margin-right: 2%;
            margin-left: 2%;
         }

         > div {
            width: 5rem;
            height: 5rem;
            border: 2px solid #ccc;
            border-radius: 15px;
            display: flex;
            justify-content: center;
            align-items: center;

            > img {
               filter: drop-shadow(3px 3px 2px #aaa);
            }
         }

         > input {
            ${STYLE.RADIO};
         }
      }

      > li:nth-child(1) > div > img { width: 2rem; }
      > li:nth-child(2) > div > img { width: 2.5rem; }
      > li:nth-child(3) > div > img { width: 3rem; }
      > li:nth-child(4) > div > img { width: 3.5rem; }
      > li:nth-child(5) > div > img { width: 4rem; }

   }
`;

export const BreedContainer = styled(InfoSection)`
   width: 100%;

   > div {
      width: 100%;
   }
   
   .breed-select {
      width: 100%;
      ${STYLE.INPUT};
   }
`;

export const TrimContainer = styled(InfoSection)`
   width: 100%;

   > div {
      display: flex;
      justify-content: space-around;
      width: 100%;

      @media screen and (max-width: 768px) {
         flex-direction: column;
         justify-content: center;
         align-items: center;
         margin-top: 1rem;
      }

   }
`;

export const ImageContainer = styled.div`
   width: 50%;
   display: flex;
   flex-direction: column;
   align-items: center;
`;

export const EmptyImageContainer = styled.div`
   border: 2px dashed black;
   border-radius: 15px;
   width: 8rem;
   height: 8rem;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
   font-size: ${STYLE.LABEL_FONT_SIZE};
`;

export const DescriptionContainer = styled.div`
   width: 50%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   @media screen and (max-width: 768px) {
      width: 100%;
      margin-top: 1rem;
   }


   > p {
      font-size: 0.85rem;
   }

   > input {
      width: 100%;
      ${STYLE.INPUT};
   }
`;

export const ExtraServicesContainer = styled(InfoSection)``;

export const Caption = styled.p`
   color: red;
   margin-top: 0.25rem;
   font-size: ${STYLE.LABEL_FONT_SIZE};
`;

export const RightSection = styled.section<{imgSrc: string}>`
   width: 100%;
   height: 100%;
   background-image: url(${({imgSrc}) => imgSrc});
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover; 
`;

export const ServiceCard = styled.div<{selected: boolean}>`
   width: 48%;
   height: auto;
   box-shadow: ${STYLE.BOX_SHADOW};
   border-radius: 7px;
   padding: 8px 12px;
   margin-bottom: 2rem;
   border: ${({selected})=> selected ? '2px solid black' : '2px solid transparent'};

   @media screen and (max-width: 1200px) and (min-width: 1025px) {
      width: 100%;
   }

   @media screen and (max-width: 640px) {
      width: 100%;
   }

   > div {
      display: flex;
      justify-content: space-between;

      > p {
         font-weight: bold;
         font-size: 14px;
         margin-bottom: 0.25rem;
      }

   }

   > p:nth-child(2) {
      font-size: 12px;
      padding-right: 3rem;
   }
`;