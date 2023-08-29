var ourlist = [];
function addTolist() {
  ourlist.push(document.getElementById("in2").value);
  UpdateToDoOnScreen();
  document.getElementById("in2").value = "";
}

function Clearlist() {
  ourlist = [];
  document.getElementById("todolist").innerHTML = " ";
}

function removeToDo(currentElement) {
  let removedToDoVar = parseInt(
    currentElement.parentElement.getAttribute("class")
  );
  ourlist.splice(removedToDoVar, 1);
  UpdateToDoOnScreen();
  // currentElement.parentElement.remove();
}

function UpdateToDoOnScreen() {
  let txt = "";
  ourlist.forEach(myFunction);
  document.getElementById("todolist").innerHTML = txt;
  function myFunction(value, index, array) {
    txt += `
        <div class="${index}">
          <input type="text" class="in" readonly value=" ${value} " />
          <button class="btn" id="${index}" onclick="return (confirm('Sure you want to delete ToDos ?'))? removeToDo(this):' '">
            Delete
          </button>
        </div>
        <br>`;
  }
}
