"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2534],{7136:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"React/useRef","title":"useRef","description":"useRef \u7c21\u4ecb","source":"@site/docs/React/useRef.md","sourceDirName":"React","slug":"/React/useRef","permalink":"/React/useRef","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/React/useRef.md","tags":[],"version":"current","frontMatter":{"title":"useRef","hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"What is React Query","permalink":"/React/What is React Query"},"next":{"title":"Immutable State","permalink":"/Redux/Immutable State"}}');var s=t(4848),c=t(8453);const i={title:"useRef",hide_title:!0},u=void 0,o={},l=[{value:"useRef \u7c21\u4ecb",id:"useref-\u7c21\u4ecb",level:3},{value:"useRef \u7684\u7279\u6027",id:"useref-\u7684\u7279\u6027",level:3}];function a(e){const n={blockquote:"blockquote",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"useref-\u7c21\u4ecb",children:"useRef \u7c21\u4ecb"}),"\n",(0,s.jsx)(n.p,{children:"useRef\u53ef\u4ee5\u8b93\u4f60\u5f15\u7528\u4e00\u500b\u4e0d\u9700\u8981\u6e32\u67d3\u7684\u503c"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const ref = useRef(initialValue)\n// initialValue: \u4f60\u5e0c\u671b\u7684useRef\u8d77\u59cb\u503c\n"})}),"\n",(0,s.jsxs)(n.p,{children:["useRef \u56de\u50b3\u4e00\u500b",(0,s.jsx)(n.code,{children:"ref object"}),"\uff0c\u5176\u4e2d",(0,s.jsx)(n.code,{children:"current"}),"\u6700\u521d\u7684\u503c\u6703\u8a2d\u5b9a\u70ba\u4f60\u6240\u586b\u5165\u7684initialValue."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"{ \n  current: 0 // The value you passed to useRef\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"useref-\u7684\u7279\u6027",children:"useRef \u7684\u7279\u6027"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"useRef \u548c useState\u6700\u5927\u7684\u5dee\u5225\u5728\u65bc\uff0cref\u7684\u66f4\u65b0\u4e0d\u6703\u5c0e\u81f4component\u7684re-render"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:['\u7576\u4f60\u60f3\u8981\u4f60\u7684component"\u8a18\u4f4f"\u67d0\u4e9b\u8cc7\u8a0a\uff0c\u4f46\u662f\u53c8\u4e0d\u5e0c\u671b\u9019\u4e9b\u8cc7\u8a0a\u7684\u66f4\u65b0\u6703\u5c0e\u81f4re-render\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528 ',(0,s.jsx)(n.code,{children:"useRef"})]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4f60\u53ef\u4ee5\u5728\u6bcf\u6b21\u7684\u6e32\u67d3\u4e4b\u9593\u5132\u5b58\u8cc7\u6599(\u4e0d\u50cfvariables\u6bcf\u6b21\u6e32\u67d3\u90fd\u6703\u56de\u5230\u9810\u8a2d\u503c)"}),"\n",(0,s.jsx)(n.li,{children:"\u66f4\u65b0\u4e0d\u6703\u5c0e\u81f4component re-render"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ref.current"})," \u662fmutable\u7684\uff0c\u53ef\u4ee5\u76f4\u63a5\u91cd\u65b0\u8ce6\u503c\uff0c\u8207 ",(0,s.jsx)(n.code,{children:"state"})," \u4e0d\u540c"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4f46\u7531\u65bc\u66f4\u65b0 ",(0,s.jsx)(n.code,{children:"ref"})," \u4e0d\u6703\u767c\u751fre-render\u7684\u7279\u6027\uff0c\u56e0\u6b64\u6211\u5011\u61c9\u8a72\u907f\u514d\u5728\u756b\u9762\u6e32\u67d3\u6216\u662f\u6e32\u67d3\u7684\u904e\u7a0b\u4e2d\u8b80\u53d6\u6216\u66f4\u65b0 ",(0,s.jsx)(n.code,{children:"ref"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"// DON'T USE useRef LIKE THIS!\nimport { useRef } from 'react';\n\nexport default function Counter() {\n  let countRef = useRef(0);\n\n  function handleClick() {\n    // This doesn't re-render the component!\n    countRef.current = countRef.current + 1;\n  }\n\n  return (\n    <button onClick={handleClick}>\n      You clicked {countRef.current} times\n    </button>\n  );\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4e0a\u9762\u7684\u7a0b\u5f0f\u4e2d\uff0c\u6211\u5011\u5e0c\u671b\u5c07",(0,s.jsx)(n.code,{children:"countRef.current"}),"\u6e32\u67d3\u5728\u756b\u9762\u4e0a\uff0c\u4f46\u662f\u4e0d\u7ba1\u6211\u5011\u9ede\u64ca\u591a\u5c11\u6b21\uff0c",(0,s.jsx)(n.code,{children:"countRef.current"}),"\u7684\u6539\u8b8a\u90fd\u4e0d\u6703\u9020\u6210re-render\uff0c\u56e0\u6b64\u756b\u9762\u6c38\u9060\u5448\u73fe\u7684\u90fd\u662f ",(0,s.jsx)(n.code,{children:"initialValue"})," \u7684 ",(0,s.jsx)(n.code,{children:"You clicked 0 times"})," ."]})]})}function d(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>u});var r=t(6540);const s={},c=r.createContext(s);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);