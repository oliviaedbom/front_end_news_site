import { asyncDocumentReady } from '../services/utils';
import articleClient from '../services/articleClient';

function getShortSubTitle(subTitle) {
  const tail = subTitle.length >= 60 ? '...' : '';
  const subStringed = subTitle.substring(0, 61);

  return `${subStringed}${tail}`;
}

function fillBlock(article, articleObject) {
  const shortSubTitle = getShortSubTitle(article.subTitle);
  const image = document.createElement('img');
  image.src = article.imageUrl;


  articleObject.querySelector('.title a').append(article.title);
  articleObject.querySelector('.subtitle').append(shortSubTitle);
  if (article.imageUrl) {
    articleObject.querySelector('figure').append(image);
  }
}

function fillBlocks(articles) {
  const articleObjects = document.querySelectorAll('article:not(.weather)');

  for (let i = 0; i < articleObjects.length; i += 1) {
    fillBlock(articles[i], articleObjects[i]);
  }
}

async function init() {
  const articles = await articleClient();
  fillBlocks(articles);
}

if (window.location.pathname === '/') asyncDocumentReady(init);