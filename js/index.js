// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'Pepperoni', price: 1, btnClass: 'btn-pepperoni' },
  mushrooms: { name: 'Mushrooms', price: 1, btnClass: 'btn-mushrooms'},
  greenPeppers: { name: 'Green Peppers', price: 1, btnClass: 'btn-green-peppers' },
  whiteSauce: { name: 'White sauce', price: 3, btnClass: 'btn-sauce' },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5, btnClass: 'btn-crust' }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });

  let lol = document.querySelectorAll('.product-pep').textContent
  //.style.display = "none";

  console.log(lol)
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((oneGreenP) => {
    if (state.greenPeppers) {
      oneGreenP.style.visibility = 'visible';
    } else {
      oneGreenP.style.visibility = 'hidden';
    }
  });
}

// function renderWhiteSauce() {
//   // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
//   document.querySelectorAll('.sauce-white').forEach((oneWhiteS) => {
//     if (state.whiteSauce) {
//       oneWhiteS.style.visibility = 'visible';
//     } else {
//       oneWhiteS.style.visibility = 'hidden';
//     }
//   });

// }

// function renderGlutenFreeCrust() {
//   // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
//   document.querySelectorAll('.crust-gluten-free').forEach((oneglutF) => {
//     if (state.glutenFreeCrust) {
//       oneglutF.style.visibility = 'visible';
//     } else {
//       oneglutF.style.visibility = 'hidden';
//     }
//   });
// }

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  if (state.whiteSauce) {
    document.querySelector('.sauce').classList.add('sauce-white')
  }
  else {
    document.querySelector('.sauce').classList.remove('sauce-white')
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if (state.glutenFreeCrust) {
    document.querySelector('.crust').classList.add('crust-gluten-free')
  }
  else {
    document.querySelector('.crust').classList.remove('crust-gluten-free')
  }
}

function renderButtons(event) {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  // const buttons = document.querySelectorAll('.btn')
  // buttons.forEach(element => {
  //   if(state.element){
  //     document.querySelector('.btn').classList.add('active')
  //   } else {
  //     document.querySelector('.btn').classList.remove("active")
  //   }
  // }
  // )

  Object.entries(ingredients).forEach(keyValuePair=> {
    const key = keyValuePair[0]
    const value = keyValuePair[1]

    const className = value.btnClass
    const button = document.querySelector('.' + className)

    if(state[key]){
      button.classList.add('active')
    }
    else{
      button.classList.remove('active')
    }
  })


  // const button = document.querySelectorAll('.btn')
  // button.forEach(element => {
  //   element.addEventListener('click', function() {
  //     // if (this.classList === 'active') {
  //     //   this.classList.remove()
  //     // } else {
  //     //   this.classList === 'active'
  //     // }
  //     document.querySelector('.btn').classList.toggle('active')

  //   })
  // })

    // const article = event.currentTarget.parentElement;
    // const buttons = article.querySelector(".btn");
    // buttons.classList.toggle("active");
    // event.currentTarget.textContent = buttons.classList.contains("active")
    //     ? "Show"
    //     : "Hide";

    // const target = event.currentTarget;
    // const buttons = document.querySelectorAll('.btn');
    // buttons.forEach(element => {
    //   element.addEventListener('click', function() {
    //     buttons.classList.toggle("active");
    //   })

    // })


  //this.classList.toggle('button--active')
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`

  // function updateSubtotal(product) {
  //   const price = product.querySelector('.price span').textContent;
  //   const quantity = product.querySelector('.quantity input').value;
  //   product.querySelector('.subtotal span').textContent = price * quantity

  //   return price * quantity
  // }

  // document.querySelectorAll('.mushroom').forEach((oneMush) => {
  //   if (state.mushrooms) {
  //     oneMush.style.visibility = 'visible';
  //   } else {
  //     oneMush.style.visibility = 'hidden';
  //   }
  // });
  // let sumPrice = 0

  // let productPrices = document.querySelector('.price').textContent

  // Array.from(ingredients).forEach(element =>{
  //   sumPrice += element.price});

  // const allProducts = document.getElementsByClassName('product');

  // let sum = 0

  // Array.from(allProducts).forEach(element => {
  //   sum += element.price
  // })
  // console.log(sum)

  // let sum = 0

  // if (document.querySelectorAll('.pep').style.visibility = 'visible') {
  //   sum += ingredients.pepperoni.price
  // }

  //Object.entries(ingredients).forEach(keyValuePair=> {
    // let sum = 0
    // const key = keyValuePair[0]
    // const value = keyValuePair[1]

    // const className = value.price
    // const button = document.querySelector('.' + className)

    let sum = 10

    const ul = document.querySelector('.panel.price ul');

    ul.innerHTML = ''


    for (const ingredientKey in ingredients) {
      if (state[ingredientKey]) {
        sum += ingredients[ingredientKey].price
        let li = document.createElement('li')
        li.innerHTML += ('$' + ingredients[ingredientKey].price + ' ' +ingredients[ingredientKey].name)
        ul.appendChild(li)
        //crée un li
        //mettre le texte dedans
        // append au ul
      }

    }


    document.querySelector('aside.panel.price strong').innerHTML = "$" + sum


    console.log(sum)

}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector('.btn.btn-mushrooms').addEventListener('click', function (event) {
  state.mushrooms = !state.mushrooms;
  // const button = event.target
  // button.classList.toggle('active')
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;

  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
