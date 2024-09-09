"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[839],{6525:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>t,toc:()=>i});var a=r(4848),s=r(8453);const c={title:"useCallbackRef",description:"API reference for the useCallbackRef hook",tags:["hooks","refs","callbacks","effects"]},o=void 0,t={id:"docs/core/helper-plugin/hooks/use-callback-ref",title:"useCallbackRef",description:"API reference for the useCallbackRef hook",source:"@site/docs/docs/01-core/helper-plugin/hooks/use-callback-ref.mdx",sourceDirName:"docs/01-core/helper-plugin/hooks",slug:"/docs/core/helper-plugin/hooks/use-callback-ref",permalink:"/docs/core/helper-plugin/hooks/use-callback-ref",draft:!1,unlisted:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/docs/01-core/helper-plugin/hooks/use-callback-ref.mdx",tags:[{label:"hooks",permalink:"/tags/hooks"},{label:"refs",permalink:"/tags/refs"},{label:"callbacks",permalink:"/tags/callbacks"},{label:"effects",permalink:"/tags/effects"}],version:"current",frontMatter:{title:"useCallbackRef",description:"API reference for the useCallbackRef hook",tags:["hooks","refs","callbacks","effects"]},sidebar:"docs",previous:{title:"useAPIErrorHandler",permalink:"/hooks/use-api-error-handler"},next:{title:"useClipboard",permalink:"/docs/core/helper-plugin/hooks/use-clipboard"}},l={},i=[{value:"Usage",id:"usage",level:2},{value:"Typescript",id:"typescript",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["A custom hook that converts a callback to a ref to avoid triggering re-renders when passed as a\nprop or avoid re-executing effects when passed as a dependency. Helpful for working with ",(0,a.jsx)(n.code,{children:"modifiedData"}),"\nor ",(0,a.jsx)(n.code,{children:"initialData"})," in the content-manager."]}),"\n",(0,a.jsxs)(n.p,{children:["Borrowed from ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@radix-ui/react-use-callback-ref",children:(0,a.jsx)(n.code,{children:"@radix-ui/react-use-callback-ref"})}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"import { useCallbackRef } from '@strapi/helper-plugin';\n\nconst MyComponent = ({ callbackFromSomewhere }) => {\n  const mySafeCallback = useCallbackRef(callbackFromSomewhere);\n\n  useEffect(() => {\n    const handleKeyDown = (event) => {\n      mySafeCallback(event);\n    };\n\n    document.addEventListener('keydown', handleKeyDown);\n\n    return () => document.removeEventListener('keydown', handleKeyDown);\n  }, [mySafeCallback]);\n\n  return <div>{children}</div>;\n};\n"})}),"\n",(0,a.jsx)(n.h2,{id:"typescript",children:"Typescript"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"function useCallbackRef<T extends (...args: any[]) => any>(callback: T | undefined): T;\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>t});var a=r(6540);const s={},c=a.createContext(s);function o(e){const n=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(c.Provider,{value:n},e.children)}}}]);