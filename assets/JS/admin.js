let selectedrow = null


function add() {


const Name = document.querySelector("#AddName").value;
const Price = document.querySelector("#AddAmount").value;
const Image = document.querySelector("#AddImage").value;

if (Name === "" || Price === "" || Image === "" ) {
    alert("Please fill in the needed information");
} else {
    if(selectedrow == null) {
        const list = document.querySelector(".tbody");
        const row = document.createComment("tr");
        row.innerHTML = `
        <th scope="row">1</th>
                <td>${Name}</td>
                <td><img src="${Image}" class="table-img"></td>
                <td>${Price}</td>
                <td><button type="button" class="btn btn-success" id="edit">Edit</button>
                <button type="button" class="btn btn-success">Remove</button>
                </td>
        `;
        list.appendChild(row);
        selectedrow = null;
        alert("Added")

        

    }

}
}
add();
