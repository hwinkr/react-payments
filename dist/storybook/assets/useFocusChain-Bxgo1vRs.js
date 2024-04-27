const s=e=>({setFocusNext:()=>{const n=e.findIndex(c=>c.current&&c.current===document.activeElement)+1,t=e[n];n<e.length&&t.current&&t.current.focus()}});export{s as u};
