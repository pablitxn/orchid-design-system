import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./iframe-CwvQ8Z4r.js";import{A as s}from"./index-Dvlu9sap.js";import{c as l,g as u}from"./utils-BAB00U4Q.js";import"./index-BYm-_wci.js";import"./index-8DvStrsX.js";/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var D={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),M=(o,t)=>{const n=r.forwardRef(({color:c="currentColor",size:A=24,strokeWidth:N=2,absoluteStrokeWidth:$,className:z="",children:f,...q},E)=>r.createElement("svg",{ref:E,...D,width:A,height:A,stroke:c,strokeWidth:$?Number(N)*24/Number(A):N,className:["lucide",`lucide-${L(o)}`,z].join(" "),...q},[...t.map(([O,W])=>r.createElement(O,W)),...Array.isArray(f)?f:[f]]));return n.displayName=`${o}`,n};/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=M("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),V=s,b=r.forwardRef(({className:o,...t},n)=>e.jsx(s.Item,{ref:n,className:l("border-b",o),...t}));b.displayName="AccordionItem";const x=r.forwardRef(({className:o,children:t,...n},c)=>e.jsx(s.Header,{className:"flex",children:e.jsxs(s.Trigger,{ref:c,className:l("flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",o),...n,children:[t,e.jsx(S,{className:"h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"})]})}));x.displayName="AccordionTrigger";const y=r.forwardRef(({className:o,children:t,...n},c)=>e.jsx(s.Content,{ref:c,className:"overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...n,children:e.jsx("div",{className:l("pb-4 pt-0",o),children:t})}));y.displayName="AccordionContent";b.__docgenInfo={description:"",methods:[],displayName:"AccordionItem"};x.__docgenInfo={description:"",methods:[],displayName:"AccordionTrigger"};y.__docgenInfo={description:"",methods:[],displayName:"AccordionContent"};const H=Object.freeze(Object.defineProperty({__proto__:null,Accordion:V,AccordionContent:y,AccordionItem:b,AccordionTrigger:x},Symbol.toStringTag,{value:"Module"})),I=r.forwardRef(({...o},t)=>e.jsx(s,{ref:t,"data-slot":"accordion",...o}));I.displayName="Accordion";const j=r.forwardRef(({className:o,...t},n)=>e.jsx(s.Item,{ref:n,"data-slot":"accordion-item",className:l("rounded-base overflow-hidden border-2 border-b border-border shadow-shadow",o),...t}));j.displayName="AccordionItem";const v=r.forwardRef(({className:o,children:t,...n},c)=>e.jsx(s.Header,{className:"flex",children:e.jsxs(s.Trigger,{ref:c,"data-slot":"accordion-trigger",className:l("flex flex-1 items-center justify-between text-left text-base text-main-foreground border-border focus-visible:ring-[3px] bg-main p-4 font-heading transition-all [&[data-state=open]>svg]:rotate-180 data-[state=open]:rounded-b-none data-[state=open]:border-b-2 disabled:pointer-events-none disabled:opacity-50",o),...n,children:[t,e.jsx(S,{className:"pointer-events-none size-5 shrink-0 transition-transform duration-200"})]})}));v.displayName="AccordionTrigger";const w=r.forwardRef(({className:o,children:t,...n},c)=>e.jsx(s.Content,{ref:c,"data-slot":"accordion-content",className:"overflow-hidden rounded-b-base bg-secondary-background text-sm font-base transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...n,children:e.jsx("div",{className:l("p-4",o),children:t})}));w.displayName="AccordionContent";I.__docgenInfo={description:"",methods:[],displayName:"Accordion"};j.__docgenInfo={description:"",methods:[],displayName:"AccordionItem"};v.__docgenInfo={description:"",methods:[],displayName:"AccordionTrigger"};w.__docgenInfo={description:"",methods:[],displayName:"AccordionContent"};const P=Object.freeze(Object.defineProperty({__proto__:null,Accordion:I,AccordionContent:w,AccordionItem:j,AccordionTrigger:v},Symbol.toStringTag,{value:"Module"})),h={shadcn:H,neobrutalism:P},g=({skin:o="shadcn",...t})=>{const n=u(h,o);return e.jsx(n.Accordion,{...t})},i=({skin:o="shadcn",...t})=>{const n=u(h,o);return e.jsx(n.AccordionItem,{...t})},a=({skin:o="shadcn",...t})=>{const n=u(h,o);return e.jsx(n.AccordionTrigger,{...t})},d=({skin:o="shadcn",...t})=>{const n=u(h,o);return e.jsx(n.AccordionContent,{...t})};g.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{skin:{required:!1,tsType:{name:"union",raw:"'shadcn' | 'neobrutalism'",elements:[{name:"literal",value:"'shadcn'"},{name:"literal",value:"'neobrutalism'"}]},description:"",defaultValue:{value:"'shadcn'",computed:!1}}}};i.__docgenInfo={description:"",methods:[],displayName:"AccordionItem",props:{skin:{required:!1,tsType:{name:"union",raw:"'shadcn' | 'neobrutalism'",elements:[{name:"literal",value:"'shadcn'"},{name:"literal",value:"'neobrutalism'"}]},description:"",defaultValue:{value:"'shadcn'",computed:!1}}}};a.__docgenInfo={description:"",methods:[],displayName:"AccordionTrigger",props:{skin:{required:!1,tsType:{name:"union",raw:"'shadcn' | 'neobrutalism'",elements:[{name:"literal",value:"'shadcn'"},{name:"literal",value:"'neobrutalism'"}]},description:"",defaultValue:{value:"'shadcn'",computed:!1}}}};d.__docgenInfo={description:"",methods:[],displayName:"AccordionContent",props:{skin:{required:!1,tsType:{name:"union",raw:"'shadcn' | 'neobrutalism'",elements:[{name:"literal",value:"'shadcn'"},{name:"literal",value:"'neobrutalism'"}]},description:"",defaultValue:{value:"'shadcn'",computed:!1}}}};const Q={title:"Components/Accordion",component:g,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:"radio",options:["single","multiple"],description:"Whether only one item can be opened at a time"},collapsible:{control:"boolean",description:"Whether the accordion items can be collapsed"}}},m={args:{type:"single",collapsible:!0,className:"w-[400px]"},render:o=>e.jsxs(g,{...o,children:[e.jsxs(i,{value:"item-1",children:[e.jsx(a,{children:"Is it accessible?"}),e.jsx(d,{children:"Yes. It adheres to the WAI-ARIA design pattern."})]}),e.jsxs(i,{value:"item-2",children:[e.jsx(a,{children:"Is it styled?"}),e.jsx(d,{children:"Yes. It comes with default styles that matches the other components' aesthetic."})]}),e.jsxs(i,{value:"item-3",children:[e.jsx(a,{children:"Is it animated?"}),e.jsx(d,{children:"Yes. It's animated by default, but you can disable it if you prefer."})]})]})},p={args:{type:"multiple",className:"w-[400px]"},render:o=>e.jsxs(g,{...o,children:[e.jsxs(i,{value:"item-1",children:[e.jsx(a,{children:"Can I open multiple items?"}),e.jsx(d,{children:'Yes. Set the type prop to "multiple" to allow multiple items to be opened at once.'})]}),e.jsxs(i,{value:"item-2",children:[e.jsx(a,{children:"Is it customizable?"}),e.jsx(d,{children:"Yes. You can customize the styles using className props on each component."})]}),e.jsxs(i,{value:"item-3",children:[e.jsx(a,{children:"Does it support themes?"}),e.jsx(d,{children:"Yes. It automatically adapts to the selected skin (shadcn or neobrutalism)."})]})]})};var C,T,_;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    type: 'single',
    collapsible: true,
    className: 'w-[400px]'
  },
  render: args => <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other components' aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...(_=(T=m.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var k,Y,R;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    type: 'multiple',
    className: 'w-[400px]'
  },
  render: args => <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
        <AccordionContent>
          Yes. Set the type prop to "multiple" to allow multiple items to be opened at once.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it customizable?</AccordionTrigger>
        <AccordionContent>
          Yes. You can customize the styles using className props on each component.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Does it support themes?</AccordionTrigger>
        <AccordionContent>
          Yes. It automatically adapts to the selected skin (shadcn or neobrutalism).
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...(R=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:R.source}}};const U=["Single","Multiple"];export{p as Multiple,m as Single,U as __namedExportsOrder,Q as default};
