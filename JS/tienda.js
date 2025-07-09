const productos = [
      { id: 1,
        title: "Batman", 
        price: 25.00, 
        image: "image/lego/batman.jpg", 
        description: "Personaje de lego Batman con capa." },
      { id: 2, 
        title: "Minecraft Lego", 
        price: 25.00, 
        image: "image/lego/lego-minecraft4.jpg", 
        description: "Cueva de minecraft con animales y monstruos." },  
      { id: 3, 
        title: "Avenger", 
        price: 30.00, 
        image: "image/lego/lego-avenger.jpg", 
        description: "Torre de avenger con todos los heroes." },
      { id: 4, 
        title: "Mario kart Lego", 
        price: 30.00, 
        image: "image/lego/lego-mario-kart3.jpg", 
        description: "Toad personalizado Mario kard 3." },
      { id: 5, 
        title: "Capibara Peluche", 
        price: 15.00, 
        image: "image/jugueterra/capi-peluche.jpg", 
        description: "Capibara con mochila de tortuga en peluche." },
      { id: 6, 
        title: "Abeja Minecraft", 
        price: 15.00, 
        image: "image/peluches/abeja-minecraft.jpg", 
        description: "Abeja minecraft de peluche." },
      { id: 7, 
        title: "Pikachu Peluche", 
        price: 15.00, 
        image: "image/peluches/pikachu.jpg", 
        description: "Pikachu peluche tamaño mediano." },
      { id: 8, 
        title: "Melody Peluche", 
        price: 15.00, 
        image: "image/peluches/melody.jpg", 
        description: "Melody peluche tamaño mediana." }
             
    ];

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function saveCart() {
      localStorage.setItem('cart', JSON.stringify(cart));
    }

    function addToCart(id) {
      const item = cart.find(p => p.id === id);
      if (item) {
        item.quantity += 1;
      } else {
        cart.push({ id, quantity: 1 });
      }
      saveCart();
      updateCartCount();
    }

    function updateCartCount() {
      const count = cart.reduce((sum, item) => sum + item.quantity, 0);
      document.getElementById('cart-count').textContent = count;
    }

    function renderProducts() {
      const container = document.getElementById('products-container');
      container.innerHTML = '';

      productos.forEach(product => {
        const div = document.createElement('div');
        div.className = 'product';
        div.innerHTML = `
          <img src="${product.image}" alt="${product.title}" width="150"><br>
          <strong>${product.title}</strong>
          <p>${product.description}</p>
          <p><strong>$${product.price.toFixed(2)}</strong></p>
          <button data-id="${product.id}">Agregar al carrito</button>
        `;
        container.appendChild(div);
      });

      document.querySelectorAll('button[data-id]').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = parseInt(btn.dataset.id);
          addToCart(id);
        });
      });
    }

    document.addEventListener('DOMContentLoaded', () => {
      renderProducts();
      updateCartCount();
    });