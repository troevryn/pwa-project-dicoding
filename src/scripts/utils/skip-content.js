import UrlParser from '../routes/url-parser';

const SkipContent = {

  init() {
    const skipContent = document.querySelector('.skip-link');
    const linkPath = UrlParser.newParseActiveUrlWithoutCombiner();
    console.log(linkPath);
    skipContent.removeAttribute('href');
    const newLink = linkPath === '/' ? '#maincontent' : `#${linkPath}#maincontent`;
    skipContent.setAttribute('href', newLink);
  },
};

export default SkipContent;
