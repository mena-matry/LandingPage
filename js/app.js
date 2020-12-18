// fill in the navigation with all section in the page
function fillInNav(){
  
const Fragment = document.createDocumentFragment();
let navBarMenu = document.getElementById('navbar__list');
const domElements = document.querySelectorAll('section');
let activeSelection = document.querySelector('#section1');
let sectionText = activeSelection.getAttribute('data-nav');

for(let s=0;s<domElements.length;s++){

    let newLi = document.createElement('li');
    sectionText = domElements[s].getAttribute('data-nav');
    newLi.textContent = sectionText ;
    newLi.id=s+1;
    newLi.classList.add('menu__link');

//go to the section when nav Bar clicked  //////
    newLi.addEventListener('click', function()
    {
    domElements[s].scrollIntoView({behavior: 'smooth'});
    });
 ////////////////////////////////////////  

    Fragment.appendChild(newLi);
      
}//end for

navBarMenu.appendChild(Fragment);
//fire function to start filling
//navBarMenu.addEventListener('mouseover',ActivateSelection);

document.addEventListener('scroll',ActivateToScroll);
showHideNav();


}
//Activate the section when mouse move over the navigation menu
function ActivateSelection (evt) {
    const domElements = document.querySelectorAll('section');

    domElements.forEach(section => {
        
        if(section.id === "section" + evt.target.id){
        section.classList.add('your-active-class');
        }else{
        section.classList.remove('your-active-class');
        }
        
    });
}

// show the navigation menu when scroll up or hide when scroll down
function showHideNav(){

var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos <prevScrollpos ) {
    //show navigation scrollUp
    document.querySelector(".page__header").style.top = "0";
  } else {
    document.querySelector(".page__header").style.top ="-" + document.querySelector(".page__header").getBoundingClientRect().height+"px";
  }
  prevScrollpos = currentScrollPos;
}

}
//avtivate the section when scrolling to it
function ActivateToScroll(){

  console.log("scrolling ....");

  const domElements = document.querySelectorAll('section');
  let navBarMenu = document.getElementsByClassName('menu__link');
  
  let index = 0;
 
domElements.forEach(section => {
  section.classList.remove('your-active-class');
});

  for(let index=0;index < domElements.length;index++) {
    let rec = domElements[index].getBoundingClientRect();
      if(rec.top>=0 && rec.bottom>window.screenY){
      domElements[index].classList.add('your-active-class');
      console.log('section ' + domElements[index].id + ': '+ rec.top  + ' rec.bottom ' + rec.bottom +' window y '+window.scrollY);
        navBarMenu[index].classList.add('select_Menu');
        console.log(navBarMenu[index]);
      break;
      }else{
      domElements[index].classList.remove('your-active-class');
      }
      
  }
}