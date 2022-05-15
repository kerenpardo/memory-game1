
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
let a1=prompt("enter name1")
let a2=prompt("enter name2")
let i=0;
let players=[{
  player: a1,
  score:0
},
{
  player: a2,
  score:0
}
]

// const cardBack =
let selectedCard = [];
// const cardBack = "♥︎";
let player1 = document.querySelector('#player1');
let player2 = document.querySelector('#player2');
player1.innerHTML= `${players[0].player} score: ${players[0].score}`
player2.innerHTML= `${players[1].player} score: ${players[1].score}`

// let score = 0;
// player.textContent = score;

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
    div.classList.add("fliped");
    div.appendChild(img);
    
   
  }
  // if(div.innerHTML == cardBack){
  //     div.innerHTML = cards[cardId]
  // }
  
  if (selectedCard.length == 2) {
    if (cards[selectedCard[0]] != cards[selectedCard[1]]) {
      if(i==0){
        console.log("plaler 2")
        i++;
      }else{
        i=0;
        console.log("player 1")
      }
      const cardOne = document.getElementById(selectedCard[0]);
      hideCard(cardOne);
      const cardTwo = document.getElementById(selectedCard[1]);
      hideCard(cardTwo);
    }  if(cards[selectedCard[0]] == cards[selectedCard[1]]&&(selectedCard[0]!=selectedCard[1] )){
      players[i].score+=1;
      if(i==0){
        player1.innerHTML= `${players[0].player} score: ${players[0].score}`
      }
      else{
        player2.innerHTML= `${players[1].player} score: ${players[1].score}`
      }

    }
    selectedCard = [];
      // score++;
      // player.textContent = score;
    }
    
  }

shufle(cards);
const board = document.getElementById("board");
for (i in cards) {
  const element = createCard(i);
  board.appendChild(element);
}


