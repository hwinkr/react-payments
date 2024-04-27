import{j as e}from"./jsx-runtime-BnIj46N_.js";import{u,F as r}from"./index-D4fKxqjJ.js";import{u as m}from"./styled-components.browser.esm-BniCmjBm.js";import{a as c,V as x,C as h}from"./card-app-D7gcX8L8.js";const l=({options:t,placeholder:n,onSelect:a,...s})=>e.jsxs(C,{onChange:a,...s,children:[e.jsx("option",{value:"",selected:!0,disabled:!0,hidden:!0,children:n}),t.map((o,i)=>e.jsx("option",{value:o,children:o},i))]}),C=m.select`
  height: 32px;
  width: 100%;

  border-radius: 2px;

  border: 1px solid #acacac;

  padding: 0px 4px;
`;l.__docgenInfo={description:"",methods:[],displayName:"Select",props:{options:{required:!0,tsType:{name:"unknown"},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLSelectElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLSelectElement>",elements:[{name:"HTMLSelectElement"}]},name:"event"}],return:{name:"void"}}},description:""}}};const S=(t,n)=>t.includes(n),y=()=>{const{isValidFormField:t,handleFormFieldFocus:n,dispatch:a}=u("cardCompany"),s=p=>{const{value:d}=p.target;S(c,d)&&a({type:"SET_CARD_COMPANY",value:d})},{query:o,caption:i}=h.cardCompany;return e.jsxs(r,{children:[e.jsx(r.InputTitle,{text:o}),e.jsx(r.InfoText,{textType:"caption",text:i}),e.jsx(r.InputContent,{children:e.jsx(l,{autoFocus:!0,onFocus:n,options:c,placeholder:"카드사를 선택해 주세요",onSelect:s})}),e.jsx(r.InfoText,{textType:"error",text:t?"":x.invalidOwnerName})]})};y.__docgenInfo={description:"",methods:[],displayName:"CardCompanySelectField"};export{y as C};
