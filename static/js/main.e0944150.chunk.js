(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{265:function(e,t,n){"use strict";n.r(t);var a=n(26),o=n(2),r=n(3),l=n(7),i=n(6),c=n(8),s=n(0),u=n.n(s),h=n(21),f=n.n(h),d=n(20);function v(e,t,n){var a=e[t];e[t]=e[n],e[n]=a}function p(e,t){t.sort((function(e,t){return e-t}));var n=!0;t.forEach((function(t,a){(n=n&&t===a)||v(e,t-1,t)}))}function m(e,t){var n=t.sort((function(e,t){return t-e})),a=!0;n.forEach((function(t,n){(a=a&&t===e.length-n-1)||v(e,t+1,t)}))}function g(e,t){t.sort((function(e,t){return e-t}));var n=t.map((function(t){return e[t]})),a=t.reverse().concat([0]);a.forEach((function(t,n){if(0!==n)for(var o=a[n-1]-1;o>=t;--o)e[o+n]=e[o]})),n.forEach((function(t,n){e[n]=t}))}function y(e,t){var n=t.sort((function(e,t){return t-e})),a=n.map((function(t){return e[t]}));(t=n.reverse().concat([e.length])).forEach((function(n,a){if(0!==a)for(var o=t[a-1]+1;o<n;++o)e[o-a]=e[o]})),a.forEach((function(t,n){e[e.length-n-1]=t}))}function E(){return Math.floor(Math.random()*Math.pow(2,31))}function k(e,t){var n=Math.random;Math.random=function(e){return function(){return(Math.pow(2,31)-1&(e=Math.imul(48271,e)))/Math.pow(2,31)}}(e);var a=t();return Math.random=n,a}function w(e,t,n,a,o,r,l,i,c){var s=arguments.length>9&&void 0!==arguments[9]?arguments[9]:0,u=arguments.length>10&&void 0!==arguments[10]?arguments[10]:0,h={type:e,x:t,y:n,width:s,height:u,strokeColor:a,backgroundColor:o,fillStyle:r,strokeWidth:l,roughness:i,opacity:c,isSelected:!1,seed:E()};return h}var C=n(5);function S(e,t,n,a,o,r){var l,i,c=o-n,s=r-a,u=c*c+s*s,h=-1;0!==u&&(h=((e-n)*c+(t-a)*s)/u),h<0?(l=n,i=a):h>1?(l=o,i=r):(l=n+h*c,i=a+h*s);var f=e-l,d=t-i;return Math.hypot(f,d)}function x(e,t,n,a,o){return[(e-n)*Math.cos(o)-(t-a)*Math.sin(o)+n,(e-n)*Math.sin(o)+(t-a)*Math.cos(o)+a]}function b(e){return[e.width>=0?e.x:e.x+e.width,e.height>=0?e.y:e.y+e.height,e.width>=0?e.x+e.width:e.x,e.height>=0?e.y+e.height:e.y]}function M(e){var t=Math.floor(e.width/2)+1,n=e.width,a=Math.floor(e.height/2)+1;return[t,0,n,a,t,e.height,0,a]}function B(e){var t=e.width,n=e.height,a=Math.hypot(t-0,n-0),o=Math.min(30,a/2),r=t-(t-0)/a*o,l=n-(n-0)/a*o,i=x(r,l,t,n,-20*Math.PI/180),c=Object(C.a)(i,2),s=c[0],u=c[1],h=x(r,l,t,n,20*Math.PI/180),f=Object(C.a)(h,2);return[0,0,t,n,s,u,f[0],f[1]]}function O(e,t){var n=e.x,a=e.x+e.width,o=e.y,r=e.y+e.height,l={},i=e.width<0?8:-8,c=e.height<0?8:-8;return Math.abs(a-n)>40&&(l.n=[n+(a-n)/2+t.scrollX-4,o-4+t.scrollY+c,8,8],l.s=[n+(a-n)/2+t.scrollX-4,r-4+t.scrollY-c,8,8]),Math.abs(r-o)>40&&(l.w=[n-4+t.scrollX+i,o+(r-o)/2+t.scrollY-4,8,8],l.e=[a-4+t.scrollX-i,o+(r-o)/2+t.scrollY-4,8,8]),l.nw=[n-4+t.scrollX+i,o-4+t.scrollY+c,8,8],l.ne=[a-4+t.scrollX-i,o-4+t.scrollY+c,8,8],l.sw=[n-4+t.scrollX+i,r-4+t.scrollY-c,8,8],l.se=[a-4+t.scrollX-i,r-4+t.scrollY-c,8,8],"arrow"===e.type?{nw:l.nw,se:l.se}:l}function Y(e,t,n){if("ellipse"===e.type){var a=Math.abs(t-e.x-e.width/2),o=Math.abs(n-e.y-e.height/2),r=.707,l=.707,i=Math.abs(e.width)/2,c=Math.abs(e.height)/2;return[0,1,2,3].forEach((function(e){var t=i*r,n=c*l,s=(i*i-c*c)*Math.pow(r,3)/i,u=(c*c-i*i)*Math.pow(l,3)/c,h=t-s,f=n-u,d=a-s,v=o-u,p=Math.hypot(f,h),m=Math.hypot(v,d);r=Math.min(1,Math.max(0,(d*p/m+s)/i)),l=Math.min(1,Math.max(0,(v*p/m+u)/c));var g=Math.hypot(l,r);r/=g,l/=g})),Math.hypot(i*r-a,c*l-o)<10}if("rectangle"===e.type){var s=b(e),u=Object(C.a)(s,4),h=u[0],f=u[1],d=u[2],v=u[3];return S(t,n,h,f,d,f)<10||S(t,n,d,f,d,v)<10||S(t,n,d,v,h,v)<10||S(t,n,h,v,h,f)<10}if("diamond"===e.type){t-=e.x,n-=e.y;var p=M(e),m=Object(C.a)(p,8),g=m[0],y=m[1],E=m[2],k=m[3],w=m[4],x=m[5],O=m[6],Y=m[7];return S(t,n,g,y,E,k)<10||S(t,n,E,k,w,x)<10||S(t,n,w,x,O,Y)<10||S(t,n,O,Y,g,y)<10}if("arrow"===e.type){var D=B(e),X=Object(C.a)(D,8),A=X[0],j=X[1],N=X[2],T=X[3],R=X[4],L=X[5],F=X[6],P=X[7];return S(t-=e.x,n-=e.y,R,L,N,T)<10||S(t,n,A,j,N,T)<10||S(t,n,F,P,N,T)<10}if("text"===e.type){var U=b(e),K=Object(C.a)(U,4),W=K[0],z=K[1],H=K[2],I=K[3];return t>=W&&t<=H&&n>=z&&n<=I}if("selection"===e.type)return console.warn("This should not happen, we need to investigate why it does."),!1;throw new Error("Unimplemented type "+e.type)}function D(e,t,n,a){if("text"===e.type)return!1;var o=O(e,a),r=Object.keys(o).filter((function(e){var r=o[e];return t+a.scrollX>=r[0]&&t+a.scrollX<=r[0]+r[2]&&n+a.scrollY>=r[1]&&n+a.scrollY<=r[1]+r[3]}));return r.length>0&&r[0]}function X(e){return"text"===e.type}function A(e,t,n,a,o){var r=1/0,l=0,i=1/0,c=0;e.forEach((function(e){var t=b(e),n=Object(C.a)(t,4),a=n[0],o=n[1],s=n[2],u=n[3];r=Math.min(r,a),i=Math.min(i,o),l=Math.max(l,s),c=Math.max(c,u)})),r+=a,l+=a,i+=o,c+=o;var s=Math.max(-r,0),u=Math.max(-(t-l),0),h=Math.max(-i,0),f=Math.max(-(n-c),0),d=null;(s||u)&&(d={x:Math.min(s+4,t-15-4),y:n-6-4,width:Math.max(t-u-s-8,15),height:6});var v=null;return(h||f)&&(v={x:t-6-4,y:Math.min(h+4,n-15-4),width:6,height:Math.max(n-f-h-12,15)}),{horizontal:d,vertical:v}}function j(e){e.forEach((function(e){e.isSelected=!1}))}function N(e){for(var t=e.length-1;t>=0;--t)e[t].isSelected&&e.splice(t,1)}function T(e){var t=[];return e.forEach((function(e,n){e.isSelected&&t.push(n)})),t}var R=function(e){return e.some((function(e){return e.isSelected}))};function L(e,t){var n=Array.from(new Set(e.filter((function(e){return e.isSelected})).map((function(e){return t(e)}))));return 1===n.length?n[0]:null}var F=n(38);function P(e,t,n,a,o,r){e.beginPath(),e.moveTo(t+r,n),e.lineTo(t+a-r,n),e.quadraticCurveTo(t+a,n,t+a,n+r),e.lineTo(t+a,n+o-r),e.quadraticCurveTo(t+a,n+o,t+a-r,n+o),e.lineTo(t+r,n+o),e.quadraticCurveTo(t,n+o,t,n+o-r),e.lineTo(t,n+r),e.quadraticCurveTo(t,n,t+r,n),e.closePath(),e.fill(),e.stroke()}var U=d.a.generator(null,null);function K(e,t,n,a){var o=a.scrollX,r=a.scrollY;if("selection"===e.type){var l=n.fillStyle;n.fillStyle="rgba(0, 0, 255, 0.10)",n.fillRect(e.x+o,e.y+r,e.width,e.height),n.fillStyle=l}else if("rectangle"===e.type){var i=k(e.seed,(function(){return U.rectangle(0,0,e.width,e.height,{stroke:e.strokeColor,fill:e.backgroundColor,fillStyle:e.fillStyle,strokeWidth:e.strokeWidth,roughness:e.roughness})}));n.globalAlpha=e.opacity/100,n.translate(e.x+o,e.y+r),t.draw(i),n.translate(-e.x-o,-e.y-r),n.globalAlpha=1}else if("diamond"===e.type){var c=k(e.seed,(function(){var t=M(e),n=Object(C.a)(t,8),a=n[0],o=n[1],r=n[2],l=n[3],i=n[4],c=n[5],s=n[6],u=n[7];return U.polygon([[a,o],[r,l],[i,c],[s,u]],{stroke:e.strokeColor,fill:e.backgroundColor,fillStyle:e.fillStyle,strokeWidth:e.strokeWidth,roughness:e.roughness})}));n.globalAlpha=e.opacity/100,n.translate(e.x+o,e.y+r),t.draw(c),n.translate(-e.x-o,-e.y-r),n.globalAlpha=1}else if("ellipse"===e.type){var s=k(e.seed,(function(){return U.ellipse(e.width/2,e.height/2,e.width,e.height,{stroke:e.strokeColor,fill:e.backgroundColor,fillStyle:e.fillStyle,strokeWidth:e.strokeWidth,roughness:e.roughness})}));n.globalAlpha=e.opacity/100,n.translate(e.x+o,e.y+r),t.draw(s),n.translate(-e.x-o,-e.y-r),n.globalAlpha=1}else{if("arrow"===e.type){var u=B(e),h=Object(C.a)(u,8),f=h[0],d=h[1],v=h[2],p=h[3],m=h[4],g=h[5],y=h[6],E=h[7],w={stroke:e.strokeColor,strokeWidth:e.strokeWidth,roughness:e.roughness},S=k(e.seed,(function(){return[U.line(m,g,v,p,w),U.line(f,d,v,p,w),U.line(y,E,v,p,w)]}));return n.globalAlpha=e.opacity/100,n.translate(e.x+o,e.y+r),S.forEach((function(e){return t.draw(e)})),n.translate(-e.x-o,-e.y-r),void(n.globalAlpha=1)}if(!X(e))throw new Error("Unimplemented type "+e.type);n.globalAlpha=e.opacity/100;var x=n.font;n.font=e.font;var b=n.fillStyle;n.fillStyle=e.strokeColor,n.fillText(e.text,e.x+o,e.y+e.actualBoundingBoxAscent+r),n.fillStyle=b,n.font=x,n.globalAlpha=1}}function W(e,t,n,a){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},r=o.offsetX,l=o.offsetY,i=o.renderScrollbars,c=void 0===i||i,s=o.renderSelection,u=void 0===s||s;if(n){var h=n.getContext("2d"),f=h.fillStyle;if("string"===typeof a.viewBackgroundColor?(h.fillStyle=a.viewBackgroundColor,h.fillRect(0,0,n.width,n.height)):h.clearRect(0,0,n.width,n.height),h.fillStyle=f,a=Object(F.a)({},a,{scrollX:"number"===typeof r?r:a.scrollX,scrollY:"number"===typeof l?l:a.scrollY}),e.forEach((function(e){K(e,t,h,a)})),u){var d=e.filter((function(e){return e.isSelected}));if(d.forEach((function(e){var t=b(e),n=Object(C.a)(t,4),o=n[0],r=n[1],l=n[2],i=n[3],c=h.getLineDash();h.setLineDash([8,4]),h.strokeRect(o-4+a.scrollX,r-4+a.scrollY,l-o+8,i-r+8),h.setLineDash(c)})),1===d.length&&"text"!==d[0].type){var v=O(d[0],a);Object.values(v).forEach((function(e){h.strokeRect(e[0],e[1],e[2],e[3])}))}}if(c){var p=A(e,h.canvas.width/window.devicePixelRatio,h.canvas.height/window.devicePixelRatio,a.scrollX,a.scrollY),m=h.strokeStyle;h.fillStyle="rgba(0,0,0,0.3)",h.strokeStyle="rgba(255,255,255,0.8)",[p.horizontal,p.vertical].forEach((function(e){e&&P(h,e.x,e.y,e.width,e.height,3)})),h.strokeStyle=m,h.fillStyle=f}}}function z(e,t){var n=document.createElement("a");n.setAttribute("download",e),n.setAttribute("href",t),n.click(),n.remove()}function H(e,t,n){try{return t&&(e.splice.apply(e,[0,e.length].concat(Object(a.a)("string"===typeof t?JSON.parse(t):t))),e.forEach((function(e){e.fillStyle=e.fillStyle||"hachure",e.strokeWidth=e.strokeWidth||1,e.roughness=e.roughness||1,e.opacity=null===e.opacity||void 0===e.opacity?100:e.opacity}))),n?JSON.parse(n):null}catch(o){return e.splice(0,e.length),null}}function I(e,t,n){for(var a=null,o=e.length-1;o>=0;--o)if(Y(e[o],t,n)){a=e[o];break}return a}function J(e){return e.charAt(0).toUpperCase()+e.slice(1)}function V(e){return e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement}function q(e){var t=e.options,n=e.value,a=e.onChange;return u.a.createElement("div",{className:"buttonList"},t.map((function(e){return u.a.createElement("button",{key:e.text,onClick:function(){return a(e.value)},className:n===e.value?"active":""},e.text)})))}var _=[{icon:u.a.createElement("svg",{viewBox:"0 0 320 512"},u.a.createElement("path",{d:"M302.189 329.126H196.105l55.831 135.993c3.889 9.428-.555 19.999-9.444 23.999l-49.165 21.427c-9.165 4-19.443-.571-23.332-9.714l-53.053-129.136-86.664 89.138C18.729 472.71 0 463.554 0 447.977V18.299C0 1.899 19.921-6.096 30.277 5.443l284.412 292.542c11.472 11.179 3.007 31.141-12.5 31.141z"})),value:"selection"},{icon:u.a.createElement("svg",{viewBox:"0 0 448 512"},u.a.createElement("path",{d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"})),value:"rectangle"},{icon:u.a.createElement("svg",{viewBox:"0 0 223.646 223.646"},u.a.createElement("path",{d:"M111.823 0L16.622 111.823 111.823 223.646 207.025 111.823z"})),value:"diamond"},{icon:u.a.createElement("svg",{viewBox:"0 0 512 512"},u.a.createElement("path",{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"})),value:"ellipse"},{icon:u.a.createElement("svg",{viewBox:"0 0 448 512"},u.a.createElement("path",{d:"M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"})),value:"arrow"},{icon:u.a.createElement("svg",{viewBox:"0 0 448 512"},u.a.createElement("path",{d:"M432 416h-23.41L277.88 53.69A32 32 0 0 0 247.58 32h-47.16a32 32 0 0 0-30.3 21.69L39.41 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-19.58l23.3-64h152.56l23.3 64H304a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM176.85 272L224 142.51 271.15 272z"})),value:"text"}],G=_.map((function(e){return e.value[0]}));function Z(e){return _.reduce((function(t,n){return n.value[0]!==e?t:n.value}),"selection")}var Q=function(){function e(){Object(o.a)(this,e),this.recording=!0,this.stateHistory=[],this.redoStack=[]}return Object(r.a)(e,[{key:"generateCurrentEntry",value:function(e){return JSON.stringify(e.map((function(e){return Object(F.a)({},e,{isSelected:!1})})))}},{key:"pushEntry",value:function(e){this.stateHistory.length>0&&this.stateHistory[this.stateHistory.length-1]===e||this.stateHistory.push(e)}},{key:"restoreEntry",value:function(e,t){var n=JSON.parse(t);e.splice(0,e.length),n.forEach((function(t){e.push(t)})),this.skipRecording()}},{key:"clearRedoStack",value:function(){this.redoStack.splice(0,this.redoStack.length)}},{key:"redoOnce",value:function(e){var t=this.generateCurrentEntry(e),n=this.redoStack.pop();void 0!==n&&(this.restoreEntry(e,n),this.stateHistory.push(t))}},{key:"undoOnce",value:function(e){var t=this.generateCurrentEntry(e),n=this.stateHistory.pop();t===n&&(n=this.stateHistory.pop()),void 0!==n&&(this.restoreEntry(e,n),this.redoStack.push(t))}},{key:"isRecording",value:function(){return this.recording}},{key:"skipRecording",value:function(){this.recording=!1}},{key:"resumeRecording",value:function(){this.recording=!0}}]),e}();n(98);function $(e){var t=e.children,n=e.left,a=e.onCloseRequest,o=e.top;return u.a.createElement("div",{className:"popover",style:{top:o,left:n}},u.a.createElement("div",{className:"cover",onClick:a,onContextMenu:function(e){e.preventDefault(),a&&a()}}),t)}var ee;n(99);function te(e){var t=e.options,n=e.onCloseRequest,a=e.top,o=e.left;return u.a.createElement($,{onCloseRequest:n,top:a,left:o},u.a.createElement("ul",{className:"context-menu",onContextMenu:function(e){return e.preventDefault()}},t.map((function(e,t){return u.a.createElement("li",{key:t,className:"context-menu__option",onClick:n},u.a.createElement(ne,e))}))))}function ne(e){var t=e.label,n=e.action;return u.a.createElement("button",{className:"context-menu-option",onClick:n},t)}function ae(){if(ee)return ee;var e=document.createElement("div");return document.body.appendChild(e),ee=e}function oe(){Object(h.unmountComponentAtNode)(ae())}var re=function(e){var t=Array.of();e.options.forEach((function(e){e&&t.push(e)})),t.length&&Object(h.render)(u.a.createElement(te,{top:e.top,left:e.left,options:t,onCloseRequest:oe}),ae())},le=function(e){var t=e.activeTool,n=e.onToolChange;return u.a.createElement(u.a.Fragment,null,u.a.createElement("h4",null,"Shapes"),u.a.createElement("div",{className:"panelTools"},_.map((function(e){var a=e.value,o=e.icon;return u.a.createElement("label",{key:a,className:"tool",title:"".concat(J(a)," - ").concat(J(a)[0])},u.a.createElement("input",{type:"radio",checked:t===a,onChange:function(){n(a)}}),u.a.createElement("div",{className:"toolIcon"},o))}))))},ie=function(e){var t=e.onBringForward,n=e.onBringToFront,a=e.onSendBackward,o=e.onSendToBack;return u.a.createElement(u.a.Fragment,null,u.a.createElement("h4",null,"Selection"),u.a.createElement("div",{className:"buttonList"},u.a.createElement("button",{type:"button",onClick:t},"Bring forward"),u.a.createElement("button",{type:"button",onClick:n},"Bring to front"),u.a.createElement("button",{type:"button",onClick:a},"Send backward"),u.a.createElement("button",{type:"button",onClick:o},"Send to back")))},ce=n(92);function se(e){var t=e.color,n=e.onChange,a=u.a.useState(!1),o=Object(C.a)(a,2),r=o[0],l=o[1];return u.a.createElement("div",null,u.a.createElement("button",{className:"swatch",style:t?{backgroundColor:t}:void 0,onClick:function(){return l(!r)}}),r?u.a.createElement($,{onCloseRequest:function(){return l(!1)}},u.a.createElement(ce.TwitterPicker,{colors:["#000000","#ABB8C3","#FFFFFF","#FF6900","#FCB900","#00D084","#8ED1FC","#0693E3","#EB144C","#F78DA7","#9900EF"],width:"205px",color:t||void 0,onChange:function(e){n(e.hex)}})):null,u.a.createElement("input",{type:"text",className:"swatch-input",value:t||"",onPaste:function(e){return n(e.clipboardData.getData("text"))},onChange:function(e){return n(e.target.value)}}))}var ue=function(e){var t=e.title,n=e.onColorChange,a=e.colorValue;return u.a.createElement(u.a.Fragment,null,u.a.createElement("h5",null,t),u.a.createElement(se,{color:a,onChange:function(e){return n(e)}}))},he=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(i.a)(t).call(this,e))).state={value:e.value,edit:!1},n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.setState({value:e.value})}},{key:"handleEdit",value:function(e){this.setState({value:e.target.value})}},{key:"handleBlur",value:function(){var e=this.state.value;e?(this.props.onChange(e),this.setState({edit:!1})):this.setState({value:this.props.value,edit:!1})}},{key:"render",value:function(){var e=this,t=this.state,n=t.value,a=t.edit;return u.a.createElement(s.Fragment,null,a?u.a.createElement("input",{className:"project-name-input",name:"name",maxLength:25,value:n,onChange:function(t){return e.handleEdit(t)},onBlur:function(){return e.handleBlur()},onKeyDown:function(t){"Enter"===t.key&&e.handleBlur()},autoFocus:!0}):u.a.createElement("span",{onClick:function(){return e.setState({edit:!0})},className:"project-name"},n))}}]),t}(s.Component),fe=function(e){var t=e.projectName,n=e.exportBackground,a=e.onProjectNameChange,o=e.onExportBackgroundChange,r=e.onSaveScene,l=e.onLoadScene,i=e.onExportAsPNG;return u.a.createElement(u.a.Fragment,null,u.a.createElement("h4",null,"Export"),u.a.createElement("div",{className:"panelColumn"},u.a.createElement("h5",null,"Name"),t&&u.a.createElement(he,{value:t,onChange:function(e){return a(e)}}),u.a.createElement("h5",null,"Image"),u.a.createElement("button",{onClick:i},"Export to png"),u.a.createElement("label",null,u.a.createElement("input",{type:"checkbox",checked:n,onChange:function(e){o(e.target.checked)}}),"background"),u.a.createElement("h5",null,"Scene"),u.a.createElement("button",{onClick:r},"Save as..."),u.a.createElement("button",{onClick:l},"Load file...")))},de=function(e){var t=e.viewBackgroundColor,n=e.onViewBackgroundColorChange,a=e.onClearCanvas;return u.a.createElement(u.a.Fragment,null,u.a.createElement("h4",null,"Canvas"),u.a.createElement("div",{className:"panelColumn"},u.a.createElement("h5",null,"Canvas Background Color"),u.a.createElement(se,{color:t,onChange:function(e){return n(e)}}),u.a.createElement("button",{type:"button",onClick:a,title:"Clear the canvas & reset background color"},"Clear canvas")))},ve={elements:Array.of()}.elements,pe={history:new Q}.history,me="excalidraw-".concat(function(){var e=new Date,t=e.getFullYear(),n=e.getMonth()+1,a=e.getDate(),o=e.getHours(),r=e.getMinutes(),l=e.getSeconds();return"".concat(t).concat(n).concat(a).concat(o).concat(r).concat(l)}()),ge="ArrowLeft",ye="ArrowRight",Ee="ArrowDown",ke="ArrowUp",we="Escape",Ce="Delete",Se="Backspace",xe=/Mac|iPod|iPhone|iPad/.test(window.navigator.platform)?"metaKey":"ctrlKey",be="{}";function Me(e){return e===ge||e===ye||e===Ee||e===ke}function Be(){document.documentElement.style.cursor=""}function Oe(e){Be();var t=prompt("What text do you want?");if(null===t||""===t)return!1;e.text=t,e.font="".concat(20,"px Virgil");var n=Re.font;Re.font=e.font;var a=Re.measureText(e.text),o=a.width,r=a.actualBoundingBoxAscent||20,l=a.actualBoundingBoxDescent||0;e.actualBoundingBoxAscent=r,Re.font=n;var i=r+l;return e.x-=o/2,e.y-=r,e.width=o,e.height=i,!0}var Ye=-1,De=-1,Xe=null,Ae=function(e){function t(){var e,n;Object(o.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={draggingElement:null,resizingElement:null,elementType:"selection",exportBackground:!0,currentItemStrokeColor:"#000000",currentItemBackgroundColor:"#ffffff",viewBackgroundColor:"#ffffff",scrollX:0,scrollY:0,name:me},n.onResize=function(){n.forceUpdate()},n.onKeyDown=function(e){if(!V(e.target))if(e.key===we)j(ve),n.forceUpdate(),e.preventDefault();else if(e.key===Se||e.key===Ce)n.deleteSelectedElements(),e.preventDefault();else if(Me(e.key)){var t=e.shiftKey?5:1;ve.forEach((function(n){n.isSelected&&(e.key===ge?n.x-=t:e.key===ye?n.x+=t:e.key===ke?n.y-=t:e.key===Ee&&(n.y+=t))})),n.forceUpdate(),e.preventDefault()}else e[xe]&&e.shiftKey&&e.altKey&&"KeyB"===e.code?(n.moveOneLeft(),e.preventDefault()):e[xe]&&e.shiftKey&&"KeyB"===e.code?(n.moveAllLeft(),e.preventDefault()):e[xe]&&e.shiftKey&&e.altKey&&"KeyF"===e.code?(n.moveOneRight(),e.preventDefault()):e[xe]&&e.shiftKey&&"KeyF"===e.code?(n.moveAllRight(),e.preventDefault()):e[xe]&&"KeyA"===e.code?(ve.forEach((function(e){e.isSelected=!0})),n.forceUpdate(),e.preventDefault()):G.includes(e.key.toLowerCase())?n.setState({elementType:Z(e.key)}):e[xe]&&"KeyZ"===e.code?(e.shiftKey?pe.redoOnce(ve):pe.undoOnce(ve),n.forceUpdate(),e.preventDefault()):e.metaKey&&e.shiftKey&&"KeyC"===e.code?n.copyStyles():e.metaKey&&e.shiftKey&&"KeyV"===e.code&&(n.pasteStyles(),e.preventDefault())},n.deleteSelectedElements=function(){N(ve),n.forceUpdate()},n.clearCanvas=function(){window.confirm("This will clear the whole canvas. Are you sure?")&&(ve.splice(0,ve.length),n.setState({viewBackgroundColor:"#ffffff",scrollX:0,scrollY:0}),n.forceUpdate())},n.copyStyles=function(){var e=ve.find((function(e){return e.isSelected}));e&&(be=JSON.stringify(e))},n.pasteStyles=function(){var e=JSON.parse(be);ve.forEach((function(t){t.isSelected&&(t.backgroundColor=null===e||void 0===e?void 0:e.backgroundColor,t.strokeWidth=null===e||void 0===e?void 0:e.strokeWidth,t.strokeColor=null===e||void 0===e?void 0:e.strokeColor,t.fillStyle=null===e||void 0===e?void 0:e.fillStyle,t.opacity=null===e||void 0===e?void 0:e.opacity,t.roughness=null===e||void 0===e?void 0:e.roughness)})),n.forceUpdate()},n.moveAllLeft=function(){g(ve,T(ve)),n.forceUpdate()},n.moveOneLeft=function(){p(ve,T(ve)),n.forceUpdate()},n.moveAllRight=function(){y(ve,T(ve)),n.forceUpdate()},n.moveOneRight=function(){m(ve,T(ve)),n.forceUpdate()},n.removeWheelEventListener=void 0,n.changeProperty=function(e){ve.forEach((function(t){t.isSelected&&e(t)})),n.forceUpdate()},n.changeOpacity=function(e){n.changeProperty((function(t){return t.opacity=+e.target.value}))},n.changeStrokeColor=function(e){n.changeProperty((function(t){return t.strokeColor=e})),n.setState({currentItemStrokeColor:e})},n.changeBackgroundColor=function(e){n.changeProperty((function(t){return t.backgroundColor=e})),n.setState({currentItemBackgroundColor:e})},n.copyToClipboard=function(){if(navigator.clipboard){var e=JSON.stringify(ve.filter((function(e){return e.isSelected})));navigator.clipboard.writeText(e)}},n.pasteFromClipboard=function(e,t){navigator.clipboard&&navigator.clipboard.readText().then((function(a){return n.addElementsFromPaste(a,e,t)}))},n.handleWheel=function(e){e.preventDefault();var t=e.deltaX,a=e.deltaY;n.setState((function(e){return{scrollX:e.scrollX-t,scrollY:e.scrollY-a}}))},n.addElementsFromPaste=function(e,t,o){var r;try{r=JSON.parse(e)}catch(u){}if(Array.isArray(r)&&r.length>0&&r[0].type){var l,i;if(j(ve),t){var c=Math.min.apply(Math,Object(a.a)(r.map((function(e){return e.x}))));l=t-c}if(o){var s=Math.min.apply(Math,Object(a.a)(r.map((function(e){return e.y}))));i=o-s}r.forEach((function(e){e.x=l?e.x+l:10-n.state.scrollX,e.y=i?e.y+i:10-n.state.scrollY,e.seed=E(),ve.push(e)})),n.forceUpdate()}},n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.onKeyDown,!1),window.addEventListener("resize",this.onResize,!1);var e=H(ve,localStorage.getItem("excalidraw"),localStorage.getItem("excalidraw-state"));e&&this.setState(e)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onKeyDown,!1),window.removeEventListener("resize",this.onResize,!1)}},{key:"updateProjectName",value:function(e){this.setState({name:e})}},{key:"render",value:function(){var e=this,t=window.innerWidth-250,n=window.innerHeight-0;return u.a.createElement("div",{className:"container",onCut:function(t){t.clipboardData.setData("text/plain",JSON.stringify(ve.filter((function(e){return e.isSelected})))),N(ve),e.forceUpdate(),t.preventDefault()},onCopy:function(e){e.clipboardData.setData("text/plain",JSON.stringify(ve.filter((function(e){return e.isSelected})))),e.preventDefault()},onPaste:function(t){var n=t.clipboardData.getData("text");e.addElementsFromPaste(n),t.preventDefault()}},u.a.createElement("div",{className:"sidePanel"},u.a.createElement(le,{activeTool:this.state.elementType,onToolChange:function(t){e.setState({elementType:t}),j(ve),document.documentElement.style.cursor="text"===t?"text":"crosshair",e.forceUpdate()}}),R(ve)&&u.a.createElement("div",{className:"panelColumn"},u.a.createElement(ie,{onBringForward:this.moveOneRight,onBringToFront:this.moveAllRight,onSendBackward:this.moveOneLeft,onSendToBack:this.moveAllLeft}),u.a.createElement(ue,{title:"Stroke Color",onColorChange:this.changeStrokeColor,colorValue:L(ve,(function(e){return e.strokeColor}))}),ve.some((function(e){return e.isSelected&&("rectangle"===e.type||"ellipse"===e.type||"diamond"===e.type)}))&&u.a.createElement(u.a.Fragment,null,u.a.createElement(ue,{title:"Background Color",onColorChange:this.changeBackgroundColor,colorValue:L(ve,(function(e){return e.backgroundColor}))}),u.a.createElement("h5",null,"Fill"),u.a.createElement(q,{options:[{value:"solid",text:"Solid"},{value:"hachure",text:"Hachure"},{value:"cross-hatch",text:"Cross-hatch"}],value:L(ve,(function(e){return e.fillStyle})),onChange:function(t){e.changeProperty((function(e){e.fillStyle=t}))}})),function(e){return e.some((function(e){return e.isSelected&&("rectangle"===e.type||"ellipse"===e.type||"diamond"===e.type||"arrow"===e.type)}))}(ve)&&u.a.createElement(u.a.Fragment,null,u.a.createElement("h5",null,"Stroke Width"),u.a.createElement(q,{options:[{value:1,text:"Thin"},{value:2,text:"Bold"},{value:4,text:"Extra Bold"}],value:L(ve,(function(e){return e.strokeWidth})),onChange:function(t){e.changeProperty((function(e){e.strokeWidth=t}))}}),u.a.createElement("h5",null,"Sloppiness"),u.a.createElement(q,{options:[{value:0,text:"Draftsman"},{value:1,text:"Artist"},{value:3,text:"Cartoonist"}],value:L(ve,(function(e){return e.roughness})),onChange:function(t){return e.changeProperty((function(e){e.roughness=t}))}})),u.a.createElement("h5",null,"Opacity"),u.a.createElement("input",{type:"range",min:"0",max:"100",onChange:this.changeOpacity,value:L(ve,(function(e){return e.opacity}))||0}),u.a.createElement("button",{onClick:this.deleteSelectedElements},"Delete selected")),u.a.createElement(de,{onClearCanvas:this.clearCanvas,onViewBackgroundColorChange:function(t){return e.setState({viewBackgroundColor:t})},viewBackgroundColor:this.state.viewBackgroundColor}),u.a.createElement(fe,{projectName:this.state.name,onProjectNameChange:this.updateProjectName,onExportAsPNG:function(){return function(e,t,n){var a=n.exportBackground,o=n.exportPadding,r=void 0===o?10:o,l=n.viewBackgroundColor,i=n.name;if(!e.length)return window.alert("Cannot export empty canvas.");var c=1/0,s=0,u=1/0,h=0;function f(e,t){return Math.abs(e>t?e-t:t-e)}e.forEach((function(e){var t=b(e),n=Object(C.a)(t,4),a=n[0],o=n[1],r=n[2],l=n[3];c=Math.min(c,a),u=Math.min(u,o),s=Math.max(s,r),h=Math.max(h,l)}));var v=document.createElement("canvas");v.style.display="none",document.body.appendChild(v),v.width=f(c,s)+2*r,v.height=f(u,h)+2*r,W(e,d.a.canvas(v),v,{viewBackgroundColor:a?l:null,scrollX:0,scrollY:0},{offsetX:-c+r,offsetY:-u+r,renderScrollbars:!1,renderSelection:!1}),z("".concat(i,".png"),v.toDataURL("image/png")),v!==t&&v.remove()}(ve,Ne,e.state)},exportBackground:this.state.exportBackground,onExportBackgroundChange:function(t){return e.setState({exportBackground:t})},onSaveScene:function(){return function(e,t){var n=JSON.stringify({version:1,source:window.location.origin,elements:e});z("".concat(t,".json"),"data:text/plain;charset=utf-8,"+encodeURIComponent(n))}(ve,e.state.name)},onLoadScene:function(){return function(e){var t=document.createElement("input"),n=new FileReader;return t.type="file",t.accept=".json",t.onchange=function(){t.files.length?n.readAsText(t.files[0],"utf8"):alert("A file was not selected.")},t.click(),new Promise((function(t){n.onloadend=function(){if(n.readyState===FileReader.DONE){var a=JSON.parse(n.result);H(e,a.elements,null),t()}}}))}(ve).then((function(){return e.forceUpdate()}))}})),u.a.createElement("canvas",{id:"canvas",style:{width:t,height:n},width:t*window.devicePixelRatio,height:n*window.devicePixelRatio,ref:function(a){e.removeWheelEventListener&&(e.removeWheelEventListener(),e.removeWheelEventListener=void 0),a&&(a.addEventListener("wheel",e.handleWheel,{passive:!1}),e.removeWheelEventListener=function(){return a.removeEventListener("wheel",e.handleWheel)},t===Ye&&n===De||(Ye=t,De=n,a.getContext("2d").scale(window.devicePixelRatio,window.devicePixelRatio)))},onContextMenu:function(t){t.preventDefault();var n=t.clientX-250-e.state.scrollX,a=t.clientY-0-e.state.scrollY,o=I(ve,n,a);o?(o.isSelected||(j(ve),o.isSelected=!0,e.forceUpdate()),re({options:[navigator.clipboard&&{label:"Copy",action:e.copyToClipboard},navigator.clipboard&&{label:"Paste",action:function(){return e.pasteFromClipboard(n,a)}},{label:"Copy Styles",action:e.copyStyles},{label:"Paste Styles",action:e.pasteStyles},{label:"Delete",action:e.deleteSelectedElements},{label:"Move Forward",action:e.moveOneRight},{label:"Send to Front",action:e.moveAllRight},{label:"Move Backwards",action:e.moveOneLeft},{label:"Send to Back",action:e.moveAllLeft}],top:t.clientY,left:t.clientX})):re({options:[navigator.clipboard&&{label:"Paste",action:function(){return e.pasteFromClipboard(n,a)}}],top:t.clientY,left:t.clientX})},onMouseDown:function(a){if(null!==Xe&&Xe(a),0===a.button){a.preventDefault(),V(document.activeElement)&&document.activeElement.blur();var o=function(e,t,n,a,o,r,l){var i=A(e,a,o,r,l),c=[i.horizontal,i.vertical].map((function(e){return e&&e.x<=t&&t<=e.x+e.width&&e.y<=n&&n<=e.y+e.height})),s=Object(C.a)(c,2);return{isOverHorizontalScrollBar:s[0],isOverVerticalScrollBar:s[1]}}(ve,a.clientX-250,a.clientY-0,t,n,e.state.scrollX,e.state.scrollY),r=o.isOverHorizontalScrollBar,l=o.isOverVerticalScrollBar,i=a.clientX-250-e.state.scrollX,c=a.clientY-0-e.state.scrollY,s=w(e.state.elementType,i,c,e.state.currentItemStrokeColor,e.state.currentItemBackgroundColor,"hachure",1,1,100),u=!1,h=!1,f=!1;if("selection"===e.state.elementType){var d=ve.find((function(t){return D(t,i,c,{scrollX:e.state.scrollX,scrollY:e.state.scrollY,viewBackgroundColor:e.state.viewBackgroundColor})}));if(e.setState({resizingElement:d||null}),d)u=D(d,i,c,{scrollX:e.state.scrollX,scrollY:e.state.scrollY,viewBackgroundColor:e.state.viewBackgroundColor}),document.documentElement.style.cursor="".concat(u,"-resize"),f=!0;else{var v=I(ve,i,c);v?v.isSelected||(a.shiftKey||j(ve),v.isSelected=!0):j(ve),(h=R(ve))&&(document.documentElement.style.cursor="move")}}if(!X(s)||Oe(s)){ve.push(s),"text"===e.state.elementType?(e.setState({draggingElement:null,elementType:"selection"}),s.isSelected=!0):e.setState({draggingElement:s});var p=i,m=c;(r||l)&&(p=a.clientX-250,m=a.clientY-0);var g=function(t){if(t.target instanceof HTMLElement){if(r){var n=t.clientX-250,a=n-p;return e.setState((function(e){return{scrollX:e.scrollX-a}})),void(p=n)}if(l){var o=t.clientY-0,i=o-m;return e.setState((function(e){return{scrollY:e.scrollY-i}})),void(m=o)}if(f&&e.state.resizingElement){var c=e.state.resizingElement,s=ve.filter((function(e){return e.isSelected}));if(1===s.length){var d=t.clientX-250-e.state.scrollX,v=t.clientY-0-e.state.scrollY;return s.forEach((function(e){switch(u){case"nw":e.width+=e.x-p,e.x=p,t.shiftKey?(e.y+=e.height-e.width,e.height=e.width):(e.height+=e.y-m,e.y=m);break;case"ne":e.width=p-e.x,t.shiftKey?(e.y+=e.height-e.width,e.height=e.width):(e.height+=e.y-m,e.y=m);break;case"sw":e.width+=e.x-p,e.x=p,t.shiftKey?e.height=e.width:e.height=m-e.y;break;case"se":e.width+=d-p,t.shiftKey?e.height=e.width:e.height+=v-m;break;case"n":e.height+=e.y-m,e.y=m;break;case"w":e.width+=e.x-p,e.x=p;break;case"s":e.height=m-e.y;break;case"e":e.width=p-e.x}c.x=e.x,c.y=e.y})),p=d,m=v,pe.skipRecording(),void e.forceUpdate()}}if(h){var g=ve.filter((function(e){return e.isSelected}));if(g.length){var y=t.clientX-250-e.state.scrollX,E=t.clientY-0-e.state.scrollY;return g.forEach((function(e){e.x+=y-p,e.y+=E-m})),p=y,m=E,pe.skipRecording(),void e.forceUpdate()}}var k=e.state.draggingElement;if(k){var w=t.clientX-250-k.x-e.state.scrollX,S=t.clientY-0-k.y-e.state.scrollY;k.width=w,k.height=t.shiftKey?Math.abs(w)*Math.sign(S):S,"selection"===e.state.elementType&&function(e,t){var n=b(t),a=Object(C.a)(n,4),o=a[0],r=a[1],l=a[2],i=a[3];e.forEach((function(e){var t=b(e),n=Object(C.a)(t,4),a=n[0],c=n[1],s=n[2],u=n[3];e.isSelected="selection"!==e.type&&o<=a&&r<=c&&l>=s&&i>=u}))}(ve,k),pe.skipRecording(),e.forceUpdate()}}},y=function t(n){var a=e.state,o=a.draggingElement,r=a.elementType;if(Xe=null,window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",t),Be(),null===o)return j(ve),void e.forceUpdate();"selection"===r?(h&&(h=!1),ve.pop()):o.isSelected=!0,e.setState({draggingElement:null,elementType:"selection"}),e.forceUpdate()};Xe=y,window.addEventListener("mousemove",g),window.addEventListener("mouseup",y),pe.skipRecording(),e.forceUpdate()}}},onDoubleClick:function(t){var n=t.clientX-250-e.state.scrollX,a=t.clientY-0-e.state.scrollY;if(!I(ve,n,a)){var o=w("text",n,a,e.state.currentItemStrokeColor,e.state.currentItemBackgroundColor,"hachure",1,1,100);Oe(o)&&(ve.push(o),e.setState({draggingElement:null,elementType:"selection"}),o.isSelected=!0,e.forceUpdate())}}}))}},{key:"componentDidUpdate",value:function(){var e,t;W(ve,Te,Ne,{scrollX:this.state.scrollX,scrollY:this.state.scrollY,viewBackgroundColor:this.state.viewBackgroundColor}),e=ve,t=this.state,localStorage.setItem("excalidraw",JSON.stringify(e)),localStorage.setItem("excalidraw-state",JSON.stringify(t)),pe.isRecording()&&(pe.pushEntry(pe.generateCurrentEntry(ve)),pe.clearRedoStack()),pe.resumeRecording()}}]),t}(u.a.Component),je=document.getElementById("root");f.a.render(u.a.createElement(Ae,null),je);var Ne=document.getElementById("canvas"),Te=d.a.canvas(Ne),Re=Ne.getContext("2d");f.a.render(u.a.createElement(Ae,null),je)},93:function(e,t,n){e.exports=n(265)},98:function(e,t,n){},99:function(e,t,n){}},[[93,1,2]]]);
//# sourceMappingURL=main.e0944150.chunk.js.map