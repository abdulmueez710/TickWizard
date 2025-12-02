const form = document.getElementById('paymentForm');
const successMessage = document.getElementById('successMessage');

// When the user clicks "Pay Now"
form.addEventListener('submit', function (event) {

    // Stop the page from reloading
    event.preventDefault();

    // Grab the info the user typed
    const name = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const card = document.getElementById('cardNumber').value;

    // Make sure nothing is left blank
    if (name === "" || email === "" || card === "") {
        alert("Please fill in all fields!");
        return; // Stop if anything is empty
    }

    // Hide the form and show a success message
    form.style.display = 'none';
    successMessage.style.display = 'block';
});
