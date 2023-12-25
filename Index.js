import { img } from "./image.js";


for (let key in img) {
  const image = document.createElement("img");
  image.src = img[key].img1;
  document.getElementById('span').appendChild(image) 
}

let scrollcontainer = document.querySelector(".gallery")
let backbtn = document.getElementById("backbtn")
let forbtn =document.getElementById("forwardbtn")

scrollcontainer.addEventListener("wheel",(e) =>{
  // e.preventDefault()
  
  // scrollcontainer.style.scrollBehavior ="auto"
  scrollcontainer.scrollLeft +=e.deltaY
})

backbtn.addEventListener("click",(e) =>{
  // e.preventDefault()
  scrollcontainer.style.scrollBehavior ="smooth"

  scrollcontainer.scrollLeft +=900;
})
forbtn.addEventListener("click",() =>{
  // e.preventDefault()
  console.log("hello")
  scrollcontainer.style.scrollBehavior ="smooth"
  scrollcontainer.scrollRight +=900
})