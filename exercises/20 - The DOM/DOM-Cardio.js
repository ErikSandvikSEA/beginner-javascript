// Make a div

const div = document.createElement('div');

// add a class of wrapper to it

div.classList.add('wrapper');

// put it into the body
document.body.appendChild(div);

// make an unordered list
const ul = `<ul>
<li>one</li>
<li>two</li>
<li>three</li>
</ul>`;
// add three list items with the words "one, two three" in them
div.innerHTML = ul;

// put that list into the above wrapper

// create an image
const img = document.createElement('img');

// set the source to an image
img.src = 'https://picsum.photos/500';
// set the width to 250
img.width = 250;
img.height = 250;
// add a class of cute
img.classList.add('cute');
// add an alt of Cute Puppy
img.alt = 'Cute Puppy!';
// Append that image to the wrapper
div.appendChild(img);
// document.body.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it

const myHTML = `
<div class ='myDiv'>
    <p>Paragraph One</p>
    <p>Paragraph Two</p>
</div>
`;
const ulElement = div.querySelector('ul');

ulElement.insertAdjacentHTML('beforebegin', myHTML);
// put this div before the unordered list from above

// add a class to the second paragraph called warning
const myDiv = div.querySelector('.myDiv');
myDiv.children[1].classList.add('warning');
console.log(myDiv);
// remove the first paragraph
myDiv.firstElementChild.remove();
// create a function called generatePlayerCard that takes in three arguments: name, age, and height

function generatePlayerCard(name, age, height) {
  const html = `
  <div class="playerCard">
    <h2>${name} — ${age}</h2>
    <p>They are ${height} and ${age} years old. In Dog years this person would be ${age *
    7}. That would be a tall dog!</p>
    <button class='removeButton' type='button'>Remove Card</button>
     </div>`;
  return html;
}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards

const cards = document.createElement('div');
cards.classList.add('cards');

// Have that function make 4 cards

let cardsHTML = generatePlayerCard('wes', 12, '150cm');

function cardMaker(name, age, height) {
  cardsHTML += generatePlayerCard(name, age, height);
  return cardsHTML;
}

cardMaker('kait', 12, 150);
cardMaker('scott', 12, 150);
cardMaker('snickers', 12, 150);

console.log(cardsHTML);

// cardsHTML += generatePlayerCard('wes', 12, 150);
// cardsHTML += generatePlayerCard('scott', 12, 150);
// cardsHTML += generatePlayerCard('kait', 12, 150);
// cardsHTML += generatePlayerCard('snickers', 12, 150);

// console.log(cardsHTML);

// append those cards to the div

// div.appendChild(cardsHTML);

const myFragment = document.createRange().createContextualFragment(cardsHTML);
// const cardsWrapper = document.createElement('div');
// cardsWrapper.classList.add('cards');
cards.innerHTML = cardsHTML;
console.log(div);
div.insertAdjacentElement('beforebegin', cards);

// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

const buttons = document.querySelectorAll('.removeButton');

// console.log(buttons);

// select all the buttons!
// make out delete function
// loop over them and attach a listener

function deleteCard(event) {
  const buttonThatGotClicked = event.currentTarget;
  //   buttonThatGotClicked.parentElement.remove();
  //   console.log(event.currentTarget);

  buttonThatGotClicked.closest('.playerCard').remove();
}

buttons.forEach(button => button.addEventListener('click', deleteCard));
