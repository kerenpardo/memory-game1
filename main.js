const cards=["🐷","🐻","🐒","🐤","🦋","🐬","🦄","🦩","🦥","🦑","🐷","🐻","🐒","🐤","🦋","🐬","🦄","🦩","🦥","🦑"];
// const cardBack =
 let selectedCard=[];
const cardBack="♥︎";
const player=document.querySelector("span");
let score=0;
player.textContent=score;

// for(i of cards){
//     let element=document.createElement("div");
//     element.innerHTML=i;
//     const board=document.getElementById("board");
//     board.appendChild(element);
// }

function shufle (arr){
    arr = arr.sort(() => Math.random() - 0.5)
}
function createCard(idx){
    const carEl=document.createElement("div")
    carEl.innerHTML=cardBack;
    carEl.id=idx;
    carEl.className="card";
    carEl.addEventListener('click', onCardClick)
    return carEl;
}
function hideCard(div){
    setTimeout(()=> {
        div.innerHTML = cardBack;
    }, 700);
    
}
function onCardClick(event){
    const div = event.currentTarget;
    const cardId = div.id;

    selectedCard.push(+cardId)

    if(div.innerHTML == cardBack){
        div.innerHTML = cards[cardId]
    }
    if(selectedCard.length == 2){
        if(cards[selectedCard[0]]!=cards[selectedCard[1]]){
           const cardOne = document.getElementById(selectedCard[0]); 
           hideCard(cardOne);
           const cardTwo = document.getElementById(selectedCard[1]); 
           hideCard(cardTwo);
        }
        else{
            score++;
            player.textContent=score;
        }
        selectedCard = [];
    }
    
    ////////
}

    shufle(cards);
    const board=document.getElementById("board");
    for(i in cards){
        const element=createCard(i)
        board.appendChild(element);
    }
    
        //  let a=document.getElementById("1");
        //  a.onmouseover=this.style.backgroundColor="red";
         
        
      
      
    