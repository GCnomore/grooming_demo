import styled from "styled-components";

export const Container = styled.header`
   display: flex;
   position: relative;
   justify-content: center;
   height: 100px;
   top: 0;
   left: 0;
   width: 100%;
   padding: 2rem;

   > div {
      position: relative;
      width: 100%;
   }

   @media screen and (max-width: 480px) {
      padding: 1rem;
   }
`;

export const BackBtn = styled.button`
   position: absolute;
   left: 0;
   top: 50%;
   transform: translateY(-50%);
   display: flex;
   align-items: center;
   justify-content: center;

   @media screen and (max-width: 480px) {
      position: static;
		transform: translateY(0);
   }
`;

export const Title = styled.div`
   display: flex;
   justify-content: center;
   word-break: break-all;

   > h1 {
      font-size: 1.5rem;

      @media screen and (max-width: 480px) {
         font-size: 1.3rem;
      }
   }
`;

export const Account = styled.div`
   position: absolute;
   right: 0;
   top: 50%;
   transform: translateY(-50%);
   margin-left: auto;
   
   > * {
      cursor: default !important;
   }

	@media screen and (max-width: 480px) {
      position: static;
		transform: translateY(0);
   }
`;
