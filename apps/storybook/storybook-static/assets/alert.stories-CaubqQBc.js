import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./iframe-CwvQ8Z4r.js";import{c as E}from"./index-BTRd4YTK.js";import{b as l}from"./index-Dvlu9sap.js";import{c as i,g as h}from"./utils-BAB00U4Q.js";import"./index-BYm-_wci.js";import"./index-8DvStrsX.js";const P=E("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),A=n.forwardRef(({className:e,variant:r,...s},f)=>t.jsx(l,{ref:f,className:i(P({variant:r}),e),...s}));A.displayName="Alert";const v=n.forwardRef(({className:e,...r},s)=>t.jsx(l.Title,{ref:s,className:i("mb-1 font-medium leading-none tracking-tight",e),...r}));v.displayName="AlertTitle";const x=n.forwardRef(({className:e,...r},s)=>t.jsx(l.Description,{ref:s,className:i("text-sm [&_p]:leading-relaxed",e),...r}));x.displayName="AlertDescription";A.__docgenInfo={description:"",methods:[],displayName:"Alert"};v.__docgenInfo={description:"",methods:[],displayName:"AlertTitle"};x.__docgenInfo={description:"",methods:[],displayName:"AlertDescription"};const Y=Object.freeze(Object.defineProperty({__proto__:null,Alert:A,AlertDescription:x,AlertTitle:v},Symbol.toStringTag,{value:"Module"})),q=E("relative w-full rounded-base border-2 border-border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current shadow-shadow",{variants:{variant:{default:"bg-main text-main-foreground",destructive:"bg-black text-white"}},defaultVariants:{variant:"default"}}),w=n.forwardRef(({className:e,variant:r,...s},f)=>t.jsx(l,{ref:f,"data-slot":"alert",className:i(q({variant:r}),e),...s}));w.displayName="Alert";const y=n.forwardRef(({className:e,...r},s)=>t.jsx(l.Title,{ref:s,"data-slot":"alert-title",className:i("col-start-2 line-clamp-1 min-h-4 font-heading tracking-tight",e),...r}));y.displayName="AlertTitle";const N=n.forwardRef(({className:e,...r},s)=>t.jsx(l.Description,{ref:s,"data-slot":"alert-description",className:i("col-start-2 grid justify-items-start gap-1 text-sm font-base [&_p]:leading-relaxed",e),...r}));N.displayName="AlertDescription";w.__docgenInfo={description:"",methods:[],displayName:"Alert"};y.__docgenInfo={description:"",methods:[],displayName:"AlertTitle"};N.__docgenInfo={description:"",methods:[],displayName:"AlertDescription"};const B=Object.freeze(Object.defineProperty({__proto__:null,Alert:w,AlertDescription:N,AlertTitle:y},Symbol.toStringTag,{value:"Module"})),T={shadcn:Y,neobrutalism:B},a=({skin:e="shadcn",...r})=>{const s=h(T,e);return t.jsx(s.Alert,{...r})},o=({skin:e="shadcn",...r})=>{const s=h(T,e);return t.jsx(s.AlertTitle,{...r})},c=({skin:e="shadcn",...r})=>{const s=h(T,e);return t.jsx(s.AlertDescription,{...r})};a.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{skin:{required:!1,tsType:{name:"union",raw:"'shadcn' | 'neobrutalism'",elements:[{name:"literal",value:"'shadcn'"},{name:"literal",value:"'neobrutalism'"}]},description:"",defaultValue:{value:"'shadcn'",computed:!1}}}};o.__docgenInfo={description:"",methods:[],displayName:"AlertTitle",props:{skin:{required:!1,tsType:{name:"union",raw:"'shadcn' | 'neobrutalism'",elements:[{name:"literal",value:"'shadcn'"},{name:"literal",value:"'neobrutalism'"}]},description:"",defaultValue:{value:"'shadcn'",computed:!1}}}};c.__docgenInfo={description:"",methods:[],displayName:"AlertDescription",props:{skin:{required:!1,tsType:{name:"union",raw:"'shadcn' | 'neobrutalism'",elements:[{name:"literal",value:"'shadcn'"},{name:"literal",value:"'neobrutalism'"}]},description:"",defaultValue:{value:"'shadcn'",computed:!1}}}};const U={title:"Components/Alert",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"radio",options:["default","destructive"],description:"The visual style variant of the alert"}}},d={args:{className:"w-[400px]"},render:e=>t.jsxs(a,{...e,children:[t.jsx(o,{children:"Heads up!"}),t.jsx(c,{children:"You can add components and dependencies to your app using the cli."})]})},p={args:{variant:"destructive",className:"w-[400px]"},render:e=>t.jsxs(a,{...e,children:[t.jsx(o,{children:"Error"}),t.jsx(c,{children:"Your session has expired. Please log in again."})]})},m={args:{className:"w-[400px]"},render:e=>t.jsxs(a,{...e,children:[t.jsx("svg",{className:"h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:t.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})}),t.jsx(o,{children:"Info"}),t.jsx(c,{children:"This is an informational alert with an icon."})]})},u={args:{className:"w-[400px]"},render:e=>t.jsx(a,{...e,children:t.jsx(o,{children:"Successfully saved!"})})},g={args:{className:"w-[400px]"},render:e=>t.jsx(a,{...e,children:t.jsx(c,{children:"This is a simple notification without a title."})})};var _,j,b;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    className: 'w-[400px]'
  },
  render: args => <Alert {...args}>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components and dependencies to your app using the cli.
      </AlertDescription>
    </Alert>
}`,...(b=(j=d.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var D,I,R;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: 'destructive',
    className: 'w-[400px]'
  },
  render: args => <Alert {...args}>
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
}`,...(R=(I=p.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var S,k,z;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    className: 'w-[400px]'
  },
  render: args => <Alert {...args}>
      <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
      </svg>
      <AlertTitle>Info</AlertTitle>
      <AlertDescription>
        This is an informational alert with an icon.
      </AlertDescription>
    </Alert>
}`,...(z=(k=m.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var O,V,$;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    className: 'w-[400px]'
  },
  render: args => <Alert {...args}>
      <AlertTitle>Successfully saved!</AlertTitle>
    </Alert>
}`,...($=(V=u.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var H,M,C;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    className: 'w-[400px]'
  },
  render: args => <Alert {...args}>
      <AlertDescription>
        This is a simple notification without a title.
      </AlertDescription>
    </Alert>
}`,...(C=(M=g.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};const X=["Default","Destructive","WithIcon","OnlyTitle","OnlyDescription"];export{d as Default,p as Destructive,g as OnlyDescription,u as OnlyTitle,m as WithIcon,X as __namedExportsOrder,U as default};
