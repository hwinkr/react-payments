import{r as l}from"./index-CsdIBAqE.js";import{j as a}from"./jsx-runtime-BnIj46N_.js";import{u as n}from"./styled-components.browser.esm-BniCmjBm.js";const x=l.createContext(void 0),y={cardNumbers:{value:{first:"",second:"",third:"",fourth:""},errorState:{first:!1,second:!1,third:!1,fourth:!1},displayed:!1},cardCompany:{value:{cardCompany:"기본카드"},errorState:{cardCompany:!1},displayed:!1},expirationDate:{value:{mm:"",yy:""},errorState:{mm:!1,yy:!1},displayed:!1},ownerName:{value:{ownerName:""},errorState:{ownerName:!1},displayed:!1},cvcNumber:{value:{cvcNumber:""},errorState:{cvcNumber:!1},displayed:!1},cardPassword:{value:{cardPassword:""},errorState:{cardPassword:!1},displayed:!1}},I=(e,r)=>{switch(r.type){case"SET_CARD_NUMBERS":return{...e,cardNumbers:{...e.cardNumbers,value:{...e.cardNumbers.value,[r.subfield]:r.value}}};case"SET_CARD_COMPANY":return{...e,cardCompany:{...e.cardCompany,value:{cardCompany:r.value}}};case"SET_EXPIRATION_DATE":return{...e,expirationDate:{...e.expirationDate,value:{...e.expirationDate.value,[r.subfield]:r.value}}};case"SET_OWNER_NAME":return{...e,ownerName:{...e.ownerName,value:{ownerName:r.value}}};case"SET_CVC_NUMBER":return{...e,cvcNumber:{...e.cvcNumber,value:{cvcNumber:r.value}}};case"SET_PASSWORD":return{...e,cardPassword:{...e.cardPassword,value:{cardPassword:r.value}}};case"SET_ERROR":return{...e,[r.field]:{...e[r.field],errorState:{...e[r.field].errorState,[r.subField]:r.isValid}}};case"SET_DISPLAY":return{...e,[r.field]:{...e[r.field],displayed:!0}};case"RESET":return{...y};default:return{...e}}},_=e=>{const r=l.useContext(x);if(!r)throw new Error("useFormContext must be used within a FormProvider");const{formState:t,dispatch:s}=r,u=Object.values(t[e].errorState).every(f=>!f),m=()=>{t[e].displayed||s({type:"SET_DISPLAY",field:e})};return{formFieldState:t[e],isValidFormField:u,handleFormFieldFocus:m,dispatch:s}},i=({text:e})=>a.jsx(h,{children:e}),h=n.h3`
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;

  color: #000000;
`;i.__docgenInfo={description:"",methods:[],displayName:"InputTitle",props:{text:{required:!0,tsType:{name:"string"},description:""}}};const T={caption:"#8B95A1",error:"#FF3D3D"},d=({text:e,textType:r})=>{const t=T[r];return a.jsx(b,{color:t,children:e})},b=n.span`
  height: 14px;
  line-height: 14px;

  margin-top: 4px;

  color: ${({color:e})=>e};
  font-size: 10px;
  font-weight: 400;
`;d.__docgenInfo={description:"",methods:[],displayName:"InfoText",props:{text:{required:!0,tsType:{name:"string"},description:""},textType:{required:!0,tsType:{name:"union",raw:'"caption" | "error"',elements:[{name:"literal",value:'"caption"'},{name:"literal",value:'"error"'}]},description:""}}};const c=({children:e})=>a.jsx(N,{children:e}),N=n.div`
  display: flex;
  justify-content: space-between;

  margin-top: 8px;
  margin-bottom: 4px;
`;c.__docgenInfo={description:"",methods:[],displayName:"InputContent",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const p=({labelText:e,htmlFor:r})=>a.jsx(v,{htmlFor:r,children:e}),v=n.label`
  margin-top: 16px;

  font-size: 12px;
  font-weight: 500;
  line-height: 15px;

  color: #0a0d13;
`;p.__docgenInfo={description:"",methods:[],displayName:"Label",props:{labelText:{required:!0,tsType:{name:"string"},description:""}}};const o=({children:e})=>a.jsx(S,{children:e});o.InputTitle=i;o.InfoText=d;o.InputContent=c;o.Label=p;const S=n.section`
  height: 137px;
  width: 315px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-bottom: 16px;
`;o.__docgenInfo={description:"",methods:[{name:"InputTitle",docblock:null,modifiers:["static"],params:[{name:"{ text }: InputTitleProps",optional:!1,type:{name:"InputTitleProps",alias:"InputTitleProps"}}],returns:null},{name:"InfoText",docblock:null,modifiers:["static"],params:[{name:"{ text, textType }: InfoTextProps",optional:!1,type:{name:"InfoTextProps",alias:"InfoTextProps"}}],returns:null},{name:"InputContent",docblock:null,modifiers:["static"],params:[{name:"{ children }: StaticPropsWithChildren",optional:!1,type:{name:"intersection",raw:`T & {
  children: React.ReactNode;
}`,elements:[{name:"T"},{name:"signature",type:"object",raw:`{
  children: React.ReactNode;
}`,signature:{properties:[{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]}}],alias:"StaticPropsWithChildren"}}],returns:null},{name:"Label",docblock:null,modifiers:["static"],params:[{name:"{ labelText, htmlFor }: LabelProps",optional:!1,type:{name:"LabelProps",alias:"LabelProps"}}],returns:null}],displayName:"FormField",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};export{x as F,o as a,I as c,y as i,_ as u};
