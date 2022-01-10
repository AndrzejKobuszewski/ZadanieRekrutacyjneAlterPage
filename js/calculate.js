//do testów w 'jest' odkomentuj ponżej 'module.exports = CalculateByContext;'!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//do uruchomienia w przeglądarce zakomentuj poniższą linię
//module.exports = CalculateByContext;



// Tworzę funkcję, która utworzy tablicę z pól input_*
function CreateTable() {
  // tworzę uchwyty do inputów zamieniając wszytskie możliwe stringi na liczby zmiennoprzecinkowe
  let input_a = parseFloat(document.getElementById("input_a").value);
  let input_b = parseFloat(document.getElementById("input_b").value);
  let input_c = parseFloat(document.getElementById("input_c").value);
  let input_d = parseFloat(document.getElementById("input_d").value);
  let input_e = parseFloat(document.getElementById("input_e").value);
  let input_f = parseFloat(document.getElementById("input_f").value);
  //tworzę tablicę z wartości inputów
  let tableSource = [input_a, input_b, input_c, input_d, input_e, input_f];
return tableSource;
}

//tworzę funkcję utworzenia tablicy tylko z elementów nie będących NaN - to również jest zabezpieczenie przed dostarczeniem niepoprawnch danych wejściowych.;
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

// Funkcja calculateByContext która przyjmuje dwa argumenty - kontekst 
// oraz tablicę liczb. Funkcja zwraca wynik działania na liczbach z tablicy w zależności od kontekstu.
function CalculateByContext(context, table) {
  //definiuję zmienne
  let digits = table;
  let result;
  //Weryfikuję typ danych wejściowych
  if ((typeof (context) !== "string") || digits == undefined) {
    result = "Wrong input data";
    return result;
  };
  // weryfikuję zawartość zmiennej table, czy podano liczby - Zabezpieczenie funkcji przed działaniem na niepoprawnch danych wejściowych. 
  let NumbAmount = digits.length;
  for (let i = 0; i < NumbAmount; i++) {
    if ((isNaN(digits[i])) || (typeof (digits[i]) == "string") || (NumbAmount < 2)) {
      result = "Wrong input data";
    return result;
    };
  }
  // stosuję instrukcje warunkowe w zależności od kontekstu
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
      // Zabezpieczenie funkcji przed działaniem na niepoprawnch danych wejściowych. 
      result = "Wrong input data";
  }
return result;
}

//dodaję funkcję wyświetlającą wynik w polu output
function displayResult(context, result) {
  //tworzę uchwyt
  let output = document.getElementById("output");
  //wprowadzam wartość
  if (result=="Wrong input data"){
  output.value = result;
  }
  else {
  output.value = "Działanie " + context + ". Wynik = " + result; 
  }
}


// Funkcja główna wywoływana na samym końcu
function main() {
 
  //Tworzę uchwyty dla kwadratów jako osobne kolekcje czerwonych, żółtych i niebieskich

  let redSquares = document.getElementsByClassName("bigSquare");
  let blueSquares = document.getElementsByClassName("blueSquare");
  let yellowSquares = document.getElementsByClassName("yellowSquare");

  // Dodaję event listeners kolejno do każdego kwadratu [i] z każdej grupy kwadratów [i] z listy figur
  let figury = [redSquares, blueSquares, yellowSquares];
  let operations = ["sum", "multiply", "substract"];

  for (let i = 0; i < figury.length; i++) {
    for (let j = 0; j < figury[i].length; j++) {
      figury[i][j].addEventListener('click', myFunction);
      function myFunction() {
        displayResult(operations[i], CalculateByContext(operations[i], VerifiedTable(CreateTable())));
      }
    }
  }
}
// wywołuję funkcję główną
main();


