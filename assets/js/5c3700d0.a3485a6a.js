"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9165],{2667:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>u});const c=JSON.parse('{"id":"JavaScript/Debounce in JavaScript","title":"Debounce in JavaScript","description":"Debounce","source":"@site/docs/JavaScript/Debounce in JavaScript.md","sourceDirName":"JavaScript","slug":"/JavaScript/Debounce in JavaScript","permalink":"/JavaScript/Debounce in JavaScript","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/JavaScript/Debounce in JavaScript.md","tags":[{"inline":true,"label":"JavaScript","permalink":"/tags/java-script"}],"version":"current","frontMatter":{"title":"Debounce in JavaScript","tags":["JavaScript"],"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"About","permalink":"/"},"next":{"title":"Event loop","permalink":"/JavaScript/Event loop"}}');var i=t(4848),a=t(8453);const r={title:"Debounce in JavaScript",tags:["JavaScript"],hide_title:!0},o=void 0,s={},u=[{value:"Debounce",id:"debounce",level:2},{value:"What is Debounce",id:"what-is-debounce",level:3},{value:"Debounce in JavaScript",id:"debounce-in-javascript",level:3}];function p(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"debounce",children:"Debounce"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u524d\u7aef\u958b\u767c\u7684\u904e\u7a0b\u4e2d\uff0c\u7d93\u5e38\u6703\u9047\u5230\u9700\u8981\u900f\u904e\u524d\u7aef\u767c\u9001API request\u81f3\u5f8c\u7aef\u7372\u53d6\u8cc7\u6599\uff0c\u50cf\u662f\u6309\u9215\u9ede\u64ca\u6216\u662f\u8f38\u5165\u641c\u5c0b\u7b49\u529f\u80fd\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u6700\u5b8c\u7f8e\u4e14\u7c21\u6613\u7684\u60c5\u6cc1\u4e0b\u662f\u91dd\u5c0d\u6bcf\u4e00\u6b21\u4e8b\u4ef6\u5075\u6e2c\u767c\u9001\u4e00\u500bAPI request\u5230\u5f8c\u7aef\uff0c\u4e26\u4e14\u5be6\u6642\u66f4\u65b0\u8cc7\u6599\uff0c\u4f46\u662f\u4f60\u53ef\u4ee5\u60f3\u50cf\u7576\u7528\u6236\u5728\u8f38\u5165\u6b04\u4f4d\u4e0d\u65b7\u5730\u8f38\u5165\u4e26\u522a\u9664\uff0c\u4e14\u540c\u6642\u9593\u53ef\u80fd\u6709\u4e0a\u842c\u540d\u7528\u6236\u5728\u4f7f\u7528\u9019\u500b\u529f\u80fd\u7684\u6642\u5019\uff0c\u6703\u7d66\u7db2\u7ad9\u5f8c\u7aef\u5e36\u4f86\u591a\u5927\u7684\u8ca0\u64d4\uff0c\u986f\u7136\u9019\u4e26\u4e0d\u662f\u4e00\u500b\u7406\u60f3\u7684\u505a\u6cd5\uff0c\u6b64\u6642\u5c31\u53ef\u4ee5\u900f\u904eDebounce\uff08\u9632\u6296\uff09\u4f86\u5c0d\u767c\u9001request\u7684\u904e\u7a0b\u9032\u884c\u9650\u5236\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"what-is-debounce",children:"What is Debounce"}),"\n",(0,i.jsx)(n.p,{children:"Debounce\u5176\u5be6\u4f86\u81ea\u65bc\u96fb\u5b50\u5b78\uff0c\u7576\u4f60\u6309\u4e0b\u96fb\u8996\u9059\u63a7\u7684\u6309\u9215\u5f8c\uff0c\u9019\u500b\u8a0a\u865f\u6703\u5feb\u901f\u5730\u50b3\u5c0e\u81f3\u9059\u63a7\u4e2d\u7684\u5fae\u6676\u7247(microchip)\uff0c\u7531\u65bc\u8a0a\u865f\u50b3\u5c0e\u7684\u901f\u5ea6\u592a\u5feb\uff0c\u4ee5\u81f3\u65bc\u5728\u4f60\u9b06\u958b\u6309\u9375\u4e4b\u524d\u6703\u591a\u6b21\u7d00\u9304\uff0c\u70ba\u4e86\u89e3\u6c7a\u9019\u500b\u554f\u984c\uff0c\u4e00\u65e6\u63a5\u6536\u5230\u4f86\u81ea\u6309\u9215\u7684\u8a0a\u865f\uff0c\u5fae\u6676\u7247\u5c31\u6703\u505c\u6b62\u8655\u7406\u4f86\u81ea\u6309\u9215\u7684\u8a0a\u865f\u5e7e\u5fae\u79d2\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"debounce-in-javascript",children:"Debounce in JavaScript"}),"\n",(0,i.jsx)(n.p,{children:"Debounce\u5728JavaScript\u4e2d\u4e5f\u662f\u985e\u4f3c\u7684\u529f\u80fd\uff0c\u6211\u5011\u9700\u8981\u5728\u89f8\u767c\u67d0\u500bfunction\u5f8c\u77ed\u66ab\u505c\u6b62\u4e00\u6bb5\u6642\u9593\uff0c\u7576\u6642\u9593\u5167\u6c92\u6709\u65b0\u7684\u4e8b\u4ef6\u89f8\u767c\u6211\u5011\u624d\u6703\u57f7\u884c\u6211\u5011\u60f3\u8981\u57f7\u884c\u7684function\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4ee5\u4e0b\u662fDebounce\u5728JavaScript\u7684\u5be6\u4f5c"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const debounce = (cb, time=300)=>{\n//     \u6211\u5011\u9700\u8981\u5728debounce\u50b3\u5165\u4e00\u500b\u6211\u5011\u5e0c\u671b\u57f7\u884c\u7684callback function\uff0c\u4ee5\u53ca\u5ef6\u9072\u7684\u6642\u9593\uff0c\u9810\u8a2d\u662f300\u6beb\u79d2\n    let timer;\n    return (...args)=>{\n        \n    }\n}\n"})})]})}function l(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var c=t(6540);const i={},a=c.createContext(i);function r(e){const n=c.useContext(a);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),c.createElement(a.Provider,{value:n},e.children)}}}]);