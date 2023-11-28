for (var i = 1; i < product.length; i++) {
  document.getElementById("select1").innerHTML += `
  <option value="${i}">${product[i].title}</option>
  `;
  document.getElementById("select2").innerHTML += `
  <option value="${i}">${product[i].title}</option>
  `;
}

function item1(a) {
  var select2 = document.getElementById("select2").value;
  if (a != select2) {
      document.getElementById("img1").src = product[a].image
      document.getElementById("price1").innerHTML = "PKR " + product[a].price
      document.getElementById("desc1").innerHTML = product[a].description
      document.getElementById("brand1").innerHTML = product[a].brand

  } else {
      document.getElementById("select1").selectedIndex = 0;
      document.getElementById("img1").src = product[0].image
      document.getElementById("price1").innerHTML = ""
      document.getElementById("desc1").innerHTML = ""
      document.getElementById("brand1").innerHTML = ""

  }
}

function item2(a) {
  var select1 = document.getElementById("select1").value;
  if (a != select1) {
      document.getElementById("img2").src = product[a].image
      document.getElementById("price2").innerHTML = "PKR " + product[a].price
      document.getElementById("desc2").innerHTML = product[a].description
      document.getElementById("brand2").innerHTML = product[a].brand
  } else {
      document.getElementById("select2").selectedIndex = 0;
      document.getElementById("img2").src = product[0].image
      document.getElementById("price2").innerHTML = ""
      document.getElementById("desc2").innerHTML = ''
      document.getElementById("brand2").innerHTML = ""

  }
}




// JavaScript for cart counting
let cartCount = 0;
const cartCountElement = document.getElementById("cart-count");
const sideCartCountElement = document.getElementById("side-cart-count");
const productCountElements = document.querySelectorAll('.product-count');
const productCountSideElement = document.getElementById("product-count-side");

function updateCartCount() {
  cartCount++;
  cartCountElement.innerText = cartCount;
  sideCartCountElement.innerText = cartCount;

  // Apply red background to the count
  cartCountElement.style.backgroundColor = "red";
}

const addToCartButtons = document.querySelectorAll(".two.add-to-cart");

addToCartButtons.forEach((addToCartButton, index) => {
  addToCartButton.addEventListener("click", () => {
    updateCartCount();
    // Update product count in the card for the specific product (using index)
    updateProductCount(index, 1);
  });
});


// Add references to the minus and plus buttons
const minusButtons = document.querySelectorAll('.fa-minus');
const plusButtons = document.querySelectorAll('.fa-plus');

minusButtons.forEach((minusButton, index) => {
  minusButton.addEventListener('click', () => {
    // Check if the product count is greater than 0
    if (parseInt(productCountElements[index].textContent) > 0) {
      // Decrease the product count by 1
      updateProductCount(index, -1);
      // Decrease the cart count by 1
      cartCount--;
      cartCountElement.innerText = cartCount;
      sideCartCountElement.innerText = cartCount;
    }
  });
});



// Separate function to update product count in the card
function updateProductCount(cardIndex, value) {
  const productCount = parseInt(productCountElements[cardIndex].textContent);
  productCountElements[cardIndex].textContent = productCount + value;
}






// JavaScript to toggle the cart drawer
const cartDrawer = document.querySelector(".cart-drawer");
const cartIcon = document.querySelector(".fa-cart-shopping"); // Cart icon element
let isCartOpen = false;

function openCartDrawer() {
  cartDrawer.style.right = "0";
  isCartOpen = true;
}

function closeCartDrawer() {
  cartDrawer.style.right = "-300px";
  isCartOpen = false;
}

cartIcon.addEventListener("click", () => { // Listen to clicks on the cart icon
  openCartDrawer();
});

cartDrawer.addEventListener("click", (event) => {
  // Close the cart drawer when clicking outside of it
  if (isCartOpen && event.target === cartDrawer) {
    closeCartDrawer();
  }
});




// javascipt for increasing and decreasing count in the cart

const plusIcon = document.querySelector('.fa-plus');
const minusIcon = document.querySelector('.fa-minus');

// Get the product count element
const productCount = document.getElementById('product-count');

// Add click event listener for the plus icon
plusIcon.addEventListener('click', function() {
  // Increment the count
  let count = parseInt(productCount.textContent);
  count++;
  productCount.textContent = count;
  updateCartCount();
});

// Add click event listener for the minus icon
minusIcon.addEventListener('click', function() {
  // Decrement the count, but don't let it go below 0
  let count = parseInt(productCount.textContent);
  if (count > 0) {
    count--;
    productCount.textContent = count;
    updateCartCount();
  }
});




// JavaScript to handle checkbox changes
// Initialize an empty cart array
const cart = [];

// Function to update the cart and cart count
// Function to update the cart and cart count
function updateCart(productIndex, isChecked) {
  const cartCountElement = document.getElementById('cart-count');
  const productCheckboxes = document.querySelectorAll('.product-checkbox');
  
  if (isChecked) {
    // Product is checked, add it to the cart
    cart.push(productIndex);
  } else {
    // Product is unchecked
    if (cart.includes(productIndex)) {
      // Prompt the user to remove the item from the cart
      const removeItem = confirm("Do you want to remove this item from the cart?");
      if (removeItem) {
        const index = cart.indexOf(productIndex);
        cart.splice(index, 1);
        // Update the cart count
        cartCountElement.innerText = cart.length;
      } else {
        // User canceled the removal, so check the checkbox again
        document.querySelector(`.product-checkbox[data-product-index="${productIndex}"]`).checked = true;
      }
    }
  }

  // Count checked checkboxes to update the product count
  const checkedCheckboxes = document.querySelectorAll('.product-checkbox:checked');
  const productCountElement = document.getElementById('product-count');
  productCountElement.innerText = checkedCheckboxes.length;
}

// Add a change event listener to each checkbox
const productCheckboxes = document.querySelectorAll('.product-checkbox');
productCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', function () {
    const productIndex = parseInt(this.getAttribute('data-product-index'));
    const isChecked = this.checked;
    updateCart(productIndex, isChecked);
  });
});



// javascipt for emptying the cart

// Get all checkboxes with the class 'product-checkbox'
const productCheckboxes1 = document.querySelectorAll('.product-checkbox');

// Get the 'subtotal' div
const subtotalDiv = document.querySelector('.subtotal');

// Add a change event listener to each checkbox
productCheckboxes1.forEach((checkbox) => {
  checkbox.addEventListener('change', function () {
    if (this.checked) {
      // If the checkbox is checked, hide the 'subtotal' div and the product div
      subtotalDiv.style.display = 'none';
      const card1 = this.closest('.card1');
      if (card1) {
        card1.style.display = 'none';
      }
    } else {
      // If the checkbox is unchecked, show the 'subtotal' div and the product div
      subtotalDiv.style.display = 'block';
      const card1 = this.closest('.card1');
      if (card1) {
        card1.style.display = 'block';
      }
    }

    // Reset the checkbox to unchecked state
    this.checked = false;
  });
});



// javascipt for changing the price
    let price = 0;
    const priceElement = document.querySelector('.price');

    function updatePrice() {
        priceElement.textContent = `SUBTOTAL : ₹ ${price}`;
    }

    function increment() {
        price += 799; 
        updatePrice();
    }

    function decrement() {
        if (price >= 799) {
            price -= 799; 
            updatePrice();
        }
    }

    function addToCart() {
      price += 799; 
      updatePrice();
  }

    const plusButton = document.querySelector('.fa-plus ');
    const minusButton = document.querySelector('.fa-minus');
    const addToCartButton = document.querySelector('.two.add-to-cart');


    
    plusButton.addEventListener('click', increment);
    minusButton.addEventListener('click', decrement);
   
    if (addToCartButton) {
      addToCartButton.addEventListener('click', addToCart);
  }



