import{n as e}from"./dist-CVoL3ifj.js";import{$ as t,B as n,E as r,I as i,L as a,N as o,P as s,Q as c,R as l,T as u,U as d,at as f,i as p,j as m,t as h}from"./template-CEW4Zpbr.js";import{n as g,r as _,t as v}from"./button-D9AbFEpx.js";import{c as y,l as b,r as x,t as S}from"./svg-icon-BQTG7xor.js";var C={name:`BaseInputText`,extends:{name:`BaseInput`,extends:{name:`BaseEditableHolder`,extends:g,emits:[`update:modelValue`,`value-change`],props:{modelValue:{type:null,default:void 0},defaultValue:{type:null,default:void 0},name:{type:String,default:void 0},invalid:{type:Boolean,default:void 0},disabled:{type:Boolean,default:!1},formControl:{type:Object,default:void 0}},inject:{$parentInstance:{default:void 0},$pcForm:{default:void 0},$pcFormField:{default:void 0}},data:function(){return{d_value:this.defaultValue===void 0?this.modelValue:this.defaultValue}},watch:{modelValue:{deep:!0,handler:function(e){this.d_value=e}},defaultValue:function(e){this.d_value=e},$formName:{immediate:!0,handler:function(e){var t,n;this.formField=((t=this.$pcForm)==null||(n=t.register)==null?void 0:n.call(t,e,this.$formControl))||{}}},$formControl:{immediate:!0,handler:function(e){var t,n;this.formField=((t=this.$pcForm)==null||(n=t.register)==null?void 0:n.call(t,this.$formName,e))||{}}},$formDefaultValue:{immediate:!0,handler:function(e){this.d_value!==e&&(this.d_value=e)}},$formValue:{immediate:!1,handler:function(e){var t;(t=this.$pcForm)!=null&&t.getFieldState(this.$formName)&&e!==this.d_value&&(this.d_value=e)}}},formField:{},methods:{writeValue:function(e,t){var n,r;this.controlled&&(this.d_value=e,this.$emit(`update:modelValue`,e)),this.$emit(`value-change`,e),(n=(r=this.formField).onChange)==null||n.call(r,{originalEvent:t,value:e})},findNonEmpty:function(){return[...arguments].find(u)}},computed:{$filled:function(){return u(this.d_value)},$invalid:function(){var e,t;return!this.$formNovalidate&&this.findNonEmpty(this.invalid,(e=this.$pcFormField)==null||(e=e.$field)==null?void 0:e.invalid,(t=this.$pcForm)==null||(t=t.getFieldState(this.$formName))==null?void 0:t.invalid)},$formName:function(){return this.$formNovalidate?void 0:this.name||this.$formControl?.name},$formControl:function(){return this.formControl||this.$pcFormField?.formControl},$formNovalidate:function(){return this.$formControl?.novalidate},$formDefaultValue:function(){var e;return this.findNonEmpty(this.d_value,this.$pcFormField?.initialValue,(e=this.$pcForm)==null||(e=e.initialValues)==null?void 0:e[this.$formName])},$formValue:function(){var e,t;return this.findNonEmpty((e=this.$pcFormField)==null||(e=e.$field)==null?void 0:e.value,(t=this.$pcForm)==null||(t=t.getFieldState(this.$formName))==null?void 0:t.value)},controlled:function(){return this.$inProps.hasOwnProperty(`modelValue`)||!this.$inProps.hasOwnProperty(`modelValue`)&&!this.$inProps.hasOwnProperty(`defaultValue`)},filled:function(){return this.$filled}}},props:{size:{type:String,default:null},fluid:{type:Boolean,default:null},variant:{type:String,default:null}},inject:{$parentInstance:{default:void 0},$pcFluid:{default:void 0}},computed:{$variant:function(){return this.variant??(this.$primevue.config.inputStyle||this.$primevue.config.inputVariant)},$fluid:function(){return this.fluid??!!this.$pcFluid},hasFluid:function(){return this.$fluid}}},style:p.extend({name:`inputtext`,style:`
    .p-inputtext {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }
`,classes:{root:function(e){var t=e.instance,n=e.props;return[`p-inputtext p-component`,{"p-filled":t.$filled,"p-inputtext-sm p-inputfield-sm":n.size===`small`,"p-inputtext-lg p-inputfield-lg":n.size===`large`,"p-invalid":t.$invalid,"p-variant-filled":t.$variant===`filled`,"p-inputtext-fluid":t.$fluid}]}}}),provide:function(){return{$pcInputText:this,$parentInstance:this}}};function w(e){"@babel/helpers - typeof";return w=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},w(e)}function T(e,t,n){return(t=E(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e){var t=D(e,`string`);return w(t)==`symbol`?t:t+``}function D(e,t){if(w(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(w(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var O={name:`InputText`,extends:C,inheritAttrs:!1,methods:{onInput:function(e){this.writeValue(e.target.value,e)}},computed:{attrs:function(){return n(this.ptmi(`root`,{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)},dataP:function(){return _(T({invalid:this.$invalid,fluid:this.$fluid,filled:this.$variant===`filled`},this.size,this.size))}}},k=[`value`,`name`,`disabled`,`aria-invalid`,`data-p`];function A(e,t,r,i,a,o){return d(),s(`input`,n({type:`text`,class:e.cx(`root`),value:e.d_value,name:e.name,disabled:e.disabled,"aria-invalid":e.$invalid||void 0,"data-p":o.dataP,onInput:t[0]||=function(){return o.onInput&&o.onInput.apply(o,arguments)}},o.attrs),null,16,k)}O.render=A;var j={key:0,class:`flex flex-col gap-2 max-w-full`},M={class:`grid auto-rows-auto gap-2`,style:{"grid-template-columns":`repeat(3, minmax(0, auto))`}},N={class:`flex gap-2 ms-8`};h(l({__name:`CommentatorComponent`,setup(n){r({title:`Commentators`});let l=e(`commentators`,`licenseathon-vue`,{defaultValue:y}),u=e(`runDataActiveRun`,`nodecg-speedcontrol`,{defaultValue:b});return c(()=>u.data,()=>{l.loadDefault(),l.save()}),(e,n)=>f(l).data?(d(),s(`div`,j,[m(`div`,M,[a(f(S),{type:`mdi`,path:f(x),class:`mt-1`},null,8,[`path`]),a(f(O),{size:`small`,placeholder:`Commentator 1 Name`,modelValue:f(l).data.names[0].name,"onUpdate:modelValue":n[0]||=e=>f(l).data.names[0].name=e},null,8,[`modelValue`]),a(f(O),{size:`small`,placeholder:`Pronouns (optional)`,modelValue:f(l).data.names[0].pronouns,"onUpdate:modelValue":n[1]||=e=>f(l).data.names[0].pronouns=e},null,8,[`modelValue`]),a(f(S),{type:`mdi`,path:f(x),class:`mt-1`},null,8,[`path`]),a(f(O),{size:`small`,placeholder:`Commentator 2 Name`,modelValue:f(l).data.names[1].name,"onUpdate:modelValue":n[2]||=e=>f(l).data.names[1].name=e},null,8,[`modelValue`]),a(f(O),{size:`small`,placeholder:`Pronouns (optional)`,modelValue:f(l).data.names[1].pronouns,"onUpdate:modelValue":n[3]||=e=>f(l).data.names[1].pronouns=e},null,8,[`modelValue`])]),m(`div`,N,[a(f(v),{disabled:!f(l).changed,severity:`primary`,class:`h-9`,onClick:n[4]||=e=>f(l).save()},{default:t(()=>[...n[6]||=[i(` Submit `,-1)]]),_:1},8,[`disabled`]),a(f(v),{severity:`danger`,class:`h-9`,onClick:n[5]||=e=>{f(l).loadDefault(),f(l).save()}},{default:t(()=>[...n[7]||=[i(` Reset `,-1)]]),_:1})])])):o(``,!0)}}));