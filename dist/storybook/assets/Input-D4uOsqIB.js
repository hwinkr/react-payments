import{j as i,u as p}from"./styled-components.browser.esm-DJlf8wgo.js";import{r as s}from"./index-CsdIBAqE.js";const n={small:"72px",medium:"152px",large:"315px"},x=s.forwardRef(({size:t,isError:o,onChange:d,...e},r)=>i.jsx(a,{ref:r,onChange:d,width:n[t],isError:o,...e})),a=p.input`
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
