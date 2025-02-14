// Open, close navigation menu
function openCloseNav(){

    var menu = document.getElementById("nav_menu");

    // navigation menu is closed
    if (menu.style.transform == 'translateX(0%)' | menu.style.transform == ""){
        // Open navigation menu
        menu.style.transform = 'translateX(100%)';
    } else {
        // Close navigation menu
        menu.style.transform = 'translateX(0%)';
    }
}

// Open modal
const modal = document.querySelector(".overlay");

function openModal(){
  modal.classList.remove("hide-modal");
  modal.classList.add("show-modal");
}
// Close modal
function closeModal(){
  modal.classList.remove("show-modal");
  modal.classList.add("hide-modal");
}


// Filter pro_exp
filterSelection("all")
function filterSelection(c)
{
  var x, i;
  x = document.getElementsByClassName("carousel_card");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}
// Show filtered elements
function AddClass(element, name)
{
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}
// Hide elements that are not selected
function RemoveClass(element, name)
{
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("btn_container");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++)
{
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


function openFilter()
{
  document.getElementById("question").style.display = "block";
}

function send()
{
  var answer = document.getElementById("answer").value;
  if (answer.toLowerCase() == "adventure")
  {
    document.getElementById("container_e").style.display = "block";
  }
}