


const cards = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/9.jpg",
  "images/10.jpg",
  "images/6.jpg",
  "images/11.png",
  "images/8.jpg",
  "images/12.jpg",
  "images/13.png",
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/9.jpg",
  "images/10.jpg",
  "images/6.jpg",
  "images/11.png",
  "images/8.jpg",
  "images/12.jpg",
  "images/13.png"
];
// const cardBack =
let selectedCard = [];
// const cardBack = "♥︎";
const player = document.querySelector("span");
let score = 0;
player.textContent = score;

// for(i of cards){
//     let element=document.createElement("div");
//     element.innerHTML=i;
//     const board=document.getElementById("board");
//     board.appendChild(element);
// }

function shufle(arr) {
  arr = arr.sort(() => Math.random() - 0.5);
}
function createCard(idx) {
  const img = document.createElement("img");
  img.src = "images/image1.webp";

  const carEl = document.createElement("div");
  // carEl.innerHTML=cardBack;

  carEl.appendChild(img);
  carEl.id = idx;
  carEl.className = "card";
  carEl.addEventListener("click", onCardClick);
  return carEl;
}
function hideCard(div) {
  setTimeout(() => {
     div.innerHTML = '';
    div.classList.remove("fliped");
    const img = document.createElement("img");
    img.src = "images/image1.webp";
    div.appendChild(img);
  }, 700);
}
function onCardClick(event) {
  const div = event.currentTarget;
  const cardId = div.id;

  selectedCard.push(+cardId);

  if (div.classList.contains("fliped") == false) {
      
    let img = div.childNodes[0];
    div.removeChild(img);
    img.src = cards[cardId];
    div.appendChild(img)
    div.classList.add("fliped");
   
  }
  // if(div.innerHTML == cardBack){
  //     div.innerHTML = cards[cardId]
  // }
  if (selectedCard.length == 2) {
    if (cards[selectedCard[0]] != cards[selectedCard[1]]) {
      const cardOne = document.getElementById(selectedCard[0]);
      hideCard(cardOne);
      const cardTwo = document.getElementById(selectedCard[1]);
      hideCard(cardTwo);
    }  if(cards[selectedCard[0]] == cards[selectedCard[1]]&&(selectedCard[0]!=selectedCard[1] )){
      score++;
      player.textContent = score;
    }
    selectedCard = [];
  }

  ////////
}

shufle(cards);
const board = document.getElementById("board");
for (i in cards) {
  const element = createCard(i);
  board.appendChild(element);
}

//  let a=document.getElementById("1");
//  a.onmouseover=this.style.backgroundColor="red";
