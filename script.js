var numberOfDogs = 12;
var numberOfCats = 5;
var numberOfEmployees = 3;

// problema a)
function emptySpace(a) {
  var spaceLeft = 0;
  if (numberOfDogs > 15) console.log("Nu mai sunt locuri");
  else {
    spaceLeft = 15 - numberOfDogs;
    console.log("Mai sunt", spaceLeft, "locuri ramase");
  }
}

emptySpace(numberOfDogs);

//problema b)
function aglomerat(a, b) {
  var totalAnimale = 0;
  var locuriRamase = 0;

  totalAnimale = a + b;

  if (totalAnimale > 30) console.log("Hotelul este supra-aglomerat");
  else {
    locuriRamase = 30 - totalAnimale;
    console.log("Mai sunt", locuriRamase, "locuri ramase");
  }
}

aglomerat(numberOfCats, numberOfDogs);

//problema c)
function jucarii(a, b) {
  var numarJucarii = 0;

  numarJucarii = 3 * a + 5 * b;
  console.log("Numarul total de jucarii este:", numarJucarii);
}

jucarii(numberOfCats, numberOfDogs);

//problema d)
function ingrijit(a, b, c) {
  var numarAnimale = 0;

  numarAnimale = a + b;
  if (numarAnimale < 20 || c > 5) console.log("Animalele sunt bine ingrijite");
  else console.log("Animalele nu sunt bine ingrijite");
}

ingrijit(numberOfCats, numberOfDogs, numberOfEmployees);

//problema e)
function norocos(a, b, c) {
  var numarFiinte = 0;
  var sumaBani = 0;

  numarFiinte = a + b + c + 1;
  if (numarFiinte % 7 == 0) {
    sumaBani = c * 100;
    console.log("Vizita il va costa", sumaBani, "lei");
  } else console.log("A scapat de data asta");
}

norocos(numberOfCats, numberOfDogs, numberOfEmployees);

//problema f) g)

function paritateSiSau(a, b) {
  if (a % 2 == 1 && b % 2 == 1) console.log("Paritate SI");
  else if (a % 2 == 1 || b % 2 == 1) console.log("Paritate Sau");
  else console.log("Ambele sunt pare");
}

paritateSiSau(numberOfCats, numberOfDogs);
