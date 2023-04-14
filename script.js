// sandwich button reaction
const btnMobile = document.getElementById('ham-menu');

function toggleMenu() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('nav-active');
}

btnMobile.addEventListener('click', toggleMenu);

// posts content
const closeIconSVGpath = 'M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z';
const liveIconSVGpath = 'M2 9C2 5.13401 5.13401 2 9 2C9.55229 2 10 1.55228 10 1C10 0.447715 9.55229 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 8.44772 17.5523 8 17 8C16.4477 8 16 8.44772 16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9ZM13 0C12.4477 0 12 0.447715 12 1C12 1.55228 12.4477 2 13 2H14.5858L8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711L16 3.41421V5C16 5.55228 16.4477 6 17 6C17.5523 6 18 5.55228 18 5V1C18 0.447715 17.5523 0 17 0H13Z';
const githubIconSVGpath = 'M17.9992 7.46114C17.9992 6.32124 17.6332 5.25043 16.9345 4.31779C17.2007 3.41969 17.2672 2.27979 17.2007 0.967185C17.1674 0.414508 16.7349 0 16.2025 0C15.9031 0 13.3744 0.0345423 11.9105 1.38169C10.6461 1.1399 9.31526 1.1399 8.01766 1.38169C6.58698 0.0345423 4.05833 0 3.72561 0C3.19326 0 2.76073 0.414508 2.72746 0.967185C2.62764 2.27979 2.72746 3.41969 2.99363 4.31779C2.29492 5.28497 1.92894 6.35579 1.92894 7.46114C1.92894 9.8791 3.72561 12.0553 6.45389 13.0915C6.35407 13.2988 6.28753 13.5406 6.22099 13.7824C3.32635 13.4715 1.96221 10.7427 1.89566 10.639C1.66276 10.1209 1.06387 9.91364 0.564795 10.19C0.0657196 10.4318 -0.133911 11.0535 0.132263 11.5717C0.198806 11.7444 2.02875 15.4404 6.05463 15.8549V18.9637C6.05463 19.5509 6.48716 20 7.05278 20H12.8753C13.441 20 13.8735 19.5509 13.8735 18.9637V14.8532C13.8735 14.2314 13.7404 13.6442 13.5075 13.1261C16.2025 12.0553 17.9992 9.91364 17.9992 7.46114Z';
const projectsData = [
  {
    name: 'Multi-Post Stories Gain+Glory',
    imageSrcMobile: "url('img/portfolioMobile1.png')",
    imageSrcDesktop: "url('img/portfolioDesktop1.png')",
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML', 'Codekit', 'GitHub', 'Bootstrap', 'Terminal', 'Codepen'],
    liveLink: 'https://example.com/project1',
    sourceLink: 'https://github.com/user/project1',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    imageSrcMobile: "url('img/portfolioMobile1.png')",
    imageSrcDesktop: "url('img/portfolioDesktop1.png')",
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML', 'Codekit', 'GitHub', 'Bootstrap', 'Terminal', 'Codepen'],
    liveLink: 'https://example.com/project1',
    sourceLink: 'https://github.com/user/project1',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    imageSrcMobile: "url('img/portfolioMobile1.png')",
    imageSrcDesktop: "url('img/portfolioDesktop1.png')",
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML', 'Codekit', 'GitHub', 'Bootstrap', 'Terminal', 'Codepen'],
    liveLink: 'https://example.com/project1',
    sourceLink: 'https://github.com/user/project1',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    imageSrcMobile: "url('img/portfolioMobile1.png')",
    imageSrcDesktop: "url('img/portfolioDesktop1.png')",
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML', 'Codekit', 'GitHub', 'Bootstrap', 'Terminal', 'Codepen'],
    liveLink: 'https://example.com/project1',
    sourceLink: 'https://github.com/user/project1',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    imageSrcMobile: "url('img/portfolioMobile1.png')",
    imageSrcDesktop: "url('img/portfolioDesktop1.png')",
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML', 'Codekit', 'GitHub', 'Bootstrap', 'Terminal', 'Codepen'],
    liveLink: 'https://example.com/project1',
    sourceLink: 'https://github.com/user/project1',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    imageSrcMobile: "url('img/portfolioMobile1.png')",
    imageSrcDesktop: "url('img/portfolioDesktop1.png')",
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML', 'Codekit', 'GitHub', 'Bootstrap', 'Terminal', 'Codepen'],
    liveLink: 'https://example.com/project1',
    sourceLink: 'https://github.com/user/project1',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
  },

];

// posts dynamic creation

for (let j = 0; j < projectsData.length; j++) {
  const workContent = document.getElementsByClassName('grid-work')[0];

  const gridItem = document.createElement('div');
  gridItem.setAttribute('class', 'grid-item');

  const gridData = document.createElement('div');
  gridData.setAttribute('class', 'grid-data');
  gridItem.appendChild(gridData);

  const gridTitle = document.createElement('div');
  gridTitle.setAttribute('class', 'grid-title');
  gridData.appendChild(gridTitle);

  const gridTitleText = document.createElement('h2');
  const newContent = document.createTextNode(projectsData[j].name);
  gridTitleText.appendChild(newContent);
  gridTitle.appendChild(gridTitleText);

  const langList = document.createElement('ul');
  langList.setAttribute('class', 'lang-list');
  gridData.appendChild(langList);

  for (let i = 0; i < 4; i++) {
    const langItem = document.createElement('il');
    langItem.setAttribute('class', 'lang-item');
    langList.appendChild(langItem);
    const langItemText = document.createTextNode(projectsData[j].technologies[i]);
    langItem.appendChild(langItemText);
    gridTitle.appendChild(gridTitleText);
  }

  const gridButtonContainer = document.createElement('div');
  gridButtonContainer.setAttribute('class', 'grid-button-container');
  gridButtonContainer.setAttribute('id', 'see-project');
  gridData.appendChild(gridButtonContainer);

  const gridButton = document.createElement('button');
  gridButton.setAttribute('class', 'grid-button');
  gridButton.setAttribute('type', 'button');
  const buttonText = document.createTextNode('See project');
  gridButton.appendChild(buttonText);
  gridButtonContainer.appendChild(gridButton);

  workContent.appendChild(gridItem);
}

// creation of popup
function generatePopup() {
  const workContent = document.getElementsByClassName('grid-work')[0];

  // create div popup-image
  const popupWindow = document.createElement('div');
  popupWindow.setAttribute('class', 'popup');
  popupWindow.setAttribute('id', 'popup');

  // create div popup-content
  const popupContent = document.createElement('div');
  popupContent.setAttribute('class', 'popup-content');
  popupWindow.appendChild(popupContent);

  // create div popup-image
  const popupImage = document.createElement('div');
  popupImage.setAttribute('class', 'popup-image');
  popupImage.setAttribute('id', 'popup-image');
  if (window.innerWidth < 768) {
    // Set background image for small screens
    popupImage.style.backgroundImage = projectsData[0].imageSrcMobile;
  } else {
    // Set background image for larger screens
    popupImage.style.backgroundImage = projectsData[0].imageSrcDesktop;
  }
  popupContent.appendChild(popupImage);

  // create div popup-close
  const popupClose = document.createElement('button');
  popupClose.setAttribute('id', 'popup-close');
  popupClose.setAttribute('alt', 'Close popup');
  popupImage.appendChild(popupClose);

  if (window.innerWidth > 768) {
    // create svg for the close X
    const closeSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    closeSvg.setAttribute('id', 'svgX');
    closeSvg.setAttribute('width', '24');
    closeSvg.setAttribute('height', '24');
    closeSvg.setAttribute('viewBox', '0 0 24 24');
    closeSvg.setAttribute('fill', 'none');
    closeSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    closeSvg.appendChild(pathCreateX());
    popupClose.appendChild(closeSvg);

    function pathCreateX() {
    // create path for the svg of the close X
      const pathCloseSVG = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      pathCloseSVG.setAttributeNS(null, 'fill-rule', 'evenodd');
      pathCloseSVG.setAttributeNS(null, 'clip-rule', 'evenodd');
      pathCloseSVG.setAttributeNS(null, 'd', closeIconSVGpath);
      pathCloseSVG.setAttributeNS(null, 'fill', '#67798E');
      return pathCloseSVG;
    }
  }

  // create title
  const popupTitle = document.createElement('h2');
  popupTitle.setAttribute('class', 'popup-title');
  popupTitle.setAttribute('id', 'popup-title');
  const newContPop = document.createTextNode(projectsData[0].name);
  popupTitle.appendChild(newContPop);
  popupContent.appendChild(popupTitle);

  // create technologies
  const popupTechnologies = document.createElement('ul');
  popupTechnologies.setAttribute('id', 'popup-technologies');
  popupTechnologies.setAttribute('class', 'lang-list');
  popupContent.appendChild(popupTechnologies);
  if (window.innerWidth < 768) {
    for (let i = 0; i < 4; i++) {
      const popLang = document.createElement('il');
      popLang.setAttribute('class', 'dt-pop-langitem lang-item');
      popupTechnologies.appendChild(popLang);
      const poplangItemText = document.createTextNode(projectsData[0].technologies[i]);
      popLang.appendChild(poplangItemText);
      popupTechnologies.appendChild(popLang);
    }
  } else {
    for (let i = 0; i < projectsData[0].technologies.length; i++) {
      const popLang = document.createElement('il');
      popLang.setAttribute('class', 'dt-pop-langitem lang-item');
      popupTechnologies.appendChild(popLang);
      const poplangItemText = document.createTextNode(projectsData[0].technologies[i]);
      popLang.appendChild(poplangItemText);
      popupTechnologies.appendChild(popLang);
    }
  }

  // create description
  const popDesc = document.createElement('p');
  popDesc.setAttribute('class', 'popup-description');
  popDesc.setAttribute('id', 'popup-description');
  const newDescPop = document.createTextNode(projectsData[0].description);
  popDesc.appendChild(newDescPop);
  popupContent.appendChild(popDesc);

  // create popup-links
  const popupLinks = document.createElement('div');
  popupLinks.setAttribute('class', 'popup-links');
  popupLinks.setAttribute('id', 'popup-links');
  popupContent.appendChild(popupLinks);

  // create popup buttons container
  const popupContLinks = document.createElement('div');
  popupContLinks.setAttribute('class', 'grid-button-container');
  popupContLinks.setAttribute('id', 'popup-but-cont');
  popupLinks.appendChild(popupContLinks);

  // create popup-live-link button
  const butLiveLink = document.createElement('button');
  butLiveLink.setAttribute('class', 'popup-button grid-button');
  butLiveLink.setAttribute('id', 'popup-live-link');
  butLiveLink.setAttribute('type', 'button');
  butLiveLink.setAttribute('alt', 'Open live link');
  const newLiveBut = document.createTextNode('See live');
  butLiveLink.appendChild(newLiveBut);
  popupContLinks.appendChild(butLiveLink);
  // listener when click button
  butLiveLink.addEventListener('click', () => {
    const url = projectsData[0].liveLink;
    window.open(url, '_blank');
  });

  // create svg for the live link
  const LiveLinkSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  LiveLinkSVG.setAttribute('width', '22');
  LiveLinkSVG.setAttribute('height', '22');
  LiveLinkSVG.setAttribute('viewBox', '0 0 18 18');
  LiveLinkSVG.setAttribute('fill', 'none');
  LiveLinkSVG.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  LiveLinkSVG.appendChild(pathLiveFun());
  butLiveLink.appendChild(LiveLinkSVG);

  function pathLiveFun() {
  // path of arrow link
    const pathLiveSVG = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathLiveSVG.setAttributeNS(null, 'fill-rule', 'evenodd');
    pathLiveSVG.setAttributeNS(null, 'clip-rule', 'evenodd');
    pathLiveSVG.setAttributeNS(null, 'd', liveIconSVGpath);
    pathLiveSVG.setAttributeNS(null, 'fill', 'white');
    return pathLiveSVG;
  }

  // create popup-Source-link button
  const butSourceLink = document.createElement('button');
  butSourceLink.setAttribute('class', 'popup-button grid-button');
  butSourceLink.setAttribute('id', 'popup-source-link');
  butSourceLink.setAttribute('type', 'button');
  butSourceLink.setAttribute('alt', 'Open source link');
  const newSourceBut = document.createTextNode('See source');
  butSourceLink.appendChild(newSourceBut);
  popupContLinks.appendChild(butSourceLink);
  // listener when click button
  butSourceLink.addEventListener('click', () => {
    const url = projectsData[0].sourceLink;
    window.open(url, '_blank');
  });

  // create svg for the source link
  const sourceLinkSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  sourceLinkSVG.setAttribute('width', '22');
  sourceLinkSVG.setAttribute('height', '22');
  sourceLinkSVG.setAttribute('viewBox', '0 0 18 20');
  sourceLinkSVG.setAttribute('fill', 'none');
  sourceLinkSVG.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  sourceLinkSVG.appendChild(sourceFun());
  butSourceLink.appendChild(sourceLinkSVG);

  function sourceFun() {
  // path of github link
    const pathSourceSVG = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathSourceSVG.setAttributeNS(null, 'd', githubIconSVGpath);
    pathSourceSVG.setAttributeNS(null, 'fill', 'white');
    return pathSourceSVG;
  }

  workContent.appendChild(popupWindow);
  const { body } = document;
  popupWindow.classList.toggle('popup-active');
  body.style.overflow = (body.style.overflow === 'hidden') ? 'auto' : 'hidden'; // Toggle body overflow

  document.getElementById('popup-close').addEventListener('click', () => {
    workContent.removeChild(popup);
    document.body.style.overflow = document.body.style.overflow === 'hidden' ? 'auto' : 'hidden';
  });
  window.onresize = function (event) {
    workContent.removeChild(popup);
    document.body.style.overflow = document.body.style.overflow === 'hidden' ? 'auto' : 'hidden';
    generatePopup();
  };
}

// Add event listener to grid buttons
document.addEventListener('DOMContentLoaded', () => {
  const gridButtons = document.querySelectorAll('#see-project');
  gridButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      generatePopup();
    });
  });
});

// message of error creation
function createError() {
  const emailInputElement = document.getElementById('email');
  const divErrorFather = document.createElement('div');
  divErrorFather.setAttribute('id', 'error-message');
  const errorMessage = document.createElement('div');
  errorMessage.setAttribute('id', 'email-error');
  errorMessage.setAttribute('class', 'error-balloon');
  const newText = document.createTextNode('Your email should have only lowercase letters');
  errorMessage.appendChild(newText);
  divErrorFather.appendChild(errorMessage);
  emailInputElement.after(divErrorFather);
}

// check letters in real time
document.getElementById('email').addEventListener('input', (event) => {
  const emailInput = document.getElementById('email').value;
  const emailError = document.getElementById('email-error');
  const surveyForm = document.getElementById('survey-form');
  if (emailInput !== emailInput.toLowerCase()) {
    if (surveyForm.contains(emailError) === false) {
      createError();
    }
  } else if (document.body.contains(emailError) === true) {
    emailError.remove();
  }
});

// prevent submit
document.getElementById('survey-form').addEventListener('submit', (event) => {
  const surveyForm = document.getElementById('survey-form');
  const emailInput = document.getElementById('email').value;
  if (emailInput !== emailInput.toLowerCase()) {
    event.preventDefault();
  }
});
