(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{208:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(7),l=n(15),c=n(249),i=n(27),o=n(95),m=n(24),s=n.n(m);function b(e,t,n){return{type:"UPDATE_OPTIONS",weight:e,maintenance:t,unitName:n}}var p,g=function(e){return e/100},d=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:16,a=e*n,r=a*g(t);return r},h=[{name:"BARF Adult",value:"barfAdult",key:"barf-adult"},{name:"BARF Puppy",value:"barfPuppy",key:"barf-puppy"},{name:"PMR Adult",value:"pmrAdult",key:"pmr-adult"},{name:"PMR Puppy",value:"pmrPuppy",key:"pmr-puppy"}],f={barfAdult:{muscle:70,bone:10,other:{liver:5,organ:5,veggie:7,seed:2,fruit:1}},barfPuppy:{muscle:58,bone:17,other:{liver:7,organ:7,veggie:7,seed:2,fruit:1}},pmrAdult:{muscle:80,bone:10,other:{liver:5,organ:5}},pmrPuppy:{muscle:69,bone:17,other:{liver:7,organ:7,fibre:1}}},E=[{name:"lb / ounce",value:"english",key:"english"},{name:"kg / gram",value:"metric",key:"metric"}],y={english:{lg:"lb",sm:"oz",perUnit:16},metric:{lg:"kg",sm:"g",perUnit:1e3}},k=n(96),v=n.n(k),P=function(e,t,n){return e-(t+v()(n).reduce((function(e,t){return e+t}),0))},A=P,O=function(e,t){return P(100,e,t)},D=function(e,t,n){return e*g(t)/g(n)},R=n(50),T=n.n(R),C=function(e,t){return T()(t,(function(t){return e*g(t)}))},N=function(e,t,n,a){var r=D(e,t,n),u=C(e,a);return{otherAmounts:u,boneAmount:r,muscleAmount:A(e,r,u)}};function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S=d(68,3,"english".perUnit),B=f.barfAdult,W=B.muscle,F=B.bone,_=B.other,U=function(e,t){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,a=arguments.length>1?arguments[1]:void 0,r=t[a.type];return r?r(n,a):n}}(w({unitDetails:y.english,weight:68,maintenance:3,totalDailyAmount:S,rmbPercent:44,musclePercentage:W,bonePercentage:F,otherPercentages:_},N(S,F,44,_)),(p={},s()(p,"UPDATE_OPTIONS",(function(e,t){var n=e.otherPercentages,a=e.bonePercentage,r=e.rmbPercent,u=e.unitDetails,l=t.weight,c=t.maintenance,i=t.unitName,o=i?y[i]:w({},u),m=d(l,c,o.perUnit);return w({},e,{weight:l,maintenance:c,unitDetails:o,totalDailyAmount:m},N(m,a,r,n))})),s()(p,"UPDATE_BONE_PERCENTAGE",(function(e,t){var n=e.totalDailyAmount,a=e.otherPercentages,r=e.rmbPercent,u=t.updatedBonePercentage;return w({},e,{bonePercentage:u,musclePercentage:O(u,a)},N(n,u,r,a))})),s()(p,"UPDATE_OTHER_PERCENTAGE",(function(e,t){var n=t.updatedProperty,a=t.updatedValue,r=e.totalDailyAmount,u=e.otherPercentages,l=e.bonePercentage,c=e.rmbPercent,i=w({},u,s()({},n,a));return w({},e,{otherPercentages:i,musclePercentage:O(l,i)},N(r,l,c,i))})),s()(p,"RESET_PERCENTAGE_DEFAULTS",(function(e,t){var n=e.totalDailyAmount,a=e.rmbPercent,r=f[t.defaultsKey],u=r.muscle,l=r.bone,c=r.other;return w({},e,{otherPercentages:c,bonePercentage:l,musclePercentage:u},N(n,l,a,c))})),s()(p,"UPDATE_RMB_PERCENT",(function(e,t){var n=e.totalDailyAmount,a=e.bonePercentage,r=e.otherPercentages;return w({},e,{rmbPercent:t.rmbPercent},N(n,a,t.rmbPercent,r))})),p)),q=Object(i.c)({calculator:U});var x=n(250),I=n(251),M=n(248),L=n(13),z=n.n(L),G=n(51),H=n.n(G),V=n(4),J=n.n(V),K=n(240),Q=n(243),X=n(245),Y=n(246),Z=n(247),$=n(97),ee=n.n($),te=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return ee()(e,t)},ne=Object(K.a)((function(e){return{h2:{fontWeight:400,margin:e.spacing(1)}}})),ae=function(e){var t=e.children,n=ne();return r.a.createElement("h2",{className:n.h2},t)};ae.propTypes={children:J.a.string.isRequired};var re=ae,ue=n(101),le=n.n(ue),ce=Object(K.a)((function(e){return{section:{backgroundColor:"white",padding:e.spacing(1),marginTop:e.spacing(1)}}})),ie=function(e){var t=ce();return r.a.createElement("div",le()({className:t.section},e))},oe=Object(K.a)((function(e){return{firstRow:{fontWeight:600},table:{margin:e.spacing(1),"& > tbody tr td":{borderBottom:"1px solid #eee",paddingLeft:0,paddingRight:e.spacing(1),paddingBottom:e.spacing(.5),paddingTop:e.spacing(.5)}},capitalize:{textTransform:"capitalize"}}})),me=function(e){var t=e.totalAmount,n=e.muscleAmount,a=e.boneAmount,u=e.rmbPercent,l=e.otherAmounts,c=e.unitDetails,i=e.title,o=oe(),m=function(e){return function(t){var n="".concat(te(t)," ").concat(e.sm);return t<e.perUnit?n:"".concat(te(t/e.perUnit)," ").concat(e.lg," / ").concat(n)}}(c);return r.a.createElement(ie,null,r.a.createElement(re,null,i),r.a.createElement(Q.a,{className:o.table},r.a.createElement(X.a,null,r.a.createElement(Y.a,null,r.a.createElement(Z.a,{className:o.firstRow},"Total Amount"),r.a.createElement(Z.a,{className:o.firstRow,align:"right"},m(t))),r.a.createElement(Y.a,null,r.a.createElement(Z.a,null,"Boneless Meat"),r.a.createElement(Z.a,{align:"right"},m(n))),r.a.createElement(Y.a,null,r.a.createElement(Z.a,null,"Raw Meaty Bone at ",u,"%"),r.a.createElement(Z.a,{align:"right"},m(a))),H()(l,(function(e,t){return r.a.createElement(Y.a,{key:t},r.a.createElement(Z.a,{className:o.capitalize},t),r.a.createElement(Z.a,{align:"right"},m(e)))})))))};me.propTypes={totalAmount:J.a.number.isRequired,muscleAmount:J.a.number.isRequired,boneAmount:J.a.number.isRequired,rmbPercent:J.a.number.isRequired,otherAmounts:J.a.object.isRequired,unitDetails:J.a.object.isRequired,title:J.a.string.isRequired};var se=me,be=n(252),pe=n(256),ge=n(253),de=Object(K.a)((function(e){return{numericLarge:{margin:e.spacing(1),width:110}}})),he=function(e){var t=e.totalDailyAmount,n=e.muscleAmount,u=e.boneAmount,l=e.otherAmounts,c=e.unitDetails,i=e.rmbPercent,o=e.setShowBulkTable,m=e.shouldShowBulkTable,s=de(),b=Object(a.useState)(7),p=z()(b,2),g=p[0],d=p[1],h=Object(a.useState)(t),f=z()(h,2),E=f[0],y=f[1],k=Object(a.useState)(u),v=z()(k,2),P=v[0],A=v[1],O=Object(a.useState)(l),D=z()(O,2),R=D[0],C=D[1],N=Object(a.useState)(n),j=z()(N,2),w=j[0],S=j[1];return Object(a.useEffect)((function(){var e=T()(l,(function(e){return e*g}));y(t*g),C(e),A(u*g),S(n*g)}),[g]),r.a.createElement(r.a.Fragment,null,r.a.createElement(ie,null,r.a.createElement(re,null,"Bulk Helper"),r.a.createElement("div",null,r.a.createElement(be.a,{className:s.numericLarge,id:"numDays",label:"How long",value:g,type:"number",onChange:function(e){return d(Number(e.target.value))},InputProps:{endAdornment:r.a.createElement(pe.a,{position:"end"},"days")},helperText:"minimum of 2 days"}),r.a.createElement(ge.a,{size:"small",variant:"outlined",color:"secondary",onClick:function(){return o(!0)}},"Generate"))),m&&g>1&&r.a.createElement(se,{totalAmount:E,muscleAmount:w,boneAmount:P,otherAmounts:R,unitDetails:c,rmbPercent:i,title:"Bulk Amounts for ".concat(g," days")}))};he.propTypes={totalDailyAmount:J.a.number.isRequired,muscleAmount:J.a.number.isRequired,boneAmount:J.a.number.isRequired,rmbPercent:J.a.number.isRequired,otherAmounts:J.a.object.isRequired,unitDetails:J.a.object.isRequired,shouldShowBulkTable:J.a.bool.isRequired,setShowBulkTable:J.a.func.isRequired};var fe,Ee,ye=he,ke=function(){var e=Object(l.c)((function(e){return e.calculator})),t=e.totalDailyAmount,n=e.unitDetails,u=e.boneAmount,c=e.muscleAmount,i=e.otherAmounts,o=e.rmbPercent,m=Object(a.useState)(!1),s=z()(m,2),b=s[0],p=s[1];return Object(a.useEffect)((function(){p(!1)}),[t,u,i]),r.a.createElement(r.a.Fragment,null,r.a.createElement(se,{totalAmount:t,muscleAmount:c,boneAmount:u,rmbPercent:o,otherAmounts:i,unitDetails:n,title:"What to feed each day"}),r.a.createElement(ye,{totalDailyAmount:t,muscleAmount:c,boneAmount:u,rmbPercent:o,otherAmounts:i,unitDetails:n,shouldShowBulkTable:b,setShowBulkTable:p}))},ve=n(254),Pe=n(255),Ae=n(102),Oe=[{name:"Chicken Back",value:44,key:"Chicken-Back"},{name:"Chicken Breast",value:20,key:"Chicken-Breast"},{name:"Chicken Drumstick",value:27,key:"Chicken-Drumstick"},{name:"Chicken Feet",value:60,key:"Chicken-Feet"},{name:"Chicken Frame",value:80,key:"Chicken-Frame"},{name:"Chicken Leg Quarter",value:30,key:"Chicken-Leg-Quarter"},{name:"Chicken Neck with Skin",value:36,key:"Chicken-Neck-with-Skin"},{name:"Chicken Neck without Skin",value:50,key:"Chicken-Neck-without-Skin"},{name:"Chicken Thigh",value:21,key:"Chicken-Thigh"},{name:"Chicken Whole",value:32,key:"Chicken-Whole"},{name:"Chicken Wings",value:46,key:"Chicken-Wings"},{name:"Duck Foot",value:60,key:"Duck-Foot"},{name:"Duck Frame",value:80,key:"Duck-Frame"},{name:"Duck Neck",value:50,key:"Duck-Neck"},{name:"Duck Whole",value:28,key:"Duck-Whole"},{name:"Duck Wing",value:39,key:"Duck-Wing"},{name:"Pork Feet",value:30,key:"Pork-Feet"},{name:"Pork Ribs",value:30,key:"Pork-Ribs"},{name:"Pork Tail",value:30,key:"Pork-Tail"},{name:"Rabbit Feet",value:40,key:"Rabbit-Feet"},{name:"Rabbit Heads",value:75,key:"Rabbit-Heads"},{name:"Rabbit Whole",value:28,key:"Rabbit-Whole"},{name:"Turkey Neck",value:45,key:"Turkey-Neck"},{name:"Custom",value:0,key:"Custom"}],De=Object(K.a)((function(e){return{formControl:{margin:e.spacing(1)},rmbOption:{margin:e.spacing(1),width:115},rmbCustom:{margin:e.spacing(1),width:135}}})),Re=function(){var e=De(),t=Object(l.b)(),n=Object(a.useState)(0),u=z()(n,2),c=u[0],i=u[1],o=Object(a.useState)(Oe[0].value),m=z()(o,2),s=m[0],b=m[1];return Object(a.useEffect)((function(){t(function(e){return{type:"UPDATE_RMB_PERCENT",rmbPercent:e}}(0===s?c:s))}),[s,c]),r.a.createElement(ie,null,r.a.createElement(re,null,"Raw Meaty Bone"),r.a.createElement(ve.a,{className:e.formControl},r.a.createElement(Pe.a,{htmlFor:"boneType"},"RMB Type"),r.a.createElement(Ae.a,{name:"boneType",id:"boneType",onChange:function(e){var t=Number(e.target.value);i(0),b(t)},defaultValue:Oe[0].value},Oe.map((function(e){return r.a.createElement("option",{key:e.key,value:e.value},e.name)})))),0!==s&&r.a.createElement(be.a,{className:e.rmbOption,id:"rmbOption",label:"Bone Content",value:s,type:"number",disabled:!0,InputProps:{endAdornment:r.a.createElement(pe.a,{position:"end"},"%")}}),0===s&&r.a.createElement(be.a,{className:e.rmbCustom,id:"customRMB",label:"Enter RMB %",value:c,type:"number",onChange:function(e){return i(Number(e.target.value))},InputProps:{endAdornment:r.a.createElement(pe.a,{position:"end"},"%")}}))},Te=Object(K.a)((function(e){return{formControl:{margin:e.spacing(1)},numericLarge:{margin:e.spacing(1),width:110}}})),Ce=function(){var e=Te(),t=Object(l.b)(),n=Object(l.c)((function(e){return e.calculator})),u=n.totalDailyAmount,c=n.weight,i=n.unitDetails,o=n.maintenance,m=Object(a.useState)(te(u)),s=z()(m,2),p=s[0],g=s[1];return Object(a.useEffect)((function(){g(te(u))}),[u]),r.a.createElement(ie,null,r.a.createElement(re,null,"Options"),r.a.createElement(ve.a,{className:e.formControl},r.a.createElement(Pe.a,{htmlFor:"unit"},"Unit"),r.a.createElement(Ae.a,{name:"unit",id:"unit",onChange:function(e){return t(b(c,o,e.target.value))},defaultValue:"english"},E.map((function(e){return r.a.createElement("option",{key:e.key,value:e.value},e.name)})))),r.a.createElement(be.a,{className:e.numericLarge,id:"weight",label:"Dog Weight",value:c,type:"number",onChange:function(e){return t(b(Number(e.target.value),o))},InputProps:{endAdornment:r.a.createElement(pe.a,{position:"end"},i.lg)}}),r.a.createElement(be.a,{className:e.numericLarge,id:"maintenance",label:"Maintenance",value:o,type:"number",onChange:function(e){return t(b(c,Number(e.target.value)))},helperText:"Start at 2.0-3.0%",inputProps:{min:0,max:100,step:.1},InputProps:{endAdornment:r.a.createElement(pe.a,{position:"end"},"%")}}),r.a.createElement(be.a,{className:e.numericLarge,id:"totalDailyAmount",label:"Daily Amount",value:p,type:"number",disabled:!0,InputProps:{endAdornment:r.a.createElement(pe.a,{position:"end"},i.sm)}}))},Ne=Object(K.a)((function(e){return{numericSmall:{margin:e.spacing(1),width:55},buttonWrapper:{"& > *":{margin:e.spacing(.5),fontSize:11}},inlineButtonText:{margin:e.spacing(1),fontWeight:300,fontSize:15}}})),je=function(){var e=Ne(),t=Object(l.b)(),n=Object(l.c)((function(e){return e.calculator})),a=n.otherPercentages,u=n.musclePercentage,c=n.bonePercentage;return r.a.createElement(ie,null,r.a.createElement(re,null,"Desired Percentages"),r.a.createElement("div",{className:e.buttonWrapper},r.a.createElement("span",{className:e.inlineButtonText},"Reset defaults for: "),h.map((function(e){return r.a.createElement(ge.a,{size:"small",variant:"outlined",color:"secondary",key:e.key,onClick:function(){return t({type:"RESET_PERCENTAGE_DEFAULTS",defaultsKey:e.value})}},e.name)}))),r.a.createElement(be.a,{className:e.numericSmall,id:"musclePercentage",label:"Muscle",value:u,type:"number",disabled:!0,InputProps:{endAdornment:r.a.createElement(pe.a,{position:"end"},"%")}}),r.a.createElement(be.a,{className:e.numericSmall,id:"bonePercentage",label:"Bone",value:c,type:"number",onChange:function(e){return t({type:"UPDATE_BONE_PERCENTAGE",updatedBonePercentage:Number(e.target.value)})},InputProps:{endAdornment:r.a.createElement(pe.a,{position:"end"},"%")}}),H()(a,(function(n,a){return r.a.createElement(be.a,{className:e.numericSmall,id:"".concat(a,"Percentage"),key:"".concat(a,"Percentage"),label:a,value:n,type:"number",onChange:function(e){return t((n=Number(e.target.value),{type:"UPDATE_OTHER_PERCENTAGE",updatedProperty:a,updatedValue:n}));var n},InputProps:{endAdornment:r.a.createElement(pe.a,{position:"end"},"%")}})})))},we=function(){return r.a.createElement(M.a,{container:!0,spacing:1},r.a.createElement(M.a,{item:!0,xs:12,md:6},r.a.createElement(ie,null,r.a.createElement(re,null,"Dog Raw Food Calculator - Recipe Helper")),r.a.createElement(Ce,null),r.a.createElement(je,null),r.a.createElement(Re,null)),r.a.createElement(M.a,{item:!0,xs:12,md:6},r.a.createElement(ke,null)))},Se=n(103),Be=Object(Se.a)({palette:{primary:{light:"#4f5b62",main:"#263238",dark:"#000a12",contrastText:"#ffffff"},secondary:{light:"#98ee99",main:"#66bb6a",dark:"#338a3e",contrastText:"#212121"}},typography:{h1:{fontWeight:300},h2:{fontWeight:300},h3:{fontWeight:300},h4:{fontWeight:300},h5:{fontWeight:300},h6:{fontWeight:300},subtitle1:{fontWeight:300},subtitle2:{fontWeight:300},body1:{fontWeight:300},body2:{fontWeight:300},button:{fontWeight:300},caption:{fontWeight:300},overline:{fontWeight:300}}}),We=function(){return r.a.createElement(c.a,{theme:Be},r.a.createElement(x.a,null),r.a.createElement(I.a,{fixed:!0},r.a.createElement(we,null)))},Fe=(fe={},Ee=[o.a],Object(i.d)(q,fe,i.a.apply(void 0,Ee)));Object(u.render)(r.a.createElement(l.a,{store:Fe},r.a.createElement(c.a,{theme:Be},r.a.createElement(We,null))),document.getElementById("app"))}},[[208,1,2]]]);
//# sourceMappingURL=app.bundle.js.map