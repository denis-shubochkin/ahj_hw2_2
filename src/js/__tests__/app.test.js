import insertPic from '../app'


test('picture added', () => {
    const field = document.getElementById('field');
    const cells = document.getElementsByClassName('cells');
    const cellsCount = field.childElementCount;
    const startPos = Math.floor(0 + Math.random() * (cellsCount - 1));
    let currPos;
    insertPic(startPos);
    expect(cells[currPos].firstChild.id).toBe('goblin');
  });
  