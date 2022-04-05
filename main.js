const cards=["A","B","C","A","B","C"];

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
    carEl.innerHTML=cards[idx];
    carEl.id=idx;
    carEl.className="cards";
    return carEl;
}


    shufle(cards);
    const board=document.getElementById("board");
    for(i in cards){
        const element=createCard(i)
        board.appendChild(element);
    }

