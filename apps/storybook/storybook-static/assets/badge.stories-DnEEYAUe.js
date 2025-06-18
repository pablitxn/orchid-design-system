import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as f}from"./iframe-CwvQ8Z4r.js";import{c as Z}from"./index-BTRd4YTK.js";import{B as ee,c as x,S as ae}from"./utils-BAB00U4Q.js";const se=Z("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}}),b=f.forwardRef(({className:r,variant:s,children:n,...t},d)=>e.jsx(ee,{ref:d,className:x(se({variant:s}),r),...t,children:n}));b.displayName="Badge";b.__docgenInfo={description:"",methods:[],displayName:"Badge",composes:["VariantProps"]};const y=Z("inline-flex items-center justify-center rounded-base border-2 border-border px-2.5 py-0.5 text-xs font-base w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] overflow-hidden",{variants:{variant:{default:"bg-main text-main-foreground",neutral:"bg-secondary-background text-foreground"}},defaultVariants:{variant:"default"}}),k=f.forwardRef(({className:r,variant:s,asChild:n=!1,children:t,...d},B)=>n?e.jsx(ae,{ref:B,"data-slot":"badge",className:x(y({variant:s}),r),...d,children:t}):e.jsx(ee,{ref:B,"data-slot":"badge",className:x(y({variant:s}),r),...d,children:t}));k.displayName="Badge";k.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["VariantProps"]};const a=f.forwardRef(({skin:r="shadcn",...s},n)=>r==="neobrutalism"?e.jsx(k,{ref:n,...s}):e.jsx(b,{ref:n,...s}));a.displayName="Badge";a.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{skin:{defaultValue:{value:"'shadcn'",computed:!1},required:!1}}};const ie={title:"Components/Badge",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{skin:{control:"select",options:["shadcn","neobrutalism"],description:"The skin/theme variant of the badge"},variant:{control:"select",options:["default","secondary","destructive","outline","neutral"],description:"The visual style variant of the badge (available options depend on skin)"},children:{control:"text",description:"The content of the badge"}}},i={args:{skin:"shadcn",children:"Badge"}},o={args:{skin:"shadcn",variant:"secondary",children:"Secondary"}},c={args:{skin:"shadcn",variant:"destructive",children:"Destructive"}},l={args:{skin:"shadcn",variant:"outline",children:"Outline"}},g={args:{},render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(a,{skin:"shadcn",children:"Default"}),e.jsx(a,{skin:"shadcn",variant:"secondary",children:"Secondary"}),e.jsx(a,{skin:"shadcn",variant:"destructive",children:"Destructive"}),e.jsx(a,{skin:"shadcn",variant:"outline",children:"Outline"})]})},u={args:{},render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(a,{skin:"shadcn",className:"bg-green-100 text-green-800 hover:bg-green-200",children:"Active"}),e.jsx(a,{skin:"shadcn",className:"bg-yellow-100 text-yellow-800 hover:bg-yellow-200",children:"Pending"}),e.jsx(a,{skin:"shadcn",className:"bg-red-100 text-red-800 hover:bg-red-200",children:"Inactive"}),e.jsx(a,{skin:"shadcn",className:"bg-blue-100 text-blue-800 hover:bg-blue-200",children:"New"})]})},m={args:{},render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsxs(a,{skin:"shadcn",children:[e.jsx("svg",{className:"mr-1 h-3 w-3",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),"Verified"]}),e.jsxs(a,{skin:"shadcn",variant:"secondary",children:[e.jsx("svg",{className:"mr-1 h-3 w-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Pending"]}),e.jsxs(a,{skin:"shadcn",variant:"destructive",children:[e.jsx("svg",{className:"mr-1 h-3 w-3",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"})}),"Error"]})]})},p={args:{},render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{skin:"shadcn",className:"text-xs px-2 py-0.5",children:"Extra Small"}),e.jsx(a,{skin:"shadcn",className:"text-sm px-2.5 py-0.5",children:"Small"}),e.jsx(a,{skin:"shadcn",children:"Default"}),e.jsx(a,{skin:"shadcn",className:"text-base px-3 py-1",children:"Large"}),e.jsx(a,{skin:"shadcn",className:"text-lg px-4 py-1.5",children:"Extra Large"})]})},h={args:{skin:"neobrutalism",children:"Neobrutalism Badge"}},v={args:{},render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(a,{skin:"neobrutalism",children:"Default"}),e.jsx(a,{skin:"neobrutalism",variant:"neutral",children:"Neutral"})]})};var N,j,w;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    skin: 'shadcn',
    children: 'Badge'
  }
}`,...(w=(j=i.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var S,L,V;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    skin: 'shadcn',
    variant: 'secondary',
    children: 'Secondary'
  }
}`,...(V=(L=o.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var D,z,R;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    skin: 'shadcn',
    variant: 'destructive',
    children: 'Destructive'
  }
}`,...(R=(z=c.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var C,E,M;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    skin: 'shadcn',
    variant: 'outline',
    children: 'Outline'
  }
}`,...(M=(E=l.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var _,I,O;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {} as any,
  render: () => <div className="flex flex-wrap gap-4">
      <Badge skin="shadcn">Default</Badge>
      <Badge skin="shadcn" variant="secondary">Secondary</Badge>
      <Badge skin="shadcn" variant="destructive">Destructive</Badge>
      <Badge skin="shadcn" variant="outline">Outline</Badge>
    </div>
}`,...(O=(I=g.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var A,P,T;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {} as any,
  render: () => <div className="flex flex-wrap gap-4">
      <Badge skin="shadcn" className="bg-green-100 text-green-800 hover:bg-green-200">
        Active
      </Badge>
      <Badge skin="shadcn" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
        Pending
      </Badge>
      <Badge skin="shadcn" className="bg-red-100 text-red-800 hover:bg-red-200">
        Inactive
      </Badge>
      <Badge skin="shadcn" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
        New
      </Badge>
    </div>
}`,...(T=(P=u.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var W,$,q;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {} as any,
  render: () => <div className="flex flex-wrap gap-4">
      <Badge skin="shadcn">
        <svg className="mr-1 h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        Verified
      </Badge>
      <Badge skin="shadcn" variant="secondary">
        <svg className="mr-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Pending
      </Badge>
      <Badge skin="shadcn" variant="destructive">
        <svg className="mr-1 h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
        </svg>
        Error
      </Badge>
    </div>
}`,...(q=($=m.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var F,G,H;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {} as any,
  render: () => <div className="flex items-center gap-4">
      <Badge skin="shadcn" className="text-xs px-2 py-0.5">Extra Small</Badge>
      <Badge skin="shadcn" className="text-sm px-2.5 py-0.5">Small</Badge>
      <Badge skin="shadcn">Default</Badge>
      <Badge skin="shadcn" className="text-base px-3 py-1">Large</Badge>
      <Badge skin="shadcn" className="text-lg px-4 py-1.5">Extra Large</Badge>
    </div>
}`,...(H=(G=p.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,Q;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    skin: 'neobrutalism',
    children: 'Neobrutalism Badge'
  }
}`,...(Q=(K=h.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {} as any,
  render: () => <div className="flex flex-wrap gap-4">
      <Badge skin="neobrutalism">Default</Badge>
      <Badge skin="neobrutalism" variant="neutral">Neutral</Badge>
    </div>
}`,...(Y=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const oe=["Default","Secondary","Destructive","Outline","AllVariants","StatusBadges","WithIcons","Sizes","NeobrutalismVariant","NeobrutalismAllVariants"];export{g as AllVariants,i as Default,c as Destructive,v as NeobrutalismAllVariants,h as NeobrutalismVariant,l as Outline,o as Secondary,p as Sizes,u as StatusBadges,m as WithIcons,oe as __namedExportsOrder,ie as default};
