      const displayproducts = document.querySelector(".main");
      const carttotal = document.querySelector(".price");
      const productsEl = document.querySelector(".products");
      const cartItemsEl = document.querySelector(".cart-container");
      const subtotalEl = document.querySelector(".subtotal");
      
      let products = [
          {
            id: 1,
            image:"https://i.postimg.cc/Bbq2wycw/black-roses.png",
            name: "Black Rose Seeds",
            price: 240,
            instock: 100,
            category: "flower",
          },
          {
            id: 2,
            image:"https://i.postimg.cc/vTRNgQyx/shears.jpg",
            name: "Stainless Steel Shears",
            price:400,
            instock: 100,
            category: "Equipment",
          },
          {
            id: 3,
            image:"https://i.postimg.cc/brT9y8wh/hosepipe-2.jpg",
            name: "5m Hosepipe",
            price: 300,
            instock: 100,
            category: "Equipment",
          },
          {
            id: 4,
            image:"https://i.postimg.cc/zGf0fLhP/rose.jpg",
            name: "Red Rose Seeds",
            price: 400,
            instock: 100,
            category: "flower"
          },
          {
            id: 5,
            image:"https://i.postimg.cc/7LdtCgrZ/knome.jpg",
            name: "Garden Knome",
            price: 1000,
            instock: 100,
            category: "decor"
          },
        ];
      

      // RENDER PRODUCTS
      function renderProducts() {
        products.forEach((product) => {
          displayproducts.innerHTML += `
          <div class="card-4">
          <div class="card-body">
              <div class="card-img-actions">
                      <img src="${product.image}" class="card-img img-fluid" width="96" height="350" alt="">
              </div>
          </div>
          <div class="card-body bg-dark text-center">
              <div class="mb-2">
                  <h6 class="font-weight-semibold mb-2">
                      <h6 class="text-light">${product.name}</h6>
                  </h6>
              </div>
              <h3 class="mb-0 font-weight-semibold text-light" >R${product.price}</h3>
              <button type="button" class="btn bg-cart" onclick="addtocart(${product.id})"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
          </div>
      </div>
              `;
        });
      }
      renderProducts();


      let cart = JSON.parse(localStorage.getItem("CART")) || [];
      updateCart();

      // adding to the cart
      function addtocart(id) {
        // check if product already exist in cart
        if (cart.some((item) => item.id === id)) {
          changeNumberOfUnits("plus", id);
          
        } else {
          const item = products.find((product) => product.id === id);
          cart.push({
            ...item,
            numberOfUnits: 1,
          });
        }

        updateCart();
      }

      // update cart
      function updateCart() {
        renderCartItems();
        renderSubtotal();

        // save cart to local storage
        localStorage.setItem("CART", JSON.stringify(cart));
      }

      // calculate and render subtotal
      function renderSubtotal() {
        let totalPrice = 0,
          totalItems = 0;

        cart.forEach((item) => {
          totalPrice += item.price * item.numberOfUnits;
          totalItems += item.numberOfUnits;
        });

        subtotalEl.innerHTML = `Total (${totalItems} products): R${totalPrice.toFixed(2)}`;
      }

      // render cart items
      function renderCartItems() {
        cartItemsEl.innerHTML = ""; // clear cart element
        cart.forEach((item) => {
          cartItemsEl.innerHTML += `
          <div class="cart-items">
          <div class="product-img">
            <img src="${item.image}" alt="" class="cart-images">
          </div>
          <p>${item.name}</p>
          <p>${item.price}</p>
          <div class="units">
          <span  onclick="changeNumberOfUnits('minus', ${item.id})">-</span>
          <p>${item.numberOfUnits}</p>
          <span  onclick="changeNumberOfUnits('plus', ${item.id})">+</span>
          </div>
          <button type="button" class="btn btn-danger" onclick="remove(${item.id})">x</button>
            `;
        });
      }

      // remove item from cart
      function remove(id) {
        cart = cart.filter((item) => item.id !== id);

        updateCart();
      }

      // change number of units for an item
      function changeNumberOfUnits(action, id) {
        cart = cart.map((item) => {
          let numberOfUnits = item.numberOfUnits;

          if (item.id === id) {
            if (action === "minus" && numberOfUnits > 1) {
              numberOfUnits--;
            } else if (action === "plus" && numberOfUnits < item.instock) {
              numberOfUnits++;
            }
          }

          return {
            ...item,
            numberOfUnits,
          };
        });

        updateCart();
      }

      function sort() {
        products.reverse();
        displayproducts.innerHTML = "";
        renderProducts();
      }

      
      

  
