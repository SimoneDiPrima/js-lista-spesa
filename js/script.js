const foodList = [`uova`,`pane`,`latte`,`biscotti`,`pasta`,`affettati`,`formaggio`,`verdura`,`frutta`];
const shoppingList = document.getElementById(`shoppinglist`);

let foodItem = ``;

// for(let i = 1;i<=foodList.length;i++){
//     foodItem += `<li>${foodList[i]}</li>`
// }
// console.log(foodItem);
// shoppingList.innerHTML = `<li>${[foodItem]}</li>`
let i = 0;
while(i<foodList.length){
    foodItem += `<li>${foodList[i]}</li>`;
    i++;
}
console.log(foodItem);
shoppingList.innerHTML = foodItem;