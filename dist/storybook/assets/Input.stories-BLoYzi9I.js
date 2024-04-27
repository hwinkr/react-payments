import{j as u}from"./jsx-runtime-BnIj46N_.js";import{I as l}from"./Input-DUZD_Fix.js";import{r as c}from"./index-CsdIBAqE.js";import{f as d}from"./index-BASH1HpE.js";import"./styled-components.browser.esm-BniCmjBm.js";const y={title:"Input",component:l,parameters:{layout:"centered"},argTypes:{inputSize:{type:"string",control:"radio",options:["small","medium","large"]}},args:{onChange:d()},decorators:[(o,t)=>{const[n,p]=c.useState(t.args.value),i=m=>p(m.target.value);return u.jsx(o,{args:{...t.args,value:n,onChange:i}})}],tags:["autodocs"]},e={args:{id:"input-test",type:"text",placeholder:"test",value:"",maxLength:10,inputSize:"medium",isError:!1}};var r,a,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    id: "input-test",
    type: "text",
    placeholder: "test",
    value: "",
    maxLength: 10,
    inputSize: "medium",
    isError: false
  }
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const E=["Default"];export{e as Default,E as __namedExportsOrder,y as default};
