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

let calcuateMix = (targetBF, ingOneBF, ingTwoBF, batchAmount) => {
  console.log(targetBF);
  console.log(batchAmount);
  console.log(ingOneBF);
  console.log(ingTwoBF);

  //this is our y value
  let amountTwo = Math.abs(targetBF - ingOneBF) / (ingTwoBF - ingOneBF); //Make sure it is positive. If the ing bf is higher than target it will be negative
  let amountOne = 1 - amountTwo;

  amountOne = Math.round(amountOne * batchAmount);
  amountTwo = Math.round(amountTwo * batchAmount);

  console.log("\n\nING 1: " + amountOne + "\nING 2: " + amountTwo);
  
};

calcuateMix(11, 4, 43, 2000);
