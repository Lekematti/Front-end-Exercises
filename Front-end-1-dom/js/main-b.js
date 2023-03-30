// Put code of task B here

const main = document.querySelector('main');

const newArticle = document.createElement('article');

const newHeader = document.createElement('header');
const newHeaderH2 = document.createElement('h2');
newHeaderH2.textContent = 'Article header';
newHeader.appendChild(newHeaderH2);

const newFig = document.createElement('figure');
const newImg = document.createElement('img');

newImg.src = 'http://placekitten.com/320/160';
newImg.alt = 'title';

const newFigCapt = document.createElement('figcaption');
newFigCapt.textContent = 'Caption';

newFig.appendChild(newImg);
newFig.appendChild(newFigCapt);

const newP = document.createElement('p');
newP.textContent = 'Here is some text. Here is some text. ' + 'Here is some text. Here is some text.';

newArticle.appendChild(newHeader);
newArticle.appendChild(newFig);
newArticle.appendChild(newP);
main.appendChild(newArticle);