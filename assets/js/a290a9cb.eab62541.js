"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3456],{2403:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"JavaScript/Event loop","title":"Event loop","description":"Event loop","source":"@site/docs/JavaScript/Event loop.md","sourceDirName":"JavaScript","slug":"/JavaScript/Event loop","permalink":"/JavaScript/Event loop","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/JavaScript/Event loop.md","tags":[{"inline":true,"label":"JavaScript","permalink":"/tags/java-script"},{"inline":true,"label":"event loop","permalink":"/tags/event-loop"},{"inline":true,"label":"microtask","permalink":"/tags/microtask"},{"inline":true,"label":"call stack","permalink":"/tags/call-stack"},{"inline":true,"label":"queue","permalink":"/tags/queue"}],"version":"current","frontMatter":{"title":"Event loop","tags":["JavaScript","event loop","microtask","call stack","queue"],"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"Debounce in JavaScript","permalink":"/JavaScript/Debounce in JavaScript"},"next":{"title":"JavaScript Array functions","permalink":"/JavaScript/JavaScript Array functions"}}');var s=t(4848),o=t(8453);const l={title:"Event loop",tags:["JavaScript","event loop","microtask","call stack","queue"],hide_title:!0},r=void 0,a={},c=[{value:"Event loop",id:"event-loop",level:2},{value:"\u540c\u6b65\uff08Synchronous\uff09\u8207\u975e\u540c\u6b65\uff08Asynchronous\uff09",id:"\u540c\u6b65synchronous\u8207\u975e\u540c\u6b65asynchronous",level:3},{value:"\u540c\u6b65",id:"\u540c\u6b65",level:4},{value:"\u975e\u540c\u6b65",id:"\u975e\u540c\u6b65",level:4},{value:"Event Loop \u7d44\u6210",id:"event-loop-\u7d44\u6210",level:3},{value:"Event loop \u6d41\u7a0b",id:"event-loop-\u6d41\u7a0b",level:3},{value:"\u53c3\u8003\u8cc7\u6599\u4f86\u6e90",id:"\u53c3\u8003\u8cc7\u6599\u4f86\u6e90",level:3}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"event-loop",children:"Event loop"}),"\n",(0,s.jsx)(n.p,{children:"JavaScript\u5c6c\u65bc**\u55ae\u57f7\u884c\u7dd2\uff08Single threaded\uff09**\u7684\u8a9e\u8a00\uff0c\u8868\u793a\u4e00\u6b21\u53ea\u80fd\u8655\u7406\u4e00\u500b\u4efb\u52d9(task)\uff0c\u7576\u524d\u4efb\u52d9\u5b8c\u6210\u4e4b\u524d\u4e0d\u6703\u57f7\u884c\u4e0b\u4e00\u500b\u4efb\u52d9\uff0c\u9019\u500b\u6982\u5ff5\u7a31\u4e4b\u70ba\u540c\u6b65\uff08Synchronous\uff09"}),"\n",(0,s.jsx)(n.h3,{id:"\u540c\u6b65synchronous\u8207\u975e\u540c\u6b65asynchronous",children:"\u540c\u6b65\uff08Synchronous\uff09\u8207\u975e\u540c\u6b65\uff08Asynchronous\uff09"}),"\n",(0,s.jsx)(n.p,{children:"\u7576\u4f60\u4e00\u6b21\u53ea\u80fd\u505a\u4e00\u4ef6\u4e8b\uff0c\u9019\u4ef6\u4e8b\u60c5\u6c92\u6709\u5b8c\u6210\u4e4b\u524d\u4e0d\u80fd\u505a\u5176\u4ed6\u4e8b\u60c5\u5c31\u7a31\u70ba\u540c\u6b65\uff08Synchronous\uff09\u8655\u7406\uff08\u807d\u8d77\u4f86\u78ba\u5be6\u883b\u602a\u7684\uff09\uff0c\u4ee5\u716e\u98ef\u4f86\u8aaa\uff0c\u4f60\u5fc5\u9808\u8981\u7b49\u5230\u98ef\u716e\u719f\u4e86\u624d\u80fd\u53bb\u716e\u83dc\uff0c\u6c34\u716e\u6efe\u4e86\u4f60\u624d\u80fd\u53bb\u5207\u83dc\uff0c\u53ef\u4ee5\u60f3\u50cf\u9019\u662f\u591a\u9ebc\u6c92\u6709\u6548\u7387\u7684\u65b9\u5f0f\uff0c\u5982\u679c\u4f60\u80fd\u5728\u7b49\u98ef\u716e\u719f\u7684\u540c\u6642\u5148\u4e0d\u7ba1\u4ed6\uff0c\u540c\u6642\u53bb\u9032\u884c\u5176\u4ed6\u7684\u5de5\u4f5c\uff0c\u9019\u5c31\u662f\u975e\u540c\u6b65\uff0c\u6216\u662f\u7570\u6b65\uff08Asynchronous\uff09\u8655\u7406"}),"\n",(0,s.jsx)(n.h4,{id:"\u540c\u6b65",children:"\u540c\u6b65"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"SYNCHRONOUS\n   |--------A--------|\n                     |--------B--------|\n"})}),"\n",(0,s.jsx)(n.h4,{id:"\u975e\u540c\u6b65",children:"\u975e\u540c\u6b65"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"ASYNCHRONOUS\n   |--------A--------|\n         |--------B--------|\n"})}),"\n",(0,s.jsxs)(n.p,{children:["JavaScript\u4e4b\u6240\u4ee5\u80fd\u505a\u5230\u975e\u540c\u6b65\u9019\u4ef6\u4e8b\uff0c\u5fc5\u9808\u6b78\u529f\u65bc",(0,s.jsx)(n.strong,{children:"\u4e8b\u4ef6\u8ff4\u5708(Event loop)"})," \u4ee5\u53ca ",(0,s.jsx)(n.strong,{children:"\u57f7\u884c\u74b0\u5883(Execution environment)"}),"\uff0c\u57f7\u884c\u74b0\u5883\u662f\u6307JavaScript\u7a0b\u5f0f\u78bc\u57f7\u884c\u6642\u7684\u74b0\u5883\uff0c\u9019\u5305\u62ec\u4e86JavaScript\u672c\u8eab\u4ee5\u53ca\u5176\u6240\u904b\u884c\u6240\u4f9d\u8cf4\u7684\u5143\u4ef6\u6216\u662f\u5916\u90e8\u74b0\u5883\uff0c\u4f8b\u5982\u700f\u89bd\u5668\u6216\u662fnode.js\uff0c\u57f7\u884c\u74b0\u5883\u8ca0\u8cac\u63d0\u4f9b\u984d\u5916\u7684\u529f\u80fd\uff0c\u4f7fJavaScript\u53ef\u4ee5\u57f7\u884c\u975e\u540c\u6b65\u8655\u7406\u4ee5\u53ca\u5176\u4ed6\u8d85\u51fa\u5176\u8a9e\u8a00\u672c\u8eab\u7684\u80fd\u529b"]}),"\n",(0,s.jsx)(n.h3,{id:"event-loop-\u7d44\u6210",children:"Event Loop \u7d44\u6210"}),"\n",(0,s.jsx)(n.p,{children:"Event loop\u4e3b\u8981\u7531Heap\u3001Stack\u3001Queue \u7d44\u6210"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Heap (\u8a18\u61b6\u9ad4\u5806)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u8ca0\u8cac\u7ba1\u7406\u61c9\u7528\u7a0b\u5f0f\u4e2d\u7684\u7269\u4ef6\u548c\u8b8a\u6578\u5132\u5b58"}),"\n",(0,s.jsx)(n.li,{children:"\u662f\u4e00\u500b\u5927\u578b\u975e\u7d50\u69cb\u5316\u7684\u8a18\u61b6\u9ad4\u7a7a\u9593\uff0c\u7528\u65bc\u52d5\u614b\u5206\u914d\u8cc7\u6599"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Stack (\u5806\u758a)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u8ca0\u8cac\u8a18\u9304\u76ee\u524d\u6b63\u5728\u57f7\u884c\u4e2d\u7684\u51fd\u6578"}),"\n",(0,s.jsx)(n.li,{children:"\u63a1\u53d6\u5148\u9032\u5f8c\u51fa(LIFO, Last in first out) \u539f\u5247\uff0c\u6700\u5f8c\u9032\u5165Stack\u7684\u51fd\u6578\u6703\u6700\u5148\u88ab\u57f7\u884c"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Queue (\u968a\u5217)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u6392\u5217\u7b49\u5f85\u88ab\u57f7\u884c\u7684\u51fd\u6578"}),"\n",(0,s.jsx)(n.li,{children:"\u5206\u6210\u4e86Macrotask\u4ee5\u53caMicrotask (\u5176\u5be6\u53ea\u6709Microtask\uff0cMacrotask\u53ea\u662f\u56e0\u61c9Microtask\u800c\u7522\u751f\u7684\u8aaa\u6cd5)\uff0cQueue\u6703\u512a\u5148\u57f7\u884c\u6240\u6709Microtask\u7684\u4efb\u52d9"}),"\n",(0,s.jsx)(n.li,{children:"\u5e38\u898b\u7684Macrotask\uff1asetTimeOut\u3001setInterval\u3001I/O"}),"\n",(0,s.jsx)(n.li,{children:"\u5e38\u898b\u7684Microtask\uff1aPromise.then()\u3001queueMicortask\u3001MutationObserver"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"event-loop-\u6d41\u7a0b",children:"Event loop \u6d41\u7a0b"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:'Event loop\u793a\u610f\u5716 (\u5716\u7247\u64f7\u53d6\u81eaYouTube\u983b\u9053"Lydia Hellie")'}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://hackmd-prod-images.s3-ap-northeast-1.amazonaws.com/uploads/upload_1655e7da4413c9b2f62ee5f8174b125b.png?AWSAccessKeyId=AKIA3XSAAW6AWSKNINWO&Expires=1732399079&Signature=gweu1zNGgcS%2BpSWkQNU9qGJbKBE%3D",alt:"Event Loop \u793a\u610f\u5716"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"JavaScript\u5728\u57f7\u884c\u904e\u7a0b\u4e2d\u9047\u5230\u51fd\u6578\u5c31\u6703\u547c\u53ebCall Stack\uff0c\u5c07\u51fd\u6578\u653e\u5230Stack\u4e2d\u57f7\u884c\uff0c\u7576\u4e00\u500b\u51fd\u6578\u57f7\u884c\u5b8c\u7562\u5c31\u6703\u5f9eStack\u9802\u90e8\u62bd\u96e2\uff0c\u7e7c\u7e8c\u57f7\u884c\u4e0b\u4e00\u500b\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u9047\u5230\u9700\u8981\u540c\u6b65\u57f7\u884c\u7684\u51fd\u6578\u6642\uff0c\u57f7\u884c\u74b0\u5883\u5c31\u6703\u547c\u53eb\u76f8\u95dc\u7684API (\u4f8b\u5982Web APIs\u4e2d\u7684setTimeOut)\u63a5\u8457\u5c07\u4ed6\u653e\u9032Task Queue (\u6216\u662f\u7a31\u70baMacrotask Queue\u3001Callback Queue) \u6216\u662fMicortask Queue\u4e2d\u7b49\u5f85\u57f7\u884c\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u7576Stack\u4e2d\u7684\u51fd\u6578\u90fd\u57f7\u884c\u5b8c\u7562\u4e4b\u5f8c\uff0c\u6703\u512a\u5148\u57f7\u884cMicrotask Queue\u4e2d\u7684\u51fd\u6578\uff0c\u57f7\u884c\u5b8c\u7562\u5247\u6703\u63a5\u8457\u57f7\u884cTask Queue (\u82e5\u5728\u57f7\u884cTask Queue\u4e2d\u7684\u51fd\u6578\u6642\u7522\u751f\u4e86\u65b0\u7684Microtask\uff0c\u4e5f\u6703\u512a\u5148\u57f7\u884c\u5b8cMicrotask\u518d\u7e7c\u7e8c\u57f7\u884c\u4e0b\u4e00\u500bTask Queue\u4e2d\u7684\u51fd\u6578)"}),"\n",(0,s.jsx)(n.li,{children:"\u4e0d\u65b7\u91cd\u8907\u4ee5\u4e0a\u5faa\u74b0\u76f4\u5230\u6240\u6709\u7684\u968a\u5217\u70ba\u7a7a\uff0c\u8a72\u904e\u7a0b\u5c31\u7a31\u70baEvent loop"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u53c3\u8003\u8cc7\u6599\u4f86\u6e90",children:"\u53c3\u8003\u8cc7\u6599\u4f86\u6e90"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop",children:"The event loop"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://www.explainthis.io/en/swe/what-is-event-loop",children:"What Is an Event Loop in JavaScript?"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://www.youtube.com/watch?v=eiC58R16hb8",children:"JavaScript Visualized - Event Loop, Web APIs, (Micro)task Queue"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>r});var i=t(6540);const s={},o=i.createContext(s);function l(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);