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

    function updateCartUI() {
      const count = cart.reduce((sum, item) => sum + item.quantity, 0);
      document.getElementById('cart-count').textContent = count;

      const cartItems = document.getElementById('cart-items');
      cartItems.innerHTML = '';

      let total = 0;

      cart.forEach(item => {
        const product = productos.find(p => p.id === item.id);
        if (!product) return;

        total += item.quantity * product.price;

        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
          <img src="${product.image}" alt="${product.title}">
          <div class="cart-info">
            <h4>${product.title}</h4>
            <p>Precio: $${product.price.toFixed(2)}</p>
            <div class="quantity-controls">
              <button class="decrease" data-id="${item.id}">➖</button>
              <span>${item.quantity}</span>
              <button class="increase" data-id="${item.id}">➕</button>
              <button class="remove-from-cart" data-id="${item.id}">❌ Eliminar</button>
            </div>
          </div>
        `;
        cartItems.appendChild(itemDiv);
      });

      document.querySelectorAll('.increase').forEach(btn => {
        btn.addEventListener('click', () => changeQuantity(parseInt(btn.dataset.id), 1));
      });

      document.querySelectorAll('.decrease').forEach(btn => {
        btn.addEventListener('click', () => changeQuantity(parseInt(btn.dataset.id), -1));
      });

      document.querySelectorAll('.remove-from-cart').forEach(btn => {
        btn.addEventListener('click', () => removeFromCart(parseInt(btn.dataset.id)));
      });

      document.getElementById('cart-total').textContent = `Total: $${total.toFixed(2)}`;
    }

    function changeQuantity(id, delta) {
      const item = cart.find(p => p.id === id);
      if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
          cart = cart.filter(p => p.id !== id);
        }
        saveCart();
        updateCartUI();
      }
    }

    function removeFromCart(id) {
      cart = cart.filter(item => item.id !== id);
      saveCart();
      updateCartUI();
    }

    document.getElementById('checkout-btn').addEventListener('click', () => {
      if (cart.length === 0) {
        alert("Tu carrito está vacío.");
        return;
      }
      if (confirm("¿Estás seguro de finalizar la compra?")) {
        alert("¡Gracias por tu compra!");
        cart = [];
        saveCart();
        updateCartUI();
      }
    });

    document.addEventListener('DOMContentLoaded', updateCartUI);