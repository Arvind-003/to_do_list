var addToDoButton = document.getElementById("addToDo");
var toDoContainer = document.getElementById("toDoContainer");
var inputField = document.getElementById("inputField");
var i = 0;
var count = document.getElementsByClassName("countDiv")[0];
count.innerText = i;
addToDoButton.addEventListener("click", function (e) {
  var li = document.createElement("li");

  li.className = "collection-item";

  li.appendChild(document.createTextNode(inputField.value));

  li.style.marginLeft = "5%";

  li.style.fontSize = "inherit";

  li.style.color = "white";

  const link = document.createElement("a");

  link.className = "delete-item secondary-content";

  link.innerHTML = '  <i class="fas fa-times"></i>';

  li.appendChild(link);

  const taskList = document.querySelector("#toDoContainer");

  taskList.appendChild(li);

  inputField.value = "";

  var cross = document.getElementsByClassName("delete-item")[i];
  cross.style.cursor = "pointer";
  cross.style.float = "right";

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
