//ensure localstorage is cleared 
//once the page is refreshed
localStorage.removeItem("cartItems")

const items = document.getElementById('items');
//count of each product
let counter = 0;
//items in cart
let selectedItems = {};
//array of products
let beds = [
    {
        id:1,
        image:'bedd.jpg',
        price: 20000,
        name:'queen',
        description:'5 by 6'
    },
    {
        id:2,
        image:'bed2.jpg',
        price: 30000,
        name:'king',
        description:'3 by 6'
    },
    {
        id:3,
        image:'bed3.jpg',
        price: 40000,
        name:'king',
        description:'2 by 6'
    },
    {
        id:4,
        image:'bed4.jpg',
        price: 50000,
        name:'queen',
        description:'3 by 6'
    },
    {
        id:5,
        image:'bed5.jpg',
        price: 60000,
        name:'king',
        description:'4 by 6'
    }
];

//display beds in tiles
function createItem(beds) {
    beds.map(bed => {
        
        let singleItem = document.createElement("div");
        let bedImage = document.createElement('img');
        let price = document.createElement("h4");
        let name = document.createElement("h5");
        let description = document.createElement('p');
        let btn = document.createElement('button');


        btn.classList.add("addToCart");
        bedImage.classList.add('bedImage');
        singleItem.classList.add('singleItem');
        btn.setAttribute('id', bed.id);
       
        

        description.innerText = bed.description;
        name.innerText = bed.name;
        price.innerText = bed.price;
        btn.innerHTML = 'add to cart'; 
        bedImage.src = bed.image;
        

        singleItem.appendChild(bedImage);
        singleItem.appendChild(price);
        singleItem.appendChild(name);
        singleItem.appendChild(description);
        singleItem.appendChild(btn);
       // singleItem.appendChild(description);
        items.appendChild(singleItem);
       
        
    });
}

createItem(beds);

//addtocart button and onclick
let allBtn = document.querySelectorAll('.addToCart');
// console.log(allBtn);

allBtn.forEach(btn=>{

    btn.addEventListener("click", ()=>{
        let key = btn.id;
     
        //create quantity div
        let addtoCartDiv = document.createElement("div")
        let add = document.createElement('button');
        let minus = document.createElement('button');
        let quantity = document.createElement('span'); 
    
        //input text on quantity div
        add.innerHTML = '+';
        minus.innerHTML = '-';
        quantity.innerText = counter;

        //give classnames to quantity div
        add.classList.add('addQuantity');
        minus.classList.add('reduceQuantity');
        quantity.classList.add('quantity');
        addtoCartDiv.classList.add('defineQuantity');

            //append to quantity
        addtoCartDiv.appendChild(minus);
        addtoCartDiv.appendChild(quantity);
        addtoCartDiv.appendChild(add);
        btn.parentNode.appendChild(addtoCartDiv);
    
        let quantityText = document.querySelector('.quantity');
       
        let ADDBTN = document.querySelectorAll('.addQuantity');
        
        let cartItems = JSON.parse(localStorage.getItem("cartItems"));
        if((cartItems != null || cartItems != undefined) && cartItems.hasOwnProperty(key)){
           // quantityText.innerText = counter;
           counter = cartItems[key].amount;
        }else{
            counter = 0    
        }
        //addQuantity buttons
        ADDBTN.forEach(adding=>{
         
        adding.addEventListener('click', () => {
        counter++;
        quantityText.innerText = counter;

               //function to increment counter in local storage
        plusBed(key);
        console.log(localStorage.getItem("cartItems"))
        })
    })



    //minus button
    let MINUSBTN = document.querySelectorAll('.reduceQuantity');
    MINUSBTN.forEach(reducing =>{
        reducing.addEventListener('click', () => {
            if(counter == 0){
                counter = 0;
            }
            else{
                 counter--;
                quantityText.innerText = counter;
                minusBed(key);
                
            }
         })
})

//mouseout cause disappearance
        addtoCartDiv.addEventListener("mouseout", (e)=>{
            if (!addtoCartDiv.contains(e.relatedTarget)) {
                addtoCartDiv.parentNode.removeChild(addtoCartDiv);
                counter= 0
            }
        })
    })

    
})

//addQuantity function for localstorage
function plusBed(key) {
    let cartItems = JSON.parse(localStorage.getItem("cartItems"));

    if(cartItems == null || cartItems == undefined){
        cartItems = {
            [key]:{
                id: key,
                name: beds[key-1].name,
                price: beds[key-1].price,
                amount: counter
        }}
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }else{

        
        if (cartItems.hasOwnProperty(key)) {
           
            cartItems[key].amount = counter;
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
        } 
        else 
        {
            cartItems[key] = {
                id: key,
                name: beds[key-1].name,
                price: beds[key-1].price,
                amount: counter
            }
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
        }
    }
}
//reduce quantity in local storage
function minusBed(key) {
    let cartItems = JSON.parse(localStorage.getItem("cartItems"));

        cartItems[key].amount = counter;
       localStorage.setItem("cartItems", JSON.stringify(cartItems));
        console.log(localStorage.getItem("cartItems"))

}