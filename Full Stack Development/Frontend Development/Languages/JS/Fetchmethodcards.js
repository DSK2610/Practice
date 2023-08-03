const apiUrl = 'https://fakestoreapi.com/products';

async function fetchProducts() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    data.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('card');

      const image = document.createElement('img');
      image.src = product.image;
      card.appendChild(image);

      const title = document.createElement('h2');
      title.textContent = product.title;
      card.appendChild(title);

      const price = document.createElement('span');
      price.textContent = 'Rs.' + product.price;
      card.appendChild(price);

      const container = document.getElementById('product-container');
      container.appendChild(card);
    });
  } catch (error) {
    console.log('Error:', error);
  }
}

fetchProducts();
