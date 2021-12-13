// VARIABLES
const container = document.querySelector('.container');
const button = document.querySelector('button');

// EVENT LISTENERS
window.addEventListener('keydown', spacePressed);
container.addEventListener('click', createBalloons);
window.addEventListener('mousewheel', changeBackground);

// FUNCTIONS
function createBalloons(event) {
  let x = event.clientX;
  let y = event.clientY;
  let coords = `coordinates: (${x}, ${y})`;
  console.log(coords);

  let randomInt = Math.round(Math.random() * 9);
  let newDiv = document.createElement('img');
  newDiv.src = `${balloonUrl[randomInt]}`;
  newDiv.width = 100;
  document.body.insertBefore(newDiv, container);
  newDiv.classList.add('positioning');
  newDiv.classList.add(addClass[randomInt]);
  newDiv.style.top = `${y - 50}px`;
  newDiv.style.left = `${x - 50}px`;
}

function spacePressed(event) {
  if (event.key == ' ') {
    dropElements();
  }
}

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
    removeBalloons(oneItem);
  });

  itemsTwo.forEach((twoItem) => {
    twoItem.classList.add('move-up-delay');
    removeBalloons(twoItem);
  });

  itemsThree.forEach((threeItem) => {
    threeItem.classList.add('move-up-fast');
    removeBalloons(threeItem);
  });
  itemsFour.forEach((fourItem) => {
    fourItem.classList.add('move-up');
    removeBalloons(fourItem);
  });
  itemsFive.forEach((fiveItem) => {
    fiveItem.classList.add('move-up-delay-2');
    removeBalloons(fiveItem);
  });
  itemsSix.forEach((sixItem) => {
    sixItem.classList.add('move-up-fast');
    removeBalloons(sixItem);
  });
  itemsSeven.forEach((sevenItem) => {
    sevenItem.classList.add('move-up');
    removeBalloons(sevenItem);
  });
  itemsEight.forEach((eightItem) => {
    eightItem.classList.add('move-up-slow');
    removeBalloons(eightItem);
  });
  itemsNine.forEach((nineItem) => {
    nineItem.classList.add('move-up-fast');
    removeBalloons(nineItem);
  });
  itemsTen.forEach((tenItem) => {
    tenItem.classList.add('move-up-delay-3');
    removeBalloons(tenItem);
  });
}

function removeBalloons(balloon) {
  setTimeout(() => {
    balloon.remove();
  }, 10000);
}

function changeBackground() {
  let randomInt = Math.round(Math.random() * 10);
  document.body.style.background = backgroundColours[randomInt];
}

// Swipe up for mobile
let touchstartY = 0;
let touchendY = 0;
const slider = document.querySelector('.container');
function handleGesture() {
  if (touchendY < touchstartY) dropElements();
  if (touchendY > touchstartY) dropElements();
}
slider.addEventListener('touchstart', (e) => {
  touchstartY = e.changedTouches[0].screenY;
});
slider.addEventListener('touchend', (e) => {
  touchendY = e.changedTouches[0].screenY;
  handleGesture();
});
