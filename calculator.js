// Function to add the clicked button value to the display screen
function addToScreen(value) {
    document.getElementById('result').value += value;
  }
  
  // Function to clear the display screen
  function clearScreen() {
    document.getElementById('result').value = '';
  }
  
  // Function to calculate the result
  function calculate() {
    let result = document.getElementById('result').value;
    let calculatedResult = eval(result); // Use eval() to perform the calculation
    document.getElementById('result').value = calculatedResult;
  }
  var scr = "";
  function backspace() {
    let b = document.getElementById("result").value;
    scr = b.substring(0, b.length - 1);
    document.getElementById("result").value = scr;
}