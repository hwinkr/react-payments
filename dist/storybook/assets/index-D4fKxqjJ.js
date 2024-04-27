import{r as x}from"./index-CsdIBAqE.js";import{F as h}from"./CardAddFormProvider.util-DjMiQ4gz.js";import{j as o}from"./jsx-runtime-BnIj46N_.js";import{u as r}from"./styled-components.browser.esm-BniCmjBm.js";const N=e=>{const t=x.useContext(h);if(!t)throw new Error("useFormContext must be used within a FormProvider");const{formState:n,dispatch:a}=t,d=Object.values(n[e].errorState).every(u=>!u),m=()=>{n[e].displayed||a({type:"SET_DISPLAY",field:e})};return{formFieldState:n[e],isValidFormField:d,handleFormFieldFocus:m,dispatch:a}},s=({text:e})=>o.jsx(f,{children:e}),f=r.h3`
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;

  color: #000000;
`;s.__docgenInfo={description:"",methods:[],displayName:"InputTitle",props:{text:{required:!0,tsType:{name:"string"},description:""}}};const T={caption:"#8B95A1",error:"#FF3D3D"},p=({text:e,textType:t})=>{const n=T[t];return o.jsx(y,{color:n,children:e})},y=r.span`
  height: 14px;
  line-height: 14px;

  margin-top: 4px;

  color: ${({color:e})=>e};
  font-size: 10px;
  font-weight: 400;
`;p.__docgenInfo={description:"",methods:[],displayName:"InfoText",props:{text:{required:!0,tsType:{name:"string"},description:""},textType:{required:!0,tsType:{name:"union",raw:'"caption" | "error"',elements:[{name:"literal",value:'"caption"'},{name:"literal",value:'"error"'}]},description:""}}};const l=({children:e})=>o.jsx(I,{children:e}),I=r.div`
  display: flex;
  justify-content: space-between;

  margin-top: 8px;
  margin-bottom: 4px;
`;l.__docgenInfo={description:"",methods:[],displayName:"InputContent",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const c=({labelText:e,htmlFor:t})=>o.jsx(g,{htmlFor:t,children:e}),g=r.label`
  margin-top: 16px;

  font-size: 12px;
  font-weight: 500;
  line-height: 15px;

  color: #0a0d13;
`;c.__docgenInfo={description:"",methods:[],displayName:"Label",props:{labelText:{required:!0,tsType:{name:"string"},description:""}}};const i=({children:e})=>o.jsx(b,{children:e});i.InputTitle=s;i.InfoText=p;i.InputContent=l;i.Label=c;const b=r.section`
  height: 137px;
  width: 315px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-bottom: 16px;
`;i.__docgenInfo={description:"",methods:[{name:"InputTitle",docblock:null,modifiers:["static"],params:[{name:"{ text }: InputTitleProps",optional:!1,type:{name:"InputTitleProps",alias:"InputTitleProps"}}],returns:null},{name:"InfoText",docblock:null,modifiers:["static"],params:[{name:"{ text, textType }: InfoTextProps",optional:!1,type:{name:"InfoTextProps",alias:"InfoTextProps"}}],returns:null},{name:"InputContent",docblock:null,modifiers:["static"],params:[{name:"{ children }: StaticPropsWithChildren",optional:!1,type:{name:"intersection",raw:`T & {
  children: React.ReactNode;
}`,elements:[{name:"T"},{name:"signature",type:"object",raw:`{
  children: React.ReactNode;
}`,signature:{properties:[{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]}}],alias:"StaticPropsWithChildren"}}],returns:null},{name:"Label",docblock:null,modifiers:["static"],params:[{name:"{ labelText, htmlFor }: LabelProps",optional:!1,type:{name:"LabelProps",alias:"LabelProps"}}],returns:null}],displayName:"FormField",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};export{i as F,N as u};
