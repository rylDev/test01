let boutton_nav= document.querySelector("nav i.fa-sliders")
let boutton_x= document.querySelector("nav i.fa-xmark")
let box_liens=document.querySelector(" nav ul.box_liens")
let boutton_action=[...document.querySelectorAll(".action button ")]



boutton_nav.addEventListener("click", ()=>{
 
    box_liens.classList.toggle("active")
  
})

boutton_x.addEventListener("click", ()=>{
    box_liens.classList.remove("active")
})



   for (let index = 0; index < boutton_action.length; index++) {
    
    boutton_action[index].addEventListener("click",()=>{
           let affiche=boutton_action[index].parentElement.nextElementSibling
           affiche.classList.toggle("active_verset")
           boutton_action[index].innerHTML="fermer ou lire"
          
    })
    
   
      
   
   }
 
// let enfant= boutton_action.parentElement.nextElementSibling

// console.log(boutton_action.parentElement.nextElementSibling);