
//preloder start now//
window.addEventListener('load', () => {
   let preloder = document.querySelector(".preloder");
   if (preloder) {
      setTimeout(() => {
        preloder.style.display = "none";
      }, 200);
    }
});
//preloder start End//

//home service animation//
const cards = document .querySelectorAll(".card-box");

cards .forEach(card  =>{
    card .addEventListener('mouseover', () => {
        card .style .transform = "translateY(-15px)";
    });

    card .addEventListener('mouseout', () =>{
       card .style .transform = "translateY(0px)";
    });
});
//home service page translateY add//

//home page our blog//
let blog_items= document .querySelectorAll(".our-blog .blog-item");

blog_items .forEach(blog =>{
    blog .addEventListener ("mouseover", () =>{
        blog .style .transform = "translateY(-15px)";
    })
    blog .addEventListener ("mouseout", () =>{
        blog .style .transform = "translateY(0px)";
    });
});
//home page our blog//

//modal and wow js file//
$(document).ready(function () {

  // WOW
  if (typeof WOW !== "undefined") {
    new WOW().init();
  }

  // Bootstrap Modal
  const myModal = document.getElementById('myModal');
  const myInput = document.getElementById('myInput');

  if (myModal && myInput) {
    myModal.addEventListener('shown.bs.modal', () => {
      myInput.focus();
    });
  }
});
//End//