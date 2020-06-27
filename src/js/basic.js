export default function insertPic(position) {
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