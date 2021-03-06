'use strict';
/*document.getElementById('test-button').addEventListener('click', function(){
  const links = document.querySelectorAll('.titles a');
  console.log('links:', links);
});*/

const titleClickHandler = function(event){
  console.log('Link was clicked!');
  console.log(event);

  /* [DONE]remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }
  /* [DONE]add class 'active' to the clicked link */
  event.preventDefault();
  const clickedElement = this;
    this.classList.add('active');
    console.log('clickedElement:', clickedElement);

  /* [DONE]remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('article.post.active');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }
  /* [DONE]get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute('href');
    console.log('articleSelector', articleSelector);

  /* [DONE]find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);
  
  /* [DONE]add class 'active' to the correct article */
    targetArticle.classList.add('active');
    console.log('targetArticle', targetArticle);
}
const links = document.querySelectorAll('.titles a');
  for(let link of links){
  link.addEventListener('click', titleClickHandler);

  /*nowa funkcja */
  const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks(){

  /* remove contents of titleList */
  const titleList = document.querySelector('optTitleListSelector', optTitleListSelector);
  /* for each article */
  function clearMessages(){
    document.getElementById('messages').innerHTML = 'optTitleListSelector';
  }
    /* get the article id */

    /* find the title element */

    /* get the title from the title element */

    /* create HTML of the link */

    /* insert link into titleList */

}

generateTitleLinks();
}
