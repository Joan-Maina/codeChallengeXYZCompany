const items = document.getElementById('items');
const show = document.getElementById('show');
let counter = 0;

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

function createItem(beds) {
    beds.map(bed => {
        
        let singleItem = document.createElement("div");
        let bedImage = document.createElement('img');
        let price = document.createElement("h4");
        let name = document.createElement("h5");
        let description = document.createElement('p');
        let btn = document.createElement('button');
        btn.classList.add("addToCart")
        


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



let allBtn = document.querySelectorAll('.addToCart');
// console.log(allBtn);
//addtocart button onclick
allBtn.forEach(btn=>{
    btn.addEventListener("click", ()=>{
        
        
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

            
        addtoCartDiv.appendChild(minus);
        addtoCartDiv.appendChild(quantity);
        addtoCartDiv.appendChild(add);
         btn.parentNode.appendChild(addtoCartDiv);
    
        let quantityText = document.querySelector('.quantity');
       
        let ADDBTN = document.querySelectorAll('.addQuantity');

        ADDBTN.forEach(adding=>{
         
         adding.addEventListener('click', () => {
       counter++;
        quantityText.innerText = counter;
        // console.log(counter)
        show.innerText = counter; 
        
    })
   
    })
    let MINUSBTN = document.querySelectorAll('.reduceQuantity');
    MINUSBTN.forEach(reducing =>{
        reducing.addEventListener('click', () => {
            if(counter == 0){
                counter = 0
            }
            else{
                counter--;
                quantityText.innerText = counter;
                show.innerText = counter; 
            }
         })
})

        addtoCartDiv.addEventListener("mouseout", (e)=>{
            if (!addtoCartDiv.contains(e.relatedTarget)) {
                addtoCartDiv.parentNode.removeChild(addtoCartDiv);
               
                // counter = 0;
            }
        })
    })

  
})







