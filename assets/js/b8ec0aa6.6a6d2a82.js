"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1713],{4490:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>u,default:()=>l,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"Leetcode/Missing Number","title":"268. Missing Number","description":"268. Missing Number","source":"@site/docs/Leetcode/268. Missing Number.md","sourceDirName":"Leetcode","slug":"/Leetcode/Missing Number","permalink":"/Leetcode/Missing Number","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Leetcode/268. Missing Number.md","tags":[{"inline":true,"label":"leetcode","permalink":"/tags/leetcode"}],"version":"current","sidebarPosition":268,"frontMatter":{"title":"268. Missing Number","tags":["leetcode"],"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"53. Maximum Subarray","permalink":"/Leetcode/Maximum Subarray"},"next":{"title":"Client Component\u3001Server Compon","permalink":"/React/Client Component\u3001Server Component"}}');var s=t(4848),i=t(8453);const o={title:"268. Missing Number",tags:["leetcode"],hide_title:!0},u=void 0,a={},c=[{value:"268. Missing Number",id:"268-missing-number",level:2}];function m(e){const n={blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"268-missing-number",children:"268. Missing Number"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u5047\u8a2darray\u9577\u5ea6\u70ba3\uff0c\u5728array\u4e2d\u61c9\u8a72\u8981\u51fa\u73fe0,1,2,3\uff0cnums\u70ba[3,0,1]\uff0c\u5247\u7f3a\u5c11\u7684\u6578\u70ba2\u3002\n\u7531\u65bc\u9664\u4e86\u7f3a\u5c11\u7684\u6578\u5b57\u5916\u5176\u4ed6\u6578\u5b57\u90fd\u6703\u51fa\u73fe\uff0c\u6240\u4ee5\u53ef\u4ee5\u900f\u904e\u300c\u6240\u6709\u6578\u5b57\u52a0\u7e3d\u300d-\u300carray\u4e2d\u7684\u6578\u5b57\u52a0\u7e3d\u300d\u4f86\u627e\u5230\u7f3a\u5c11\u7684\u6578\u5b57\u70ba\u4f55"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"var missingNumber = function(nums) {\n    // \u9996\u5148\u8a08\u7b97\u82e5\u5168\u90e8\u6578\u5b57\u90fd\u51fa\u73fe\u7684\u7e3d\u548c\n    // \u4e5f\u5c31\u662f\u4e0a\u5e95\u52a0\u4e0b\u5e95(0+nums.length) * \u9ad8(nums.length + 1) /2\n    const sum = nums.length * (nums.length+1) /2\n    // \u63a5\u8457\u900f\u904earray.reduce function\u8a08\u7b97array\u4e2d\u51fa\u73fe\u6578\u5b57\u7e3d\u548c\n    const result = sum - nums.reduce((accu, curr)=>accu + curr, 0)\n    // \u5169\u8005\u76f8\u6e1b\u5f97\u51fa\u7f3a\u5c11\u7684\u6578\u5b57\n    return result\n};\n"})})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>u});var r=t(6540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);