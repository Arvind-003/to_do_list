var addToDoButton = document.getElementById("addToDo");
var toDoContainer = document.getElementById("toDoContainer");
var inputField = document.getElementById("inputField");
var i = 0;
var count = document.getElementsByClassName("countDiv")[0];
count.innerText = i;
addToDoButton.addEventListener("click", function (e) {
  // create li Element

  var li = document.createElement("li");
// class added
  li.className = "collection-item";
//   created text node and appended to li
  li.appendChild(document.createTextNode(inputField.value));
  
  li.style.marginLeft = "30px";
  
  li.style.fontSize = "1.6rem";
  
  li.style.color = "white";
//   created anchor tag for cross
  const link = document.createElement("a");
//   added class to anchor tag
  link.className = "delete-item secondary-content";
//   added cross using font awesome
  link.innerHTML = '  <i class="fas fa-times"></i>';
//   appended the link to  li
  li.appendChild(link);
  
  const taskList = document.querySelector("#toDoContainer");
//   appended li to ul
  taskList.appendChild(li);
//   for clearing the input box
  inputField.value = "";
//   now we are doing css part for the cross;
  var cross = document.getElementsByClassName("delete-item")[i];
  cross.style.cursor = "pointer";
  cross.style.float = "right";
//   to keep track of index and number of task created;
  i++;
  var count = document.getElementsByClassName("countDiv")[0];
  count.innerText = i;
});
//deleting part

const taskList = document.querySelector("#toDoContainer");

taskList.addEventListener("click", removeTask);

function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    e.target.parentElement.parentElement.remove();
    i--;
    var count = document.getElementsByClassName("countDiv")[0];
    count.innerText = i;
  }
}
