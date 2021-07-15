const hero = document.querySelector(".modal-overlay");
const close=document.querySelector(".close-btn");
const model=document.querySelector(".model-btn");

model.addEventListener("click",function(){
	hero.classList.add("open-modal");
});


close.addEventListener("click",function(){
	hero.classList.remove("open-modal");
})