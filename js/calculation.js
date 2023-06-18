//error message
const inputFields = document.querySelectorAll("input");
//looping to get all input field
for (let input of inputFields) {
  input.addEventListener("keyup", function (event) {
    const inputValue = event.target.value;

    //validating for number type and and negative inputs
    if (isNaN(inputValue) || inputValue < 0) {
      event.target.value = "";
      alert("Error: Please insert numbers only");
    } else {
      return;
    }
  });
}


//random background generator
const cards = document.querySelectorAll(".card");
for (let card of cards) {
  card.addEventListener("mouseover", function () {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    card.style.backgroundColor = "#" + randomColor;
  });
}

//triangle calculation
document.getElementById("triangle").addEventListener("click", function (event) {
  //passing ids to get multiplied number
  const bh = inputMultiplication("triangleB", "triangleH");

  if (bh) {
    const calculatedTriangle = 0.5 * bh;
    const result = calculatedTriangle.toFixed(2);
    creatingList("Triangle", result);
    displayCalculation("triangle-result", result);
    //enabling reset button
    document.getElementById("btn-reset").classList.remove("d-none");
  }
  return;
});

//rectangle calculation
document
  .getElementById("rectangle")
  .addEventListener("click", function (event) {
    //passing ids to get multiplied number
    const wl = inputMultiplication("rectangleW", "rectangleL");

    if (wl) {
      const result = wl.toFixed(2);
      creatingList("Rectangle", result);
      displayCalculation("rectangle-result", result);
      //enabling reset button
      document.getElementById("btn-reset").classList.remove("d-none");
    }
    return;
  });

//parallelogram calculation
document
  .getElementById("parallelogram")
  .addEventListener("click", function (event) {
    //passing ids to get multiplied number
    const bh = inputMultiplication("parallelogramB", "parallelogramH");

    if (bh) {
      const result = bh.toFixed(2);
      creatingList("Parallelogram", result);
      displayCalculation("parallelogram-result", result);
      //enabling reset button
      document.getElementById("btn-reset").classList.remove("d-none");
    }
    return;
  });

document.getElementById("rhombus").addEventListener("click", function (event) {
  //passing ids to get multiplied number
  const d1d2 = inputMultiplication("rhombusD1", "rhombusD2");

  if (d1d2) {
    const calculatedRhombus = 0.5 * d1d2;
    const result = calculatedRhombus.toFixed(2);
    creatingList("Rhombus", result);
    displayCalculation("rhombus-result", result);
    // enabling reset button
    document.getElementById("btn-reset").classList.remove("d-none");
  }
  return;
});

//pentagon calculation
document.getElementById("pentagon").addEventListener("click", function (event) {
  //passing ids to get multiplied number
  const pb = inputMultiplication("pentagonP", "pentagonB");

  if (pb) {
    const calculatedPentagon = pb * 0.5;
    const result = calculatedPentagon.toFixed(2);
    creatingList("Pentagon", result);
    displayCalculation("pentagon-result", result);
    // enabling reset button
    document.getElementById("btn-reset").classList.remove("d-none");
  }
  return;
});

//ellipse calculation
document.getElementById("ellipse").addEventListener("click", function (event) {
  //calculation
  const pi = 3.14;
  //passing ids to get multiplied number
  const ab = inputMultiplication("ellipse-a", "ellipse-b");

  //pushing into the list
  if (ab) {
    const calculatedEllipse = pi * ab;
    const result = calculatedEllipse.toFixed(2);
    creatingList("Ellipse", result);
    displayCalculation("ellipse-result", result);
    //enabling reset button
    document.getElementById("btn-reset").classList.remove("d-none");
  }
  return;
});

//convert
function convertCm2M(cm) {
  //meter container selecting
  const meterMainContainer = document.getElementById("meter-container");
  const meterContainer = document.getElementById("meter-area");

  //conversion
  const meter = cm / 10000;
  const meter2decimal = meter.toFixed(2);

  //pushing result into meter container
  const li = document.createElement("li");
  li.innerHTML = `<div class='d-flex justify-content-center'><span>${meter2decimal}m<sup>2</sup></span></div>`;
  li.classList.add("result-meter");
  meterMainContainer.classList.remove("d-none");
  meterContainer.appendChild(li);
}

//resetBTN
document.getElementById("btn-reset").addEventListener("click", function (e) {
  // emptying result container
  document.getElementById("area-cal").innerText = "";
  
  //hiding reset button
  e.target.classList.add("d-none");
});
