
// Global variable to store the cart items
let cart = [];

// Function to add items to the cart
function addToCart(name, price) {
    cart.push({ name: name, price: price });
    updateCart();
    alert('Item added to cart: ' + name);
}

// Function to delete items from the cart
function deleteFromCart() {
    cart = [];
    updateCart();
}

// Function to remove individual items from the cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function orderViaWhatsApp() {
    // Ask user for their name
    var name = prompt("Please enter your name:");
    if (!name || !isNaN(name)) {
        alert("Please enter a valid name.");
        return;
    }

    // Ask user for their department
    var department = prompt("Please enter your department:");
    if (!department || !isNaN(department)) {
        alert("Please enter a valid department.");
        return;
    }

    // Ask user for their room number
    var roomNo = prompt("Please enter your room number:");
    if (!roomNo || isNaN(roomNo) || roomNo.length > 4) {
        alert("Please enter a valid room number with maximum 4 digits.");
        return;
    }

    // Construct the message with user information and order details
    var message = "Name: " + name + "\nDepartment: " + department + "\nRoom Number: " + roomNo + "\n\nOrder Details:\n";
    cart.forEach(item => {
        message += item.name + " - ₹" + item.price + "\n";
    });

    // Encode the message for URL
    var encodedMessage = encodeURIComponent(message);

    // Replace 'YOUR_WHATSAPP_NUMBER' with your actual WhatsApp number
    var phoneNumber = "9362196294";

    // Construct the WhatsApp URL with the phone number and message
    var whatsappURL = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodedMessage;

    // Open the WhatsApp chat window with pre-filled message
    window.open(whatsappURL, '_blank');
}







// Function to update the cart display
function updateCart() {
    let cartItems = document.getElementById('cart-items');
    let totalPrice = document.getElementById('total-price');
    let total = calculateTotal();
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        cartItems.innerHTML += `<li>${item.name} - ₹${item.price} <button class="okk3" onclick="removeFromCart(${index})">Remove</button></li>`;
    });
    totalPrice.textContent = `Total: ₹${total}`;
}

// Function to calculate the total price of items in the cart
function calculateTotal() {
    let total = 0;
    cart.forEach(item => {
        total += item.price;
    });
    return total;
}

// Function to order via WhatsApp


