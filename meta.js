// section 0 start

const dropdowns0= document.querySelectorAll(`.dropdown10`);

dropdowns0.forEach(dropdown2 => {

const select = dropdown2.querySelector(`.select0`);
const caret = dropdown2.querySelector(`.caret0`);
const menu = dropdown2.querySelector(`.menu0`);
const options = dropdown2.querySelectorAll(`.menu0 li`);
const selected= dropdown2.querySelector(`.selected0`);


select.addEventListener(`click`, () =>{

select.classList.toggle(`select0-clicked`);
caret.classList.toggle(`caret0-rotate`);
menu.classList.toggle(`menu0-open`);
});

options.forEach(option =>  {

    option.addEventListener(`click`, () =>{

        selected.innerHTML = option.innerHTML;
        
        select.classList.remove(`select0-clicked`);

        caret.classlist.remove(`caret0-rotate`);
        
        menu.classlist.remove(`menu0-open`);

        options.forEach(option => {
        
            option.classList.remove(`active0`);
        });
        option.classlist.add(`active0`);
    });
 });
});

// section 0 end
// section 2 start
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// section 2 end

// section data

let cont = document.querySelector(".Container");
let forfetch = document.querySelector(".fetchcont");

fetch(`./data12.json`)
  .then((data12) => data12.json())
  .then((json) => {
    console.log(json);
    for (let i = 0; i < json.length; i++) {
      let div = document.createElement("div");
      forfetch.appendChild(div);

      let img = document.createElement("img");
      div.appendChild(img);
      img.src = json[i].img;
      img.classList.add("dataimgs");

      let p = document.createElement("p");
      p.innerHTML = json[i].txt1;
      div.appendChild(p);
      p.classList.add("p");

      let p2 = document.createElement("p2");
      p2.innerHTML = json[i].txt2;
      div.appendChild(p2);
      p2.classList.add("p2");
    }
  });

  // section data end

// section 3 start

const dropdowns= document.querySelectorAll(`.dropdown2`);

dropdowns.forEach(dropdown2 => {

const select = dropdown2.querySelector(`.select`);
const caret = dropdown2.querySelector(`.caret`);
const menu = dropdown2.querySelector(`.menu`);
const options = dropdown2.querySelectorAll(`.menu li`);
const selected= dropdown2.querySelector(`.selected`);


select.addEventListener(`click`, () =>{

select.classList.toggle(`select-clicked`);
caret.classList.toggle(`caret-rotate`);
menu.classList.toggle(`menu-open`);
});

options.forEach(option =>  {

    option.addEventListener(`click`, () =>{

        selected.innerHTML = option.innerHTML;
        
        select.classList.remove(`select-clicked`);

        caret.classlist.remove(`caret-rotate`);
        
        menu.classlist.remove(`menu-open`);

        options.forEach(option => {
        
            option.classList.remove(`active`);
        });
        option.classlist.add(`active`);
    });
 });
});

// section 3 end
// section 4
function toggle() {
  var x = document.getElementById(`divsec4`);


  if (x.style.display === `none`) {
      x.style.display = `block`;

  }
  else{
      x.style.display= `none`;
  }
}

// section 4 end
// sec 5 start
const container = document.querySelector('.box');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left');
})
left.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left');
})

right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right');
})
right.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right');
})

// sec 5 end

