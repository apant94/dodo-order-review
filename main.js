(()=>{"use strict";var e=document.querySelector(".form"),t=document.querySelector(".form__comment"),r=document.querySelector(".form__comment-number"),n=document.querySelector(".form__file"),i=document.querySelector(".form__file-text"),o=document.querySelector(".form__phone"),u=document.querySelector(".form__terms"),c=document.querySelector(".form__submit"),d=document.querySelector(".popup"),s=d.querySelector(".popup__text"),l=document.querySelectorAll(".form__rating-item"),a=document.querySelector("#rating4"),m=document.querySelector("#rating5"),f=document.querySelector("#star-path"),h=document.querySelector(".form__error-text_position_normal"),_=document.querySelector(".form__error-text_position_extra"),v=document.querySelector(".form__paragraph_visible"),y=document.querySelector(".footer__copyright");var p=function(){return!o.validity.valid},b=function(){return Array.from(l).some((function(e){return!e.validity.valid}))},g=function(){Array.from(l).forEach((function(e){e.validity.valid?(f.setAttribute("stroke","#FF6900"),h.setAttribute("hidden","")):(f.setAttribute("stroke","#FF3B30"),h.removeAttribute("hidden"))}))},q=function(){p()?(o.classList.add("form__phone_type_error"),_.removeAttribute("hidden"),v.style.visibility="hidden"):(o.classList.remove("form__phone_type_error"),_.setAttribute("hidden",""),v.style.visibility="visible")};Array.from(l).forEach((function(e){e.addEventListener("input",g)})),o.addEventListener("input",q),e.addEventListener("submit",(function(e){e.preventDefault(),b()&&g(),p()&&q(),b()||p()||(m.checked?s.textContent="Спасибо! Рады, что вам понравилось.":a.checked?(s.textContent="Спасибо! Будем стараться, чтобы ваша оценка улучшилась.",s.style.width="".concat(58,"%")):s.textContent="Спасибо! Нам жаль, что так вышло. Мы разберемся и свяжемся с вами.",d.classList.add("popup_opened"))})),t.setAttribute("style","height:"+(t.scrollHeight-38)+"px;"),t.addEventListener("input",(function(){this.style.height="54px",this.style.height=this.scrollHeight-38+"px"}),!1),t.addEventListener("input",(function(){r.textContent="".concat(t.value.length)})),n.addEventListener("change",(function(){var e="";this.files&&this.files.length>=1&&(e=this.files.length),e&&(i.textContent="Выбрано файлов: "+e)}));var A=!1;function S(){a.checked||m.checked?(o.removeAttribute("required"),o.removeAttribute("minlength")):(o.setAttribute("required",""),o.setAttribute("minlength","16"))}o.addEventListener("click",(function(){if(!A)return o.value="+7",void(A=!0)})),o.addEventListener("input",(function(){for(var e=this.value.replace(/[^\d+]/g,""),t="",r=0;r<Math.min(e.length,12);r++)t+=e[r],1!=r&&4!=r&&7!=r&&9!=r||(t+=" ");this.value=t})),u.addEventListener("change",(function(){u.checked?(c.removeAttribute("disabled"),c.classList.remove("form__submit_inactive")):(c.setAttribute("disabled",!0),c.classList.add("form__submit_inactive"))})),Array.from(l).forEach((function(e){e.addEventListener("change",S)}));var L=new Date;y.textContent="© ".concat(L.getFullYear())})();