'use strict';






// // GLOBAL VARIABLES
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
}

// // FUNCTIONS

function getRandomProduct() {
  return Math.floor(Math.random() * allProducts.length);
}

function renderProducts() {
  let products1 = getRandomProduct();
  let products2 = getRandomProduct();
  let products3 = getRandomProduct();
  console.log(products1,products2);
  // seriously consider using an array here
  // remember how do you know if an array includes something?
  // Google it and find out
  while (products1.name === products2.name ||products1.name === products3.name || products2.name === products3.name) {
    products1 = getRandomProduct();
    products2 = getRandomProduct();
    console.log(products1, products2);
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

// function handleGoatClick(event) {
//   if (event.target === myContainer) {
//     alert('Please click on an image');
//   }
//   clicks++;
//   let clickedGoat = event.target.alt;
//   console.log(clickedGoat);

//   for (let i = 0; i< allGoats.length; i++) {
//     if (clickedGoat === allGoats[i].name) {
//       allGoats[i].clicks++;
//       break;
//     }
//   }
//   renderGoats();
//   if (clicks === clickAllowed) {
//     myButton.className = 'clicks-allowed';
//     myContainer.removeEventListener('click', handleGoatClick);
//     myButton.addEventListener('click', handleButtonClick);
//   }
// }

// function handleButtonClick() {
//   // if (clicks === clickAllowed) {
//     renderResults();
//   // }
// }

// function renderResults() {

//   // for each  goat in my array, generate a LI
//   // ex: name had X views and was clicked on X times
//   for (let i = 0; i < allGoats.length; i++) {
//     let li = document.createElement('li');
//     li.textContent = `${allGoats[i].name} had ${allGoats[i].views} views and was clicked on ${allGoats[i].clicks} times`;
//     ul.appendChild(li);
//   }
// }

// // EXCUTABLE CODE


let bag = new Products('bag');
let banana = new Products('banana');
let bathroom = new Products('bathroom');
let boots = new Products('boots');
let breakfast = new Products('breakfast');
let bubblegum = new Products('bubblegum');



allProducts.push(bag, banana, bathroom, boots, breakfast, bubblegum);

console.log(allProducts);
renderProducts();

// myContainer.addEventListener('click', handleGoatClick);