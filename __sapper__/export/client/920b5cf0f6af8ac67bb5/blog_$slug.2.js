(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{5:function(t,e,n){"use strict";n.r(e),n.d(e,"preload",function(){return c});var s=n(0);function o(t){var e,n,o,c,l,a,r=t.post.title+"",i=t.post.html+"";return document.title=e=t.post.title,{c(){n=Object(s.D)(),o=Object(s.m)("h1"),c=Object(s.E)(r),l=Object(s.D)(),a=Object(s.m)("div"),this.h()},l(t){n=Object(s.h)(t,"\n\n"),o=Object(s.g)(t,"H1",{},!1);var e=Object(s.f)(o);c=Object(s.h)(e,r),e.forEach(s.l),l=Object(s.h)(t,"\n\n"),a=Object(s.g)(t,"DIV",{class:!0},!1),Object(s.f)(a).forEach(s.l),this.h()},h(){Object(s.d)(a,"class","content svelte-gnxal1")},m(t,e){Object(s.u)(t,n,e),Object(s.u)(t,o,e),Object(s.b)(o,c),Object(s.u)(t,l,e),Object(s.u)(t,a,e),a.innerHTML=i},p(t,n){t.post&&e!==(e=n.post.title)&&(document.title=e),t.post&&r!==(r=n.post.title+"")&&Object(s.C)(c,r),t.post&&i!==(i=n.post.html+"")&&(a.innerHTML=i)},i:s.x,o:s.x,d(t){t&&(Object(s.l)(n),Object(s.l)(o),Object(s.l)(l),Object(s.l)(a))}}}async function c({params:t,query:e}){const n=await this.fetch(`blog/${t.slug}.json`),s=await n.json();if(200===n.status)return{post:s};this.error(n.status,s.message)}function l(t,e,n){let{post:s}=e;return t.$set=t=>{"post"in t&&n("post",s=t.post)},{post:s}}e.default=class extends s.a{constructor(t){var e;super(),document.getElementById("svelte-gnxal1-style")||((e=Object(s.m)("style")).id="svelte-gnxal1-style",e.textContent=".content.svelte-gnxal1 h2{font-size:1.4em;font-weight:500}.content.svelte-gnxal1 pre{background-color:#f9f9f9;box-shadow:inset 1px 1px 5px rgba(0,0,0,0.05);padding:0.5em;border-radius:2px;overflow-x:auto}.content.svelte-gnxal1 pre code{background-color:transparent;padding:0}.content.svelte-gnxal1 ul{line-height:1.5}.content.svelte-gnxal1 li{margin:0 0 0.5em 0}",Object(s.b)(document.head,e)),Object(s.t)(this,t,l,o,s.A,["post"])}}}}]);