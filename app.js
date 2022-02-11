var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

const body = document.getElementById('body')
const cartBtn = document.getElementById('cart-btn')
const orderBtn = document.querySelectorAll('.order-now')
const displayProductItems = []
const cartItems = document.querySelector('.shop-list')
const totalItems = document.querySelector('.totalItems')

const product = [{
    id: 1,
    title: "Mae in the moon",
    price: 1200,
    img:"./materials/img1.jpg"
},{
    id: 2,
    title: "Book of Night Holy Black",
    price: 1300,
    img: "./materials/img2.jpg"
},{
    id: 3,
    title: "I hope you dance",
    price: 1400,
    img: "./materials/img3.jpg"
},{
    id: 4,
    title: "The Night Dad Went To Jail",
    price: 1500,
    img: "./materials/img4.jpg"
},{
    id: 5,
    title: "The Good Dinosaur",
    price: 1600,
    img: "./materials/img5.jpg"
},{
    id: 6,
    title: "hey Warrior",
    price: 1700,
    img:"./materials/img6.jpg"
},
]



cartBtn.addEventListener("click" , () => {
    if(displayItems.length === 0){
        alert("Empty cart")
        cartItems.classList.toggle('active')
    }
    else{
        cartItems.classList.toggle('active')
    }
})



window.addEventListener('DOMContentLoaded' , function () {
    let displayProduct = product.map((item) => {
        return `
        <div class="box1 styles">
        <img src="${item.img}" alt="">
        <p class="hr">${item.title}</p>
        <p>$${item.price}</p> 
        <button onclick="addToCart('plus',${item.id})" >Order now</button>
    </div>
    `
    })

    
    displayProduct = displayProduct.join('')
    body.innerHTML = displayProduct
    
})

let displayItems = []

function addToCart (action , id) {
   if(displayItems.some((item) => item.id === id)){
      counter(action , id)
   }
   else{
     const items =  product.find((product) => product.id === id)
     displayItems.push({
         ...items,
         numberOfunits: 1
     })

     alert(items.title + " was added to the cart")
   }
   updateCart()
}

function updateCart () {
    renderNumberOfItems()
}

function renderNumberOfItems () {
    let numberOfItems = 0

    displayItems.forEach((item) => {
        numberOfItems += item.numberOfunits;
    })

    let displayItemsInCart = displayItems.map((item) => {
        return `<div class="card">
        <div class="img-item">
            <img src="${item.img}"  alt="">
        </div>
        <div class="descript-img">
            <p>${item.title}</p>
            <p>$${item.price}</p>
            <button>Buy now</button>
        </div>
        <div class = "notif">
            <p>${item.numberOfunits}</p>
        </div>
    </div> 
    <div class= "totalItems"> 
        <p> Total number of items in cart: ${numberOfItems}</p>
    </div> 
    `
    })
    
    displayItemsInCart = displayItemsInCart.join('')
    cartItems.innerHTML = displayItemsInCart
}

function renderCartItems () {

    let displayItemsInCart = displayItems.map((item) => {
        return `<div class="card">
        <div class="img-item">
            <img src="${item.img}"  alt="">
        </div>
        <div class="descript-img">
            <p>${item.title}</p>
            <p>$${item.price}</p>
            <button>Buy now</button>
        </div>
        <div class = "notif">
            <p>${item.numberOfunits}</p>
        </div>
    </div> 
    `
    })

    displayItemsInCart = displayItemsInCart.join('')
    cartItems.innerHTML = displayItemsInCart
}


function counter(action , id) {

    displayItems = displayItems.map((item) => {

        let oldNumber = item.numberOfunits;

        if(item.id === id){
            if(action === 'plus'){
                oldNumber++
            }
        }  

        return {
            ...item,
            numberOfunits: oldNumber
        }

    })

}