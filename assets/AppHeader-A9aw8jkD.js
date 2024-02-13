import{r as h,s as o,S as x,j as e,A as g,B as y,d as p,h as k,k as C,u}from"./index-lOctf55M.js";import{F as w}from"./FadeInWrapper-Z-rbu0lI.js";function L(){const[t,i]=h.useState({width:null,height:null});return h.useLayoutEffect(()=>{const s=()=>{i({width:window.innerWidth,height:window.innerHeight})};return s(),window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}},[]),t}var M={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"]},j={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},Y={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},H={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},D={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]};const A=o.div`
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
`,S=o.button`
  width: 50%;
  height: 50px;
  margin-top: 1rem;
  ${({disabled:t})=>t?x.DISABLED_BUTTON:x.BUTTON};

  @media screen and (max-width: 1024px) {
    width: 80%;
  }
`,F=({disabled:t,btnAction:i,buttonText:s="Next"})=>{const n=a=>{const c=g();y(c,"submit_btn"),i&&i(a),setTimeout(()=>{scrollTo(0,0)},100)};return e.jsx(A,{children:e.jsx(S,{type:"submit",form:"hook-form",title:"next-button",onClick:n,disabled:t??!1,children:s})})},T=o.header`
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
`,v=o.button`
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
`,b=o.div`
   display: flex;
   justify-content: center;
   word-break: break-all;

   > h1 {
      font-size: 1.5rem;

      @media screen and (max-width: 480px) {
         font-size: 1.3rem;
      }
   }
`,N=o.div`
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
`,z=({size:t,name:i,clickAction:s})=>e.jsx("div",{className:"rounded-full bg-slate-600 text-white font-bold flex justify-center items-center cursor-pointer flex-shrink-0",style:{width:t+"px",height:t+"px"},onClick:s,children:e.jsxs("p",{className:"text-sm xs:text-base text-white font-bold",children:[i[0].toUpperCase()," "]})}),I=({title:t,classname:i,onBackClick:s})=>{const n=p(d=>d.slice.groomingShop),a=p(d=>d.slice.user),c=k(),r=C(),l=L(),m=r.pathname.includes("edit"),f=()=>{s?s():(c(-1),setTimeout(()=>{scrollTo(0,0)},100))};return e.jsx(T,{className:i??"",children:l.width&&l.width<480?e.jsxs("div",{className:"flex flex-col justify-center w-full",children:[e.jsxs("div",{className:"flex justify-between",children:[r.pathname.split("/")[2]!=="appointment"&&!m&&e.jsx(v,{onClick:f,children:e.jsx(w,{icon:j})}),a&&e.jsx(N,{children:e.jsx(z,{size:l.width<481?35:40,name:a.firstName})})]}),e.jsx("div",{className:"flex justify-center",children:e.jsx(b,{children:e.jsx("h1",{className:"m-0",children:t??u((n==null?void 0:n.name)??"")})})})]}):e.jsxs("div",{className:"flex justify-center",children:[r.pathname.split("/")[2]!=="appointment"&&!m&&e.jsx(v,{onClick:f,children:e.jsx(w,{icon:j})}),e.jsxs("div",{className:"flex",children:[e.jsx(b,{children:e.jsx("h1",{className:"m-0",children:t??u((n==null?void 0:n.name)??"")})}),a&&e.jsx(N,{children:e.jsx(z,{size:40,name:a.firstName})})]})]})})};export{I as A,F as S,H as a,M as b,Y as c,D as f,L as u};
