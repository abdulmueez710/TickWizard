
// Get the form and the success message div
const form = document.getElementById('paymentForm');
const successMessage = document.getElementById('successMessage');

// Listen for when the "Pay Now" button is clicked
form.addEventListener('submit', function (event) {

    // 1. Stop the page from refreshing
    event.preventDefault();

    // 2. Get the values from the inputs
    const name = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const card = document.getElementById('cardNumber').value;

    // 3. Simple Check: Are any of them empty?
    if (name === "" || email === "" || card === "") {
        alert("Please fill in all fields!");
        return; // Stop here if empty
    }

    // 4. If everything is okay, hide the form and show success
    form.style.display = 'none';
    successMessage.style.display = 'block';
});
