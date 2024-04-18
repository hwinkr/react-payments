import{j as r}from"./jsx-runtime-BnIj46N_.js";import{r as u}from"./index-CsdIBAqE.js";import{u as d}from"./styled-components.browser.esm-BniCmjBm.js";import{L as c}from"./Label-CjMvsCqX.js";import{I as l}from"./Input-BIqY51RL.js";import{I as g,V as x,a as h}from"./card-app-D2z3bZa1.js";const I=({ownerName:i,errorCaption:t,handleCardOwnerNameChange:o})=>{const[n,m]=u.useState(!1),p=e=>{const a=/^[a-zA-Z ]*$/.test(e),s=e.length<=h.maxCardOwnerNameLength;m(!a||!s),!(!a||!s)&&o(e.toUpperCase())};return r.jsxs(f,{children:[r.jsx(c,{htmlFor:"card-owner",children:g.cardOwnerNameInput}),r.jsx(l,{id:"card-owner",type:"text",placeholder:"JOHN DOE",value:i,size:"large",isError:n,onChange:e=>{p(e.target.value)}}),t(n?x.invalidOwnerName:"")]})},f=d.section`
  height: 77px;
  width: 315px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 16px;
  margin-bottom: 16px;
`;I.__docgenInfo={description:"",methods:[],displayName:"CardOwnerNameInput",props:{ownerName:{required:!0,tsType:{name:"string"},description:""},errorCaption:{required:!0,tsType:{name:"signature",type:"function",raw:"(errorText: string) => JSX.Element",signature:{arguments:[{type:{name:"string"},name:"errorText"}],return:{name:"JSX.Element"}}},description:""},handleCardOwnerNameChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};export{I as C};
