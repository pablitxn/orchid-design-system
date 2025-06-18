import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./iframe-CwvQ8Z4r.js";import{c as o}from"./index-Dvlu9sap.js";import{c as d,g as u}from"./utils-BAB00U4Q.js";import"./index-BYm-_wci.js";import"./index-8DvStrsX.js";const b=c.forwardRef(({className:e,...r},s)=>a.jsx(o,{ref:s,className:d("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",e),...r}));b.displayName="Avatar";const A=c.forwardRef(({className:e,...r},s)=>a.jsx(o.Image,{ref:s,className:d("aspect-square h-full w-full",e),...r}));A.displayName="AvatarImage";const g=c.forwardRef(({className:e,...r},s)=>a.jsx(o.Fallback,{ref:s,className:d("flex h-full w-full items-center justify-center rounded-full bg-muted",e),...r}));g.displayName="AvatarFallback";b.__docgenInfo={description:"",methods:[],displayName:"Avatar"};A.__docgenInfo={description:"",methods:[],displayName:"AvatarImage"};g.__docgenInfo={description:"",methods:[],displayName:"AvatarFallback"};const O=Object.freeze(Object.defineProperty({__proto__:null,Avatar:b,AvatarFallback:g,AvatarImage:A},Symbol.toStringTag,{value:"Module"})),x=c.forwardRef(({className:e,...r},s)=>a.jsx(o,{ref:s,"data-slot":"avatar",className:d("relative flex size-10 shrink-0 overflow-hidden rounded-full outline-2 outline-border",e),...r}));x.displayName="Avatar";const N=c.forwardRef(({className:e,...r},s)=>a.jsx(o.Image,{ref:s,"data-slot":"avatar-image",className:d("aspect-square size-full",e),...r}));N.displayName="AvatarImage";const f=c.forwardRef(({className:e,...r},s)=>a.jsx(o.Fallback,{ref:s,"data-slot":"avatar-fallback",className:d("flex size-full items-center justify-center rounded-full bg-secondary-background text-foreground font-base",e),...r}));f.displayName="AvatarFallback";x.__docgenInfo={description:"",methods:[],displayName:"Avatar"};N.__docgenInfo={description:"",methods:[],displayName:"AvatarImage"};f.__docgenInfo={description:"",methods:[],displayName:"AvatarFallback"};const G=Object.freeze(Object.defineProperty({__proto__:null,Avatar:x,AvatarFallback:f,AvatarImage:N},Symbol.toStringTag,{value:"Module"})),j={shadcn:O,neobrutalism:G},t=({skin:e="shadcn",...r})=>{const s=u(j,e);return a.jsx(s.Avatar,{...r})},n=({skin:e="shadcn",...r})=>{const s=u(j,e);return a.jsx(s.AvatarImage,{...r})},l=({skin:e="shadcn",...r})=>{const s=u(j,e);return a.jsx(s.AvatarFallback,{...r})};t.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{skin:{required:!1,tsType:{name:"union",raw:"'shadcn' | 'neobrutalism'",elements:[{name:"literal",value:"'shadcn'"},{name:"literal",value:"'neobrutalism'"}]},description:"",defaultValue:{value:"'shadcn'",computed:!1}}}};n.__docgenInfo={description:"",methods:[],displayName:"AvatarImage",props:{skin:{required:!1,tsType:{name:"union",raw:"'shadcn' | 'neobrutalism'",elements:[{name:"literal",value:"'shadcn'"},{name:"literal",value:"'neobrutalism'"}]},description:"",defaultValue:{value:"'shadcn'",computed:!1}}}};l.__docgenInfo={description:"",methods:[],displayName:"AvatarFallback",props:{skin:{required:!1,tsType:{name:"union",raw:"'shadcn' | 'neobrutalism'",elements:[{name:"literal",value:"'shadcn'"},{name:"literal",value:"'neobrutalism'"}]},description:"",defaultValue:{value:"'shadcn'",computed:!1}}}};const M={title:"Components/Avatar",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{className:{control:"text",description:"Additional CSS classes"}}},i={render:()=>a.jsxs(t,{children:[a.jsx(n,{src:"https://github.com/shadcn.png",alt:"@shadcn"}),a.jsx(l,{children:"CN"})]})},m={render:()=>a.jsxs(t,{children:[a.jsx(n,{src:"https://broken-link.com/image.jpg",alt:"User"}),a.jsx(l,{children:"JD"})]})},h={render:()=>a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsxs(t,{className:"h-8 w-8",children:[a.jsx(n,{src:"https://github.com/shadcn.png",alt:"@shadcn"}),a.jsx(l,{className:"text-xs",children:"CN"})]}),a.jsxs(t,{className:"h-10 w-10",children:[a.jsx(n,{src:"https://github.com/shadcn.png",alt:"@shadcn"}),a.jsx(l,{children:"CN"})]}),a.jsxs(t,{className:"h-12 w-12",children:[a.jsx(n,{src:"https://github.com/shadcn.png",alt:"@shadcn"}),a.jsx(l,{className:"text-lg",children:"CN"})]}),a.jsxs(t,{className:"h-16 w-16",children:[a.jsx(n,{src:"https://github.com/shadcn.png",alt:"@shadcn"}),a.jsx(l,{className:"text-xl",children:"CN"})]})]})},p={render:()=>a.jsxs("div",{className:"flex -space-x-4",children:[a.jsxs(t,{className:"border-2 border-white",children:[a.jsx(n,{src:"https://github.com/shadcn.png",alt:"User 1"}),a.jsx(l,{children:"U1"})]}),a.jsxs(t,{className:"border-2 border-white",children:[a.jsx(n,{src:"https://github.com/vercel.png",alt:"User 2"}),a.jsx(l,{children:"U2"})]}),a.jsxs(t,{className:"border-2 border-white",children:[a.jsx(n,{src:"https://github.com/prisma.png",alt:"User 3"}),a.jsx(l,{children:"U3"})]}),a.jsx(t,{className:"border-2 border-white",children:a.jsx(l,{children:"+5"})})]})},v={render:()=>a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx(t,{children:a.jsx(l,{className:"bg-red-500 text-white",children:"RD"})}),a.jsx(t,{children:a.jsx(l,{className:"bg-green-500 text-white",children:"GR"})}),a.jsx(t,{children:a.jsx(l,{className:"bg-blue-500 text-white",children:"BL"})}),a.jsx(t,{children:a.jsx(l,{className:"bg-purple-500 text-white",children:"PR"})})]})};var k,F,w;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
}`,...(w=(F=i.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};var I,_,y;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Avatar>
      <AvatarImage src="https://broken-link.com/image.jpg" alt="User" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
}`,...(y=(_=m.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};var C,S,U;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Avatar className="h-8 w-8">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback className="text-xs">CN</AvatarFallback>
      </Avatar>
      <Avatar className="h-10 w-10">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar className="h-12 w-12">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback className="text-lg">CN</AvatarFallback>
      </Avatar>
      <Avatar className="h-16 w-16">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback className="text-xl">CN</AvatarFallback>
      </Avatar>
    </div>
}`,...(U=(S=h.parameters)==null?void 0:S.docs)==null?void 0:U.source}}};var R,z,$;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="flex -space-x-4">
      <Avatar className="border-2 border-white">
        <AvatarImage src="https://github.com/shadcn.png" alt="User 1" />
        <AvatarFallback>U1</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-white">
        <AvatarImage src="https://github.com/vercel.png" alt="User 2" />
        <AvatarFallback>U2</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-white">
        <AvatarImage src="https://github.com/prisma.png" alt="User 3" />
        <AvatarFallback>U3</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-white">
        <AvatarFallback>+5</AvatarFallback>
      </Avatar>
    </div>
}`,...($=(z=p.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};var D,T,q;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Avatar>
        <AvatarFallback className="bg-red-500 text-white">RD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-green-500 text-white">GR</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-blue-500 text-white">BL</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-purple-500 text-white">PR</AvatarFallback>
      </Avatar>
    </div>
}`,...(q=(T=v.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};const H=["Default","Fallback","Sizes","Group","CustomColors"];export{v as CustomColors,i as Default,m as Fallback,p as Group,h as Sizes,H as __namedExportsOrder,M as default};
