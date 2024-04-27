import{j as e}from"./jsx-runtime-BnIj46N_.js";import{u as N,a as t}from"./index-C6xO60ws.js";import{I as T}from"./Input-DUZD_Fix.js";import{V as C,I as f,C as h}from"./card-app-D7gcX8L8.js";import{a as E}from"./cardAddFormValidator-DbnJY0JF.js";const O=()=>{const{formFieldState:s,isValidFormField:i,handleFormFieldFocus:p,dispatch:a}=N("ownerName"),m=n=>{const{name:r,value:o}=n.target,d=/^[a-zA-Z ]*$/.test(o),l=o.length<=f.maxCardOwnerNameLength;a({type:"SET_ERROR",field:"ownerName",subField:r,isValid:!d||!l}),!(!d||!l)&&a({type:"SET_OWNER_NAME",value:o.toUpperCase()})},u=n=>{const r=E(s.value);n.key!=="Enter"||!r||a({type:"SET_DISPLAY",field:"cvcNumber"})},{value:c,errorState:x}=s,{query:I,labelText:F,caption:w}=h.ownerName;return e.jsxs(t,{children:[e.jsx(t.InputTitle,{text:I}),e.jsx(t.InfoText,{textType:"caption",text:w}),e.jsx(t.Label,{htmlFor:"expiration-date",labelText:F}),e.jsx(t.InputContent,{children:e.jsx(T,{id:"card-owner",type:"text",placeholder:"JOHN DOE",name:"ownerName",value:c.ownerName,inputSize:"large",autoFocus:!0,onFocus:p,onKeyDown:u,isError:x.ownerName,onChange:n=>{m(n)}})}),i?e.jsx(t.InfoText,{textType:"caption",text:"이름 입력이 완료되면 엔터를 눌러주세요"}):e.jsx(t.InfoText,{textType:"error",text:i?"":C.invalidOwnerName})]})};O.__docgenInfo={description:"",methods:[],displayName:"CardOwnerInputField"};export{O as C};
