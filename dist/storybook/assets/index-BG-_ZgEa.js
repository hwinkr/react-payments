import{u,j as r}from"./styled-components.browser.esm-DJlf8wgo.js";import{r as d}from"./index-CsdIBAqE.js";import{L as c}from"./Label--eTZwL6Y.js";import{I as l}from"./Input-D4uOsqIB.js";import{I as g,V as x,a as h}from"./card-app-D2z3bZa1.js";const I=({ownerName:i,errorCaption:t,handleCardOwnerNameChange:o})=>{const[n,p]=d.useState(!1),m=e=>{const a=/^[a-zA-Z ]*$/.test(e),s=e.length<=h.maxCardOwnerNameLength;p(!a||!s),!(!a||!s)&&o(e.toUpperCase())};return r.jsxs(w,{children:[r.jsx(c,{htmlFor:"card-owner",children:g.cardOwnerNameInput}),r.jsx(l,{id:"card-owner",type:"text",placeholder:"JOHN DOE",value:i,size:"large",isError:n,onChange:e=>{m(e.target.value)}}),t(n?x.invalidOwnerName:"")]})},w=u.section`
  height: 77px;
  width: 315px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 16px;
  margin-bottom: 16px;
`;I.__docgenInfo={description:"",methods:[],displayName:"CardOwnerNameInput",props:{ownerName:{required:!0,tsType:{name:"string"},description:""},errorCaption:{required:!0,tsType:{name:"signature",type:"function",raw:"(errorText: string) => JSX.Element",signature:{arguments:[{type:{name:"string"},name:"errorText"}],return:{name:"JSX.Element"}}},description:""},handleCardOwnerNameChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};export{I as C};
