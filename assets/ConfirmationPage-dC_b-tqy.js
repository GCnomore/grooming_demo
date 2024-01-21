import{s as a,h as N,d as y,j as e,L as f,u as n,i as h}from"./index-MbI8PjSC.js";import{A as C,S as I}from"./AppHeader-wFxjbLyp.js";import{a as g,b as p}from"./FadeInWrapper-FWUV74Q5.js";import{d as w}from"./dayjs.min-ExUzFtCT.js";import{S as D}from"./PetInformation.styled-3klszLKV.js";const z="/grooming_demo/assets/done-YhXuBCdn.webp";function v(d){if(!d)return"";const r=d.replace(/\D/g,"").match(/^(1)?(\d{3})(\d{3})(\d{4})$/);if(r){const l=r[1]==="1"?"1-":"",c=r[2],x=r[3],m=r[4];return`${l}${c}-${x}-${m}`}return""}const P=a.section`
  width: 100%;
  height: 100%;
  background-image: url(${({imgSrc:d})=>d});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; 
`,b=a.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  h3 {
    font-size: 1.5rem;

    @media screen and (max-width: 480px) {
      font-size: 1.25rem;
    }
  }
  h4 {
    font-size: 1.25rem;

    @media screen and (max-width: 480px) {
      font-size: 1rem;
    }
  }
`,$=a(b)`
  > div:first-child {
    border-bottom: 1px solid #ccc;
    margin-bottom: 1.5rem;
  }
`,k=a.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`,A=a.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  margin-left: 1rem;
`,Y=a(b)`
  > div:first-child {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    margin-bottom: 1.5rem;

    > p {
      margin-left: 0.5rem;
      font-size: 0.85rem;
    }
  }
`,L=a.div`
  margin-bottom: 2rem;
  margin-left: 1rem;

  > div:first-child {
    display: flex;
    align-items: center;

    > span {
      margin-left: 0.5rem;
      font-size: 0.9rem;
    }
  }
`,G=()=>{const d=N(),{customer:s,totalPetCount:r,groomingShop:i,apptTime:l,apptDate:c}=y(t=>t.slice),x=t=>{t.preventDefault(),sessionStorage.removeItem("sID"),d("/done")},m=()=>s?s.pet.map((t,u)=>{var j;return e.jsxs(L,{children:[e.jsxs("div",{className:"flex w-full justify-between",children:[e.jsxs("h4",{children:["Service Detail - ",h.upperFirst(t.name)]}),e.jsx(f,{className:"text-xs self-center",to:`/edit/service-detail/${u+1}`,children:"Edit"})]}),e.jsxs("div",{className:"text-sm",children:[e.jsxs("div",{className:"flex",children:[e.jsx("h5",{className:"text-base mb-0 mr-2",children:n(t.name)}),e.jsxs("span",{className:"text-xs self-center",children:[n(t.breed.name)," · ",t.age," years old · ",t.weight,"lb."]})]}),e.jsxs("span",{children:[t.trimImg?e.jsxs("div",{className:"mb-4",children:[e.jsx("p",{children:"Trim Image: "}),e.jsx("img",{className:"max-h-[200px]",alt:"trim",src:t.trimImg??""})]}):e.jsx("div",{children:e.jsx("b",{children:"No Image"})}),e.jsxs("div",{className:"flex w-full",children:[e.jsx("p",{className:"mr-2 flex-shrink-0",children:"Trim Description:"}),e.jsx("p",{className:"w-full break-all",children:t.trimDesc?t.trimDesc:"N/A"})]})]})]}),e.jsx("div",{className:"mt-2",children:(j=t.preferredServices)==null?void 0:j.map(o=>e.jsxs(D,{className:"mb-2",selected:!0,children:[e.jsxs("div",{children:[e.jsx("p",{children:o.name}),e.jsxs("p",{children:["$",o.price]})]}),e.jsx("p",{children:o.description})]},h.uniqueId()))})]},t+"-service-"+h.uniqueId())}):[e.jsx(e.Fragment,{})];return e.jsxs(g,{children:[e.jsxs("section",{className:"left-section",children:[e.jsxs(p,{children:[e.jsx(C,{title:"Confirmation"}),e.jsxs("div",{className:"content overflow-y-auto",children:[e.jsxs($,{children:[e.jsxs("div",{className:"flex w-full justify-between",children:[e.jsx("h3",{children:"Your Information"}),e.jsx(f,{className:"text-xs self-center",to:"/edit/customer-info",children:"Edit"})]}),e.jsxs(k,{children:[e.jsx("h4",{children:"Appointment"}),e.jsxs("div",{className:"text-sm",children:[e.jsx("p",{children:n(i==null?void 0:i.name)}),e.jsxs("p",{children:[n(i==null?void 0:i.address.street)," ",n(i==null?void 0:i.address.street2)]}),e.jsxs("p",{children:[n(i==null?void 0:i.address.city),", ",i==null?void 0:i.address.state.toUpperCase()," ",i==null?void 0:i.address.zip]}),e.jsx("p",{children:v(i==null?void 0:i.phone)})]}),e.jsxs("div",{className:"mt-2 text-sm",children:[e.jsx("p",{className:"text-base",children:e.jsx("b",{children:"When:"})}),e.jsxs("span",{children:[w(c).format("MM/DD/YYYY")," "]}),e.jsxs("span",{children:["@ ",l]})]})]}),e.jsxs(A,{children:[e.jsx("h4",{children:"Contact"}),e.jsxs("div",{className:"text-sm",children:[e.jsx("p",{children:e.jsxs("b",{children:[n(s==null?void 0:s.firstName)," ",n(s==null?void 0:s.lastName)]})}),e.jsxs("p",{children:[n(s==null?void 0:s.address.street)," ",n(s==null?void 0:s.address.street2)]}),e.jsxs("p",{children:[n(s==null?void 0:s.address.city),", ",s==null?void 0:s.address.state.toUpperCase()," ",s==null?void 0:s.address.zip]}),e.jsx("p",{children:v(s==null?void 0:s.phone)}),e.jsx("p",{children:s==null?void 0:s.email}),e.jsxs("p",{children:["Contact Method: ",(s==null?void 0:s.preferredContactMethod)==="phone"?"Phone":"Text"]})]})]})]}),e.jsxs(Y,{children:[e.jsx("div",{className:"flex w-full justify-between",children:e.jsxs("h3",{children:["Pet Information ",r>1&&e.jsxs("span",{children:["(",r," pets)"]})]})}),m()]})]})]}),e.jsx("div",{children:e.jsx(I,{buttonText:"Submit",btnAction:x})})]}),e.jsx(p,{children:e.jsx(P,{className:"right-section",imgSrc:z})})]})};export{G as default};
