interface VerifiedTable {
    tableSource: any[];
}
interface CalculateByContext{
    context: string;
    table: number[];
}
interface displayResult {
    context: string; 
    result: number;
}
// function CreateTable() {
//   let input_a = parseFloat(document.getElementById("input_a").value);
//   let input_b = parseFloat(document.getElementById("input_b").value);
//   let input_c = parseFloat(document.getElementById("input_c").value);
//   let input_d = parseFloat(document.getElementById("input_d").value);
//   let input_e = parseFloat(document.getElementById("input_e").value);
//   let input_f = parseFloat(document.getElementById("input_f").value);
//   let tableSource = [input_a, input_b, input_c, input_d, input_e, input_f];
// return tableSource;
// }
function VerifiedTable(tableSource) {
  let inputs = tableSource;
  let table = [];
  for (let i = 0; i < inputs.length; i++) {
    if (isNaN(inputs[i])) {
    }
    else {
      table.push(inputs[i]);
    }
  }
  if (table.length < 1) {
    table.push('Wrong input data');
  }
return table;
}
function CalculateByContext(context, table) {
  let digits = table;
  let result;
  if ((typeof (context) !== "string") || digits == undefined) {
    result = "Wrong input data";
    return result;
  };
  let NumbAmount = digits.length;
  for (let i = 0; i < NumbAmount; i++) {
    if ((isNaN(digits[i])) || (typeof (digits[i]) == "string") || (NumbAmount < 2)) {
      result = "Wrong input data";
    return result;
    };
  }
  switch (context) {
    case "sum":
      console.log("Dodaję wszystkie liczby do siebie");
      result = 0;
      for (let i = 0; i < NumbAmount; i++) {
        result += digits[i];
      }
      break;
    case "substract":
      console.log("Odejmuję od pierwszej liczby tę drugą, od wyniku odejmuję trzecią, od wyniku odejmuję czwartą itd.");
      result = digits[0];
      for (let i = 1; i < NumbAmount; i++) {
        result -= digits[i];
      }
      break;
    case "multiply":
      console.log("Mnożę wszystkie liczby przez siebie");
      result = 1;
      for (let i = 0; i < NumbAmount; i++) {
        result *= digits[i];
      }
      break;
    default:
      result = "Wrong input data";
  }
return result;
}

function displayResult(context, result) {
  let output = document.getElementById("output");
  if (result=="Wrong input data"){
  output.value = result;
  }
  else {
  output.value = "Działanie " + context + ". Wynik = " + result; 
  }
}

// function main() {
//   let redSquares = document.getElementsByClassName("bigSquare");
//   let blueSquares = document.getElementsByClassName("blueSquare");
//   let yellowSquares = document.getElementsByClassName("yellowSquare");
//   let figury = [redSquares, blueSquares, yellowSquares];
//   let operations = ["sum", "multiply", "substract"];
//   for (let i = 0; i < figury.length; i++) {
//     for (let j = 0; j < figury[i].length; j++) {
//       figury[i][j].addEventListener('click', myFunction);
//       function myFunction() {
//         displayResult(operations[i], CalculateByContext(operations[i], VerifiedTable(CreateTable())));
//       }
//     }
//   }
// }
// main();


