'use strict';
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