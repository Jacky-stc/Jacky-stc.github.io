"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2228],{9820:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"Leetcode/Longest Substring Without Repeating Characters","title":"3. Longest Substring Without Repeating Characters","description":"3. Longest Substring Without Repeating Characters","source":"@site/docs/Leetcode/3. Longest Substring Without Repeating Characters.md","sourceDirName":"Leetcode","slug":"/Leetcode/Longest Substring Without Repeating Characters","permalink":"/Leetcode/Longest Substring Without Repeating Characters","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Leetcode/3. Longest Substring Without Repeating Characters.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"3. Longest Substring Without Repeating Characters","hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"JavaScript \u539f\u578b\u93c8","permalink":"/JavaScript/JavaScript \u539f\u578b\u93c8"},"next":{"title":"28. Find the Index of the First Occurrence in a String","permalink":"/Leetcode/Find the Index of the First Occurrence in a String"}}');var r=n(4848),i=n(8453);const o={title:"3. Longest Substring Without Repeating Characters",hide_title:!0},a=void 0,c={},h=[{value:"3. Longest Substring Without Repeating Characters",id:"3-longest-substring-without-repeating-characters",level:2},{value:"\u89e3\u6cd5\u4e00\uff08\u6642\u9593\u8907\u96dc\u5ea6On^2\uff0c\u7a7a\u9593\u8907\u96dc\u5ea6O1\uff09",id:"\u89e3\u6cd5\u4e00\u6642\u9593\u8907\u96dc\u5ea6on2\u7a7a\u9593\u8907\u96dc\u5ea6o1",level:3},{value:"\u6ed1\u52d5\u7a97\u53e3\u7b97\u6cd5 - Sliding Window Algorithm\uff08\u6642\u9593\u8907\u96dc\u5ea6On\uff0c\u7a7a\u9593\u8907\u96dc\u5ea6On\uff09",id:"\u6ed1\u52d5\u7a97\u53e3\u7b97\u6cd5---sliding-window-algorithm\u6642\u9593\u8907\u96dc\u5ea6on\u7a7a\u9593\u8907\u96dc\u5ea6on",level:3}];function l(e){const t={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"3-longest-substring-without-repeating-characters",children:"3. Longest Substring Without Repeating Characters"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["Given a string ",(0,r.jsx)(t.code,{children:"s"})," , find the length of the longest substring without repeating characters."]}),"\n"]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:'Example 1:\nInput: s = "abcabcbb"\nOutput: 3\nExplanation: The answer is "abc", with the length of 3.'}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"\u89e3\u6cd5\u4e00\u6642\u9593\u8907\u96dc\u5ea6on2\u7a7a\u9593\u8907\u96dc\u5ea6o1",children:"\u89e3\u6cd5\u4e00\uff08\u6642\u9593\u8907\u96dc\u5ea6On^2\uff0c\u7a7a\u9593\u8907\u96dc\u5ea6O1\uff09"}),"\n",(0,r.jsx)(t.p,{children:"\u6bd4\u5c0d\u622a\u81f3\u76ee\u524d\u7684substring\u4e2d\u662f\u5426\u5305\u542b\u76ee\u6a19\u5b57\u8a5e\uff0c\u5982\u679c\u6709\u7684\u8a71\u5c31\u4fdd\u7559\u539f\u5148\u7684substring\u4e2d\u76ee\u6a19\u5b57\u8a5e\u4e4b\u5f8c\u7684\u5b57\u4e32\u8207\u76ee\u6a19\u5b57\u8a5e\u7d44\u6210\u65b0\u7684substring"}),"\n",(0,r.jsxs)(t.p,{children:["\u7f3a\u9ede\uff1a",(0,r.jsx)(t.code,{children:"Array.includes()"})," \u4ee5\u53ca ",(0,r.jsx)(t.code,{children:"String.includes()"})," \u90fd\u5c6c\u65bc\u6642\u9593\u8907\u96dc\u5ea6\u70baOn\u7684\u51fd\u5f0f\uff0c\u56e0\u6b64\u5728for\u8ff4\u5708\u4e2d\u4f7f\u7528\u6703\u4f7f\u5f97\u6574\u9ad4\u51fd\u5f0f\u7684\u6642\u9593\u8907\u96dc\u5ea6\u5927\u5e45\u4e0a\u5347"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"var lengthOfLongestSubstring = function(s) {\n    if(s.length === 0){\n        return 0\n    }\n    let stringNow = '';\n    let result = 0;\n    for(const sub of s){\n        if(stringNow.includes(sub)){\n            // \u5982\u679c\u767c\u73fe\u91cd\u8907\u7684\uff0c\u5c31\u5c07\u91cd\u8907\u5b57\u8a5e\u4e4b\u5f8c\u7684\u90e8\u4efd\u52a0\u4e0a\u7576\u524d\u5b57\u8a5e\u7d44\u6210\u65b0\u7684\u5b57\u4e32\n            stringNow = stringNow.slice(stringNow.indexOf(sub) + 1) + sub\n        }else{\n            // \u6c92\u6709\u7684\u8a71\u5c31\u76f4\u63a5\u5ef6\u4f38\u7576\u524d\u5b57\u4e32\n            stringNow = stringNow + sub\n        }\n        result = Math.max(result, stringNow.length)\n    }\n    return result\n};\n"})}),"\n",(0,r.jsx)(t.h3,{id:"\u6ed1\u52d5\u7a97\u53e3\u7b97\u6cd5---sliding-window-algorithm\u6642\u9593\u8907\u96dc\u5ea6on\u7a7a\u9593\u8907\u96dc\u5ea6on",children:"\u6ed1\u52d5\u7a97\u53e3\u7b97\u6cd5 - Sliding Window Algorithm\uff08\u6642\u9593\u8907\u96dc\u5ea6On\uff0c\u7a7a\u9593\u8907\u96dc\u5ea6On\uff09"}),"\n",(0,r.jsxs)(t.p,{children:["\u900f\u904e\u6ed1\u52d5\u7a97\u53e3\u7b97\u6cd5\u7d50\u5408hash map\uff0c\u53ef\u4ee5\u5c07\u539f\u5148\u9700\u8981\u5169\u6b21\u905e\u8ff4\u7684\u554f\u984c\u7c21\u5316\u6210\u55ae\u5c64\u904d\u6b77\u7684\u554f\u984c\uff0c\u8a2d\u5b9a\u5169\u500b\u908a\u754c\uff08left\u3001right\uff0c\u5169\u8005\u7684\u521d\u59cb\u503c\u7686\u70ba0\uff0c\u4e5f\u5c31\u662f\u8d77\u9ede\uff09\uff0c\u7576\u905e\u8ff4\u958b\u59cb\u5f8c ",(0,r.jsx)(t.code,{children:"right"})," \u908a\u754c\u6703\u81ea\u7136\u5730\u5411\u53f3\u908a\u64f4\u5c55\uff0c\u6211\u5011\u53ea\u9700\u8981\u8a2d\u5b9a\u689d\u4ef6\u8b93 ",(0,r.jsx)(t.code,{children:"left"})," \u908a\u754c\u5728\u904e\u7a0b\u4e2d\u80fd\u5920\u7e2e\u5c0f\u5230\u6211\u5011\u60f3\u8981\u7684\u7bc4\u570d\uff0c\u5c31\u50cf\u4e00\u500b\u4e0d\u65b7\u5f80\u53f3\u908a\u6ed1\u52d5\u7684\u7a97\u53e3\uff0c\u9019\u6a23\u53ea\u9700\u8981\u6bd4\u5c0d\u6bcf\u4e00\u500b\u7a97\u53e3\u7684\u5927\u5c0f\u5c31\u80fd\u5f97\u51fa\u6211\u5011\u60f3\u8981\u7684\u7b54\u6848\u3002"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"var lengthOfLongestSubstring = function(s) {\n    if(s.length === 0){\n        return 0\n    }\n    let hashMap = new Map()\n    let left = 0;\n    let result = 0;\n    for(let right = 0; right < s.length; right++){\n        // \u7576hashMap\u4e2d\u6709\u5df2\u7d93\u51fa\u73fe\u904e\u7684\u5b57\u4e32\uff0c\u800c\u4e14\u9019\u500b\u5b57\u4e32\u7684\u4f4d\u7f6e\u5927\u65bc\u7b49\u65bc\u5de6\u908a\u754c\uff08\u4e5f\u5c31\u662f\u4f4d\u65bc\u5de6\u53f3\u908a\u754c\u7684\u7a97\u53e3\u4e4b\u4e2d\uff09\uff0c\u6211\u5011\u5c31\u628a\u5de6\u908a\u754c\u79fb\u52d5\u81f3\u91cd\u8907\u5b57\u4e32\u7684\u4e0b\u4e00\u500b\u5b57\u4e32\n        if(hashMap.has(s[right]) && hashMap.get(s[right]) >= left){\n            left = hashMap.get(s[right]) +1\n        }\n        // \u63a5\u8457\u6bcf\u4e00\u6b21\u905e\u8ff4\u90fd\u9700\u8981\u8a2d\u5b9a\u53f3\u908a\u754c\n        hashMap.set(s[right], right)\n        // \u6bd4\u5c0d\u9019\u4e00\u6b21\u7684\u7a97\u53e3\uff08right - left +1\uff09\u8207\u5148\u524d\u7a97\u53e3\u5927\u5c0f\n        result = Math.max(result, right-left+1)\n    }\n    return result\n};\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(6540);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);