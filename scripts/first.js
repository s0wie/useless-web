function showCoords(event) {
  let x = event.clientX;
  let y = event.clientY;
  let coords = 'X coords: ' + x + ', Y coords: ' + y;
  document.getElementById('demo').innerHTML = coords;
  let newDiv = document.createElement('div');
  // const newContent = document.createTextNode('Hi there and greetings!');
  // newDiv.appendChild(newContent);
  const container = document.querySelector('.container');
  document.body.insertBefore(newDiv, container);
  // document.body.appendChild(newDiv);
  newDiv.classList.add('item-1');
  newDiv.style.top = `${y - 50}px`;
  newDiv.style.left = `${x - 50}px`;
}

function dropElements() {
  const elements = document.querySelectorAll('.item-1');
  elements.forEach((element) => {
    element.classList.add('move-ltr');
  });
  console.log(elements);
}

window.addEventListener('keydown', dropElements);
