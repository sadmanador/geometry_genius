//common function to multiplied value
function inputMultiplication(num1, num2) {
  //selecting the input fields
  let a = document.getElementById(num1).value;
  let b = document.getElementById(num2).value;

  //resetting input value
  document.getElementById(num1).value = "";
  document.getElementById(num2).value = "";

  //checking whether the both inputs are filled or not
  if (a == "" || b == "") {
    alert("Please insert both of the input fields");
    return;
  }
  return a * b;
}


//creating result list
function creatingList(name, calculatedValue) {
  //result container
  const listContainer = document.getElementById("area-cal");

  //creating and pushing the result into container
  const li = document.createElement("li");
  li.innerHTML = `<div class='d-flex justify-content-around align-items-center my-2'>
  <span>${name}</span>
    <span>${calculatedValue}cm<sup>2</sup></span>
    <button onclick='convertCm2M(${calculatedValue})' class='btn btn-info btn-sm text-white convert'>Convert to m<sup>2</sup></button></div>`;
  li.classList.add("calculated-result");
  listContainer.appendChild(li);
}


//displaying the result in the card
function displayCalculation(id, result) {
  const idField = document.getElementById(id);
  
  //checking the whether the value aren't zero
  if(result !== 0.00){
    idField.innerHTML = `${result} <span>cm<sup>2</sup></span>`;
  }
  else{
      idField.style.display = 'none';
  }
}
