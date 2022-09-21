function myFunction() {
    document.getElementById("demo").innerHTML = Date();
    document.getElementById("demo").style.color = "white";  
  }
  function blackBackground() {
    document.getElementById("bg").style.backgroundColor = "black";     
  }
  function switchColor(sw) {
    var pic;
    if (sw == 0) {
      pic = "white"
      document.getElementById("cb").style.color = "black";
    } else {
      pic = "black"
      document.getElementById("cb").style.color = "white";
    }
    document.getElementById('bg').style.backgroundColor = pic;
  }



/* for user input*/ 
const inputs = document.querySelectorAll('input')
inputs.forEach(input => input.addEventListener('keyup', validateInput))

function validateInput(e) {
  e.target.setAttribute(
    'aria-valid',
    e.target.value ? 'true' : 'false'
  )
}