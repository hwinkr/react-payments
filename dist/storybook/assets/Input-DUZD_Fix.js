import{j as i}from"./jsx-runtime-BnIj46N_.js";import{r as p}from"./index-CsdIBAqE.js";import{u as s}from"./styled-components.browser.esm-BniCmjBm.js";const n={small:"72px",medium:"152px",large:"315px"},x=p.forwardRef(({inputSize:t,isError:o,onChange:r,...d},e)=>i.jsx(a,{ref:e,onChange:r,width:n[t],isError:o,...d})),a=s.input`
  height: 32px;
  width: ${({width:t})=>t};

  outline: none;
  border: ${({isError:t})=>t?"1px solid #ff3d3d":"1px solid #acacac"};
  &:focus {
    border: ${({isError:t})=>t?"1px solid #ff3d3d":"1px solid #000000"};
  }

  font-size: 11px;
  text-indent: 0.5rem;
  border-radius: 2px;
`;x.__docgenInfo={description:"",methods:[],displayName:"Input"};export{x as I};
