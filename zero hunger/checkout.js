// Function to execute when the user clicks the "CHECK OUT" button
document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    clearErrorMessages(); // Clear any previous error messages
    if (validateForm()) {
        // If form validation passes, display the order confirmation
        displayOrderConfirmation();
        resetForm();
    }
});

function resetForm(){
    document.getElementById("orderForm").reset();
}

// Function to validate form fields
function validateForm() {
    let isValid = true;

    const fields = [
        { id: "fullName", label: "Full Name", pattern: /.+/, errorMessage: "Please enter your full name." },
        { id: "email", label: "Email", pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, errorMessage: "Please enter a valid email address." },
        { id: "address", label: "Address", pattern: /.+/, errorMessage: "Please enter your address." },
        { id: "city", label: "City", pattern: /.+/, errorMessage: "Please enter your city." },
        { id: "state", label: "State", pattern: /.+/, errorMessage: "Please enter your state." },
        { id: "zipCode", label: "Zip Code", pattern: /^\d{6}$/, errorMessage: "Please enter a valid 6-digit zip code." },
        { id: "cardHolder", label: "Card Holder", pattern: /.+/, errorMessage: "Please enter the card holder name." },
        { id: "cardNumber", label: "Card Number", pattern: /^\d{4}-\d{4}-\d{4}-\d{4}$/, errorMessage: "Please enter the card number in the format XXXX-XXXX-XXXX-XXXX." },
        { id: "expiryDate", label: "Expiry Date", pattern: /^(0[1-9]|1[0-2])\/\d{2}$/, errorMessage: "Please enter the expiry date in MM/YY format." },
        { id: "cvv", label: "CVV", pattern: /^\d{3}$/, errorMessage: "Please enter a valid 3-digit CVV." }
    ];

    fields.forEach(field => {
        const element = document.getElementById(field.id);
        let value = element.value.trim(); // Trim the value
        if (field.id === "email") {
            // Convert email address to lowercase
            value = value.toLowerCase();
        } else if (field.id === "cardHolder") {
            // Convert card holder name to uppercase
            value = value.toUpperCase();
        }
        const errorElement = document.getElementById(`${field.id}Error`);
        if (!field.pattern.test(value)) {
            errorElement.innerText = field.errorMessage;
            element.classList.remove("valid-input");
            element.classList.add("invalid-input");
            isValid = false;
        } else {
            errorElement.innerText = "";
            element.classList.remove("invalid-input");
            element.classList.add("valid-input");
        }
    });

    return isValid;
}

// Function to retrieve query parameters from the URL
function getQueryParameter(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
}

// Function to populate total amount from query parameter on checkout page load
window.addEventListener('DOMContentLoaded', function() {
    const totalAmount = getQueryParameter('totalAmount');
    if (totalAmount) {
        document.getElementById('totalAmount').textContent = totalAmount;
    }
    // Generate a random order reference
    const orderReference = generateOrderReference();
    document.getElementById('orderReference').textContent = orderReference;
});

// Function to generate a random order reference
function generateOrderReference() {
    return 'ORD' + Math.floor(1000 + Math.random() * 9000);
}

// Function to clear error messages
function clearErrorMessages() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(errorMessage => {
        errorMessage.innerText = "";
    });

    const inputFields = document.querySelectorAll('input');
    inputFields.forEach(input => {
        input.classList.remove("invalid-input");
    });
}

// Function to display the order confirmation message
function displayOrderConfirmation() {
    // Check if the form is valid before displaying the confirmation
    if (validateForm()) {
        // Retrieve the total amount from the query parameter in the URL
        const totalAmount = getQueryParameter('totalAmount');

        // Generate a random order reference
        const orderReference = generateOrderReference();

        // Construct the confirmation message
        const confirmationMessage = `Your order has been successfully placed.\nOrder Reference: ${orderReference}\nTotal amount: £${totalAmount}`;

        // Display the confirmation message using a prompt dialog
        window.alert(confirmationMessage);
    }
}