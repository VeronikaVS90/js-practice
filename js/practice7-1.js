const content = document.querySelector('.js-content');
const wins = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

let player = "X";
const historyX = [];
const historyO = [];

function createMarkup() {
    let markup = '';

    for (let i = 1; i <= 9; i += 1) {
        markup += `<div class="item js-target" data-id="${i}"></div>`
    }
    content.innerHTML = markup;
}
createMarkup();

content.addEventListener('click', onClick);

function onClick(evt) {
    const { target } = evt;
    if (!target.classList.contains('js-target') || target.textContent) {
        return;
    }

    const { id } = target.dataset;
    let result = false;

    if (player === "X") {
        historyX.push(Number(id));
        result = historyX.length < 3 ? false : isWinner(historyX);
    } else {
        historyO.push(Number(id));
        result = historyO.length < 3 ? false : isWinner(historyO);
    }

     target.textContent = player;

      if (result) {
    const instance = basicLightbox.create(`<h1>Winner ${player} 😎😎😎</h1>`);
    instance.show();
    resetGame();
    return;
  } else if (historyO.length + historyX.length === 9) {
    const instance = basicLightbox.create(`<h1>Try again 😂😂😂</h1>`);
    instance.show();
    resetGame();
    return;
  }

   
    player = player === "X" ? "O" : "X";
}

// some every includes
// const wins = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [1, 4, 7],
//     [2, 5, 8],
//     [3, 6, 9],
//     [1, 5, 9],
//     [3, 5, 7],
//   ];

function isWinner(arr) {
                        //[1, 2, 3]       historyX historyO
  return wins.some((item) => item.every((num) => arr.includes(num)));
}

function resetGame() {
  createMarkup();
  player = "X";
  historyX.length = 0;
  historyO.splice(0, historyO.length);
}