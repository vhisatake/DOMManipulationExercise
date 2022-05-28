const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const redText = document.createElement('p');
redText.classList.add('red-text');
redText.setAttribute('style', 'color:red');
redText.textContent = "Hey I'm red!"
container.appendChild(redText);

const blueH3 = document.createElement('h3');
blueH3.classList.add('blueH3');
blueH3.setAttribute('style', 'color: blue');
blueH3.textContent = "I'm a blue h3!";
container.appendChild(blueH3);

const pinkBox = document.createElement('div');
pinkBox.classList.add('pink-box');
pinkBox.setAttribute('style', 'border-color: black; border-width: 5px; background: pink;');
pinkBox

const boxH1 = document.createElement('h1');
boxH1.classList.add('boxH1');
boxH1.textContent = "I'm in a div";
pinkBox.appendChild(boxH1);

const boxText = document.createElement('p');
boxText.classList.add("box-text");
boxText.textContent = "ME TOO!";
pinkBox.appendChild(boxText);

container.appendChild(pinkBox);
