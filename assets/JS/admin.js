let products = JSON.parse(localStorage.getItem("CART"));
let display = document.querySelector(".tbody")
let nameProduct = document.querySelector("#AddName");
let price = document.querySelector("#AddPrice");
let picture = document.querySelector("#AddImage");

// add items

function add() {
    if (nameProduct.value == "" && price.value == "") {
        alert("Inputs are empty");
      } else {
        products.push({
          id: 1,
          picture: picture.value,
          nameProduct: nameProduct.value,
          price: price.value,
        });
      }
      nameProduct.value = "";
      price.value = "";
      picture.value = "";
      display.value = "";
      renderProducts();
      localStorage.setItem("CART", JSON.stringify(cart));
}

function renderProducts() {
    display.innerHTML = "";
    products.forEach((product) => {
      display.innerHTML += `
      <tr>
      <th scope="row">${product.id}</th>
      <td>${product.name}</td>
      <td><img src="${product.image}" class="table-img"></td>
      <td>${product.price}</td>
      <td><button type="button" class="btn btn-success" id="edit">Edit</button>
      <button type="button" class="btn btn-success">Remove</button>
      </td>

    </tr>
          `;
    });
  }
  renderProducts();
