'use strict';
let counter = 0;

caunter = counter + 1;

console.log(counter); // 0

const links = document.querySelectorAll('.titles a');

for(let link of links){
  console.log(link);
}
const titleClickHandler = function(){
    console.log('Link was clicked!');
  }
  
  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
  const titleClickHandler = function(event){
    console.log('Link was clicked!');
  
    /* remove class 'active' from all article links  */
  
    /* add class 'active' to the clicked link */
  
    /* remove class 'active' from all articles */
  
    /* get 'href' attribute from the clicked link */
  
    /* find the correct article using the selector (value of 'href' attribute) */
  
    /* add class 'active' to the correct article */
  }
  
  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
  const activeLinks = document.querySelectorAll('.titles a.active');

for(let activeLink of activeLinks){
  activeLink.classList.remove('active');
}
const titleClickHandler = function(event){
    const clickedElement = this;
    console.log('Link was clicked!');
  
    /* [DONE] remove class 'active' from all article links  */
  
    const activeLinks = document.querySelectorAll('.titles a.active');
  
    for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
    }
  
    /* [IN PROGRESS] add class 'active' to the clicked link */
  
    console.log('clickedElement:', clickedElement);
  
    /* [DONE] remove class 'active' from all articles */
  
    /* get 'href' attribute from the clicked link */
  
    /* find the correct article using the selector (value of 'href' attribute) */
  
    /* add class 'active' to the correct article */
  }
  
  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }