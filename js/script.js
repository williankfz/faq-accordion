const faqList = document.querySelectorAll('[data-toogle="accordion"] dt');
const ativo = "ativo";

if(faqList.length){
  faqList[0].classList.add(ativo);
  faqList[0].nextElementSibling.classList.add(ativo);
}

function accordion(){
  this.classList.toggle(ativo);
  this.nextElementSibling.classList.toggle(ativo);
}

faqList.forEach((item) =>{
  item.addEventListener("click", accordion);
});

