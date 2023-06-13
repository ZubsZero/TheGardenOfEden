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
    },
    {
        id: 2,
        image:"",
        name: "spiderman",
        price: 100,
      },
      {
        id: 3,
        image:"",
        name: "Zubair",
        price: 100,
      },
      {
        id: 4,
        image:"",
        name: "Zubair",
        price: 100,
      },
      {
        id: 5,
        image:"",
        name: "Zubair",
        price: 100,
      },
  ];
  let display = document.querySelector(".cards-2");
    products.forEach((data) => {
    display.innerHTML += `
    <div class="card-4">
    <div class="card-body">
        <div class="card-img-actions">
                <img src="https://i.postimg.cc/8zKm67Bg/Untitled-design-removebg-preview.png" class="card-img img-fluid" width="96" height="350" alt="">
        </div>
    </div>
    <div class="card-body bg-dark text-center">
        <div class="mb-2">
            <h6 class="font-weight-semibold mb-2">
                <h6 class="text-light">${data.name}</h6>
            </h6>
        </div>
        <h3 class="mb-0 font-weight-semibold text-light" >${data.price}</h3>
        <button type="button" class="btn bg-cart" onclick="addtocart(${data.id})"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
    </div>
</div>
     `;
  });

  
  let cart = []

  

  function addtocart(id) {
    let displaycart = document.querySelector(".cart-container")
    products.forEach((data) => {
      cart.innerHTML += `
      <div class="cart-items">
      <div class="product-img">
        <img src="https://i.postimg.cc/c1bFmSGM/gardening-service-removebg-preview.png" alt="" class="cart-images">
      </div>
      <p>Large Scissor</p>
      <p>300</p>
      <div class="units">
       <span>-</span>
      <p>1</p>
      <span>+</span>
      </div>
      <button type="button" class="btn btn-danger" onclick="remove(${data.id})">x</button>
    </div>
      `;
    }
    )}

    function remove() {
      cart.pop()
    }

 