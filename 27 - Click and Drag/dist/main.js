"use strict";var slider=document.querySelector(".items"),isDown=!1,startX=void 0,scrollLeft=void 0;slider.addEventListener("mousedown",function(e){isDown=!0,slider.classList.add("active"),startX=e.pageX-slider.offsetLeft,scrollLeft=slider.scrollLeft}),slider.addEventListener("mouseleave",function(){isDown=!1,slider.classList.remove("active")}),slider.addEventListener("mouseup",function(){isDown=!1,slider.classList.remove("active")}),slider.addEventListener("mousemove",function(e){if(isDown){e.preventDefault();var s=e.pageX-slider.offsetLeft,t=2*(s-startX);slider.scrollLeft=scrollLeft-t}});