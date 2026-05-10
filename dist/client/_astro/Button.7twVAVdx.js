import{j as i}from"./jsx-runtime.D_zvdyIk.js";import{R as G,r as l}from"./index.DMVOjPfi.js";import{c as E,b as S}from"./utils.BnlJtBIq.js";import{E as q}from"./ElectricBorder.zBqY6gI4.js";import{g as K,S as T}from"./slot.bqNRMxd7.js";import{m as V}from"./proxy.C_OWJd2b.js";var _=(e=>(e.roundedXs="rounded-xs",e.roundedNone="rounded-none",e.roundedSm="rounded-sm",e.roundedMd="rounded-md",e.roundedLg="rounded-lg",e.roundedXl="rounded-xl",e.rounded2xl="rounded-2xl",e.rounded3xl="rounded-3xl",e.roundedFull="rounded-full",e))(_||{}),U=(e=>(e.shadowSm="shadow-sm",e.shadowXs="shadow-xs",e.shadowMd="shadow-md",e.shadowLg="shadow-lg",e.shadowXl="shadow-xl",e.shadow2xl="shadow-2xl",e.shadow3xl="shadow-3xl",e.shadow4xl="shadow-4xl",e.shadow5xl="shadow-5xl",e.shadowNone="shadow-none",e))(U||{}),W=(e=>(e.border0="border-0",e.border1="border-1",e.border2="border-2",e.border4="border-4",e.borderNone="border-none",e))(W||{});const ce={panel:{margin:{bottom:"mb-6"}}},ue={listContent:"bg-gradient-to-b from-gray-200 via-transparent to-gray-300 dark:text-gray-900 dark:from-gray-800 dark:via-transparent dark:to-gray-800"},L=G.memo(({className:e,size:t=48,duration:r=2,colorFrom:d="#8b82f6",colorTo:p="#8b5cf6",children:c})=>{const[m,b]=l.useState(!1),[s,n]=l.useState(!1),[u,f]=l.useState(0),[o,g]=l.useState([]),[k,x]=l.useState(0),y=l.useRef(null),N=l.useRef(null),j=l.useRef(0),w=["#ff0000","#ff8000","#ffff00","#80ff00","#00ff00","#00ff80","#00ffff","#0080ff","#0000ff","#8000ff","#ff00ff","#ff0080"],R=["circle","square","triangle","diamond"],O=()=>{b(!1)};l.useEffect(()=>{if(s){const a=setInterval(()=>{x(h=>(h+1)%100)},50);return()=>clearInterval(a)}},[s]),l.useEffect(()=>{if(s&&m){const a=setInterval(()=>{const h={id:j.current++,x:Math.random()*100,y:Math.random()*100,color:w[Math.floor(Math.random()*w.length)],shape:R[Math.floor(Math.random()*R.length)],direction:["up","down","left","right"][Math.floor(Math.random()*4)]};g(v=>[...v.slice(-8),h]),setTimeout(()=>{g(v=>v.filter(D=>D.id!==h.id))},2e3)},300);return()=>clearInterval(a)}},[s,m]);const X=()=>{n(!0),b(!0)},F=()=>{n(!1),g([]),b(!1)},I={},A={},$=l.useCallback(a=>`linear-gradient(${a}, 
      transparent 0%, 
      transparent 20%, 
      ${d}40 30%, 
      ${p}80 50%, 
      ${d}40 70%, 
      transparent 80%, 
      transparent 100%
    )`,[d,p]),Y=l.useMemo(()=>{const a={animationDuration:`${r}s`,filter:"blur(0.5px)"};switch(u){case 0:return{...a,position:"absolute",top:0,left:0,width:`${t}px`,height:"3px",background:$("90deg"),animation:"beamTop 10s ease-in-out"};case 1:return{...a,position:"absolute",top:0,right:0,width:"3px",height:`${t}px`,background:$("180deg"),animation:"beamRight 4s ease-in-out"};case 2:return{...a,position:"absolute",bottom:0,right:0,width:`${t}px`,height:"3px",background:$("270deg"),animation:"beamBottom 8s ease-in-out"};case 3:return{...a,position:"absolute",bottom:0,left:0,width:"3px",height:`${t}px`,background:$("0deg"),animation:"beamLeft 4s ease-in-out"};default:return a}},[u,t,r,$]),H=l.useCallback(a=>{const h=Math.random()*2+3,v={position:"absolute",left:`${a.x}%`,top:`${a.y}%`,width:`${h}px`,height:`${h}px`,backgroundColor:a.color,opacity:.8,animation:`flyOut${a.direction} 2s ease-out forwards`,zIndex:20,pointerEvents:"none"};switch(a.shape){case"circle":return i.jsx("div",{style:{...v,borderRadius:"50%",pointerEvents:"none"}},a.id);case"square":return i.jsx("div",{style:{...v,pointerEvents:"none"}},a.id);case"triangle":return i.jsx("div",{style:{...v,width:0,height:0,backgroundColor:"transparent",borderLeft:`${h/2}px solid transparent`,borderRight:`${h/2}px solid transparent`,borderBottom:`${h}px solid ${a.color}`,pointerEvents:"none"}},a.id);case"diamond":return i.jsx("div",{style:{...v,transform:"rotate(45deg)",pointerEvents:"none"}},a.id);default:return i.jsx("div",{style:{...v,pointerEvents:"none"}},a.id)}},[]);return i.jsxs("div",{ref:y,className:E("relative overflow-hidden bg-transparent",e),style:s?A:I,onMouseEnter:X,onMouseLeave:F,children:[m&&s&&i.jsx("div",{ref:N,className:"absolute z-10",style:Y,onAnimationEnd:O}),s&&o.map(H),s&&i.jsx("div",{className:"absolute z-10 ",style:{position:"absolute",width:"8px",height:"8px",borderRadius:"50%",background:`radial-gradient(circle, ${p} 0%, ${d} 50%, transparent 100%)`,animation:"moveLight 5s linear infinite",transform:`translate(${k*4}px, 0)`,pointerEvents:"none"}}),i.jsx("div",{className:"relative z-0 hover:z-0",children:l.useMemo(()=>c,[c])}),i.jsx("style",{children:`
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
      `})]})},(e,t)=>e.className===t.className&&e.size===t.size&&e.duration===t.duration&&e.colorFrom===t.colorFrom&&e.colorTo===t.colorTo&&e.children===t.children);L.displayName="BorderBeam";const B=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,M=S,J=(e,t)=>r=>{var d;if(t?.variants==null)return M(e,r?.class,r?.className);const{variants:p,defaultVariants:c}=t,m=Object.keys(p).map(n=>{const u=r?.[n],f=c?.[n];if(u===null)return null;const o=B(u)||B(f);return p[n][o]}),b=r&&Object.entries(r).reduce((n,u)=>{let[f,o]=u;return o===void 0||(n[f]=o),n},{}),s=t==null||(d=t.compoundVariants)===null||d===void 0?void 0:d.reduce((n,u)=>{let{class:f,className:o,...g}=u;return Object.entries(g).every(k=>{let[x,y]=k;return Array.isArray(y)?y.includes({...c,...b}[x]):{...c,...b}[x]===y})?[...n,f,o]:n},[]);return M(e,m,s,r?.class,r?.className)},Q=J("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[box-shadow,_color,_background-color,_border-color,_outline-color,_text-decoration-color,_fill,_stroke] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",accent:"bg-accent text-accent-foreground shadow-xs hover:bg-accent/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9","icon-sm":"size-8 rounded-md","icon-lg":"size-10 rounded-md"}},defaultVariants:{variant:"default",size:"default"}}),[Z,P]=K("RippleButtonContext");function z({ref:e,onClick:t,hoverScale:r=1.05,tapScale:d=.95,asChild:p=!1,style:c,...m}){const[b,s]=l.useState([]),n=l.useRef(null);l.useImperativeHandle(e,()=>n.current);const u=l.useCallback(g=>{const k=n.current;if(!k)return;const x=k.getBoundingClientRect(),y=g.clientX-x.left,N=g.clientY-x.top,j={id:Date.now(),x:y,y:N};s(w=>[...w,j]),setTimeout(()=>{s(w=>w.filter(R=>R.id!==j.id))},600)},[]),f=l.useCallback(g=>{u(g),t&&t(g)},[u,t]),o=p?T:V.button;return i.jsx(Z,{value:{ripples:b,setRipples:s},children:i.jsx(o,{ref:n,"data-slot":"ripple-button",onClick:f,whileTap:{scale:d},whileHover:{scale:r},style:{position:"relative",overflow:"hidden",...c},...m})})}function ee({color:e="var(--ripple-button-ripple-color)",scale:t=10,transition:r={duration:.6,ease:"easeOut"},asChild:d=!1,style:p,...c}){const{ripples:m}=P(),b=d?T:V.span;return m.map(s=>i.jsx(b,{initial:{scale:0,opacity:.5},animate:{scale:t,opacity:0},transition:r,style:{position:"absolute",borderRadius:"50%",pointerEvents:"none",width:"20px",height:"20px",backgroundColor:e,top:s.y-10,left:s.x-10,...p},...c},s.id))}const te={default:"[--ripple-button-ripple-color:var(--primary-foreground)]",accent:"[--ripple-button-ripple-color:var(--accent-foreground)]",destructive:"[--ripple-button-ripple-color:var(--destructive-foreground)]",outline:"[--ripple-button-ripple-color:var(--foreground)]",secondary:"[--ripple-button-ripple-color:var(--secondary-foreground)]",ghost:"[--ripple-button-ripple-color:var(--foreground)]",link:"[--ripple-button-ripple-color:var(--primary-foreground)]"};function re({className:e,variant:t,size:r,...d}){return i.jsx(z,{className:E(Q({variant:t,size:r,className:e}),te[t]),...d})}function ae(e){return i.jsx(ee,{...e})}const C=e=>{switch(e){case"primary":return{colorFrom:"#4f46e5",colorTo:"#2563eb"};case"secondary":return{colorFrom:"#64748b",colorTo:"#475569"};case"danger":return{colorFrom:"#dc2626",colorTo:"#b91c1c"};case"success":return{colorFrom:"#059669",colorTo:"#047857"};default:return{colorFrom:"#94a3b8",colorTo:"#cbd5e1"}}},pe=({children:e,variant:t="primary",size:r="md",onClick:d,disabled:p=!1,className:c="",outline:m=!1,focus:b=!1})=>{const s=()=>{const o="border! text-slate-400! border-slate-300! bg-slate-200! hover:bg-slate-200! dark:border-slate-600! dark:bg-slate-700! dark:text-slate-500! dark:hover:bg-slate-700!";switch(t){case"primary":return"text-white! bg-indigo-400! opacity-60! cursor-not-allowed! dark:bg-indigo-600! dark:opacity-60!";case"secondary":return"text-slate-300! bg-slate-400! opacity-60! cursor-not-allowed! dark:bg-slate-600! dark:text-slate-400! dark:opacity-60!";case"danger":return"text-white! bg-red-400! opacity-60! cursor-not-allowed! dark:bg-red-600! dark:opacity-60!";case"success":return"text-white! bg-emerald-400! opacity-60! cursor-not-allowed! dark:bg-emerald-600! dark:opacity-60!";default:return o}},n=()=>{const o="border text-slate-700 border-slate-300 bg-slate-200 hover:bg-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600";switch(t){case"primary":return"bg-indigo-600 text-white font-semibold hover:bg-indigo-700 dark:bg-indigo-500 dark:text-white dark:hover:bg-indigo-600 shadow-sm hover:shadow-md transition-all";case"secondary":return"bg-slate-500 text-slate-100 hover:bg-slate-600 dark:bg-slate-600 dark:text-slate-200 dark:hover:bg-slate-500";case"danger":return"bg-red-600 text-white font-semibold hover:bg-red-700 dark:bg-red-500 dark:text-white dark:hover:bg-red-600 shadow-sm hover:shadow-md transition-all";case"success":return"bg-emerald-600 text-white font-semibold hover:bg-emerald-700 dark:bg-emerald-500 dark:text-white dark:hover:bg-emerald-600 shadow-sm hover:shadow-md transition-all";default:return o}},u=()=>{if(!m)return"";let o="bg-transparent! text-slate-600! dark:text-slate-300! hover:text-slate-700 dark:hover:text-slate-200 border-1 border-slate-300! dark:border-slate-600! ";switch(t){case"primary":o+="border-indigo-500! text-indigo-600! hover:border-indigo-600! hover:bg-indigo-50! dark:border-indigo-400! dark:text-indigo-400! dark:hover:bg-indigo-950/20!";break;case"secondary":o+="border-slate-400! text-slate-600! hover:border-slate-500! hover:bg-slate-50! dark:border-slate-500! dark:text-slate-400! dark:hover:bg-slate-800/30!";break;case"danger":o+="border-red-500! text-red-600! hover:border-red-600! hover:bg-red-50! dark:border-red-400! dark:text-red-400! dark:hover:bg-red-950/20!";break;case"success":o+="border-emerald-500! text-emerald-600! hover:border-emerald-600! hover:bg-emerald-50! dark:border-emerald-400! dark:text-emerald-400! dark:hover:bg-emerald-950/20!";break;default:o+="border-slate-300! text-slate-500! hover:border-slate-400! hover:bg-slate-50! dark:border-slate-600! dark:text-slate-400! dark:hover:bg-slate-800/30!";break}return o},f=()=>{switch(r){case"sm":return"px-3 pr-2 py-1 text-sm";case"md":return"px-4 pr-3 py-2 text-sm";case"lg":return"px-6 pr-5 py-3 text-base";default:return"px-4 pr-3 py-2 text-sm"}};return i.jsx(L,{size:12,colorFrom:C(t).colorFrom,colorTo:C(t).colorTo,children:i.jsxs(re,{onClick:d,disabled:p,className:`
          ${p?s():n()}
          ${u()}
          ${b?"":f()}
          ${_.roundedXs} font-medium transition-colors duration-200
          ${c}
          `,children:[i.jsx(q,{color:C(t).colorFrom,speed:1,chaos:.5,thickness:2,style:{borderRadius:2},className:E(`${f()}`,"mr-1 "),disabled:!b,children:e}),i.jsx(ae,{color:C(t).colorFrom})]})})};export{pe as B,ce as G,_ as R,U as S,W as a,L as b,ue as c,C as g};
