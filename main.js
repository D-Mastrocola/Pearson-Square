/* 
   x + y = 1    x and y are the percentage of both ingredients. They must add up to 1 (aka 100%)
   Ax + By = C

   x = 1 - y    We can now substitute and solve for y
   A(1-y) + By = C
   A - Ay + By = C
   y(B - A) = C - A Move A to other side and then factor out a y
   y = (C - A)/(B - A)

   x = 1 - y   
*/

//Grabs the form element
let form = document.querySelector("#batch-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let formData = new FormData(form);
  formData = Object.fromEntries(formData.entries());

  console.log(formData);

  let targetBF = parseFloat(formData.targetBF);
  console.log(targetBF);
  let batchAmount = parseFloat(formData.amount);
  console.log(batchAmount);
  let ingOneBF = parseFloat(formData.ingOne);
  console.log(ingOneBF);
  let ingTwoBF = parseFloat(formData.ingTwo);
  console.log(ingTwoBF);

  //this is our y value
  let amountTwo = Math.abs(targetBF - ingOneBF) / (ingTwoBF - ingOneBF); //Make sure it is positive. If the ing bf is higher than target it will be negative
  let amountOne = 1 - amountTwo;

  amountOne = Math.round(amountOne * batchAmount);
  amountTwo = Math.round(amountTwo * batchAmount);

  console.log(ingOneBF + " * " + batchAmount + " = " + amountOne);
  console.log(ingTwoBF + " * " + batchAmount + " = " + amountTwo);
});

//This is our y
/*amountTwo = abs((targetBF - ingOneBF)/(ingTwoBF - ingOneBF))  //Make sure its positive

amountOne = 1 - amountTwo //The remainder is the other ingredient

amountOne = amountOne*batchAmount //Multiply by the batch amount to get the amount for the batch
amountTwo = amountTwo*batchAmount //Ditto*/
