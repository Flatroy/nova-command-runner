(()=>{var e={632:(e,n,t)=>{"use strict";t.d(n,{Z:()=>a});var o=t(645),r=t.n(o)()((function(e){return e[1]}));r.push([e.id,".content-start{align-content:start}.btn-success{background-color:#28a745;border-color:#28a745;color:#fff}.btn-success:hover{background-color:#218838;border-color:#1e7e34;color:#fff}.btn-success.focus,.btn-success:focus{box-shadow:0 0 0 .2rem rgba(72,180,97,.5)}.btn-success.disabled,.btn-success:disabled{background-color:#28a745;border-color:#28a745;color:#fff}.btn-success:not(:disabled):not(.disabled).active,.btn-success:not(:disabled):not(.disabled):active,.show>.btn-success.dropdown-toggle{background-color:#1e7e34;border-color:#1c7430;color:#fff}.btn-success:not(:disabled):not(.disabled).active:focus,.btn-success:not(:disabled):not(.disabled):active:focus,.show>.btn-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(72,180,97,.5)}.btn-info{background-color:#17a2b8;border-color:#17a2b8;color:#fff}.btn-info:hover{background-color:#138496;border-color:#117a8b;color:#fff}.btn-info.focus,.btn-info:focus{box-shadow:0 0 0 .2rem rgba(58,176,195,.5)}.btn-info.disabled,.btn-info:disabled{background-color:#17a2b8;border-color:#17a2b8;color:#fff}.btn-info:not(:disabled):not(.disabled).active,.btn-info:not(:disabled):not(.disabled):active,.show>.btn-info.dropdown-toggle{background-color:#117a8b;border-color:#10707f;color:#fff}.btn-info:not(:disabled):not(.disabled).active:focus,.btn-info:not(:disabled):not(.disabled):active:focus,.show>.btn-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(58,176,195,.5)}.btn-warning{background-color:#ffc107;border-color:#ffc107;color:#212529}.btn-warning:hover{background-color:#e0a800;border-color:#d39e00;color:#212529}.btn-warning.focus,.btn-warning:focus{box-shadow:0 0 0 .2rem rgba(222,170,12,.5)}.btn-warning.disabled,.btn-warning:disabled{background-color:#ffc107;border-color:#ffc107;color:#212529}.btn-warning:not(:disabled):not(.disabled).active,.btn-warning:not(:disabled):not(.disabled):active,.show>.btn-warning.dropdown-toggle{background-color:#d39e00;border-color:#c69500;color:#212529}.btn-warning:not(:disabled):not(.disabled).active:focus,.btn-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-warning.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(222,170,12,.5)}.badge-success{background-color:#28a745;color:#fff}.badge-error{background-color:#dc3545;color:#fff}.badge-pending{background-color:#ffc107;color:#212529}",""]);const a=r},645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(r[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&r[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),n.push(d))}},n}},379:(e,n,t)=>{"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),c=[];function l(e){for(var n=-1,t=0;t<c.length;t++)if(c[t].identifier===e){n=t;break}return n}function d(e,n){for(var t={},o=[],r=0;r<e.length;r++){var a=e[r],d=n.base?a[0]+n.base:a[0],s=t[d]||0,i="".concat(d," ").concat(s);t[d]=s+1;var u=l(i),m={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(c[u].references++,c[u].updater(m)):c.push({identifier:i,updater:b(m,n),references:1}),o.push(i)}return o}function s(e){var n=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(n);else{var c=a(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(n)}return n}var i,u=(i=[],function(e,n){return i[e]=n,i.filter(Boolean).join("\n")});function m(e,n,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=u(n,r);else{var a=document.createTextNode(r),c=e.childNodes;c[n]&&e.removeChild(c[n]),c.length?e.insertBefore(a,c[n]):e.appendChild(a)}}function p(e,n,t){var o=t.css,r=t.media,a=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var g=null,f=0;function b(e,n){var t,o,r;if(n.singleton){var a=f++;t=g||(g=s(n)),o=m.bind(null,t,a,!1),r=m.bind(null,t,a,!0)}else t=s(n),o=p.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=r());var t=d(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<t.length;o++){var r=l(t[o]);c[r].references--}for(var a=d(e,n),s=0;s<t.length;s++){var i=l(t[s]);0===c[i].references&&(c[i].updater(),c.splice(i,1))}t=a}}}},744:(e,n)=>{"use strict";n.Z=(e,n)=>{const t=e.__vccOpts||e;for(const[e,o]of n)t[e]=o;return t}},733:(e,n,t)=>{"use strict";t.d(n,{Z:()=>T});const o=Vue;var r={class:"mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"},a={class:"p-6 grid gap-6"},c={key:0},l={class:"inline-block text-80 mb-2 leading-tight w-full capitalize"},d=["type","onUpdate:modelValue","placeholder"],s={key:1},i={class:"flex items-center ml-auto"},u={key:1,class:"flex flex-col md:flex-row mb-3"},m={class:"w-full md:w-3/5 md:px-3 mb-2 md:mb-0"},p=(0,o.createTextVNode)(" Run "),g={class:"md:col-span-3 grid gap-2 content-start"},f={class:"flex flex-col md:flex-row justify-between mt-6 mb-6"},b=(0,o.createTextVNode)("History"),h=(0,o.createTextVNode)(" Clear History "),y={class:"w-full table-default"},v=(0,o.createElementVNode)("thead",null,[(0,o.createElementVNode)("tr",null,[(0,o.createElementVNode)("th",{class:"text-center px-2 whitespace-nowrap uppercase text-gray-500 text-xxs tracking-wide py-2"}," Command "),(0,o.createElementVNode)("th",{class:"text-center px-2 whitespace-nowrap uppercase text-gray-500 text-xxs tracking-wide py-2"}," Type "),(0,o.createElementVNode)("th",{class:"text-center px-2 whitespace-nowrap uppercase text-gray-500 text-xxs tracking-wide py-2"}," Run By "),(0,o.createElementVNode)("th",{class:"text-center px-2 whitespace-nowrap uppercase text-gray-500 text-xxs tracking-wide py-2"}," Status "),(0,o.createElementVNode)("th",{class:"text-center px-2 whitespace-nowrap uppercase text-gray-500 text-xxs tracking-wide py-2"}," Result "),(0,o.createElementVNode)("th",{class:"text-center px-2 whitespace-nowrap uppercase text-gray-500 text-xxs tracking-wide py-2"}," Duration "),(0,o.createElementVNode)("th",{class:"text-center px-2 whitespace-nowrap uppercase text-gray-500 text-xxs tracking-wide py-2"}," Happened ")])],-1),w={class:"px-2 py-2 border-t border-gray-100 dark:border-gray-700 whitespace-nowrap cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"},C={class:"px-2 py-2 border-t border-gray-100 dark:border-gray-700 whitespace-nowrap cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"},x={class:"px-2 py-2 border-t border-gray-100 dark:border-gray-700 whitespace-nowrap cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"},k={class:"px-2 py-2 border-t border-gray-100 dark:border-gray-700 whitespace-nowrap cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"},N={class:"px-2 py-2 border-t border-gray-100 dark:border-gray-700 whitespace-nowrap cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"},V=["innerHTML"],B={class:"px-2 py-2 border-t border-gray-100 dark:border-gray-700 whitespace-nowrap cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"},E={class:"px-2 py-2 border-t border-gray-100 dark:border-gray-700 whitespace-nowrap cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"};const D={data:function(){return{modalOpen:!1,running:!1,groups:[],commands:{},customCommand:{label:"Custom Command",type:"primary",help:"are you sure you want to run this command?",command_type:"artisan",command:"",variables:[],flags:[]},history:{},runningCommand:{},help:"",heading:"",customCommands:{}}},created:function(){this.getData()},methods:{clearHistory:function(){this.openModal({label:"Clear Command Run History",type:"primary",help:"are you sure you want to clear the command run history?",command_type:"artisan",command:"cache:forget nova-command-runner-history",variables:[],flags:[]})},getOptions:function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=[];for(var o in n&&t.push({value:"",label:"-"}),e)t.push({value:o,label:e[o]});return t},runCustomCommand:function(){this.customCommand.command?this.openModal(this.customCommand):Nova.error("Please enter a command")},getData:function(){var e=this;Nova.request().get("/nova-vendor/stepanenko3/nova-command-runner").then((function(n){e.groups=[],n.data.commands.forEach((function(n){var t=n.group;e.groups.indexOf(t)<0&&e.groups.push(t)})),e.commands=n.data.commands,e.history=n.data.history,e.help=n.data.help,e.heading=n.data.heading,e.customCommands=n.data.custom_commands,e.customCommands&&(e.customCommand.command_type=Object.keys(e.customCommands)[0])}))},runCommand:function(){var e=this,n=!0;this.runningCommand.variables&&Object.keys(this.runningCommand.variables).forEach((function(t){e.runningCommand.variables[t].value||(n=!1,Nova.error(e.runningCommand.variables[t].label+" is required"))})),n&&(this.running=!0,Nova.request().post("/nova-vendor/stepanenko3/nova-command-runner/run",{command:this.runningCommand}).then((function(n){n.data.status&&"success"===n.data.status?Nova.success(n.data.result):Nova.error(n.data.result),e.running=!1,e.history=n.data.history,e.closeModal()})).catch((function(n){e.running=!1})))},openModal:function(e){this.runningCommand=e,this.modalOpen=!0},closeModal:function(){this.modalOpen=!1,this.runningCommand={}}}};var _=t(379),S=t.n(_),M=t(632),O={insert:"head",singleton:!1};S()(M.Z,O);M.Z.locals;const T=(0,t(744).Z)(D,[["render",function(e,n,t,D,_,S){var M=(0,o.resolveComponent)("ModalHeader"),O=(0,o.resolveComponent)("SelectControl"),T=(0,o.resolveComponent)("CheckboxWithLabel"),H=(0,o.resolveComponent)("CancelButton"),L=(0,o.resolveComponent)("LoadingButton"),j=(0,o.resolveComponent)("ModalFooter"),F=(0,o.resolveComponent)("Modal"),U=(0,o.resolveComponent)("Heading"),z=(0,o.resolveComponent)("Card"),R=(0,o.resolveComponent)("Template"),Z=(0,o.resolveComponent)("DefaultButton"),A=(0,o.resolveComponent)("heading"),q=(0,o.resolveComponent)("DangerButton"),I=(0,o.resolveComponent)("Badge"),P=(0,o.resolveComponent)("card");return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,[(0,o.createVNode)(F,{show:_.modalOpen,tabindex:"-1","data-testid":"command-runner-modal",role:"dialog"},{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",r,[(0,o.createVNode)(M,{textContent:(0,o.toDisplayString)(_.runningCommand.label)},null,8,["textContent"]),(0,o.createElementVNode)("div",a,[_.runningCommand.help?((0,o.openBlock)(),(0,o.createElementBlock)("p",c,(0,o.toDisplayString)(_.runningCommand.help),1)):(0,o.createCommentVNode)("",!0),((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(_.runningCommand.variables,(function(e,n){return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,[(0,o.createElementVNode)("label",l,(0,o.toDisplayString)(e.label),1),"select"===e.field?((0,o.openBlock)(),(0,o.createBlock)(O,{key:0,size:"lg",dusk:e.label,options:S.getOptions(e.options),onChange:function(n){return e.value=n}},null,8,["dusk","options","onChange"])):(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createElementBlock)("input",{key:1,type:e.field,class:"w-full form-control form-input form-input-bordered w-full","onUpdate:modelValue":function(n){return e.value=n},placeholder:e.placeholder},null,8,d)),[[o.vModelDynamic,e.value]])])})),256)),_.runningCommand.flags.length?((0,o.openBlock)(),(0,o.createElementBlock)("div",s,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(_.runningCommand.flags,(function(e,n){return(0,o.openBlock)(),(0,o.createBlock)(T,{key:"flag-"+n,modelValue:_.runningCommand.flags[n].selected,"onUpdate:modelValue":function(e){return _.runningCommand.flags[n].selected=e}},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(e.label),1)]})),_:2},1032,["modelValue","onUpdate:modelValue"])})),128))])):(0,o.createCommentVNode)("",!0)]),(0,o.createVNode)(j,null,{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",i,[(0,o.createVNode)(H,{component:"button",type:"button",dusk:"cancel-action-button",class:"ml-auto mr-3",onClick:(0,o.withModifiers)(S.closeModal,["prevent"])},null,8,["onClick"]),(0,o.createVNode)(L,{type:"submit",ref:"runButton",dusk:"confirm-run-button",disabled:_.running,loading:_.running,onClick:n[0]||(n[0]=function(e){return S.runCommand()}),component:_.runningCommand.type&&-1===["primary","danger"].indexOf(_.runningCommand.type)?e.BasicButton:"danger"===_.runningCommand.type?"DangerButton":"DefaultButton",class:(0,o.normalizeClass)(_.runningCommand.type&&-1===["primary","danger"].indexOf(_.runningCommand.type)?"btn-"+_.runningCommand.type:"")},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(_.runningCommand.label),1)]})),_:1},8,["disabled","loading","component","class"])])]})),_:1})])]})),_:1},8,["show"]),(0,o.createVNode)(U,{class:"mb-6"},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(_.heading),1)]})),_:1}),_.help?((0,o.openBlock)(),(0,o.createBlock)(R,{key:0},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(z,{class:"p-3"},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(_.help),1)]})),_:1})]})),_:1})):(0,o.createCommentVNode)("",!0),Array.isArray(_.customCommands)?(0,o.createCommentVNode)("",!0):((0,o.openBlock)(),(0,o.createElementBlock)("div",u,[(0,o.createVNode)(O,{class:"md:w-1/5 mb-2 md:mb-0",options:S.getOptions(_.customCommands,!1),dusk:"command-runner-type",size:"lg",onChange:n[1]||(n[1]=function(e){return _.customCommand.command_type=e})},null,8,["options"]),(0,o.createElementVNode)("div",m,[(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"text","onUpdate:modelValue":n[2]||(n[2]=function(e){return _.customCommand.command=e}),placeholder:"Enter a Command...",class:"w-full form-control form-input form-input-bordered"},null,512),[[o.vModelText,_.customCommand.command]])]),(0,o.createVNode)(Z,{size:"lg",onClick:S.runCustomCommand,class:"w-full md:w-1/3"},{default:(0,o.withCtx)((function(){return[p]})),_:1},8,["onClick"])])),(0,o.createVNode)(z,{class:"grid md:grid-cols-12 gap-6 p-6"},{default:(0,o.withCtx)((function(){return[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(_.groups,(function(n){return(0,o.openBlock)(),(0,o.createElementBlock)("div",g,[(0,o.createVNode)(U,{level:"2"},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(n||"Unnamed group"),1)]})),_:2},1024),((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(_.commands,(function(t,r){return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[t.group==n?((0,o.openBlock)(),(0,o.createBlock)(L,{key:0,size:"lg",ref_for:!0,ref:"button",class:(0,o.normalizeClass)(["shadow relative w-full mt-2",t.type&&-1===["primary","danger"].indexOf(t.type)?"btn-"+t.type:""]),disabled:_.running,onClick:function(e){return S.openModal(t)},component:t.type&&-1===["primary","danger"].indexOf(t.type)?e.BasicButton:"danger"===t.type?"DangerButton":"DefaultButton"},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(t.label),1)]})),_:2},1032,["disabled","onClick","component","class"])):(0,o.createCommentVNode)("",!0)],64)})),256))])})),256))]})),_:1}),(0,o.createElementVNode)("div",f,[(0,o.createVNode)(A,null,{default:(0,o.withCtx)((function(){return[b]})),_:1}),(0,o.createVNode)(q,{class:"items-right md:mt-2",onClick:S.clearHistory},{default:(0,o.withCtx)((function(){return[h]})),_:1},8,["onClick"])]),(0,o.createVNode)(P,{class:"mb-6 overflow-hidden overflow-x-auto relative"},{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("table",y,[v,(0,o.createElementVNode)("tbody",null,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(_.history,(function(e){return(0,o.openBlock)(),(0,o.createElementBlock)("tr",null,[(0,o.createElementVNode)("td",w,(0,o.toDisplayString)(e.run),1),(0,o.createElementVNode)("td",C,(0,o.toDisplayString)(e.type),1),(0,o.createElementVNode)("td",x,(0,o.toDisplayString)(e.run_by),1),(0,o.createElementVNode)("td",k,[(0,o.createVNode)(I,{label:e.status,extraClasses:"badge-"+e.status},null,8,["label","extraClasses"])]),(0,o.createElementVNode)("td",N,[(0,o.createElementVNode)("pre",{innerHTML:e.result},null,8,V)]),(0,o.createElementVNode)("td",B,(0,o.toDisplayString)(e.duration?e.duration+" sec.":""),1),(0,o.createElementVNode)("td",E,(0,o.toDisplayString)(e.time),1)])})),256))])])]})),_:1})])}]])}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),Nova.booting((function(e,n,o){Nova.inertia("NovaCommandRunner",t(733).Z)}))})();