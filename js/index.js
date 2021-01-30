// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'Pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
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
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(oneMush => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(oneGrePep => {
    if (state.greenPeppers) {
      oneGrePep.style.visibility = 'visible';
    } else {
      oneGrePep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  // this is a different logic to setting true / false
  if (state.whiteSauce) {
    document.querySelector('.sauce').className += ' sauce-white';
  } else { 
    document.querySelector('.sauce').className = 'sauce';
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
    // this is a different logic to setting true / false
    if (state.glutenFreeCrust) {
      document.querySelector('.crust').className += ' crust-gluten-free';
    } else { 
      document.querySelector('.crust').className = 'crust';    
    }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if (state.pepperoni) {
    document.querySelector('.btn-pepperoni').className += ' active';
  } else { 
    document.querySelector('.btn-pepperoni').className = 'btn btn-pepperoni';    
  }
  if (state.mushrooms) {
    document.querySelector('.btn-mushrooms').className += ' active';
  } else { 
    document.querySelector('.btn-mushrooms').className = 'btn btn-mushrooms';    
  }
  if (state.greenPeppers) {
    document.querySelector('.btn-green-peppers').className += ' active';
  } else { 
    document.querySelector('.btn-green-peppers').className = 'btn btn-green-peppers';    
  }
  if (state.whiteSauce) {
    document.querySelector('.btn-sauce').className += ' active';
  } else { 
    document.querySelector('.btn-sauce').className = 'btn btn-sauce';    
  }
  if (state.glutenFreeCrust) {
    document.querySelector('.btn-crust').className += ' active';
  } else { 
    document.querySelector('.btn-crust').className = 'btn btn-crust';    
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const priceList = document.querySelector(".price > ul");
  priceList.innerHTML = ``;
  basePrice = 10;
  for (const ingredient in state) {
    if (state[ingredient]) {  // first we check if the ingredient is present
      ingredientToAdd = document.createElement("li");  // if present, create a new list element for it
      ingredientToAdd.innerHTML = `$${ingredients[ingredient].price} ${ingredients[ingredient].name}`;  // then add the relevent text into the HTML of that list element
      priceList.appendChild(ingredientToAdd); // finally append it to our price list (defined as const at start of function)
      basePrice += ingredients[ingredient].price; // now add that price to the base price
    }
  }
  document.querySelector(".price > strong").innerHTML = `$${basePrice}` // now add the final price to the html
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});


// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
