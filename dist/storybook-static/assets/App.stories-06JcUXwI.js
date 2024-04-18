import{j as e}from"./jsx-runtime-BnIj46N_.js";import{r as I}from"./index-CsdIBAqE.js";import{u,d as w}from"./styled-components.browser.esm-BniCmjBm.js";import{C as n}from"./Caption-Bf30slGY.js";import{C as _}from"./CardPreview-BG7joY3v.js";import{C as q}from"./index-CQRRFVIQ.js";import{E as D}from"./index-D3-AgeyY.js";import{C as k}from"./index-Dw8HS8QM.js";import{b as c,C as l}from"./card-app-D2z3bZa1.js";import"./Label-CjMvsCqX.js";import"./Input-BIqY51RL.js";const b=({children:t})=>e.jsx(v,{children:t}),v=u.main`
  padding: 18px 32px;
  width: 315px;
  height: 43.75rem;

  display: flex;
  flex-direction: column;

  background-color: #ffffff;

  border-radius: 8px;
`;b.__docgenInfo={description:"",methods:[],displayName:"InputPageLayout",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const s=({text:t})=>e.jsx(R,{children:t}),R=u.h3`
  color: #000000;
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;

  margin-bottom: 4px;
`;s.__docgenInfo={description:"",methods:[],displayName:"InputTitle",props:{text:{required:!0,tsType:{name:"string"},description:""}}};const g=()=>{const[t,d]=I.useState({cardNumbers:["","","",""],expirationDate:["",""],cardOwner:""}),N=(r,o)=>{const a=[...t.cardNumbers];a[r]=o,d(p=>({...p,cardNumbers:a}))},j=(r,o)=>{const a=[...t.expirationDate];a[r]=o,d(p=>({...p,expirationDate:a}))},C=r=>{d(o=>({...o,cardOwner:r}))};return e.jsxs(b,{children:[e.jsx(_,{cardInfo:t}),e.jsx(s,{text:c.cardNumberInput}),e.jsx(n,{text:l.cardNumberInput,type:"input"}),e.jsx(q,{cardNumbers:t.cardNumbers,errorCaption:r=>e.jsx(n,{text:r,type:"error"}),handleCardNumberChange:N}),e.jsx(s,{text:c.expirationDate}),e.jsx(n,{text:l.expirationDate,type:"input"}),e.jsx(D,{expirationDate:t.expirationDate,errorCaption:r=>e.jsx(n,{text:r,type:"error"}),handleExpirationDateChange:j}),e.jsx(s,{text:c.cardOwner}),e.jsx(k,{ownerName:t.cardOwner,errorCaption:r=>e.jsx(n,{text:r,type:"error"}),handleCardOwnerNameChange:C})]})};g.__docgenInfo={description:"",methods:[],displayName:"NewCardInputPage"};const h=({children:t})=>e.jsx(E,{children:t}),E=u.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #f5f5f5;
  overflow-y: scroll;
`;h.__docgenInfo={description:"",methods:[],displayName:"AppLayout",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const O=w`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  * {
    user-select: none;
  }
  body {
    font-family: sans-serif;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  button {
    border: none;
  }
  input[type="text"]{
    padding: 0;
    padding-inline: 0;
    padding-block: 0;
  }
`;function y(){return e.jsxs(e.Fragment,{children:[e.jsx(O,{}),e.jsx(h,{children:e.jsx(g,{})})]})}y.__docgenInfo={description:"",methods:[],displayName:"App"};const $={title:"App",component:y},i={};var m,f,x;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(x=(f=i.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const B=["Default"];export{i as Default,B as __namedExportsOrder,$ as default};
