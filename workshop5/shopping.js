// shopping.js
// This script calculates an order total.

// Function called when the form is submitted.
// Function performs the calculation and returns false.
function calculate() {
    'use strict';

    // For storing the order total:
    var total;
    // Get references to the form values:
    var quantity = document.getElementById('quantity').value;

    var price =  document.getElementById('price').value ;
    var tax =  document.getElementById('tax').value;
    var discount =  document.getElementById('discount').value;
    // add shipping value 
    var shipping = 10;
    // Add validation here later!

    // Discount should be before tax



    // Calculate the initial total:
    total = quantity * price;
    console.log("total before tax: " + total);

    // Make the tax rate easier to use:
    tax = tax / 100;
    tax = tax + 1;

    // Factor in the tax:
    total = total * tax;
    console.log("total after tax: " + total);

    // Factor in the discount:
    if (quantity > 100 && discount < 50) {
     discount = discount * 2; 
    }
    console.log("total before discount " + total);
    total = total - (total * discount/100);
    
    console.log("total after discount: " + total);


    if (total <= 100) {
        total = total + shipping;
    }
    console.log("total + shipping: " + total);
    // Format the total to two decimal places:
    total = total.toFixed(2);

    

    // Display the total:
    document.getElementById('total').value = total;

    // Return false to prevent submission:
    return false;

} // End of calculate() function.

// Function called when the window has been loaded.
// Function needs to add an event listener to the form.
function init() {
    'use strict';

    // Add an event listener to the form:
    var theForm = document.getElementById('theForm');
    theForm.onsubmit = calculate;

} // End of init() function.

// Assign an event listener to the window's load event:
window.onload = init;