import{r as f,s as o,S as h,j as e,d as x,h as g,k as y,u as p}from"./index-MbI8PjSC.js";import{F as u}from"./FadeInWrapper-FWUV74Q5.js";function k(){const[t,s]=f.useState({width:null,height:null});return f.useLayoutEffect(()=>{const i=()=>{s({width:window.innerWidth,height:window.innerHeight})};return i(),window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}},[]),t}var E={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"]},w={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},M={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},B={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},Y={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]};const C=o.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 170px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  margin-top: auto;
  padding-bottom: 3rem;
  padding-top: 1rem;

  p {
    font-size: 0.8rem;
    a {
      color: black;
    }
  }

  @media screen and (max-width: 1024px) {
    position: static;
  }
`,L=o.button`
  width: 50%;
  height: 50px;
  margin-top: 1rem;
  ${({disabled:t})=>t?h.DISABLED_BUTTON:h.BUTTON};

  @media screen and (max-width: 1024px) {
    width: 80%;
  }
`,H=({disabled:t,btnAction:s,buttonText:i="Next"})=>{const n=a=>{s&&s(a),setTimeout(()=>{scrollTo(0,0)},100)};return e.jsx(C,{children:e.jsx(L,{type:"submit",form:"hook-form",title:"next-button",onClick:n,disabled:t??!1,children:i})})},S=o.header`
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
`,j=o.button`
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
`,v=o.div`
   display: flex;
   justify-content: center;
   word-break: break-all;

   > h1 {
      font-size: 1.5rem;

      @media screen and (max-width: 480px) {
         font-size: 1.3rem;
      }
   }
`,b=o.div`
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
`,N=({size:t,name:s,clickAction:i})=>e.jsx("div",{className:"rounded-full bg-slate-600 text-white font-bold flex justify-center items-center cursor-pointer flex-shrink-0",style:{width:t+"px",height:t+"px"},onClick:i,children:e.jsxs("p",{className:"text-sm xs:text-base text-white font-bold",children:[s[0].toUpperCase()," "]})}),D=({title:t,classname:s,onBackClick:i})=>{const n=x(l=>l.slice.groomingShop),a=x(l=>l.slice.user),z=g(),c=y(),r=k(),d=c.pathname.includes("edit"),m=()=>{i?i():(z(-1),setTimeout(()=>{scrollTo(0,0)},100))};return e.jsx(S,{className:s??"",children:r.width&&r.width<480?e.jsxs("div",{className:"flex flex-col justify-center w-full",children:[e.jsxs("div",{className:"flex justify-between",children:[c.pathname.split("/")[2]!=="appointment"&&!d&&e.jsx(j,{onClick:m,children:e.jsx(u,{icon:w})}),a&&e.jsx(b,{children:e.jsx(N,{size:r.width<481?35:40,name:a.firstName})})]}),e.jsx("div",{className:"flex justify-center",children:e.jsx(v,{children:e.jsx("h1",{className:"m-0",children:t??p((n==null?void 0:n.name)??"")})})})]}):e.jsxs("div",{className:"flex justify-center",children:[c.pathname.split("/")[2]!=="appointment"&&!d&&e.jsx(j,{onClick:m,children:e.jsx(u,{icon:w})}),e.jsxs("div",{className:"flex",children:[e.jsx(v,{children:e.jsx("h1",{className:"m-0",children:t??p((n==null?void 0:n.name)??"")})}),a&&e.jsx(b,{children:e.jsx(N,{size:40,name:a.firstName})})]})]})})};export{D as A,H as S,B as a,E as b,M as c,Y as f,k as u};
