import{j as e,R as s}from"./index-BGdkiN4x.js";const r=[{src:"/images/prologistica.png",alt:"Prologística"},{src:"/images/lyd-cencosud.png",alt:"LYD Cencosud"},{src:"/images/bsm-transportes.png",alt:"BSM Transportes"}];function o(){return e.jsx("section",{id:"sponsors",className:"relative w-full py-20 md:py-24",children:e.jsxs("div",{className:"w-full max-w-[1400px] mx-auto px-6 md:px-12",children:[e.jsx(s,{children:e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-xs md:text-sm uppercase tracking-[0.22em] text-white/55",children:"Nuestros clientes ya confían en nosotros"}),e.jsx("h3",{className:"mt-3 text-2xl md:text-3xl font-semibold text-white",children:"Confianza construida en operación, control y resultados"})]})}),e.jsx(s,{delay:.08,children:e.jsxs("div",{className:"mt-12 overflow-hidden w-full select-none",children:[e.jsx("style",{children:`
              .marquee-track {
                animation: marqueeScroll linear infinite;
                will-change: transform;
              }
              @keyframes marqueeScroll {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
              }
              @media (prefers-reduced-motion: reduce) {
                .marquee-track { animation: none !important; transform: translateX(0) !important; }
              }
            `}),e.jsx("div",{className:"relative",style:{WebkitMaskImage:"linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",maskImage:"linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)"},children:e.jsxs("div",{className:"marquee-track flex min-w-[200%]",style:{animationDuration:"22s"},children:[e.jsx(t,{}),e.jsx(t,{})]})})]})})]})})}function t(){return e.jsx("div",{className:["flex items-center","gap-10 sm:gap-14 md:gap-20 lg:gap-28","px-6 sm:px-8","min-w-[50%]","shrink-0"].join(" "),children:r.map(a=>e.jsx(i,{...a},a.src))})}function i({src:a,alt:n}){return e.jsx("div",{className:["shrink-0","flex items-center justify-center","w-[180px] sm:w-[220px] md:w-[300px] lg:w-[340px]","h-16 sm:h-20 md:h-24"].join(" "),children:e.jsx("img",{src:a,alt:n,className:["max-h-full w-auto object-contain","opacity-90 hover:opacity-100 transition"].join(" "),draggable:!1,loading:"lazy",decoding:"async"})})}export{o as default};
