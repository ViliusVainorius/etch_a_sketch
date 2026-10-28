const btn = document.querySelector("#changeCanvas");
const container = document.querySelector(".container");

btn.addEventListener("click", () => {
  let sqrAmount = Number(
    prompt("Please enter the number of squares per side for the new grid:"),
  );

  if (Number.isInteger(sqrAmount) && sqrAmount > 0 && sqrAmount < 101) {
    //remove old grid
    removeOldGrid();
    //generate new grid
    generateNewGrid(sqrAmount);
  }
});

generateNewGrid();

function removeOldGrid() {
  container.replaceChildren();
}

//default 16x16 grid
function generateNewGrid(sqrAmount = 16) {
  for (let i = 0; i < sqrAmount * sqrAmount; i++) {
    const div = document.createElement("div");
    configureDiv(div, sqrAmount);
    container.appendChild(div);
  }
}

function configureDiv(div, sqrAmount) {
  const percentagePerSquare = 100 / sqrAmount;
  div.style.flexBasis = `${percentagePerSquare}%`;

  div.dataset.darkness = 0;

  div.addEventListener("mouseenter", () => {
    let currentDarkness = Number(div.dataset.darkness);
    if (currentDarkness < 10) {
      currentDarkness += 1;
      div.dataset.darkness = currentDarkness;
      let opacityValue = currentDarkness * 0.1;

      div.style.backgroundColor = getRandomColor(opacityValue);
    }
  });
}

function getRandomColor(opacityValue) {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  const color = `rgba(${r}, ${g}, ${b}, ${opacityValue})`;
  return color;
}
