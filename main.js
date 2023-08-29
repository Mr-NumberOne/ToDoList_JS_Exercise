var ourlist = [];
var Donelist = [];
// ToDo list
function addTolist() {
  var inputElement = document.getElementById("in2");
  if (inputElement.value.trim() != "") {
    ourlist.push(inputElement.value.trim());
    UpdateToDoOnScreen(ourlist, "todolist");
    inputElement.value = "";
  }
}
function removeToDo(currentElement) {
  let removedToDoVar = parseInt(
    currentElement.parentElement.getAttribute("class")
  );
  ourlist.splice(removedToDoVar, 1);
  // UpdateToDoOnScreen(ourlist, "todolist");
  currentElement.parentElement.remove();
}

// General
function Clearlist(List, DivID) {
  List.splice(0);
  document.getElementById(DivID).innerHTML = " ";
}

function UpdateToDoOnScreen(List, divID) {
  let txt = "";
  List.forEach(myFunction);
  document.getElementById(divID).innerHTML = txt;
  function myFunction(value, index, array) {
    if (divID == "todolist") {
      txt += `
        <div class="${index}">
          <input type="text" class="in" readonly value=" ${value} " />
          <button class="btn" id="${index}" onclick="return (confirm('Sure you want to delete ToDos ?'))? removeToDo(this):' '">
            Delete
          </button>
          <button class="btn" id="d${index}" onclick="return (confirm('Sure you want to delete ToDos ?'))? MoveToDoneList(this):' '">
            Done
          </button>
        </div>
        <br>`;
    } else {
      txt += `
        <div class="${index}">
          <input type="text" class="in" readonly value=" ${value} " style="background-color:#dedede" />
        </div>
        <br>`;
    }
  }
}

// Done ToDo list

function showDoneList() {
  document.getElementById("showDoneList").style.display = "none";
  document.getElementById("done_body").style.display = "block";
  UpdateToDoOnScreen(Donelist, "donetodolist");
}
function HideDoneList() {
  document.getElementById("showDoneList").style.display = "inline-block";
  document.getElementById("done_body").style.display = "none";
}

function MoveToDoneList(currentElement) {
  let movedToDoVar = parseInt(
    currentElement.parentElement.getAttribute("class")
  );
  let movedElement = ourlist[movedToDoVar];
  Donelist.push(movedElement);
  ourlist.splice(movedToDoVar, 1);
  currentElement.parentElement.remove();
  UpdateToDoOnScreen(Donelist, "donetodolist");
}
