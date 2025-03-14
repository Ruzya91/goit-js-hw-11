import{a as y,S as m,i as p}from"./assets/vendor-DXaqCXe3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const u="49334882-a9a3b11390859b17c4f434c49";console.log("API KEY:",u);const h="https://pixabay.com/api/";async function g(o){try{return(await y.get(h,{params:{key:u,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(t){throw console.error("Request error:",t),t}}const L=document.querySelector(".gallery"),f=document.querySelector(".loader");let n;function b(o){L.innerHTML=o.map(({webformatURL:t,largeImageURL:s,tags:a,likes:e,views:r,comments:i,downloads:d})=>`
        <li class="gallery-item">
          <a href="${s}" class="gallery-link">
            <img src="${t}" alt="${a}" />
          </a>
          <div class="info">
            <p> likes  ${e}</p>
            <p> views ${r}</p>
            <p> comments ${i}</p>
            <p> downloads ${d}</p>
          </div>
        </li>`).join(""),n?n.refresh():n=new m(".gallery a")}function q(){f.style.display="block"}function l(){f.style.display="none"}function c(o){p.error({title:"Error",message:o})}document.querySelector(".form").addEventListener("submit",async o=>{o.preventDefault();const t=o.target.elements["search-text"].value.trim();if(!t){c("Enter search query");return}q();try{const s=await g(t);l(),s.length===0?c("Sorry, there are no images matching your search query. Please try again!"):b(s)}catch{l(),c("Sorry, there are no images matching your search query. Please try again!")}});
//# sourceMappingURL=index.js.map
