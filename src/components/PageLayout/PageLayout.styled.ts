import styled from 'styled-components';

export const PageGrid = styled.article`
   display: grid;
   width: 100%;
   grid-template-columns: 12fr 11fr;
   
   > .left-section {
      border-top-left-radius: 21px;
      border-bottom-left-radius: 21px;
      background-color: white;
      overflow: hidden;
      height: 100%;
      position: relative;
      display: flex;
      flex-direction: column;

      @media screen and (max-width: 1024px) {
         border-radius: 21px;
      }
      
      .content {
         padding: 1rem 3rem 0px 3rem;
         overflow-y: auto;
         overflow-x: hidden;
         height: calc(100% - 180px - 100px);

         ::-webkit-scrollbar {
            width: 6px;
         }

         ::-webkit-scrollbar-track {
            background: #f1f1f1; 
         }

         ::-webkit-scrollbar-thumb {
            background: #bbb; 
            border-radius: 10px;
         }

         @media screen and (max-width: 768px) {
            padding: 1rem;
         }
      }

      > div {
         /* height: 100%; */
         display: flex;
         flex-direction: column;
      }

   }

   .right-section {
      width: 100%;
      border-top-right-radius: 21px;
      border-bottom-right-radius: 21px;
      background-color: rgba(255, 150, 79, 0.15);
      overflow-y: auto;

      ::-webkit-scrollbar {
         width: 6px;

      }

      ::-webkit-scrollbar-track {
         background: #f1f1f1; 
         margin: 1rem;
      }

      ::-webkit-scrollbar-thumb {
         background: #bbb; 
         border-radius: 10px;
      }
   }

   @media screen and (max-width: 1024px) {
      display: flex;
      flex-direction: column;
      height: 100%;

      > .left-section {
         border-bottom-left-radius: 21px;
         border-bottom-right-radius: 21px;
      
         .content {
            overflow-y: auto;
            overflow-x: hidden;
            height: 100%;

         }

         > div {
            /* height: 100%; */
            display: flex;
            flex-direction: column;
         }

      }

      > .right-section {
         /* border-top-left-radius: 21px;
         border-bottom-right-radius: 0px; */
         border-bottom-left-radius: 21px;
         border-bottom-right-radius: 21px;
         background-color: white;
         overflow-y: auto;

      }
   }
`;
