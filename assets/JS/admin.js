let products = JSON.parse(localStorage.getItem("products"));
console.log(products);
// let idNumber = products[products.length-1] ? products[products.length-1].id + 1: 1;
let addbook = document.querySelector("#addbook");
// Buttons
// let delete_button = document.querySelectorAll("#delete_btn")
let nameBook = document.querySelector("#name");
let author = document.querySelector("#author");
let price = document.querySelector("#price");
let picture = document.querySelector("#picture");
let adminInput = document.querySelector("#adminInput");
let title = document.querySelector("#title");
let sorting = document.querySelector("#sorting");
let dotoDelete;
// Delete button
function deleteButtons() {
  dotoDelete = [...document.querySelectorAll(".close-btn")];
  dotoDelete.forEach((item) => {
    item.addEventListener("click", deleteItem);
  });
}
function deleteItem(event) {
  let startPoint = dotoDelete.indexOf(event.target);
  products.splice(startPoint, 1);
  localStorage.setItem("products", JSON.stringify(products));
  bookData();
}
// Edit button
function editItem(){
    editbtn = [...document.querySelectorAll('.edit-btn')];
    editbtn.forEach((item)=>{
        item.addEventListener('click', editTodoItem)
    })
    }
    function editTodoItem(){
        let update= prompt('Enter new Item:');
        let index = editbtn.indexOf(event.target);
        clientItems[index].name = update();
        localStorage.setItem("itemlist", JSON.stringify(clientItems))
        bookData();
    }
// function EditProducts(item) {
//   this.id = item.id;
//   this.name = document.querySelector(`#name1${item.id}`).value;
//   this.image = document.querySelector(`#image1${item.id}`).value;
//   this.detail = document.querySelector(`#detail1${item.id}`).value;
//   this.price = document.querySelector(`#price1${item.id}`).value;
//   let itemIndex = manga.findIndex((data)=>{
//       return data.id == item.id;
//   })
//   manga[itemIndex] = Object.assign({}, this)
//   localStorage.setItem('manga', JSON.stringify(manga));
//   loadData();
//   let backdropIssue = document.querySelector('.modal-backdrop')
//   backdropIssue.remove()
// }
addbook.addEventListener("click", addData);
function addData(e) {
  e.preventDefault();
  if (nameBook.value == "" && author.value == "") {
    alert("Inputs are empty");
  } else {
    products.push({
      id: 1,
      picture: picture.value,
      name: nameBook.value,
      title: title.value,
      cost: price.value,
    });
  }
  nameBook.value = "";
  author.value = "";
  price.value = "";
  picture.value = "";
  adminInput.value = "";
  title.value = "";
  bookData();
  localStorage.setItem("products", JSON.stringify(products));
}
sorting.addEventListener("click", (event) => {
  event.preventDefault();
  products = products.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    } else {
      return 1;
    }
    return 0;
  });
  bookData();
});
function bookData() {
  adminInput.innerHTML = "";
  products.forEach((content) => {
    adminInput.innerHTML += `
                    <tr>
                      <th>${content.id}</th>
                      <th><img src="${content.picture}" class="" style="height:22rem;" alt=""></th>
                      <td>${content.name}</td>
                      <td>${content.title}</td>
                      <td>${content.cost}</td>
                      <td>
                      <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      id="delBtn"
                    >
                      Edit
                    </button>
                        <button id="delete_btn" class="close-btn">Delete</button>
                      </td>
                    </tr>
        `;
  });
  localStorage.getItem("products");
  deleteButtons();
}
bookData();






