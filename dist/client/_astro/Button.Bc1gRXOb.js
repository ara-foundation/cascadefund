import{j as l}from"./jsx-runtime.D_zvdyIk.js";import{R as G,r as n}from"./index.DMVOjPfi.js";import{c as E,b as S}from"./utils.BnlJtBIq.js";import{E as q}from"./ElectricBorder.zBqY6gI4.js";import{g as K,S as B}from"./slot.bqNRMxd7.js";import{m as V}from"./proxy.C_OWJd2b.js";var _=(e=>(e.roundedXs="rounded-xs",e.roundedNone="rounded-none",e.roundedSm="rounded-sm",e.roundedMd="rounded-md",e.roundedLg="rounded-lg",e.roundedXl="rounded-xl",e.rounded2xl="rounded-2xl",e.rounded3xl="rounded-3xl",e.roundedFull="rounded-full",e))(_||{}),U=(e=>(e.shadowSm="shadow-sm",e.shadowXs="shadow-xs",e.shadowMd="shadow-md",e.shadowLg="shadow-lg",e.shadowXl="shadow-xl",e.shadow2xl="shadow-2xl",e.shadow3xl="shadow-3xl",e.shadow4xl="shadow-4xl",e.shadow5xl="shadow-5xl",e.shadowNone="shadow-none",e))(U||{}),W=(e=>(e.border0="border-0",e.border1="border-1",e.border2="border-2",e.border4="border-4",e.borderNone="border-none",e))(W||{});const ce={panel:{margin:{bottom:"mb-6"}}},ue={listContent:"bg-gradient-to-b from-gray-200 via-transparent to-gray-300 dark:text-gray-900 dark:from-gray-800 dark:via-transparent dark:to-gray-800"},L=G.memo(({className:e,size:t=48,duration:r=2,colorFrom:d="#8b82f6",colorTo:m="#8b5cf6",children:p})=>{const[g,c]=n.useState(!1),[a,i]=n.useState(!1),[u,b]=n.useState(0),[s,h]=n.useState([]),[k,x]=n.useState(0),y=n.useRef(null),N=n.useRef(null),j=n.useRef(0),w=["#ff0000","#ff8000","#ffff00","#80ff00","#00ff00","#00ff80","#00ffff","#0080ff","#0000ff","#8000ff","#ff00ff","#ff0080"],R=["circle","square","triangle","diamond"];n.useEffect(()=>{const f=setTimeout(()=>{a||c(!0)},Math.floor(Math.random()*50));return()=>clearTimeout(f)},[a,u]);const O=()=>{c(!1),a||(b(o=>(o+1)%4),setTimeout(()=>{a||c(!0)},200))};n.useEffect(()=>{if(a){const o=setInterval(()=>{x(f=>(f+1)%100)},50);return()=>clearInterval(o)}},[a]),n.useEffect(()=>{if(a&&g){const o=setInterval(()=>{const f={id:j.current++,x:Math.random()*100,y:Math.random()*100,color:w[Math.floor(Math.random()*w.length)],shape:R[Math.floor(Math.random()*R.length)],direction:["up","down","left","right"][Math.floor(Math.random()*4)]};h(v=>[...v.slice(-8),f]),setTimeout(()=>{h(v=>v.filter(D=>D.id!==f.id))},2e3)},300);return()=>clearInterval(o)}},[a,g]);const X=()=>{i(!0),c(!0)},F=()=>{i(!1),h([]),setTimeout(()=>{setTimeout(()=>{c(!0)},300)},100)},I={},A={},$=n.useCallback(o=>`linear-gradient(${o}, 
      transparent 0%, 
      transparent 20%, 
      ${d}40 30%, 
      ${m}80 50%, 
      ${d}40 70%, 
      transparent 80%, 
      transparent 100%
    )`,[d,m]),Y=n.useMemo(()=>{const o={animationDuration:`${r}s`,filter:"blur(0.5px)"};switch(u){case 0:return{...o,position:"absolute",top:0,left:0,width:`${t}px`,height:"3px",background:$("90deg"),animation:"beamTop 10s ease-in-out"};case 1:return{...o,position:"absolute",top:0,right:0,width:"3px",height:`${t}px`,background:$("180deg"),animation:"beamRight 4s ease-in-out"};case 2:return{...o,position:"absolute",bottom:0,right:0,width:`${t}px`,height:"3px",background:$("270deg"),animation:"beamBottom 8s ease-in-out"};case 3:return{...o,position:"absolute",bottom:0,left:0,width:"3px",height:`${t}px`,background:$("0deg"),animation:"beamLeft 4s ease-in-out"};default:return o}},[u,t,r,$]),H=n.useCallback(o=>{const f=Math.random()*2+3,v={position:"absolute",left:`${o.x}%`,top:`${o.y}%`,width:`${f}px`,height:`${f}px`,backgroundColor:o.color,opacity:.8,animation:`flyOut${o.direction} 2s ease-out forwards`,zIndex:20,pointerEvents:"none"};switch(o.shape){case"circle":return l.jsx("div",{style:{...v,borderRadius:"50%",pointerEvents:"none"}},o.id);case"square":return l.jsx("div",{style:{...v,pointerEvents:"none"}},o.id);case"triangle":return l.jsx("div",{style:{...v,width:0,height:0,backgroundColor:"transparent",borderLeft:`${f/2}px solid transparent`,borderRight:`${f/2}px solid transparent`,borderBottom:`${f}px solid ${o.color}`,pointerEvents:"none"}},o.id);case"diamond":return l.jsx("div",{style:{...v,transform:"rotate(45deg)",pointerEvents:"none"}},o.id);default:return l.jsx("div",{style:{...v,pointerEvents:"none"}},o.id)}},[]);return l.jsxs("div",{ref:y,className:E("relative overflow-hidden bg-transparent",e),style:a?A:I,onMouseEnter:X,onMouseLeave:F,children:[g&&!a&&l.jsx("div",{ref:N,className:"absolute z-10",style:Y,onAnimationEnd:O}),a&&s.map(H),a&&l.jsx("div",{className:"absolute z-10 ",style:{position:"absolute",width:"8px",height:"8px",borderRadius:"50%",background:`radial-gradient(circle, ${m} 0%, ${d} 50%, transparent 100%)`,animation:"moveLight 5s linear infinite",transform:`translate(${k*4}px, 0)`,pointerEvents:"none"}}),l.jsx("div",{className:"relative z-0 hover:z-0",children:n.useMemo(()=>p,[p])}),l.jsx("style",{children:`
        @keyframes beamTop {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          5% {
            opacity: 0.8;
          }
          95% {
            opacity: 0.8;
          }
          100% {
            transform: translateX(100vw);
            opacity: 0;
          }
        }
        
        @keyframes beamRight {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          5% {
            opacity: 0.8;
          }
          95% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
        
        @keyframes beamBottom {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          5% {
            opacity: 0.8;
          }
          95% {
            opacity: 0.8;
          }
          100% {
            transform: translateX(-100vw);
            opacity: 0;
          }
        }
        
        @keyframes beamLeft {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          5% {
            opacity: 0.8;
          }
          95% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-100vh);
            opacity: 0;
          }
        }

        @keyframes flyOutup {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.8;
          }
          100% {
            transform: translate(0, -32px) scale(0.5);
            opacity: 0;
          }
        }

        @keyframes flyOutdown {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.8;
          }
          100% {
            transform: translate(0, 32px) scale(0.5);
            opacity: 0;
          }
        }

        @keyframes flyOutleft {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.8;
          }
          100% {
            transform: translate(-32px, 0) scale(0.5);
            opacity: 0;
          }
        }

        @keyframes flyOutright {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.8;
          }
          100% {
            transform: translate(32px, 0) scale(0.5);
            opacity: 0;
          }
        }

        @keyframes moveLight {
          0% {
            top: 0;
            left: 0;
            transform: translate(-4px, -4px);
          }
          25% {
            top: 0;
            left: 100%;
            transform: translate(-4px, -4px);
          }
          50% {
            top: 100%;
            left: 100%;
            transform: translate(-4px, -4px);
          }
          75% {
            top: 100%;
            left: 0;
            transform: translate(-4px, -4px);
          }
          100% {
            top: 0;
            left: 0;
            transform: translate(-4px, -4px);
          }
        }
      `})]})},(e,t)=>e.className===t.className&&e.size===t.size&&e.duration===t.duration&&e.colorFrom===t.colorFrom&&e.colorTo===t.colorTo&&e.children===t.children);L.displayName="BorderBeam";const M=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,T=S,J=(e,t)=>r=>{var d;if(t?.variants==null)return T(e,r?.class,r?.className);const{variants:m,defaultVariants:p}=t,g=Object.keys(m).map(i=>{const u=r?.[i],b=p?.[i];if(u===null)return null;const s=M(u)||M(b);return m[i][s]}),c=r&&Object.entries(r).reduce((i,u)=>{let[b,s]=u;return s===void 0||(i[b]=s),i},{}),a=t==null||(d=t.compoundVariants)===null||d===void 0?void 0:d.reduce((i,u)=>{let{class:b,className:s,...h}=u;return Object.entries(h).every(k=>{let[x,y]=k;return Array.isArray(y)?y.includes({...p,...c}[x]):{...p,...c}[x]===y})?[...i,b,s]:i},[]);return T(e,g,a,r?.class,r?.className)},Q=J("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[box-shadow,_color,_background-color,_border-color,_outline-color,_text-decoration-color,_fill,_stroke] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",accent:"bg-accent text-accent-foreground shadow-xs hover:bg-accent/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9","icon-sm":"size-8 rounded-md","icon-lg":"size-10 rounded-md"}},defaultVariants:{variant:"default",size:"default"}}),[Z,P]=K("RippleButtonContext");function z({ref:e,onClick:t,hoverScale:r=1.05,tapScale:d=.95,asChild:m=!1,style:p,...g}){const[c,a]=n.useState([]),i=n.useRef(null);n.useImperativeHandle(e,()=>i.current);const u=n.useCallback(h=>{const k=i.current;if(!k)return;const x=k.getBoundingClientRect(),y=h.clientX-x.left,N=h.clientY-x.top,j={id:Date.now(),x:y,y:N};a(w=>[...w,j]),setTimeout(()=>{a(w=>w.filter(R=>R.id!==j.id))},600)},[]),b=n.useCallback(h=>{u(h),t&&t(h)},[u,t]),s=m?B:V.button;return l.jsx(Z,{value:{ripples:c,setRipples:a},children:l.jsx(s,{ref:i,"data-slot":"ripple-button",onClick:b,whileTap:{scale:d},whileHover:{scale:r},style:{position:"relative",overflow:"hidden",...p},...g})})}function ee({color:e="var(--ripple-button-ripple-color)",scale:t=10,transition:r={duration:.6,ease:"easeOut"},asChild:d=!1,style:m,...p}){const{ripples:g}=P(),c=d?B:V.span;return g.map(a=>l.jsx(c,{initial:{scale:0,opacity:.5},animate:{scale:t,opacity:0},transition:r,style:{position:"absolute",borderRadius:"50%",pointerEvents:"none",width:"20px",height:"20px",backgroundColor:e,top:a.y-10,left:a.x-10,...m},...p},a.id))}const te={default:"[--ripple-button-ripple-color:var(--primary-foreground)]",accent:"[--ripple-button-ripple-color:var(--accent-foreground)]",destructive:"[--ripple-button-ripple-color:var(--destructive-foreground)]",outline:"[--ripple-button-ripple-color:var(--foreground)]",secondary:"[--ripple-button-ripple-color:var(--secondary-foreground)]",ghost:"[--ripple-button-ripple-color:var(--foreground)]",link:"[--ripple-button-ripple-color:var(--primary-foreground)]"};function re({className:e,variant:t,size:r,...d}){return l.jsx(z,{className:E(Q({variant:t,size:r,className:e}),te[t]),...d})}function oe(e){return l.jsx(ee,{...e})}const C=e=>{switch(e){case"primary":return{colorFrom:"#4f46e5",colorTo:"#2563eb"};case"secondary":return{colorFrom:"#64748b",colorTo:"#475569"};case"danger":return{colorFrom:"#dc2626",colorTo:"#b91c1c"};case"success":return{colorFrom:"#059669",colorTo:"#047857"};default:return{colorFrom:"#94a3b8",colorTo:"#cbd5e1"}}},me=({children:e,variant:t="primary",size:r="md",onClick:d,disabled:m=!1,className:p="",outline:g=!1,focus:c=!1})=>{const a=()=>{const s="border! text-slate-400! border-slate-300! bg-slate-200! hover:bg-slate-200! dark:border-slate-600! dark:bg-slate-700! dark:text-slate-500! dark:hover:bg-slate-700!";switch(t){case"primary":return"text-white! bg-indigo-400! opacity-60! cursor-not-allowed! dark:bg-indigo-600! dark:opacity-60!";case"secondary":return"text-slate-300! bg-slate-400! opacity-60! cursor-not-allowed! dark:bg-slate-600! dark:text-slate-400! dark:opacity-60!";case"danger":return"text-white! bg-red-400! opacity-60! cursor-not-allowed! dark:bg-red-600! dark:opacity-60!";case"success":return"text-white! bg-emerald-400! opacity-60! cursor-not-allowed! dark:bg-emerald-600! dark:opacity-60!";default:return s}},i=()=>{const s="border text-slate-700 border-slate-300 bg-slate-200 hover:bg-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600";switch(t){case"primary":return"bg-indigo-600 text-white font-semibold hover:bg-indigo-700 dark:bg-indigo-500 dark:text-white dark:hover:bg-indigo-600 shadow-sm hover:shadow-md transition-all";case"secondary":return"bg-slate-500 text-slate-100 hover:bg-slate-600 dark:bg-slate-600 dark:text-slate-200 dark:hover:bg-slate-500";case"danger":return"bg-red-600 text-white font-semibold hover:bg-red-700 dark:bg-red-500 dark:text-white dark:hover:bg-red-600 shadow-sm hover:shadow-md transition-all";case"success":return"bg-emerald-600 text-white font-semibold hover:bg-emerald-700 dark:bg-emerald-500 dark:text-white dark:hover:bg-emerald-600 shadow-sm hover:shadow-md transition-all";default:return s}},u=()=>{if(!g)return"";let s="bg-transparent! text-slate-600! dark:text-slate-300! hover:text-slate-700 dark:hover:text-slate-200 border-1 border-slate-300! dark:border-slate-600! ";switch(t){case"primary":s+="border-indigo-500! text-indigo-600! hover:border-indigo-600! hover:bg-indigo-50! dark:border-indigo-400! dark:text-indigo-400! dark:hover:bg-indigo-950/20!";break;case"secondary":s+="border-slate-400! text-slate-600! hover:border-slate-500! hover:bg-slate-50! dark:border-slate-500! dark:text-slate-400! dark:hover:bg-slate-800/30!";break;case"danger":s+="border-red-500! text-red-600! hover:border-red-600! hover:bg-red-50! dark:border-red-400! dark:text-red-400! dark:hover:bg-red-950/20!";break;case"success":s+="border-emerald-500! text-emerald-600! hover:border-emerald-600! hover:bg-emerald-50! dark:border-emerald-400! dark:text-emerald-400! dark:hover:bg-emerald-950/20!";break;default:s+="border-slate-300! text-slate-500! hover:border-slate-400! hover:bg-slate-50! dark:border-slate-600! dark:text-slate-400! dark:hover:bg-slate-800/30!";break}return s},b=()=>{switch(r){case"sm":return"px-3 pr-2 py-1 text-sm";case"md":return"px-4 pr-3 py-2 text-sm";case"lg":return"px-6 pr-5 py-3 text-base";default:return"px-4 pr-3 py-2 text-sm"}};return l.jsx(L,{size:12,colorFrom:C(t).colorFrom,colorTo:C(t).colorTo,children:l.jsxs(re,{onClick:d,disabled:m,className:`
          ${m?"":"hyperlink"}
          ${m?a():i()}
          ${u()}
          ${c?"":b()}
          ${_.roundedXs} font-medium transition-colors duration-200
          ${p}
          `,children:[l.jsx(q,{color:C(t).colorFrom,speed:1,chaos:.5,thickness:2,style:{borderRadius:2},className:E(`${b()}`,"mr-1 "),disabled:!c,children:e}),l.jsx(oe,{color:C(t).colorFrom})]})})};export{me as B,ce as G,_ as R,U as S,W as a,L as b,ue as c,C as g};
