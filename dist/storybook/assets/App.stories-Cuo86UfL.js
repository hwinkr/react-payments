import{u,j as e,d as I}from"./styled-components.browser.esm-DJlf8wgo.js";import{r as w}from"./index-CsdIBAqE.js";import{C as n}from"./Caption-CINxdO7a.js";import{C as _}from"./CardPreview-C1rg-qjk.js";import{C as q}from"./index-4lsL4J6Z.js";import{E as D}from"./index-BoNa9XzS.js";import{C as k}from"./index-BG-_ZgEa.js";import{b as c,C as l}from"./card-app-D2z3bZa1.js";import"./Label--eTZwL6Y.js";import"./Input-D4uOsqIB.js";const b=({children:t})=>e.jsx(v,{children:t}),v=u.main`
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
`;s.__docgenInfo={description:"",methods:[],displayName:"InputTitle",props:{text:{required:!0,tsType:{name:"string"},description:""}}};const g=()=>{const[t,d]=w.useState({cardNumbers:["","","",""],expirationDate:["",""],cardOwner:""}),N=(r,o)=>{const a=[...t.cardNumbers];a[r]=o,d(p=>({...p,cardNumbers:a}))},j=(r,o)=>{const a=[...t.expirationDate];a[r]=o,d(p=>({...p,expirationDate:a}))},C=r=>{d(o=>({...o,cardOwner:r}))};return e.jsxs(b,{children:[e.jsx(_,{cardInfo:t}),e.jsx(s,{text:c.cardNumberInput}),e.jsx(n,{text:l.cardNumberInput,type:"input"}),e.jsx(q,{cardNumbers:t.cardNumbers,errorCaption:r=>e.jsx(n,{text:r,type:"error"}),handleCardNumberChange:N}),e.jsx(s,{text:c.expirationDate}),e.jsx(n,{text:l.expirationDate,type:"input"}),e.jsx(D,{expirationDate:t.expirationDate,errorCaption:r=>e.jsx(n,{text:r,type:"error"}),handleExpirationDateChange:j}),e.jsx(s,{text:c.cardOwner}),e.jsx(k,{ownerName:t.cardOwner,errorCaption:r=>e.jsx(n,{text:r,type:"error"}),handleCardOwnerNameChange:C})]})};g.__docgenInfo={description:"",methods:[],displayName:"NewCardInputPage"};const h=({children:t})=>e.jsx(E,{children:t}),E=u.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #f5f5f5;
  overflow-y: scroll;
`;h.__docgenInfo={description:"",methods:[],displayName:"AppLayout",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const O=I`
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
`;function y(){return e.jsxs(e.Fragment,{children:[e.jsx(O,{}),e.jsx(h,{children:e.jsx(g,{})})]})}y.__docgenInfo={description:"",methods:[],displayName:"App"};const Y={title:"App",component:y},i={};var m,f,x;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(x=(f=i.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const $=["Default"];export{i as Default,$ as __namedExportsOrder,Y as default};
