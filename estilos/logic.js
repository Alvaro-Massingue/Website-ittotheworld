window.addEventListener("scroll", function(){

    var header =document.querySelector("header");

    //header.classList.toggle("alvaro", window.scrollY >0);
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    
    // Adiciona a classe 'alvaro' se rolar para baixo
    if (scrollPosition > 0) {
        header.classList.add("alvaro");
    } else {
        header.classList.remove("alvaro");
    }

    // Adiciona a classe 'hidden' se rolar abaixo da metade da altura da janela
    if (scrollPosition > windowHeight / 2) {
        header.classList.add("hidden");
    } else {
        header.classList.remove("hidden");
    }


})

function show(){

 var icon1=document.getElementById("icon1");
 var icon2=document.getElementById("icon2");

 if(icon2.style.display=="none"){
    icon2.style.display="inline-block"
    icon1.style.display="none"
 }else{
    icon2.style.display="none"
    icon1.style.display="inline-block"
 }

  if (menu.style.display=="none"){
    menu.style.display="block"
    cont.style.display="none"
   
  }else{
    menu.style.display="none"
    cont.style.display="flex"
  }


}

function controlList(){
    if(list){
        menu.style.display="none"
        icon2.style.display="none"
        icon1.style.display="inline-block"
    }
}



