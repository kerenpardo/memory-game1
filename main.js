const cards=["A","B","C","A","B","C"];

for(i of cards){
    let element=document.createElement("div");
    element.innerHTML=i;
    const board=document.getElementById("board");
    board.appendChild(element);
}
