// TODO: write your code here

const field = document.getElementById('field');
const cells = document.getElementsByClassName('cells');
const cellsCount = field.childElementCount;
const startPos = Math.floor(0 + Math.random() * (cellsCount - 1));
let currPos;

export default function insertPic(position) {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < cells.length; i++) {
    if (i === position && position !== currPos) {
      cells[i].innerHTML = '<img src="https://github.com/netology-code/ahj-homeworks/blob/master/dom/pic/goblin.png?raw=true" alt="goblin" id="goblin" class="goblin">';
      currPos = position;
      return;
    }
  }
}

insertPic(startPos);

// <img src="https://github.com/netology-code/ahj-homeworks/blob/master/dom/pic/goblin.png?raw=true" alt="goblin" id="goblin" class="goblin">
function changePos() {
  document.getElementById('goblin').remove();
  let newPos = Math.floor(0 + Math.random() * (cellsCount - 1));
  do {
    newPos = Math.floor(0 + Math.random() * (cellsCount - 1));
  }
  while (currPos === newPos);

  insertPic(newPos);
}


setInterval(changePos, 1000);
