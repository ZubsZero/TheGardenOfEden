const displayproducts = document.querySelector(".main");
const carttotal = document.querySelector(".price")
// / toggle cart
var toggled = true;
function toggle() {
    if (!toggled){
        toggled = true;
        document.getElementById("cartcontainer").style.display = "none";
        return;
    }
    if(toggled){
        toggled = false;
        document.getElementById("cartcontainer").style.display = "block";
        return;
    }
}
let products = [
    {
      id: 1,
      image:"",
      name: "Zubair",
      price: 100,
      instock: 100,
    },
    {
      id: 2,
      image:"",
      name: "Zubair",
      price: 100,
      instock: 100,
    },
    {
      id: 3,
      image:"",
      name: "Zubair",
      price: 100,
      instock: 100,
    },
    {
      id: 4,
      image:"",
      name: "Zubair",
      price: 100,
      instock: 100,
    },
    {
      id: 5,
      image:"",
      name: "Zubair",
      price: 100,
      instock: 100,
    },
  ];
   
  // SELECT ELEMENTS
const productsEl = document.querySelector(".products");
const cartItemsEl = document.querySelector(".cart-container");
const subtotalEl = document.querySelector(".subtotal");

// RENDER PRODUCTS
function renderProducts() {
  products.forEach((product) => {
    displayproducts.innerHTML += `
    <div class="card-4">
    <div class="card-body">
        <div class="card-img-actions">
                <img src="https://i.postimg.cc/8zKm67Bg/Untitled-design-removebg-preview.png" class="card-img img-fluid" width="96" height="350" alt="">
        </div>
    </div>
    <div class="card-body bg-dark text-center">
        <div class="mb-2">
            <h6 class="font-weight-semibold mb-2">
                <h6 class="text-light">${product.name}</h6>
            </h6>
        </div>
        <h3 class="mb-0 font-weight-semibold text-light" >${product.price}</h3>
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
  // check if prodcut already exist in cart
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

  subtotalEl.innerHTML = `Subtotal (${totalItems} items): $${totalPrice.toFixed(2)}`;
}

// render cart items
function renderCartItems() {
  cartItemsEl.innerHTML = ""; // clear cart element
  cart.forEach((item) => {
    cartItemsEl.innerHTML += `
    <div class="cart-items">
    <div class="product-img">
      <img src="https://i.postimg.cc/c1bFmSGM/gardening-service-removebg-preview.png" alt="" class="cart-images">
    </div>
    <p>Large Scissor</p>
    <p>300</p>
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
