// js for categories page 
// document.getElementById("primary-btn").addEventListener("click", function() {
//     var element = document.getElementById("primary-btn");
//     element.style.animation = "myAnimation 5s";
//   });
  

  //js for dealsanddiscount page
//coutdown1
// Set the date we're counting down to
var countDownDate1 = new Date("Oct 26, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x1 = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate1 - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // let x = "hello";

  // Display the result in the element with id="demo"
  document.querySelector("#countdown1").innerText = "Ends in : " + days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  document.querySelector("#countdown1").style.color = "red"; 
  
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x1);
    document.getElementById("countdown1").innerHTML = "EXPIRED";
  }
}, 1000);


  //  countDown2

  
// Set the date we're counting down to
var countDownDate2 = new Date("Oct 27, 2023 10:07:29").getTime();

// Update the count down every 1 second
var x2 = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate2 - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // let x = "hello";

  // Display the result in the element with id="countdown1"
  document.querySelector("#countdown2").innerText = "Ends in : " + days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  document.querySelector("#countdown2").style.color = "red"; 
  
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x2);
    document.getElementById("countdown2").innerHTML = "EXPIRED";
  }
}, 1000);


 //  countDown3

  
// Set the date we're counting down to
var countDownDate3 = new Date("Oct 27, 2023 11:08:19").getTime();

// Update the count down every 1 second
var x3 = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate3 - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // let x = "hello";

  // Display the result in the element with id="countdown1"
  document.querySelector("#countdown3").innerText = "Starts in : " + days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  document.querySelector("#countdown3").style.color = "red"; 
  
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x2);
    document.getElementById("countdown3").innerHTML = "DEAL ENDS";
  }
}, 1000);



 //  countDown4

  
// Set the date we're counting down to
var countDownDate4 = new Date("Oct 28, 2023 01:01:19").getTime();

// Update the count down every 1 second
var x4 = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate4 - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // let x = "hello";

  // Display the result in the element with id="countdown1"
  document.querySelector("#countdown4").innerText = "Ends in : " + days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  document.querySelector("#countdown4").style.color = "red"; 
  
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x4);
    document.getElementById("countdown4").innerHTML = "DEAL ENDS";
  }
}, 1000);


//  countDown5

  
// Set the date we're counting down to
var countDownDate5 = new Date("Oct 29, 2023 01:01:19").getTime();

// Update the count down every 1 second
var x5 = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate5 - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // let x = "hello";

  // Display the result in the element with id="countdown1"
  document.querySelector("#countdown5").innerText = "Starts in : " + days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  document.querySelector("#countdown5").style.color = "red"; 
  
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x4);
    document.getElementById("countdown5").innerHTML = "DEAL ENDS";
  }
}, 1000);



//countdown6


  
// Set the date we're counting down to
var countDownDate6 = new Date("Oct 30, 2023 01:01:19").getTime();

// Update the count down every 1 second
var x6 = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate6 - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // let x = "hello";

  // Display the result in the element with id="countdown1"
  document.querySelector("#countdown6").innerText = "Starts in : " + days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  document.querySelector("#countdown6").style.color = "red"; 
  
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x6);
    document.getElementById("countdown6").innerHTML = "DEAL ENDS";
  }
}, 1000);


//countdown7


  
// Set the date we're counting down to
var countDownDate7 = new Date("Oct 28, 2023 09:01:19").getTime();

// Update the count down every 1 second
var x7 = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate7 - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // let x = "hello";

  // Display the result in the element with id="countdown1"
  document.querySelector("#countdown7").innerText = "Ends in : " + days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  document.querySelector("#countdown7").style.color = "red"; 
  
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x7);
    document.getElementById("countdown7").innerHTML = "DEAL ENDS";
  }
}, 1000);




//countdown8


  
// Set the date we're counting down to
var countDownDate8 = new Date("Oct 29, 2023 10:01:19").getTime();

// Update the count down every 1 second
var x8 = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate8 - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // let x = "hello";

  // Display the result in the element with id="countdown1"
  document.querySelector("#countdown8").innerText = "Ends in : " + days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  document.querySelector("#countdown8").style.color = "red"; 
  
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x8);
    document.getElementById("countdown8").innerHTML = "DEAL ENDS";
  }
}, 1000);


//countdown9


  
// Set the date we're counting down to
var countDownDate9 = new Date("Nov 1, 2023 10:01:19").getTime();

// Update the count down every 1 second
var x9 = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate9 - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // let x = "hello";

  // Display the result in the element with id="countdown1"
  document.querySelector("#countdown9").innerText = "Ends in : " + days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  document.querySelector("#countdown9").style.color = "red"; 
  
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x9);
    document.getElementById("countdown9").innerHTML = "DEAL ENDS";
  }
}, 1000);


// js for sort and filter products

document.addEventListener("DOMContentLoaded", function () {
  const productList = document.querySelector(".items");
  const selectElement = document.getElementById("select");

  selectElement.addEventListener("change", function () {
    const selectedOption = this.value;
    const productItems = productList.querySelectorAll("li");
    const productArray = Array.from(productItems);

    productArray.sort((a, b) => {
      const priceA = parseFloat(a.querySelector("h2").textContent.replace("₹", "").replace(/,/g, "").trim());
      const priceB = parseFloat(b.querySelector("h2").textContent.replace("₹", "").replace(/,/g, "").trim());

      if (selectedOption === "LowToHigh") {
        return priceA - priceB;
      } else if (selectedOption === "HighToLow") {
        return priceB - priceA;
      } else {
        const originalOrderA = parseInt(a.getAttribute("data-order"));
        const originalOrderB = parseInt(b.getAttribute("data-order"));
        return originalOrderA - originalOrderB;
      }
    });

    productList.innerHTML = "";

    productArray.forEach((product) => {
      productList.appendChild(product);
    });
  });
});


// js for deals and discount page for sorting by data-filter (by names)

document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".indicator li");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = this.getAttribute("data-filter");
      filterProducts(category);
    });
  });

  
      // Remove the 'active' class from all filter buttons
      filterButtons.forEach((btn) => {
        btn.classList.remove("active");
      });

      // Add the 'active' class to the clicked filter button
      this.classList.add("active");
    });
  

  function filterProducts(category) {
    const items = document.querySelectorAll(".items li");
    
    items.forEach((item) => {
      const itemCategory = item.getAttribute("data-category");
      const itemSpecial = item.getAttribute("data-special");
      
      // Check if the item's category matches the selected category
      // and if it's a "Deal of the Day" item
      if ((category === "All Deals" || category === itemCategory) || (category === "Deal of the Day" && itemSpecial === "DealOfDay")) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });

    // Update active class for filter buttons
    filterButtons.forEach((button) => {
      if (button.getAttribute("data-filter") === category) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  }


  // js for category = mobile page 
  document.addEventListener("DOMContentLoaded", function () {
    const productContainer = document.querySelector(".product_container");
    const searchInput = document.getElementById("searchInput");
  
    // Store all product cards
    const productCards = document.querySelectorAll(".product_card");
  
    // Function to filter products based on search input
    function filterProducts() {
      const searchText = searchInput.value.toLowerCase();
      
      productCards.forEach((productCard) => {
        const productTitle = productCard.querySelector(".product_content h2").textContent.toLowerCase();
        const productDescription = productCard.querySelector(".product_content p").textContent.toLowerCase();
        const productPrice = productCard.querySelector(".product_content button").textContent.toLowerCase();
        
        const isMatch = productTitle.includes(searchText) ||
                       productDescription.includes(searchText) ||
                       productPrice.includes(searchText);
  
        productCard.style.display = isMatch ? "block" : "none";
      });
    }
  
    // Attach the filter function to the search input
    searchInput.addEventListener("input", filterProducts);
  });
  





  // JS FOR MOBILES PAGE

document.addEventListener("DOMContentLoaded", function () {
  const productContainer = document.querySelector(".product_container");
  const searchInput = document.getElementById("searchInput");

  // Store all product cards
  const productCards = document.querySelectorAll(".product_card");

  // Function to filter products based on search input
  function filterProducts() {
    const searchText = searchInput.value.toLowerCase();
    
    productCards.forEach((productCard) => {
      const productTitle = productCard.querySelector(".product_content h2").textContent.toLowerCase();

      const productDescription = productCard.querySelector(".product_content p").textContent.toLowerCase();
      
      // const productPrice = productCard.querySelector(".additional-info h2").textContent.toLowerCase();
      
      const isMatch = productTitle.includes(searchText) ||
                     productDescription.includes(searchText); 

      productCard.style.display = isMatch ? "flex" : "none";
    });
  }

  // Attach the filter function to the search input
  searchInput.addEventListener("input", filterProducts);
});





