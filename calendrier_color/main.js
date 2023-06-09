let select = document.querySelector("select");
let list = document.querySelector("ul");
let h1 = document.querySelector("h1");

select.onchange = function () {
  // select = mois
  // list = jours
  let choice = select.value;
  let days = 31;

  if (choice === "fevrier") {
    days = 28;
  } else if (
    choice === "avril" ||
    choice === "juin" ||
    choice === "septembre" ||
    choice === "novembre"
  ) {
    days = 30;
  }

  console.log(days);
  createCalendar(days, choice);
};

function createCalendar(days, choice) {
  list.innerHTML = "";
  h1.textContent = choice;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

createCalendar();

//// color////

const choisir = document.querySelector(".colors");
const html = document.querySelector(".outputsecond");

choisir.onchange = function () {
  let choix = choisir.value;
  console.log(choix);

  // AJOUT D'UNE DIRECTIVE SWITCH
  switch (choix) {
    case "noir":
      update("black", "white");
      break;
    case "blanc":
      update("white", "black");
      break;
    case "mauve":
      update("purple", "white");
      break;
    case "jaune":
      update("yellow", "darkgray");
      break;
    case "psychedelique":
      update("lime", "purple");
      break;
  }
};

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}
