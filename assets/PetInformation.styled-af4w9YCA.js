import{s as e,S as i}from"./index-lOctf55M.js";const t=e.div`
   margin-bottom: 2.5rem;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   > h3 {
      margin-bottom: 0.5rem;
      font-size: 1rem;
   }
`,d=e.form`
   height: 100%;
   display: flex;
   flex-direction: column;
   padding-top: 2rem;
`,a=e(t)`
   input {
      ${i.INPUT};
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
`;e(t)`
   
`;const o=e(t)`
   ul {
      width: 100%;
      display: flex;
      justify-content: space-between;

      @media screen and (max-width: 768px) {
         justify-content: center;
         flex-wrap: wrap; 
      }

      li {
         font-size: ${i.LABEL_FONT_SIZE};
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
            ${i.RADIO};
         }
      }

      > li:nth-child(1) > div > img { width: 2rem; }
      > li:nth-child(2) > div > img { width: 2.5rem; }
      > li:nth-child(3) > div > img { width: 3rem; }
      > li:nth-child(4) > div > img { width: 3.5rem; }
      > li:nth-child(5) > div > img { width: 4rem; }

   }
`,s=e(t)`
   width: 100%;

   > div {
      width: 100%;
   }
   
   .breed-select {
      width: 100%;
      ${i.INPUT};
   }
`,c=e(t)`
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
`,m=e.div`
   width: 50%;
   display: flex;
   flex-direction: column;
   align-items: center;
`,l=e.div`
   border: 2px dashed black;
   border-radius: 15px;
   width: 8rem;
   height: 8rem;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
   font-size: ${i.LABEL_FONT_SIZE};
`,p=e.div`
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
      ${i.INPUT};
   }
`,h=e(t)``;e.p`
   color: red;
   margin-top: 0.25rem;
   font-size: ${i.LABEL_FONT_SIZE};
`;const x=e.section`
   width: 100%;
   height: 100%;
   background-image: url(${({imgSrc:n})=>n});
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover; 
`,f=e.div`
   width: 48%;
   height: auto;
   box-shadow: ${i.BOX_SHADOW};
   border-radius: 7px;
   padding: 8px 12px;
   margin-bottom: 2rem;
   border: ${({selected:n})=>n?"2px solid black":"2px solid transparent"};

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
`;export{s as B,p as D,l as E,d as F,m as I,a as P,x as R,f as S,c as T,o as a,h as b};
