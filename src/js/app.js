// TODO: write your code here

const field = document.getElementById('field');
const cells = document.getElementsByClassName('cells');
const cellsCount = field.childElementCount;
const startPos = Math.floor(0 + Math.random() * (cellsCount - 1));
let currPos;
function insertPic(position) {
  do {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < cells.length; i++) {
      if (i === position && position !== currPos) {
        cells[i].innerHTML = '<img src="https://github.com/netology-code/ahj-homeworks/blob/master/dom/pic/goblin.png?raw=true" alt="goblin" id="goblin" class="goblin">';
        currPos = position;
        return;
      }
      // eslint-disable-next-line no-param-reassign
      position = Math.floor(0 + Math.random() * (cellsCount - 1));
    }
  }
  while (position !== currPos);
}
insertPic(startPos);

// <img src="https://github.com/netology-code/ahj-homeworks/blob/master/dom/pic/goblin.png?raw=true" alt="goblin" id="goblin" class="goblin">
function changePos() {
  document.getElementById('goblin').remove();
  const newPos = Math.floor(0 + Math.random() * (cellsCount - 1));
  console.log(newPos);
  insertPic(newPos);
}

setInterval(changePos, 1000);
