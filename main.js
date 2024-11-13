function sentenceSwap(text) {
  let words = text.split(" ");
  console.log(words.length);
  let length = 5;
  if (length % 2 == 0) {
    console.log(length + " Is even");
  } else {
    console.log(length + " Is odd");
  }

  const firstHalf = text.slice(0, 10);
  const secondHalf = text.slice(11, 21);
  return secondHalf + firstHalf;
}

console.log(sentenceSwap("Today it's very rainy day"));

//

function textBoolean(text, toUpperCase) {
  return toUpperCase ? text.toUpperCase() : text.toLowerCase();
}

console.log(textBoolean("Today it's very rainy day", true));
console.log(textBoolean("Today it's very rainy day", false));

//

function dayToText(dag) {
  switch (dag) {
    case "Torsdag":
      console.log("Torsdag is a nice day");
      break;
    case "Fredag":
      console.log("Fredag, almost weekend!");
  }
}

dayToText("Torsdag");
dayToText("Fredag");

//

function startAndEndWithSameChar(text) {
  return text.charAt(0) === text.charAt(text.length - 1);
}

console.log(startAndEndWithSameChar("Hei på deg H"));
console.log(startAndEndWithSameChar("Bjørnar spiste brødskive med salami"));

//

function doesInpitExistInList


doesInputExistInList("Hei", ["Hei", "Salami", "Bjarte"]);
doesInputExistInList("Rød", ["Hei", "Salami", "Bjarte"]);
