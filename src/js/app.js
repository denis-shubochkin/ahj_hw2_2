let count = 0;

const json = [
  {
    id: 26,
    title: 'Побег из Шоушенка',
    imdb: 9.30,
    year: 1994,
  },
  {
    id: 25,
    title: 'Крёстный отец',
    imdb: 9.20,
    year: 1972,
  },
  {
    id: 27,
    title: 'Крёстный отец 2',
    imdb: 9.00,
    year: 1974,
  },
  {
    id: 1047,
    title: 'Тёмный рыцарь',
    imdb: 9.00,
    year: 2008,
  },
  {
    id: 223,
    title: 'Криминальное чтиво',
    imdb: 8.90,
    year: 1994,
  },
];

function clearList() {
  if (document.querySelector('.arrow')) {
    document.querySelector('.arrow').remove();
  }
  const list = document.getElementsByClassName('list');
  if (list.length > 0) {
    Array.from(list).forEach((element) => {
      element.remove();
    });
  }
}

function initList() {
  clearList();
  if (count === 0) {
    json.sort((a, b) => (a.id > b.id ? 1 : -1));
    document.getElementById('id').querySelector('.header').innerHTML = 'id <span class="arrow">&#8595</span>';
    count += 1;
  } else if (count === 1) {
    json.sort((a, b) => (a.title > b.title ? 1 : -1));
    document.getElementById('title').querySelector('.header').innerHTML = 'title <span class="arrow">&#8595</span>';
    count += 1;
  } else if (count === 2) {
    json.sort((a, b) => (a.year > b.year ? 1 : -1));
    document.getElementById('year').querySelector('.header').innerHTML = 'year <span class="arrow">&#8595</span>';
    count += 1;
  } else if (count === 3) {
    json.sort((a, b) => (a.imdb > b.imdb ? 1 : -1));
    document.getElementById('imdb').querySelector('.header').innerHTML = 'imdb <span class="arrow">&#8595</span>';
    count = 0;
  }
  json.forEach((element) => {
    document.getElementById('id').insertAdjacentHTML('beforeend', `<li class="elem list">${element.id}</li>`);
    document.getElementById('title').insertAdjacentHTML('beforeend', `<li class="elem list">${element.title}</li>`);
    document.getElementById('year').insertAdjacentHTML('beforeend', `<li class="elem list">${element.year}</li>`);
    document.getElementById('imdb').insertAdjacentHTML('beforeend', `<li class="elem list">${element.imdb.toFixed(2)}</li>`);
  });
}

setInterval(initList, 3000);
