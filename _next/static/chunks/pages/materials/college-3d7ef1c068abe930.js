(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[133],{6803:function(t){t.exports=function(){var t="image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";function e(e){var r=e.split("-"),i=r[1],n=r[2],o=r[3];if(!i||!n||!o)throw new Error("Malformed asset _ref '"+e+"'. Expected an id like \""+t+'".');var s=n.split("x"),a=+s[0],h=+s[1];if(!isFinite(a)||!isFinite(h))throw new Error("Malformed asset _ref '"+e+"'. Expected an id like \""+t+'".');return{id:i,width:a,height:h,format:o}}var r=function(t){return!!t&&"string"===typeof t._ref},i=function(t){return!!t&&"string"===typeof t._id},n=function(t){var e=t;return!(!e||!e.asset)&&"string"===typeof e.asset.url};function o(t){if(!t)return null;var e;if("string"===typeof t&&s(t))e={asset:{_ref:a(t)}};else if("string"===typeof t)e={asset:{_ref:t}};else if(r(t))e={asset:t};else if(i(t))e={asset:{_ref:t._id||""}};else if(n(t))e={asset:{_ref:a(t.asset.url)}};else{if("object"!==typeof t.asset)return null;e=t}var o=t;return o.crop&&(e.crop=o.crop),o.hotspot&&(e.hotspot=o.hotspot),h(e)}function s(t){return/^https?:\/\//.test(""+t)}function a(t){return("image-"+t.split("/").slice(-1)[0]).replace(/\.([a-z]+)$/,"-$1")}function h(t){if(t.crop&&t.hotspot)return t;var e=Object.assign({},t);return e.crop||(e.crop={left:0,top:0,bottom:0,right:0}),e.hotspot||(e.hotspot={x:.5,y:.5,height:1,width:1}),e}var c=[["width","w"],["height","h"],["format","fm"],["download","dl"],["blur","blur"],["sharpen","sharp"],["invert","invert"],["orientation","or"],["minHeight","min-h"],["maxHeight","max-h"],["minWidth","min-w"],["maxWidth","max-w"],["quality","q"],["fit","fit"],["crop","crop"],["saturation","sat"],["auto","auto"],["dpr","dpr"],["pad","pad"]];function p(t){var r=Object.assign({},t||{}),i=r.source;delete r.source;var n=o(i);if(!n)throw new Error("Unable to resolve image URL from source ("+JSON.stringify(i)+")");var s=e(n.asset._ref||n.asset._id||""),a=Math.round(n.crop.left*s.width),h=Math.round(n.crop.top*s.height),c={left:a,top:h,width:Math.round(s.width-n.crop.right*s.width-a),height:Math.round(s.height-n.crop.bottom*s.height-h)},p=n.hotspot.height*s.height/2,f=n.hotspot.width*s.width/2,d=n.hotspot.x*s.width,m=n.hotspot.y*s.height,x={left:d-f,top:m-p,right:d+f,bottom:m+p};return r.rect||r.focalPoint||r.ignoreImageParams||r.crop||(r=Object.assign({},r,l({crop:c,hotspot:x},r))),u(Object.assign({},r,{asset:s}))}function u(t){var e=t.baseUrl||"https://cdn.sanity.io",r=t.asset.id+"-"+t.asset.width+"x"+t.asset.height+"."+t.asset.format,i=e+"/images/"+t.projectId+"/"+t.dataset+"/"+r,n=[];if(t.rect){var o=t.rect,s=o.left,a=o.top,h=o.width,p=o.height;(0!==s||0!==a||p!==t.asset.height||h!==t.asset.width)&&n.push("rect="+s+","+a+","+h+","+p)}t.bg&&n.push("bg="+t.bg),t.focalPoint&&(n.push("fp-x="+t.focalPoint.x),n.push("fp-y="+t.focalPoint.y));var u=[t.flipHorizontal&&"h",t.flipVertical&&"v"].filter(Boolean).join("");return u&&n.push("flip="+u),c.forEach((function(e){var r=e[0],i=e[1];"undefined"!==typeof t[r]?n.push(i+"="+encodeURIComponent(t[r])):"undefined"!==typeof t[i]&&n.push(i+"="+encodeURIComponent(t[i]))})),0===n.length?i:i+"?"+n.join("&")}function l(t,e){var r,i=e.width,n=e.height;if(!i||!n)return{width:i,height:n,rect:t.crop};var o=t.crop,s=t.hotspot,a=i/n;if(o.width/o.height>a){var h=Math.round(o.height),c=Math.round(h*a),p=Math.max(0,Math.round(o.top)),u=Math.round((s.right-s.left)/2+s.left),l=Math.max(0,Math.round(u-c/2));l<o.left?l=o.left:l+c>o.left+o.width&&(l=o.left+o.width-c),r={left:l,top:p,width:c,height:h}}else{var f=o.width,d=Math.round(f/a),m=Math.max(0,Math.round(o.left)),x=Math.round((s.bottom-s.top)/2+s.top),g=Math.max(0,Math.round(x-d/2));g<o.top?g=o.top:g+d>o.top+o.height&&(g=o.top+o.height-d),r={left:m,top:g,width:f,height:d}}return{width:i,height:n,rect:r}}var f=["clip","crop","fill","fillmax","max","scale","min"],d=["top","bottom","left","right","center","focalpoint","entropy"],m=["format"];function x(t){return!!t&&"object"===typeof t.clientConfig}function g(t){for(var e=0,r=c;e<r.length;e+=1){var i=r[e],n=i[0],o=i[1];if(t===n||t===o)return n}return t}function w(t){var e=t;if(x(e)){var r=e.clientConfig,i=r.apiHost,n=r.projectId,o=r.dataset;return new v(null,{baseUrl:(i||"https://api.sanity.io").replace(/^https:\/\/api\./,"https://cdn."),projectId:n,dataset:o})}return new v(null,t)}var v=function(t,e){this.options=t?Object.assign({},t.options||{},e||{}):Object.assign({},e||{})};return v.prototype.withOptions=function(t){var e=t.baseUrl||this.options.baseUrl,r={baseUrl:e};for(var i in t)t.hasOwnProperty(i)&&(r[g(i)]=t[i]);return new v(this,Object.assign({},{baseUrl:e},r))},v.prototype.image=function(t){return this.withOptions({source:t})},v.prototype.dataset=function(t){return this.withOptions({dataset:t})},v.prototype.projectId=function(t){return this.withOptions({projectId:t})},v.prototype.bg=function(t){return this.withOptions({bg:t})},v.prototype.dpr=function(t){return this.withOptions(t&&1!==t?{dpr:t}:{})},v.prototype.width=function(t){return this.withOptions({width:t})},v.prototype.height=function(t){return this.withOptions({height:t})},v.prototype.focalPoint=function(t,e){return this.withOptions({focalPoint:{x:t,y:e}})},v.prototype.maxWidth=function(t){return this.withOptions({maxWidth:t})},v.prototype.minWidth=function(t){return this.withOptions({minWidth:t})},v.prototype.maxHeight=function(t){return this.withOptions({maxHeight:t})},v.prototype.minHeight=function(t){return this.withOptions({minHeight:t})},v.prototype.size=function(t,e){return this.withOptions({width:t,height:e})},v.prototype.blur=function(t){return this.withOptions({blur:t})},v.prototype.sharpen=function(t){return this.withOptions({sharpen:t})},v.prototype.rect=function(t,e,r,i){return this.withOptions({rect:{left:t,top:e,width:r,height:i}})},v.prototype.format=function(t){return this.withOptions({format:t})},v.prototype.invert=function(t){return this.withOptions({invert:t})},v.prototype.orientation=function(t){return this.withOptions({orientation:t})},v.prototype.quality=function(t){return this.withOptions({quality:t})},v.prototype.forceDownload=function(t){return this.withOptions({download:t})},v.prototype.flipHorizontal=function(){return this.withOptions({flipHorizontal:!0})},v.prototype.flipVertical=function(){return this.withOptions({flipVertical:!0})},v.prototype.ignoreImageParams=function(){return this.withOptions({ignoreImageParams:!0})},v.prototype.fit=function(t){if(-1===f.indexOf(t))throw new Error('Invalid fit mode "'+t+'"');return this.withOptions({fit:t})},v.prototype.crop=function(t){if(-1===d.indexOf(t))throw new Error('Invalid crop mode "'+t+'"');return this.withOptions({crop:t})},v.prototype.saturation=function(t){return this.withOptions({saturation:t})},v.prototype.auto=function(t){if(-1===m.indexOf(t))throw new Error('Invalid auto mode "'+t+'"');return this.withOptions({auto:t})},v.prototype.pad=function(t){return this.withOptions({pad:t})},v.prototype.url=function(){return p(this.options)},v.prototype.toString=function(){return this.url()},w}()},1678:function(t,e,r){"use strict";var i=r(9729),n=r.n(i);e.Z=n()({projectId:"k63htzcm",dataset:"production",useCdn:!0})},1767:function(t,e,r){"use strict";var i=r(5893);e.Z=function(){return(0,i.jsxs)("div",{className:"flex flex-col justify-center items-center h-[200px] text-gray-700 text-center",children:[(0,i.jsx)("h3",{className:"text-xl font-bold",children:"NO DATA FOUND"}),(0,i.jsx)("p",{className:"text-sm font-medium",children:"Please try again later."})]})}},8636:function(t,e,r){"use strict";var i=r(9008),n=r(5893);e.Z=function(t){var e=t.page,r=t.desc,o=t.keyword;return(0,n.jsxs)(i.default,{children:[(0,n.jsxs)("title",{children:["Baba | ",e]}),(0,n.jsx)("meta",{name:"description",content:r}),(0,n.jsx)("meta",{name:"keyword",content:o}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]})}},7402:function(t,e,r){"use strict";var i=r(5893);e.Z=function(){return(0,i.jsx)("div",{className:"h-[90vh] flex justify-center items-center",children:(0,i.jsx)("h1",{className:"Loading Logo text-4xl font-bold",children:"BABa"})})}},2465:function(t,e,r){"use strict";r.r(e);var i=r(6687),n=r(29),o=r(7794),s=r.n(o),a=r(1664),h=r(1678),c=r(6803),p=r.n(c),u=r(1163),l=r(7294),f=r(7402),d=r(1767),m=r(8636),x=r(5893);e.default=function(){var t=(0,u.useRouter)().query.ref,e=void 0===t?"":t,r={ref:e},o=(0,l.useState)([]),c=o[0],g=o[1],w=(0,l.useState)(!1),v=w[0],y=w[1],b=(0,l.useState)(!0),j=b[0],O=b[1],N=function(){var t=(0,n.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return O(!1),t.prev=1,y(!0),t.next=5,h.Z.fetch("*[_type == 'college' && references($ref)] | order(_createdAt)",r);case 5:e=t.sent,g((0,i.Z)(e)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),O(!0);case 12:y(!1);case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(){return t.apply(this,arguments)}}();return(0,l.useEffect)((0,n.Z)(s().mark((function t(){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N();case 2:return t.abrupt("return",(function(){}));case 3:case"end":return t.stop()}}),t)}))),[e]),(0,x.jsxs)("div",{children:[(0,x.jsx)(m.Z,{page:"colloges",desc:"Baaba providing learning materials for students in the form of pdf and images",keyword:"Baaba learn learning materials slides passco pass questions images university student"}),(0,x.jsx)("main",{children:v?(0,x.jsx)(f.Z,{}):j?(0,x.jsxs)("div",{className:"h-[91vh] flex flex-col justify-center items-center space-y-2 text-gray-600",children:[(0,x.jsx)("h1",{className:"text-xl font-semibold",children:"Error Loading Page"}),(0,x.jsx)("p",{className:"text-sm font-extralight",children:"try Again | Contact the platform provider"}),(0,x.jsx)("p",{className:"font-medium text-sm underline decoration-blue-600 cursor-pointer text-blue-600",onClick:N,children:"try again"})]}):(0,x.jsxs)("div",{children:[(0,x.jsx)("div",{className:"bg-[url('https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80')] bg-no-repeat bg-center bg-cover h-[50vh]",children:(0,x.jsxs)("div",{className:"w-3/5 mx-auto flex flex-col justify-center items-center space-y-4 h-full",children:[(0,x.jsx)("h1",{className:"text-4xl font-semibold text-white text-center",children:"You can request a learning material from here."}),(0,x.jsx)("div",{className:"font-semibold bg-[#ff1596] inline-block text-sm text-white py-2 px-4 rounded-full",children:(0,x.jsx)(a.default,{href:"/request",children:"Request Materials"})})]})}),(0,x.jsxs)("div",{className:"mx-4 my-8",children:[(0,x.jsx)("h2",{className:"text-2xl font-bold text-center",children:"Choose Your College"}),(0,x.jsx)("div",{className:"md:w-4/5 md:mx-auto my-4 grid mx-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-[250px] gap-y-8 gap-x-4",children:c.length?c.map((function(t,e){return(0,x.jsx)(a.default,{href:t.available?{pathname:"/materials/department",query:{ref:t._id}}:"",children:(0,x.jsxs)("div",{className:"drop-shadow-lg bg-white h-full rounded-lg flex flex-col cursor-pointer",children:[t.available?(0,x.jsx)("p",{className:"self-start text-sm font-bold px-1 rounded m-2 bg-green-400 text-white",children:"available now"}):(0,x.jsx)("p",{className:"self-end text-sm font-bold px-1 rounded m-2 bg-fuchsia-400 text-white",children:"coming soon"}),(0,x.jsx)("h3",{className:"font-semibold p-2 text-center line-clamp-2",children:t.name}),(0,x.jsx)("img",{src:(r=t.image,p()(h.Z).image(r)).url(),alt:t.name,className:"object-cover h-4 flex-1 object-center w-full rounded-lg"})]})},e);var r})):(0,x.jsx)("div",{className:"col-span-3",children:(0,x.jsx)(d.Z,{})})})]})]})})]})}},7673:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/materials/college",function(){return r(2465)}])}},function(t){t.O(0,[940,774,888,179],(function(){return e=7673,t(t.s=e);var e}));var e=t.O();_N_E=e}]);