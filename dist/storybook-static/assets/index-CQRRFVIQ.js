import{j as n}from"./jsx-runtime-BnIj46N_.js";import{r as h}from"./index-CsdIBAqE.js";import{L as f}from"./Label-CjMvsCqX.js";import{I as y}from"./Input-BIqY51RL.js";import{I as x,a as I,V as b}from"./card-app-D2z3bZa1.js";import{u as m}from"./styled-components.browser.esm-BniCmjBm.js";const E=({cardNumbers:a,errorCaption:s,handleCardNumberChange:u})=>{const[i,p]=h.useState(Array.from({length:a.length}).fill(!1)),l=(t,e)=>{const r=/^(\d*)$/.test(e),c=e.length===4;p(g=>{const o=[...g];return o[t]=!r||!c,o}),r&&u(t,e)},d=i.some(t=>t);return n.jsxs(N,{children:[n.jsx(f,{htmlFor:"card-number",children:x.cardNumberInput}),n.jsx(C,{children:Array.from({length:a.length},(t,e)=>n.jsx(y,{id:e===0?"card-number":"",type:"text",placeholder:"1234",value:a[e],maxLength:I.maxCardNumberPartLength,size:"small",isError:i[e],onChange:r=>l(e,r.target.value)},`input-${e}`))}),s(d?b.onlyNumbersAllowed:"")]})},N=m.section`
  height: 77px;
  width: 315px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 16px;
  margin-bottom: 16px;
`,C=m.div`
  display: flex;
  justify-content: space-between;
`;E.__docgenInfo={description:"",methods:[],displayName:"CardNumberInput",props:{cardNumbers:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},errorCaption:{required:!0,tsType:{name:"signature",type:"function",raw:"(text: string) => JSX.Element",signature:{arguments:[{type:{name:"string"},name:"text"}],return:{name:"JSX.Element"}}},description:""},handleCardNumberChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number, value: string) => void",signature:{arguments:[{type:{name:"number"},name:"index"},{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};export{E as C};
