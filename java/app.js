// 'use strict';






// // // GLOBAL VARIABLES
let myContainer = document.querySelector('section');


let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');
let image3 = document.querySelector('section img:nth-child(3)');

let allProducts = [];
let indexArray = [];
let clicks = 0;

let clickAllowed = 1;


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
  while (indexArray.length < 6) {
    let ranNum = getRandomProduct();
    if (!indexArray.includes(ranNum)) {
      indexArray.push(ranNum);
    }
  }
  let products1 = indexArray.shift();
  let products2 = indexArray.shift();
  let products3 = indexArray.shift();

  image1.src = allProducts[products1].src;
  image1.alt = allProducts[products1].name;
  allProducts[products1].views++;
  image2.src = allProducts[products2].src;
  image2.alt = allProducts[products2].name;
  allProducts[products2].views++;
  image3.src = allProducts[products3].src;
  image3.alt = allProducts[products3].name;
  allProducts[products3].views++;

  console.log(allProducts);
}

function handleProductClick(event) {
  if (event.target === myContainer) {
    alert('Please click on an image');
  }
  clicks++;
  let clickedProducts = event.target.alt;
  console.log(clickedProducts);

  for (let i = 0; i < allProducts.length; i++) {
    if (clickedProducts === allProducts[i].name) {
      allProducts[i].clicks++;
      break;
    }
  }
  renderProducts();
  if (clicks === clickAllowed) {

    myContainer.removeEventListener('click', handleProductClick);
    renderChart();
    console.log('hi');
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
let i7 = new Products('i7', 'png');
let i8 = new Products('i8');
let i9 = new Products('i9');
let i10 = new Products('i10');
let i11 = new Products('i11');

renderProducts();

myContainer.addEventListener('click', handleProductClick);

// chart.js

function renderChart() {

  let productNames = [];
  let productViews = [];
  let productClicks = [];
  for (let i = 0; i < allProducts.length; i++) {
    productNames.push(allProducts[i].name);
    productViews.push(allProducts[i].views);
    productClicks.push(allProducts[i].clicks);
  }


  const data = {
    labels: productNames,
    datasets: [
      {
        label: 'Views',
        data: productViews,
        backgroundColor: [
          'rgba(50, 56, 205, .69)'
        ],
        borderColor: [
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      },
      {
        label: 'Votes',
        data: productClicks,
        backgroundColor: [
          'rgba(57, 119, 192, 0.69)'
        ],
        borderColor: [
          'rgb(192, 130, 57, .69)',
        ],
        borderWidth: 1
      }
    ]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
}
