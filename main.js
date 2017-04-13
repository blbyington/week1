//define var for functions
var inputs = [];
var sum = 0;
var avg = 0;

//create a function
function addFunction(event) {
  var apples = document.apples.value;
  var number = Number(apples);
  //eliminates non-numbers
  if (!isNaN(number)) {
    inputs.push(number);
    //add number from input to original number
    sum += number;
    //average of the apples, divide total number of apples by number of clicks 
    avg = sum / inputs.length;
    //count
    document.getElementById("count").innerHTML = inputs.length;
    //instert total into html
    document.getElementById("sum").innerHTML = sum;
    //instert average into html
    document.getElementById("avg").innerHTML = avg;
    
    console.log(inputs);
    console.log(sum);
    console.log(avg);
  }
  event.preventDefault();
}
//funtion to reset the forms
function formReset(event) {
    sum = 0;
    avg = 0;
    inputs = [];
}