// TODO: write your code here

let field = document.getElementById('field');
let cells = document.getElementsByClassName('cells');
let cellsCount = field.childElementCount;
let startPos = Math.floor(0  + Math.random() * (cellsCount-1));
let currPos;
function insertPic(position) {
    do{
        for (let i = 0;i<cells.length;i++)
        {
         if(i===position && position!=currPos)
         {
             cells[i].innerHTML = '<img src="https://github.com/netology-code/ahj-homeworks/blob/master/dom/pic/goblin.png?raw=true" alt="goblin" id="goblin" class="goblin">';
             currPos = position;
             return;
            }
            else {position = Math.floor(0  + Math.random() * (cellsCount-1));}
        }
    }
    while (position!=currPos)
    
}
insertPic(startPos);

//<img src="https://github.com/netology-code/ahj-homeworks/blob/master/dom/pic/goblin.png?raw=true" alt="goblin" id="goblin" class="goblin">
function changePos() {
    document.getElementById('goblin').remove();
    let newPos = Math.floor(0  + Math.random() * (cellsCount-1));
    console.log(newPos);
    insertPic(newPos);
    
}

setInterval(changePos, 1000);

