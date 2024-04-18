import{u as E,j as s}from"./styled-components.browser.esm-DJlf8wgo.js";import{r as p}from"./index-CsdIBAqE.js";import{L as v}from"./Label--eTZwL6Y.js";import{I as h}from"./Input-D4uOsqIB.js";import{I as y,a as x,V as D}from"./card-app-D2z3bZa1.js";const w={validateMonth(e){return e.length===0?!0:!(e.length!==2||e[0]!=="0"&&e[0]!=="1"||parseInt(e,10)<1||parseInt(e,10)>12)},validateYear(e){if(e.length===0)return!0;if(e.length!==2)return!1;const n=new Date().getFullYear()%100;return parseInt(e,10)>=n},validateFutureDate(e,r){return!(new Date().getTime()>new Date(2e3+r,e,0).getTime())},validateExpiration(e){const[r,n]=e;if(!this.validateMonth(r)||!this.validateYear(n))return!1;const[a,u]=e.map(i=>parseInt(i,10));return!!this.validateFutureDate(a,u)}},L=({expirationDate:e,errorCaption:r,handleExpirationDateChange:n})=>{const[a,u]=p.useState(Array.from({length:e.length}).fill(!1)),i=p.useRef(null),o=p.useRef(null),m=(t,c)=>{const d=/^(\d*)$/.test(c);if(!i.current||!o.current)return;const f=w.validateExpiration([i.current.value,o.current.value]);if(u(l=>{const g=[...l];return g[t]=!f||!d,g}),!!d){if(f){const l=Array.from({length:e.length}).fill(!1);u(l)}n(t,c)}},I=()=>a.some(t=>t);return s.jsxs(T,{children:[s.jsx(v,{htmlFor:"expiration-date",children:y.expirationDate}),s.jsxs(j,{children:[s.jsx(h,{ref:i,id:"expiration-date",type:"text",placeholder:"MM",value:e[0],maxLength:x.maxExpirationDateLength,size:"medium",isError:a[0],onChange:t=>{m(0,t.target.value)}}),s.jsx(h,{ref:o,type:"text",placeholder:"YY",value:e[1],maxLength:x.maxExpirationDateLength,size:"medium",isError:a[1],onChange:t=>{m(1,t.target.value)}})]}),I()?r(D.invalidDate):r("")]})},T=E.section`
  height: 77px;
  width: 315px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 16px;
  margin-bottom: 16px;
`,j=E.div`
  display: flex;
  justify-content: space-between;
`;L.__docgenInfo={description:"",methods:[],displayName:"ExpirationDateInput",props:{expirationDate:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},errorCaption:{required:!0,tsType:{name:"signature",type:"function",raw:"(errorText: string) => JSX.Element",signature:{arguments:[{type:{name:"string"},name:"errorText"}],return:{name:"JSX.Element"}}},description:""},handleExpirationDateChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number, value: string) => void",signature:{arguments:[{type:{name:"number"},name:"index"},{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};export{L as E};
