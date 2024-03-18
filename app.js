let cart_items = {};
let total_amount = 0;
const cartButton = document.getElementById('cart');
const cartValue = document.getElementById('cart-value');

const addButtons = document.querySelectorAll('.button');

addButtons.forEach(button => {
    button.addEventListener('click', () => {
        const itemContainer = button.parentElement.parentElement;
        const itemName = itemContainer.querySelector('h3').textContent;
        const price = itemContainer.querySelector('p').textContent.split('$')[1];
        total_amount += parseFloat(price);
        if (cart_items[itemName]) {
            cart_items[itemName]++;
        } else {
            cart_items[itemName] = 1;
        }
    });
});

cartButton.addEventListener('click', () => {
    cart_details = ''
    for(let item in cart_items){
        cart_details += `Item name: ${item} - Quantity: ${cart_items[item]}\n`
    }
    let [dollar, cent] = total_amount.toFixed(2).split('.');
    cart_details+=`The total amount is ${dollar}$ and ${cent} cents`
    console.log(cart_details);
})