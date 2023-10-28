"use strict";(self.webpackChunkdocs_api=self.webpackChunkdocs_api||[]).push([[585],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return a?n.createElement(g,o(o({ref:t},u),{},{components:a})):n.createElement(g,o({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8955:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:1},o="Mendapatkan Semua Data Kode Pos",i={unversionedId:"api-kode-pos/get-all-postal-code",id:"api-kode-pos/get-all-postal-code",title:"Mendapatkan Semua Data Kode Pos",description:"HTTP METHOD : GET",source:"@site/docs/api-kode-pos/get-all-postal-code.md",sourceDirName:"api-kode-pos",slug:"/api-kode-pos/get-all-postal-code",permalink:"/docs/api-kode-pos/get-all-postal-code",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"API Kode Pos",permalink:"/docs/category/api-kode-pos"},next:{title:"Mendapatan Lokasi dengan Kode Pos",permalink:"/docs/api-kode-pos/get-location-by-postal-code"}},s={},p=[{value:"Params",id:"params",level:2},{value:"Example Request",id:"example-request",level:2},{value:"Example Response",id:"example-response",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mendapatkan-semua-data-kode-pos"},"Mendapatkan Semua Data Kode Pos"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"HTTP METHOD : GET")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title="endpoint"',title:'"endpoint"'},"  https://api.ahmadzidni.site/postalcode/all\n")),(0,r.kt)("h2",{id:"params"},"Params"),(0,r.kt)("p",null,"Query Params ",(0,r.kt)("strong",{parentName:"p"},"(Opsional)"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"limit")," type ",(0,r.kt)("strong",{parentName:"li"},"integer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"page")," type ",(0,r.kt)("strong",{parentName:"li"},"integer"))),(0,r.kt)("p",null,"Default limit: 100 , page: 1"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Peringatan:")," Untuk query limit minimmal adalah 50!")),(0,r.kt)("h2",{id:"example-request"},"Example Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title="GET"',title:'"GET"'}," api.ahmadzidni.site/postalcode/all\n")),(0,r.kt)("h2",{id:"example-response"},"Example Response"),(0,r.kt)("h1",{id:"succsess-"},"Succsess :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="200"',title:'"200"'},'{\n  {\n    "pagination": {\n        "total_page": 813,\n        "has_prev_page": false,\n        "has_next_page": true,\n        "current_page": 1,\n        "items": {\n            "count": 100,\n            "total": 81266,\n            "per_page": 100\n        }\n    },\n    "data": [\n        {\n            "province": "Bali",\n            "city": "Badung",\n            "district": "Kuta",\n            "subdistrict": "Tuban",\n            "postal_code": 80361\n        },\n        {\n            "province": "Bali",\n            "city": "Badung",\n            "district": "Kuta Utara",\n            "subdistrict": "Tibubeneng",\n            "postal_code": 80361\n        },\n        {\n            "province": "Bali",\n            "city": "Badung",\n            "district": "Kuta Selatan",\n            "subdistrict": "Tanjung Benoa",\n            "postal_code": 80361\n        },\n    ]\n}\n}\n')),(0,r.kt)("h1",{id:"gagal-"},"Gagal :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Jika query limit kurang dari 50 maka server akan merespon status code 400 (Bad Request) dengan message:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="400"',title:'"400"'},'{\n  "message": "Limit tidak boleh kurang dari 50"\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Jika query page yang dikirim melebihi jumlah page pada database maka server akan merespon status code 400 (Bad Request) dengan message:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="400"',title:'"400"'},'{\n  "message": "Page yang diminta melebihi page pada data pada database!"\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Jika terjadi kesalahan pada proses query pada server maka server akan merespon status code 500 (Internal Server Error) dengan message:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="500"',title:'"500"'},'{\n  "message": "Internal server error!"\n}\n')))}c.isMDXComponent=!0}}]);