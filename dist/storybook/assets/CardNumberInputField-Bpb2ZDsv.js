import{j as t}from"./jsx-runtime-BnIj46N_.js";import{r as n}from"./index-CsdIBAqE.js";import{u as E,a as r}from"./index-C6xO60ws.js";import{u as S}from"./useFocusChain-Bxgo1vRs.js";import{I as j}from"./Input-DUZD_Fix.js";import{I as _,V as g,C as A}from"./card-app-D7gcX8L8.js";const y=()=>{const d=n.useRef(null),c=n.useRef(null),p=n.useRef(null),f=n.useRef(null),a=[d,c,p,f],{formFieldState:I,isValidFormField:x,handleFormFieldFocus:F,dispatch:u}=E("cardNumbers"),{setFocusNext:R}=S(a),h=s=>{const{name:e,value:o}=s.target,i=/^(\d*)$/.test(o),m=o.length===4;u({type:"SET_ERROR",field:"cardNumbers",subField:e,isValid:!i||!m}),i&&(u({type:"SET_CARD_NUMBERS",subfield:e,value:o}),m&&R())},{query:b,labelText:N,caption:C}=A.cardNumbers,{value:l,errorState:T}=I;return t.jsxs(r,{children:[t.jsx(r.InputTitle,{text:b}),t.jsx(r.InfoText,{textType:"caption",text:C}),t.jsx(r.Label,{htmlFor:"card-number",labelText:N}),t.jsx(r.InputContent,{children:Object.keys(l).map((s,e)=>t.jsx(j,{ref:a[e],id:e===0?"card-number":"",type:"text",placeholder:"1234",name:s,value:l[s],maxLength:_.maxCardNumberPartLength,autoFocus:e===0,onFocus:F,inputSize:"small",isError:T[s],onChange:o=>h(o)},e))}),t.jsx(r.InfoText,{textType:"error",text:x?"":g.onlyNumbersAllowed})]})};y.__docgenInfo={description:"",methods:[],displayName:"CardNumberInputField"};export{y as C};
