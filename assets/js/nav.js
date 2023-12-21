var menu = document.getElementById("menu");
var a_Nav1 = document.getElementById("a_Nav1");
var a_Nav2 = document.getElementById("a_Nav2");
var a_Nav3 = document.getElementById("a_Nav3");

var span1 = document.querySelector(".span_1");
var span2 = document.querySelector(".span_2");
var span3 = document.querySelector(".span_3");

var largeurFenetre = window.innerWidth;

menu.addEventListener('click', function() {
    // Vérifiez si l'élément a la classe "remove"
    if (a_Nav1.classList.contains('show')) {
      // Si oui, supprimez la classe "remove" pour afficher l'élément
      a_Nav1.classList.remove('show');
      a_Nav2.classList.remove('show');
      a_Nav3.classList.remove('show');

      a_Nav1.classList.add('remove');
        a_Nav2.classList.add('remove');
        a_Nav3.classList.add('remove');



        span1.style.transform = "rotate(0deg)";
        span2.style.display = "flex";
        span3.style.transform = "rotate(0deg)";
  
        span3.style.margin = "-1px 0";
        span1.style.margin = "-11px 0";
    } else {
      // Sinon, ajoutez la classe "remove" pour cacher l'élément

      a_Nav1.classList.remove('remove');
      a_Nav2.classList.remove('remove');
      a_Nav3.classList.remove('remove');

      a_Nav1.classList.add('show');
      a_Nav2.classList.add('show');
      a_Nav3.classList.add('show');

      span1.style.transform = "rotate(45deg)";
      span1.style.margin = "-3px 0";

      span2.style.display = "none";
      span3.style.transform = "rotate(-45deg)";
      span3.style.margin = "-2px 0";

    }
  });




/*Mmenu.addEventListener("click", () =>{

    menu.classList.toggle("remove");
    menu.classList.toggle("show");

    
    if (menu.classList.contains("remove")) {
        a_Nav1.style.display = "flex";
        a_Nav2.style.display = "flex";
        a_Nav3.style.display = "flex";
        span1.style.transform = "rotate(45deg)";
        span1.style.margin = "-3px 0";

        span2.style.display = "none";
        span3.style.transform = "rotate(-45deg)";
        span3.style.margin = "-2px 0";



    }else{


        a_Nav1.style.display = "none";
        a_Nav2.style.display = "none";
        a_Nav3.style.display = "none";


        span1.style.transform = "rotate(0deg)";
        span2.style.display = "flex";
        span3.style.transform = "rotate(0deg)";

        span3.style.margin = "-1px 0";
        span1.style.margin = "-11px 0";
    }
        
});


if (largeurFenetre>=800){
    menu.classList.remove("remove");

}*/