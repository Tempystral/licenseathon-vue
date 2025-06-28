import{i as p,B as y,c as F}from"./template-BU695XF-.js";import{h as f,S as m,d as V}from"./defaults-SHBk_5xF.js";import{u as c}from"./index-4CWKTXJn.js";import{s as _,c as N,a as $}from"./index-saoYQH1D.js";import{B as x,a as g,o as b,d as C,C as w,w as S,g as k,u as o,e as u,b as r,f as v,l as h}from"./index-D_g2grwV.js";var P={name:"BaseEditableHolder",extends:_,emits:["update:modelValue","value-change"],props:{modelValue:{type:null,default:void 0},defaultValue:{type:null,default:void 0},name:{type:String,default:void 0},invalid:{type:Boolean,default:void 0},disabled:{type:Boolean,default:!1},formControl:{type:Object,default:void 0}},inject:{$parentInstance:{default:void 0},$pcForm:{default:void 0},$pcFormField:{default:void 0}},data:function(){return{d_value:this.defaultValue||this.modelValue}},watch:{modelValue:function(t){this.d_value=t},defaultValue:function(t){this.d_value=t},$formName:{immediate:!0,handler:function(t){var n,i;this.formField=((n=this.$pcForm)===null||n===void 0||(i=n.register)===null||i===void 0?void 0:i.call(n,t,this.$formControl))||{}}},$formControl:{immediate:!0,handler:function(t){var n,i;this.formField=((n=this.$pcForm)===null||n===void 0||(i=n.register)===null||i===void 0?void 0:i.call(n,this.$formName,t))||{}}},$formDefaultValue:{immediate:!0,handler:function(t){this.d_value!==t&&(this.d_value=t)}},$formValue:{immediate:!1,handler:function(t){var n;(n=this.$pcForm)!==null&&n!==void 0&&n.getFieldState(this.$formName)&&t!==this.d_value&&(this.d_value=t)}}},formField:{},methods:{writeValue:function(t,n){var i,l;this.controlled&&(this.d_value=t,this.$emit("update:modelValue",t)),this.$emit("value-change",t),(i=(l=this.formField).onChange)===null||i===void 0||i.call(l,{originalEvent:n,value:t})},findNonEmpty:function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return n.find(p)}},computed:{$filled:function(){return p(this.d_value)},$invalid:function(){var t,n;return!this.$formNovalidate&&this.findNonEmpty(this.invalid,(t=this.$pcFormField)===null||t===void 0||(t=t.$field)===null||t===void 0?void 0:t.invalid,(n=this.$pcForm)===null||n===void 0||(n=n.getFieldState(this.$formName))===null||n===void 0?void 0:n.invalid)},$formName:function(){var t;return this.$formNovalidate?void 0:this.name||((t=this.$formControl)===null||t===void 0?void 0:t.name)},$formControl:function(){var t;return this.formControl||((t=this.$pcFormField)===null||t===void 0?void 0:t.formControl)},$formNovalidate:function(){var t;return(t=this.$formControl)===null||t===void 0?void 0:t.novalidate},$formDefaultValue:function(){var t,n;return this.findNonEmpty(this.d_value,(t=this.$pcFormField)===null||t===void 0?void 0:t.initialValue,(n=this.$pcForm)===null||n===void 0||(n=n.initialValues)===null||n===void 0?void 0:n[this.$formName])},$formValue:function(){var t,n;return this.findNonEmpty((t=this.$pcFormField)===null||t===void 0||(t=t.$field)===null||t===void 0?void 0:t.value,(n=this.$pcForm)===null||n===void 0||(n=n.getFieldState(this.$formName))===null||n===void 0?void 0:n.value)},controlled:function(){return this.$inProps.hasOwnProperty("modelValue")||!this.$inProps.hasOwnProperty("modelValue")&&!this.$inProps.hasOwnProperty("defaultValue")},filled:function(){return this.$filled}}},I={name:"BaseInput",extends:P,props:{size:{type:String,default:null},fluid:{type:Boolean,default:null},variant:{type:String,default:null}},inject:{$parentInstance:{default:void 0},$pcFluid:{default:void 0}},computed:{$variant:function(){var t;return(t=this.variant)!==null&&t!==void 0?t:this.$primevue.config.inputStyle||this.$primevue.config.inputVariant},$fluid:function(){var t;return(t=this.fluid)!==null&&t!==void 0?t:!!this.$pcFluid},hasFluid:function(){return this.$fluid}}},z=({dt:e})=>`
.p-inputtext {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${e("inputtext.color")};
    background: ${e("inputtext.background")};
    padding-block: ${e("inputtext.padding.y")};
    padding-inline: ${e("inputtext.padding.x")};
    border: 1px solid ${e("inputtext.border.color")};
    transition: background ${e("inputtext.transition.duration")}, color ${e("inputtext.transition.duration")}, border-color ${e("inputtext.transition.duration")}, outline-color ${e("inputtext.transition.duration")}, box-shadow ${e("inputtext.transition.duration")};
    appearance: none;
    border-radius: ${e("inputtext.border.radius")};
    outline-color: transparent;
    box-shadow: ${e("inputtext.shadow")};
}

.p-inputtext:enabled:hover {
    border-color: ${e("inputtext.hover.border.color")};
}

.p-inputtext:enabled:focus {
    border-color: ${e("inputtext.focus.border.color")};
    box-shadow: ${e("inputtext.focus.ring.shadow")};
    outline: ${e("inputtext.focus.ring.width")} ${e("inputtext.focus.ring.style")} ${e("inputtext.focus.ring.color")};
    outline-offset: ${e("inputtext.focus.ring.offset")};
}

.p-inputtext.p-invalid {
    border-color: ${e("inputtext.invalid.border.color")};
}

.p-inputtext.p-variant-filled {
    background: ${e("inputtext.filled.background")};
}

.p-inputtext.p-variant-filled:enabled:hover {
    background: ${e("inputtext.filled.hover.background")};
}

.p-inputtext.p-variant-filled:enabled:focus {
    background: ${e("inputtext.filled.focus.background")};
}

.p-inputtext:disabled {
    opacity: 1;
    background: ${e("inputtext.disabled.background")};
    color: ${e("inputtext.disabled.color")};
}

.p-inputtext::placeholder {
    color: ${e("inputtext.placeholder.color")};
}

.p-inputtext.p-invalid::placeholder {
    color: ${e("inputtext.invalid.placeholder.color")};
}

.p-inputtext-sm {
    font-size: ${e("inputtext.sm.font.size")};
    padding-block: ${e("inputtext.sm.padding.y")};
    padding-inline: ${e("inputtext.sm.padding.x")};
}

.p-inputtext-lg {
    font-size: ${e("inputtext.lg.font.size")};
    padding-block: ${e("inputtext.lg.padding.y")};
    padding-inline: ${e("inputtext.lg.padding.x")};
}

.p-inputtext-fluid {
    width: 100%;
}
`,B={root:function(t){var n=t.instance,i=t.props;return["p-inputtext p-component",{"p-filled":n.$filled,"p-inputtext-sm p-inputfield-sm":i.size==="small","p-inputtext-lg p-inputfield-lg":i.size==="large","p-invalid":n.$invalid,"p-variant-filled":n.$variant==="filled","p-inputtext-fluid":n.$fluid}]}},E=y.extend({name:"inputtext",style:z,classes:B}),D={name:"BaseInputText",extends:I,style:E,provide:function(){return{$pcInputText:this,$parentInstance:this}}};function d(e){"@babel/helpers - typeof";return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(e)}function j(e,t,n){return(t=T(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T(e){var t=O(e,"string");return d(t)=="symbol"?t:t+""}function O(e,t){if(d(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t);if(d(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var s={name:"InputText",extends:D,inheritAttrs:!1,methods:{onInput:function(t){this.writeValue(t.target.value,t)}},computed:{attrs:function(){return x(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)},dataP:function(){return N(j({invalid:this.$invalid,fluid:this.$fluid,filled:this.$variant==="filled"},this.size,this.size))}}},R=["value","name","disabled","aria-invalid","data-p"];function A(e,t,n,i,l,a){return b(),g("input",x({type:"text",class:e.cx("root"),value:e.d_value,name:e.name,disabled:e.disabled,"aria-invalid":e.$invalid||void 0,"data-p":a.dataP,onInput:t[0]||(t[0]=function(){return a.onInput&&a.onInput.apply(a,arguments)})},a.attrs),null,16,R)}s.render=A;const H={key:0,class:"flex flex-col gap-2"},U={class:"flex items-center gap-2"},K={class:"flex items-center gap-2"},q={class:"flex gap-2 ms-8"},G=C({__name:"CommentatorComponent",setup(e){w({title:"Commentators"});const t=c("commentators","licenseathon-vue",{defaultValue:{names:["",""]}}),n=c("runDataActiveRun","nodecg-speedcontrol",{defaultValue:V});return S(()=>n.data,()=>{t.loadDefault(),t.save()}),(i,l)=>o(t).data?(b(),g("div",H,[u("div",U,[r(o(m),{type:"mdi",path:o(f),class:"inline align-bottom"},null,8,["path"]),r(o(s),{size:"small",placeholder:"Commentator 1 Name",modelValue:o(t).data.names[0],"onUpdate:modelValue":l[0]||(l[0]=a=>o(t).data.names[0]=a)},null,8,["modelValue"])]),u("div",K,[r(o(m),{type:"mdi",path:o(f),class:"inline align-bottom"},null,8,["path"]),r(o(s),{size:"small",placeholder:"Commentator 2 Name",modelValue:o(t).data.names[1],"onUpdate:modelValue":l[1]||(l[1]=a=>o(t).data.names[1]=a)},null,8,["modelValue"])]),u("div",q,[r(o($),{disabled:!o(t).changed,severity:"primary",class:"h-9",onClick:l[2]||(l[2]=a=>o(t).save())},{default:v(()=>l[4]||(l[4]=[h(" Submit ")])),_:1},8,["disabled"]),r(o($),{severity:"danger",class:"h-9",onClick:l[3]||(l[3]=a=>{o(t).loadDefault(),o(t).save()})},{default:v(()=>l[5]||(l[5]=[h(" Reset ")])),_:1})])])):k("",!0)}});F(G);
