function showCoords(event) {
  var x = event.clientX;
  var y = event.clientY;
  var coords = 'X coords: ' + x + ', Y coords: ' + y;
  document.getElementById('demo').innerHTML = coords;
  let newDiv = document.createElement('div');
  const newContent = document.createTextNode('Hi there and greetings!');
  newDiv.appendChild(newContent);
  const container = document.querySelector('.container');
  document.body.insertBefore(newDiv, container);
  newDiv.classList.add('item-1');
  newDiv.style.top = `${y - 50}px`;
  newDiv.style.left = `${x - 50}px`;
}
