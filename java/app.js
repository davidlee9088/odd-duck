// 'use strict';






// // // GLOBAL VARIABLES
let myContainer = document.querySelector('section');
let myButton = document.querySelector('section + div');
let ul = document.querySelector('ul');

let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');
let image3 = document.querySelector('section img:nth-child(3)');

let allProducts = [];
let clicks = 0;

let clickAllowed = 3;


// // CONSTRUCTOR

function Products(name, fileExtension = 'jpg') {
  this.name = name;
  this.src = `../assets/${this.name}.${fileExtension}`;
  this.clicks = 0;
  this.views = 0;
  allProducts.push(this);
}

// // // FUNCTIONS

function getRandomProduct() {
  return Math.floor(Math.random() * allProducts.length);
}

function renderProducts() {
  let products1 = getRandomProduct();
  let products2 = getRandomProduct();
  let products3 = getRandomProduct();
  console.log(products1,products2,products3);
  // seriously consider using an array here
  // remember how do you know if an array includes something?
  // Google it and find out
  while (products1 === products2 || products1 === products3 || products2 === products3)
  {
    products1 = getRandomProduct();
    products2 = getRandomProduct();
    products3 = getRandomProduct();
    console.log(products1, products2,products3);
  }

  image1.src = allProducts[products1].src;
  image1.alt = allProducts[products1].name;
  allProducts[products1].views++;
  image2.src = allProducts[products2].src;
  image2.alt = allProducts[products2].name;
  allProducts[products2].views++;
  image3.src = allProducts[products3].src;
  image3.alt = allProducts[products3].src;

  console.log(allProducts);
}

function handleProductClick(event) {
  if (event.target === myContainer) {
    alert('Please click on an image');
  }
  clicks++;
  let clickedProducts = event.target.alt;
  console.log(clickedProducts);

  for (let i = 0; i< allProducts.length; i++) {
    if (clickedProducts === allProducts[i].name) {
      allProducts[i].clicks++;
      break;
    }
  }
  renderProducts();
  if (clicks === clickAllowed) {
    myButton.className = 'clicks-allowed';
    myContainer.removeEventListener('click', handleProductClick);
    myButton.addEventListener('click', handleButtonClick);
  }
}

function handleButtonClick() {
  if (clicks === clickAllowed) {
    renderResults();
  }
}

function renderResults() {

  // for each  goat in my array, generate a LI
  // ex: name had X views and was clicked on X times
  for (let i = 0; i < allProducts.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${allProducts[i].name} had ${allProducts[i].views} views and was clicked on ${allProducts[i].clicks} times`;
    ul.appendChild(li);
  }
}

// // // EXCUTABLE CODE


let bag = new Products('bag');
let banana = new Products('banana');
let bathroom = new Products('bathroom');
let boots = new Products('boots');
let breakfast = new Products('breakfast');
let bubblegum = new Products('bubblegum');
let chair = new Products('chair');
let cthulhu = new Products('cthulhu');
let i1 = new Products('i1');
let i2 = new Products('i2');
let i3 = new Products('i3');
let i4 = new Products('i4');
let i5 = new Products('i5');
let i6 = new Products('i6');
let i7 = new Products('i7','png');
let i8 = new Products('i8');
let i9 = new Products('i9');
let i10 = new Products('i10');
let i11 = new Products('i11');




allProducts.push(this);

console.log(allProducts);
renderProducts();

myContainer.addEventListener('click', handleProductClick);

//how to not repeat imgs
// how to add allProducts Line without hardcoding.
