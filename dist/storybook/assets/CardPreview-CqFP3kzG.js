import{j as t}from"./jsx-runtime-BnIj46N_.js";import{r as c}from"./index-CsdIBAqE.js";import{F as w}from"./index-C6xO60ws.js";import{b as x,c as b,d as j,a as N,v as R,e as I}from"./cardAddFormValidator-DbnJY0JF.js";import{u as i}from"./styled-components.browser.esm-BniCmjBm.js";import{b as m,c as B}from"./card-app-D7gcX8L8.js";const P=()=>{const e=c.useContext(w);if(!e)throw new Error("useFormContext must be used within a FormProvider");const{formState:r,dispatch:n}=e,o=x(r.cardNumbers.value),s=b(r.cardCompany.value),d=j(r.expirationDate.value),p=N(r.ownerName.value),u=R(r.cvcNumber.value),A=I(r.cardPassword.value);return{formState:r,dispatch:n,isCardNumbersInputCompleted:o,isCardCompanySelectCompleted:s,isExpirationDateInputCompleted:d,isCardOwnerInputCompleted:p,isCVCNumberInputCompleted:u,isCardPasswordInputCompleted:A,isFormInputCompleted:o&&s&&d&&p&&u&&A}},E=e=>{const[r,n]=c.useState(!1);return c.useEffect(()=>{const o=d=>{d.target instanceof HTMLInputElement&&n(d.target.id===e)},s=()=>{n(!1)};return document.addEventListener("focus",o,!0),document.addEventListener("blur",s,!0),()=>{document.removeEventListener("focus",o,!0),document.removeEventListener("blur",s,!0)}},[e]),{isFocused:r}},k="data:image/png;base64,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",S=""+new URL("master-card-BD-qZySX.png",import.meta.url).href,J=""+new URL("visa-card-CcJSL0oQ.png",import.meta.url).href,T=e=>parseInt(e[0],10)===m.visaStartNumber,q=e=>{if(e.length<2)return!1;const r=parseInt(e.slice(0,2),10);return r>=m.minMasterNumber&&r<=m.maxMasterNumber},H=e=>x(e)?T(e.first)?J:q(e.first)?S:null:null,C=({value:e})=>{const r=H(e);return t.jsxs(L,{children:[t.jsx(O,{}),r&&t.jsx(V,{src:r})]})},L=i.div`
  display: flex;
  justify-content: space-between;

  padding: 8px 12px;
`,O=i.div`
  height: 22px;
  width: 36px;

  border-radius: 4px;
  background-color: #ddcd78;
`,V=i.img`
  height: 22px;
  width: 36px;
`;C.__docgenInfo={description:"",methods:[],displayName:"CardHeader",props:{value:{required:!0,tsType:{name:"Record",elements:[{name:"union",raw:'"first" | "second" | "third" | "fourth"',elements:[{name:"literal",value:'"first"'},{name:"literal",value:'"second"'},{name:"literal",value:'"third"'},{name:"literal",value:'"fourth"'}]},{name:"string"}],raw:"Record<CardNumberKeys, string>"},description:""}}};const f=({children:e})=>t.jsx(D,{children:e}),D=i.div`
  display: flex;
  flex-direction: column;

  padding-left: 17px;
  row-gap: 8px;
`;f.__docgenInfo={description:"",methods:[],displayName:"CardBody",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const l=({text:e,type:r})=>{const n=r==="longText"?"170px":"40px";return t.jsx(F,{width:n,children:r==="password"?Array.from({length:e.length},(o,s)=>t.jsx(W,{src:k},s)):e})},F=i.span`
  height: 20px;
  width: ${({width:e})=>e};

  display: flex;
  justify-content: flex-start;
  align-items: center;

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 2px;
`,W=i.img`
  height: 4px;
  width: 4px;

  margin-right: 5px;
`;l.__docgenInfo={description:"",methods:[],displayName:"CardText",props:{text:{required:!0,tsType:{name:"string"},description:""},type:{required:!0,tsType:{name:"union",raw:'"longText" | "text" | "password"',elements:[{name:"literal",value:'"longText"'},{name:"literal",value:'"text"'},{name:"literal",value:'"password"'}]},description:""}}};const g=({value:e})=>{const{first:r,second:n,third:o,fourth:s}=e;return t.jsxs(Q,{children:[t.jsx(l,{text:r,type:"text"}),t.jsx(l,{text:n,type:"text"}),t.jsx(l,{text:o,type:"password"}),t.jsx(l,{text:s,type:"password"})]})},Q=i.div`
  width: 170px;

  display: flex;
  justify-content: space-between;
`;g.__docgenInfo={description:"",methods:[],displayName:"CardNumber",props:{value:{required:!0,tsType:{name:"Record",elements:[{name:"union",raw:'"first" | "second" | "third" | "fourth"',elements:[{name:"literal",value:'"first"'},{name:"literal",value:'"second"'},{name:"literal",value:'"third"'},{name:"literal",value:'"fourth"'}]},{name:"string"}],raw:"Record<CardNumberKeys, string>"},description:""}}};const Y="/",v=({value:e})=>{const{mm:r,yy:n}=e,o=(s,d)=>d.length===0?s:`${s+Y+d}`;return t.jsx(l,{type:"text",text:o(r,n)})};v.__docgenInfo={description:"",methods:[],displayName:"ExpirationDate",props:{value:{required:!0,tsType:{name:"Record",elements:[{name:"union",raw:'"mm" | "yy"',elements:[{name:"literal",value:'"mm"'},{name:"literal",value:'"yy"'}]},{name:"string"}],raw:"Record<ExpirationDateKeys, string>"},description:""}}};const y=({value:e})=>{const{ownerName:r}=e;return t.jsx(l,{type:"longText",text:r})};y.__docgenInfo={description:"",methods:[],displayName:"CardOwner",props:{value:{required:!0,tsType:{name:"Record",elements:[{name:"literal",value:'"ownerName"'},{name:"string"}],raw:"Record<CardOwnerKeys, string>"},description:""}}};const h=({value:e})=>{const{cvcNumber:r}=e;return t.jsx(K,{children:t.jsx(X,{children:r})})},K=i.div`
  height: 24px;
  margin-top: 84px;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  background-color: #cbba64;
`,X=i.span`
  line-height: 20px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 8%;

  margin-right: 16px;
`;h.__docgenInfo={description:"",methods:[],displayName:"CVCLine",props:{value:{required:!0,tsType:{name:"Record",elements:[{name:"literal",value:'"cvcNumber"'},{name:"string"}],raw:"Record<CVCNumberKeys, string>"},description:""}}};const a=({cardColor:e,children:r})=>t.jsx(Z,{cardColor:e,children:r});a.CardHeader=C;a.CardBody=f;a.CardNumber=g;a.ExpirationDate=v;a.CardOwner=y;a.CVCLine=h;const Z=i.div`
  height: 132px;
  min-height: 132px;
  width: 212px;
  margin: 0 auto;
  margin-top: 60px;
  margin-bottom: 45px;

  color: #ffffff;
  border-radius: 4px;
  background-color: ${({cardColor:e})=>e};
  box-shadow: 3px 3px 5px 0px #00000040;
`;a.__docgenInfo={description:"",methods:[{name:"CardHeader",docblock:null,modifiers:["static"],params:[{name:"{ value }: CardHeaderProps",optional:!1,type:{name:"CardHeaderProps",alias:"CardHeaderProps"}}],returns:null},{name:"CardBody",docblock:null,modifiers:["static"],params:[{name:"{ children }: StaticPropsWithChildren",optional:!1,type:{name:"intersection",raw:`T & {
  children: React.ReactNode;
}`,elements:[{name:"T"},{name:"signature",type:"object",raw:`{
  children: React.ReactNode;
}`,signature:{properties:[{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]}}],alias:"StaticPropsWithChildren"}}],returns:null},{name:"CardNumber",docblock:null,modifiers:["static"],params:[{name:"{ value }: CardNumberProps",optional:!1,type:{name:"CardNumberProps",alias:"CardNumberProps"}}],returns:null},{name:"ExpirationDate",docblock:null,modifiers:["static"],params:[{name:"{ value }: ExpirationDateProps",optional:!1,type:{name:"ExpirationDateProps",alias:"ExpirationDateProps"}}],returns:null},{name:"CardOwner",docblock:null,modifiers:["static"],params:[{name:"{ value }: CardOwnerPros",optional:!1,type:{name:"CardOwnerPros",alias:"CardOwnerPros"}}],returns:null},{name:"CVCLine",docblock:null,modifiers:["static"],params:[{name:"{ value }: CVCLineProps",optional:!1,type:{name:"CVCLineProps",alias:"CVCLineProps"}}],returns:null}],displayName:"Card",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const z=()=>{const{formState:e}=P(),{isFocused:r}=E("cvc-number"),n=B[e.cardCompany.value.cardCompany];return t.jsx(t.Fragment,{children:r?t.jsx(a,{cardColor:"#D5D5D5",children:t.jsx(a.CVCLine,{value:e.cvcNumber.value})}):t.jsxs(a,{cardColor:n,children:[t.jsx(a.CardHeader,{value:e.cardNumbers.value}),t.jsxs(a.CardBody,{children:[t.jsx(a.CardNumber,{value:e.cardNumbers.value}),t.jsx(a.ExpirationDate,{value:e.expirationDate.value}),t.jsx(a.CardOwner,{value:e.ownerName.value})]})]})})};z.__docgenInfo={description:"",methods:[],displayName:"CardPreview"};export{z as C,P as u};
