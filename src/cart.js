 let cartItems = localStorage.getItem('cartItems');

let objectified = JSON.parse(cartItems)
 console.log(objectified)


let beds = [
    {
        id:1,
        image:'bed1.jpg',
        price: 200,
        name:'queen',
        description:'5 by 6'
    },
    {
        id:2,
        image:'bed1.jpg',
        price: 300,
        name:'king',
        description:'3 by 6'
    },
    {
        id:3,
        image:'bed1.jpg',
        price: 400,
        name:'king',
        description:'2 by 6'
    },
    {
        id:4,
        image:'bed1.jpg',
        price: 500,
        name:'queen',
        description:'3 by 6'
    },
    {
        id:5,
        image:'bed1.jpg',
        price: 600,
        name:'king',
        description:'4 by 6'
    }
];
// console.log(Object.keys(stringified))
//  const cartDisplay = Object.keys(stringified).map(displayItem => {
//     //  return console.log(displayItem[0].price)
//      return beds.filter(bed => bed.id == displayItem[0])
// })
let totalprice = 0;
let totalamount = 0;
for(const key in objectified){

    console.log(objectified[key].price)

    let cart = document.getElementById('selectedItemsDiv');
    
    let singleSelectedItem = document.createElement("div");
    let selectedId = document.createElement("h4");
    let selectedPrice = document.createElement("h3");
    let selectedAmount = document.createElement("h2");
    let selectedTotalPrice = document.createElement("h5");

    singleSelectedItem.classList.add('singleSelectedItem');
    selectedId.innerText = objectified[key].id;
    selectedPrice.innerText = objectified[key].price;
    selectedTotalPrice.innerText = (objectified[key].price * objectified[key].amount);
    totalprice += (objectified[key].price * objectified[key].amount)
    selectedAmount.innerText = objectified[key].amount;
    totalamount += objectified[key].amount;

    singleSelectedItem.appendChild(selectedId);
    singleSelectedItem.appendChild(selectedPrice);
    singleSelectedItem.appendChild(selectedAmount);
    singleSelectedItem.appendChild(selectedTotalPrice);
    cart.appendChild(singleSelectedItem);
 
    let totalPrice = document.getElementById('totalPrice');
    
    let totalAmount = document.getElementById('totalAmount');
    totalAmount.innerText = totalamount;

if(totalamount >= 9 && totalamount <= 26){
    totalprice -= (totalamount*.10);
    totalPrice.innerText = totalprice;
}
else if(totalamount <= 50 && totalamount >= 25){
   totalprice -= (totalamount*.25);
   totalPrice.innerText = totalprice;
}else if(totalamount >= 50){
    totalprice -= (totalamount*.50);
    totalPrice.innerText = totalprice;
}else{
    totalprice = totalprice;
    totalPrice.innerText = totalprice;
}

}

// let joan  = document.getElementById('joan');
// console.log(joan.innerText)



















// //CART
// let cart = document.getElementById('selectedItemsDiv');


// function createSelectedItem(cartDisplay) {
//     cartDisplay.forEach(selectedItem => {
        
//         let singleSelectedItem = document.createElement("div");
//         let bedSelectedImage = document.createElement('img');
//         let Selectedprice = document.createElement("h4");
//         let nameSelected = document.createElement("h5");
//         let descriptionSelected = document.createElement('p');
//         let btnSelected = document.createElement('button');
//         btnSelected.classList.add("RemoveFromCart")
        


//         // let bedSelectedImage = document.createElement('img');
//         bedSelectedImage.classList.add('bedSelectedImage');
//         singleSelectedItem.classList.add('singleSelectedItem');
//         btnSelected.setAttribute('id', selectedItem.id);
       
        

//         descriptionSelected.innerText = selectedItem.description;
//         nameSelected.innerText = selectedItem.name;
//         // let Selectedprice = document.createElement("h4");
//         Selectedprice.innerText = selectedItem.price;
//         btnSelected.innerHTML = 'remove from cart'; 
//         bedSelectedImage.src = selectedItem.image;
        

//         singleSelectedItem.appendChild(bedSelectedImage);
//         singleSelectedItem.appendChild(Selectedprice);
//         singleSelectedItem.appendChild(nameSelected);
//         singleSelectedItem.appendChild(descriptionSelected);
//         singleSelectedItem.appendChild(btnSelected);
//        // singleItem.appendChild(description);
//         cart.appendChild(singleSelectedItem);
       
        
//     });
// }

// createSelectedItem(stringified);







