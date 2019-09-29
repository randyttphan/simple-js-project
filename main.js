var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

//Form submit event
form.addEventListener("submit", addItem);

//Delete event
itemList.addEventListener("click", deleteItem);

//Filtering event
filter.addEventListener("keyup", filterItems);

//The function to add an item into the list and also adding a delete button with the item.
function addItem(e) {
  e.preventDefault();

  //Get the input text value
  var newItem = document.getElementById("item").value;

  //Create new li element
  var li = document.createElement("li");
  //Adding a class name to it
  li.className = "list-group-item";
  //Adding a text node with input value
  li.appendChild(document.createTextNode(newItem));

  //Creating delete button element
  var deleteButton = document.createElement("button");

  //Adding classes to delete button
  deleteButton.className = "btn btn-danger btn-sm float-right delete";
  //Appending text node
  deleteButton.appendChild(document.createTextNode("X"));

  //Appending button to li
  li.appendChild(deleteButton);

  //Appending li to list
  itemList.appendChild(li);
}

function deleteItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function filterItems(e) {
  //conversion of text to lowercase to match
  var text = e.target.value.toLowerCase();

  //Grabbing all the items in the UL (li)
  var items = itemList.getElementsByTagName("li");

  //Need to convert collection into array
  Array.from(items).forEach(function(item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
