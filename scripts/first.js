// VARIABLES
const container = document.querySelector('.container');

// EVENT LISTENERS
window.addEventListener('keydown', dropElements);
container.addEventListener('click', createShapes);
window.addEventListener('mousewheel', changeBackground);

// FUNCTIONS
function createShapes(event) {
  let x = event.clientX;
  let y = event.clientY;
  let coords = `coordinates: (${x}, ${y})`;
  console.log(coords);
  document.querySelector('.coords').innerHTML = coords;

  let randomInt = Math.round(Math.random() * 10);
  let newDiv = document.createElement('img');
  newDiv.src = `${balloonUrl[randomInt]}`;
  newDiv.width = 100;
  document.body.insertBefore(newDiv, container);
  newDiv.classList.add('positioning');
  newDiv.classList.add(addClass[randomInt]);
  newDiv.style.top = `${y - 50}px`;
  newDiv.style.left = `${x - 50}px`;
}

// Ge dem random class namn t.ex item-5. Kör if-satser. If item-1 -> add 'move up';
// if item-5 add "move-up-delay-slow"
function dropElements() {
  const itemsOne = document.querySelectorAll('.item-1');
  const itemsTwo = document.querySelectorAll('.item-2');
  const itemsThree = document.querySelectorAll('.item-3');
  const itemsFour = document.querySelectorAll('.item-4');
  const itemsFive = document.querySelectorAll('.item-5');
  const itemsSix = document.querySelectorAll('.item-6');
  const itemsSeven = document.querySelectorAll('.item-7');
  const itemsEight = document.querySelectorAll('.item-8');
  const itemsNine = document.querySelectorAll('.item-9');
  const itemsTen = document.querySelectorAll('.item-10');
  itemsOne.forEach((oneItem) => {
    oneItem.classList.add('move-up');
  });

  itemsTwo.forEach((twoItem) => {
    twoItem.classList.add('move-up-delay');
  });

  itemsThree.forEach((threeItem) => {
    threeItem.classList.add('move-up-fast');
  });
  itemsFour.forEach((fourItem) => {
    fourItem.classList.add('move-up');
  });
  itemsFive.forEach((fiveItem) => {
    fiveItem.classList.add('move-up-delay-2');
  });
  itemsSix.forEach((sixItem) => {
    sixItem.classList.add('move-up-fast');
  });
  itemsSeven.forEach((sevenItem) => {
    sevenItem.classList.add('move-up');
  });
  itemsEight.forEach((eightItem) => {
    eightItem.classList.add('move-up-slow');
  });
  itemsNine.forEach((nineItem) => {
    nineItem.classList.add('move-up-fast');
  });
  itemsTen.forEach((tenItem) => {
    tenItem.classList.add('move-up-delay-3');
  });
}

function changeBackground() {
  let randomInt = Math.round(Math.random() * 10);
  document.body.style.background = backgroundColours[randomInt];
}
