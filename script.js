document.addEventListener('DOMContentLoaded', function () {
    const mainImage = document.getElementById('main-image');
    const thumbnails = document.querySelectorAll('.thumb');
    const priceElement = document.getElementById('price');
    const sizeSelect = document.getElementById('size-select');
    const colorSelect = document.getElementById('color-select');
    const addToCartButton = document.getElementById('add-to-cart');
    const cartPopup = document.getElementById('cart-popup');
    const cartDetails = document.getElementById('cart-details');
    const closeCartButton = document.getElementById('close-cart');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function () {
            mainImage.src = this.src;
        });
    });

    sizeSelect.addEventListener('change', updatePrice);
    colorSelect.addEventListener('change', updatePrice);

    function updatePrice() {
        const size = sizeSelect.value;
        const color = colorSelect.value;
        let basePrice = 49.99;

        if (size === 'medium') basePrice += 5;
        if (size === 'large') basePrice += 10;

        if (color === 'blue') basePrice += 3;
        if (color === 'green') basePrice += 5;

        priceElement.textContent = `$${basePrice.toFixed(2)}`;
    }

    addToCartButton.addEventListener('click', function () {
        const size = sizeSelect.value;
        const color = colorSelect.value;
        const price = priceElement.textContent;

        cartDetails.innerHTML = `
            <p>Product Name</p>
            <p>Size: ${size}</p>
            <p>Color: ${color}</p>
            <p>Price: ${price}</p>
        `;
        cartPopup.style.display = 'block';
    });

    closeCartButton.addEventListener('click', function () {
        cartPopup.style.display = 'none';
    });
});
