const priceElements = document.querySelectorAll('[data-ns-test="prices"]');
const grandTotalElement = document.querySelector('[data-ns-test="grandTotal"]');

function calculateTotalPrice() {
    let total = 0;
    priceElements.forEach(priceElement => {
        const price = parseFloat(priceElement.textContent);
        if (!isNaN(price)) {
            total += price;
        }
    });
    return total.toFixed(2); // Ensure two decimal places
}
grandTotalElement.textContent = calculateTotalPrice();

// Update the total price when prices change
priceElements.forEach(priceElement => {
    priceElement.addEventListener('input', () => {
        grandTotalElement.textContent = calculateTotalPrice();
    });
});