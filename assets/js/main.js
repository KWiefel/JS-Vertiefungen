// ==================================== lev1_10: logical operators ===============================

// Deklariere drei Variablen "x", "y", "z". Gebe diesen Variablen Werte.
// let x = 10;
// let y = 15;
// let z = 20;

let x = 10;
let y = 15;
let z = 20;

// Überprüfe das Ergebnis, ob x größer als z ist AND(&&) x größer als y ist.
function compare0() {
  const answer = x > z && x > y;
  console.log(answer);
}
compare0();

// Überprüfe das Ergebnis, ob x NICHT gleich y ist.
function compare1() {
  const answer = x !== y;
  console.log(answer);
}
compare1();

// Überprüfe das Ergebnis, ob z kleiner als y ist OR(||) z größer als x ist.
function compare2() {
  const answer = z < y || z > x;
  console.log(answer);
}
compare2();

// Überprüfe das Ergebnis, ob x gleich z ist OR x NICHT gleich y ist.
function compare3() {
  const answer = x === z || x !== y;
  console.log(answer);
}
compare3();

// Überprüfe das Ergebnis, ob x größer oder gleich 10 ist AND y kleiner oder gleich 10 ist.
function compare4() {
  const answer = x >= 10 && y <= 10;
  console.log(answer);
}
compare4();

// Überprüfe das Ergebnis, ob x multipliziert mit z kleiner als 100 ist OR ob x multipliziert mit y größer als 100 ist.
function compare5() {
  const answer = x * z < 100 || x * y > 100;
  console.log(answer);
}
compare5();

// ==================================== lev1_6: functions return ===============================

// Deklariere die Funktion returnOne() und in Funktionskörper {} schreibe folgendes:
// return 1;
// Deklariere die Variable x mit Wert 1, außerhalb des funktionskörpers;
// Deklariere die Variable y mit Wert returnOne(), außerhalb des funktionskörper;
// Füge, außerhalb der funktionskörpers, hinzu:
// if (x === y) {
//   console.log("Wird das gedruckt?");
// }
// In diesem Code wird geschrieben: Wenn x gleich y ist, dann wird in der Konsole “Wird das gedruckt?” angezeigt. Wenn x ungleich y ist, dann wird es nicht angezeigt.

// Am Beispiel dieser Aufgabe lernst du, was der Unterschied zwischen Variablen und Funktionen ist.

function returnOne() {
  return 1;
}

const x1 = 1;
const y1 = returnOne();

if (x1 === y1) {
  console.log("Wird das gedruckt?");
}

// ==================================== Functions-Vertiefung-Level-1_7 ===============================

// In dieser Aufgabe soll geübt werden, wie Parameter eingesetzt werden können.
// Erstelle dazu eine Funktion, die einen Parameter hat und multipliziere diesen mit 2.
// Gib das Ergebnis mit return zurück und schaue dir das Ergebnis schließlich in der Konsole an.

function multi(paramOne) {
  return paramOne * 2;
}

console.log(multi(8));

// ==================================== Functions-Vertiefung-Level-1_8 ===============================

// Diesesmal sollst du eine Funktion zur Berechnung deines Alters schreiben. Setze dafür folgende Schritte nacheinander um
// Definiere eine Funktion, die einen Parameter hat: yearBorn.
// Nutze im Funktionskörper return, um dein Alter zu berechnen und zurückzugeben.
// Gib dein Alter schließlich in der Konsole aus.

function agecalculator(yearBorn) {
  return Math.abs(yearBorn - 2023);
}
console.log(agecalculator(1995));

// Die erste Funktion ist geschafft - super! Schreibe nun eine Funktion, die dein Alter mit dem Alter einer/s anderen Teilnehmer:in vergleicht.
// Definiere eine Funktion die zwei Parameter hat.
// Benutze im Funktionskörper die Parameter um die Differenz eurer Alter zu berechnen und speichere es dir in der Variablen alterDiff ab.
// Returne dir das Ergebnis und gib die Altersdifferenz in der Konsole aus.

function ageCompare(yearBornX, yearBornY) {
  const alterDiff = Math.abs(yearBornX - yearBornY);
  return alterDiff;
}
console.log(ageCompare(1995, 1980));

// ==================================== Conditionals-Level-1_1 ===============================

// Lernziel: Anwendung und Syntax von if/else-Statements in JavaScript, um bedingte Logik im Code zu integrieren
// Wir benötigen eine Abfrage, um zu überprüfen, ob der Benutzer volljährig ist. Deklariere die Funktion adult().
// Erstelle eine HTML-Datei mit einem Formular zur Eingabe des Alters und einem Button für die Überprüfung.
// Im Funktionskörper:
// Wenn das eingegebene Alter größer oder gleich 18 ist, gib true zurück.
// Ist das eingegebene Alter kleiner als 18, gib false zurück.
// Lass Dir das Ergebnis der Funktion im HTML in “Volljährig” oder “Minderjährig” ausgeben.

function adult() {
  let age = document.body.querySelector("body form input");
  let result = document.body.querySelector(".result");

  if (age.value < 18) {
    result.textContent = "Minderjährig";
  } else {
    result.textContent = "Volljährig";
  }
}

// ==================================== Conditionals-Level-1_2 ===============================

// Erstelle ein HTML-Formular zur Eingabe der Wetter-Qualität in Zahlen von 0 bis 10.
// Deklariere die Funktion weather(), nutze im Funktionskörper Conditional Statements (if...else) und gebe die Ergebnisse im HTML aus:
// Bei einer Qualität zwischen 8 und 10 soll das Ergebnis 'super' sein.
// Bei einer Qualität zwischen 6 und 7 soll das Ergebnis 'gut' sein.
// Bei einer Qualität zwischen 3 und 5 soll das Ergebnis 'okay' sein.
// Bei einer Qualität zwischen 0 und 2 soll das Ergebnis 'schlecht'.

function weather() {
  const input = document.body.querySelector("body form:nth-of-type(2) input");
  const result = document.body.querySelector(".result2");

  if (input.value >= 8) {
    result.textContent = "Super";
  } else if (input.value >= 6 && input.value <= 7) {
    result.textContent = "Gut";
  } else if (input.value >= 3 && input.value <= 5) {
    result.textContent = "Okay";
  } else if (input.value <= 2) {
    result.textContent = "Schlecht";
  } else {
    result.textContent = "ERROR";
  }
}

// ==================================== Conditionals-Level-1_3 ===============================

// Verwende den Code aus der Aufgabe Level 1_1.
// Füge zu den Zusatzcode aus dem Code-Snippet hinzu.
// Ändere die Bedingung und schreibe (document.getElementById(‘input’).value >= 18).
// Wenn die Bedingung wahr ist, gib im HTML "Ja, Du kannst Shisha rauchen" aus.
// Wenn die Bedingung falsch ist, gib "Du darfst noch nicht Shisha rauchen" aus.
// Schreibe in die erste Zeile deiner Funktion: event.preventDefault();
// Es verhindert einen Link die URL zu öffnen.

function greaterThan() {
  const age = document.body.querySelector("body form:nth-of-type(3) input");
  const result = document.body.querySelector(".result3");

  if (age.value >= 18) {
    result.textContent = "Ja, du kannst Shisha rauchen";
  } else {
    result.textContent = "Du darfst noch nicht Shisa rauchen";
  }
}

// ==================================== Conditionals-Level-2_1 ===============================

// John und Meike spielen ein Spiel, bei dem sie Punkte für Größe und Alter erhalten.
// Wer bekommt mehr Punkte? John ist 170 cm groß und 22 Jahre alt, Meike ist 168 cm groß und 34 Jahre alt.
// Multipliziere das Alter mit 5 und addiere die Größe.
// Vergleiche die Spieler:innenwerte mit if, else if Statements. Wer die meisten Punkte bekommt, gewinnt.
// Gib die Punkte und den/die Gewinner:in in deiner Konsole aus.
// Vergiss nicht Unentschieden (draw) zu behandeln.

function game() {
  let ageJohn = 22;
  let ageMeike = 34;
  let heightJohn = 170;
  let heightMeike = 168;

  const resultJohn = ageJohn * 5 + heightJohn;
  const resultMeike = ageMeike * 5 + heightMeike;

  console.log(resultJohn);
  console.log(resultMeike);

  if (resultJohn > resultMeike) {
    console.log("John gewinnt das Spiel mit " + resultJohn);
  } else {
    console.log("Meike gewinnt das Spiel mit " + resultMeike);
  }
}

game();

// ==================================== Conditionals-Level-2_2 ===============================
// Das Lernziel dieser Aufgabe ist die Verwendung und das Verstehen von Conditional Statements wie if/else
// Erstelle ein HTML-Formular, um mit einem Range-Slider die Luftqualität (AQI:air-quality-index) in einem Bereich von 0 bis 150 anzuzeigen.
// Das Ergebnis soll in HTML ausgegeben werden. Dazu sollte jeweils die Hintergrundfarbe vom body angepasst werden.
// Deklariere die Funktion checkAirQuality() und nutze im Funktionskörper Conditional Statements (if...else).

// Bei einer Qualität kleiner-gleich 50 ist das Ergebnis: Level of health concern: Good Level of health effect: Little or no risk
// Bei einer Qualität kleiner 50 und kleiner-gleich 100 ist das Ergebnis: Level of health concern: Moderate Level of health effect: Acceptable quality
// Bei einer Qualität kleiner 100 und kleiner-gleich 150 ist das Ergebnis: Level of health concern: Unhealthy for sensitive groups Level of health effect: Generable publics not likely affected

function checkAirQuality() {
  const airQuality = document.body.querySelector(
    "body form:nth-of-type(4) input"
  );
  const healtConcern = document.body.querySelector(".health-concern");
  const healtEffect = document.body.querySelector(".health-effect");

  if (airQuality.value <= 50) {
    healtConcern.textContent = "Level of health concern: Good";
    healtEffect.textContent = "Level of health effect: Little or no risk";
  } else if (airQuality.value > 50 && airQuality.value <= 100) {
    healtConcern.textContent = "Level of health concern: Moderate";
    healtEffect.textContent = "Level of health effect: Acceptable quality";
  } else if (airQuality.value > 100 && airQuality.value <= 150) {
    healtConcern.textContent =
      "Level of health concern: Unhealthy for sensitive groups";
    healtEffect.textContent =
      "Level of health effect: Generable publics not likely affected";
  }
}

// ==================================== Conditionals-Level-2_3 ===============================

// Schreibe eine Funktion, um die Differenz zwischen einer bestimmten Zahl und 27 zu erhalten.
// Wenn die Zahl größer als 27 ist, multipliziere die Differenz mit 2.
// Lass dir das Ergebnis in der Konsole ausgeben.
// Teste die Nummern: 35, 74, 123.

function diffCalculator(number) {
  let diffResult = number - 27;

  if (number > 27) {
    diffResult = diffResult * 2;
    console.log(diffResult);
  } else {
    console.log();
  }
}

diffCalculator(35);
diffCalculator(74);
diffCalculator(123);

// ==================================== Conditionals-Level-2_4 ===============================

// Schreibe eine Funktion mit zwei Parametern (Zahlen).
// Die Funktion soll die Summe dieser Zahlen berechnen.
// Wenn beide Parameter gleich sind, soll sie (Summe * 5) ausgeben.

function calculator(numberOne, numberTwo) {
  result = numberOne + numberTwo;

  if (numberOne == numberTwo) {
    console.log(result * 5);
  } else {
    console.log(result);
  }
}

calculator(1, 2);
calculator(2, 2);
