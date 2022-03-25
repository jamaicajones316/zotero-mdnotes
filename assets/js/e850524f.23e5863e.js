"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[451],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6700:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={},s="Multi-file Exports (Default)",u={unversionedId:"getting-started/file-organization/multi-file",id:"version-0.1.3/getting-started/file-organization/multi-file",title:"Multi-file Exports (Default)",description:"Multi-file menu",source:"@site/versioned_docs/version-0.1.3/getting-started/file-organization/multi-file.md",sourceDirName:"getting-started/file-organization",slug:"/getting-started/file-organization/multi-file",permalink:"/zotero-mdnotes/docs/getting-started/file-organization/multi-file",editUrl:"https://github.com/argenos/zotero-mdnotes/edit/develop/docs/versioned_docs/version-0.1.3/getting-started/file-organization/multi-file.md",tags:[],version:"0.1.3",frontMatter:{},sidebar:"version-0.1.3/tutorialSidebar",previous:{title:"Configuration",permalink:"/zotero-mdnotes/docs/getting-started/configuration"},next:{title:"Single-file Exports",permalink:"/zotero-mdnotes/docs/getting-started/file-organization/single-file"}},p={},d=[],c={toc:d};function m(e){var t=e.components,l=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"multi-file-exports-default"},"Multi-file Exports (Default)"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Multi-file menu",src:n(9376).Z,width:"753",height:"138"})),(0,i.kt)("p",null,"Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Split files")," option will create, as its name indicates, separate files for your metadata, Zotero notes, or your own notes. Whenever you use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Export to markdown")," menu:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"One file containing the metadata will be created if you selected a Zotero item using the ",(0,i.kt)("a",{parentName:"li",href:"/zotero-mdnotes/docs/advanced/templates/defaults#zotero-metadata-template"},(0,i.kt)("inlineCode",{parentName:"a"},"Zotero Metadata Template")),"."),(0,i.kt)("li",{parentName:"ul"},"If you select a Zotero note, one file will be created using the ",(0,i.kt)("a",{parentName:"li",href:"/zotero-mdnotes/docs/advanced/templates/defaults#zotero-note-template"},(0,i.kt)("inlineCode",{parentName:"a"},"Zotero Note Template")))),(0,i.kt)("p",null,"Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Create Mdnotes file")," will create a note for ",(0,i.kt)("strong",{parentName:"p"},"your")," notes using the ",(0,i.kt)("a",{parentName:"p",href:"/zotero-mdnotes/docs/advanced/templates/defaults#mdnotes-default-template"},(0,i.kt)("inlineCode",{parentName:"a"},"Mdnotes Default Template")),"."),(0,i.kt)("p",null,"By selecting a Zotero item and using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Batch export to markdown")," menu, ",(0,i.kt)("inlineCode",{parentName:"p"},"mdnotes")," will create all the above files, i.e. one for the metadata and one for each Zotero note in that item.\nIf your ",(0,i.kt)("inlineCode",{parentName:"p"},"Mdnotes")," file doesn't exist, it will be created."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Your ",(0,i.kt)("inlineCode",{parentName:"p"},"Mdnotes")," file will never be overwritten with the ",(0,i.kt)("inlineCode",{parentName:"p"},"Batch export")," menu. If you wish to do so, you must use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Create Mdnotes file")," and confirm you want to overwrite it."))))}m.isMDXComponent=!0},9376:function(e,t,n){t.Z=n.p+"assets/images/multi-file-menu-bf4f95b686f7c681bf0eabda82b996fa.png"}}]);