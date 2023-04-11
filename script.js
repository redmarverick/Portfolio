const btnMobile = document.getElementById('ham-menu');

function toggleMenu() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('nav-active');
}

btnMobile.addEventListener('click', toggleMenu);

const projectsData = [
  {
    name: "Multi-Post Stories Gain+Glory",
    imageSrc: "project1.jpg",
    technologies: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    liveLink: "https://example.com/project1",
    sourceLink: "https://github.com/user/project1"
  },
  {
    name: "Multi-Post Stories Gain+Glory",
    imageSrc: "project2.jpg",
    technologies: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    liveLink: "https://example.com/project1",
    sourceLink: "https://github.com/user/project1"
  },
  {
    name: "Multi-Post Stories Gain+Glory",
    imageSrc: "project3.jpg",
    technologies: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    liveLink: "https://example.com/project1",
    sourceLink: "https://github.com/user/project1"
  },
  {
    name: "Multi-Post Stories Gain+Glory",
    imageSrc: "project4.jpg",
    technologies: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    liveLink: "https://example.com/project1",
    sourceLink: "https://github.com/user/project1"
  },
  {
    name: "Multi-Post Stories Gain+Glory",
    imageSrc: "project5.jpg",
    technologies: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    liveLink: "https://example.com/project1",
    sourceLink: "https://github.com/user/project1"
  },
  {
    name: "Multi-Post Stories Gain+Glory",
    imageSrc: "project6.jpg",
    technologies: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    liveLink: "https://example.com/project1",
    sourceLink: "https://github.com/user/project1"
  },
]

for(let j=0; j<projectsData.length;j++){
const workContent = document.getElementsByClassName('grid-work')[0];

let gridItem = document.createElement('div');
gridItem.setAttribute('class', 'grid-item');

let gridData = document.createElement('div');
gridData.setAttribute('class', 'grid-data');
gridItem.appendChild(gridData);

let gridTitle = document.createElement('div');
gridTitle.setAttribute('class', 'grid-title');
gridData.appendChild(gridTitle);

let gridTitleText = document.createElement('h2');
const newContent = document.createTextNode(projectsData[j].name);
gridTitleText.appendChild(newContent);
gridTitle.appendChild(gridTitleText);

let langList = document.createElement('ul');
langList.setAttribute('class', 'lang-list');
gridData.appendChild(langList);

for(let i=0; i<projectsData[0].technologies.length; i++){
  let langItem = document.createElement('il');
  langItem.setAttribute('class', 'lang-item');
  langList.appendChild(langItem);
  const langItemText = document.createTextNode(projectsData[j].technologies[i]);
  langItem.appendChild(langItemText);
  gridTitle.appendChild(gridTitleText);
}

let gridButtonContainer = document.createElement('div');
gridButtonContainer.setAttribute('class', 'grid-button-container');
gridData.appendChild(gridButtonContainer);

let gridButton = document.createElement('button');
gridButton.setAttribute('class', 'grid-button');
gridButton.setAttribute('type', 'button');
const buttonText = document.createTextNode('See project');
gridButton.appendChild(buttonText);
gridButtonContainer.appendChild(gridButton);

workContent.appendChild(gridItem);}
//document.getElementById("demo").innerHTML = projectsData[0].name;