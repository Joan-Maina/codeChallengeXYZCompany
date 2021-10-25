 let cartItems = localStorage.getItem('cartItems');

let objectified = JSON.parse(cartItems)
 
let totalprice = 0;
let totalpricefinal =0;
let totaldiscount = 0;
let totalamount = 0;

for(const key in objectified){

    console.log(objectified[key].amount)

    let cart = document.getElementById('selectedItemsDiv');
    
    let singleSelectedItem = document.createElement("div");
    let selectedId = document.createElement("h4");
    let selectedPrice = document.createElement("h3");
    let selectedAmount = document.createElement("h3");
    let selectedTotalPrice = document.createElement("h4");

    singleSelectedItem.classList.add('singleSelectedItem');
    selectedId.innerText = objectified[key].id;
    selectedPrice.innerText = objectified[key].price;
    selectedTotalPrice.innerText = (objectified[key].price * objectified[key].amount);
    totalprice += (objectified[key].price * objectified[key].amount);
    selectedAmount.innerText = objectified[key].amount;
    totalamount += objectified[key].amount;

    singleSelectedItem.appendChild(selectedId);
    singleSelectedItem.appendChild(selectedPrice);
    singleSelectedItem.appendChild(selectedAmount);
    singleSelectedItem.appendChild(selectedTotalPrice);
    cart.appendChild(singleSelectedItem);
 
    let totalPrice = document.getElementById('totalPrice');
    let totalDiscount = document.getElementById('totalDiscount');
    let totalAmount = document.getElementById('totalAmount');
    let grandTotal = document.getElementById('grandTotal')
    totalAmount.innerText = totalamount;
    

if(totalamount >= 9 && totalamount <= 26){
    grandTotal.innerText = totalprice;
    totaldiscount = (totalprice*.10);
   totalpricefinal = (totalprice -totaldiscount) ;
    totalDiscount.innerText = totaldiscount;
    totalPrice.innerText = totalpricefinal;
}
else if(totalamount >= 25 && totalamount <= 50){
    grandTotal.innerText = totalprice;
    totaldiscount = totalprice * .25;
   totalpricefinal = (totalprice - totaldiscount);
   totalDiscount.innerText = totaldiscount;
   totalPrice.innerText = totalpricefinal;
}else if(totalamount >= 50){
    grandTotal.innerText = totalprice;
    totaldiscount = (totalprice*.50)
    totalpricefinal = ( totalprice  - totaldiscount);
    totalDiscount.innerText = totaldiscount;
    totalPrice.innerText = totalpricefinal;
}else{
    grandTotal.innerText = totalprice;
    totalDiscount.innerText = 0;
    totalPrice.innerText = totalprice;
}

}
