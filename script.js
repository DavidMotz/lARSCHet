"use strict";

// Was wir jetzt brauchen ist ein/e ...
// pickWord(Block1)pickWord(Block2)pickWord(Block3)pickWord(Block4)pickWord(Block5)...
//  bis pickWord(Block6) ... zur ... pickWord(Block7) pickWord(Block8) ... der ... pickWord(Block9).

const headLineEl = document.querySelector(".headline");
console.log(headLineEl);
const woerter = [
  ["ein-", "zwei-", "drei-", "vier-", "fünf-", "sechs-"],
  ["tägige", "wöchige/n", "monatige/n", "fache/n", "malige/n", "hebigen/n"],
  [
    "harte/n",
    "soften",
    "optionalen/n",
    "intrasparente/n",
    "alternativlose/n",
    "unumkehrbare/n",
  ],
  ["Wellenbrecher", "Brücken-", "Treppen-", "Wende-", "Impf-", "Ehren-"],
  ["Lockdown", "Stopp", "Maßnahme", "Kampagne", "Sprint", "Matrix"],
  [
    "zum Sommer",
    "auf Weiteres",
    "zur Bundestagswahl",
    "2030",
    "nach den Abiturprüfungen",
    "in die Puppen",
  ],
  [
    "sofortigen",
    "nachhaltigen",
    "allmählichen",
    "unausweichlichen",
    "wirtschaftschonenden",
    "willkürlichen",
  ],
  [
    "Senkung",
    "Steigerung",
    "Beendigung",
    "Halbierung",
    "Vernichtung",
    "Beschönigung",
  ],
  [
    "Infektionszahlen",
    "privaten Treffen",
    "Wirtschaftsleistung",
    "Wahlprognosen",
    "dritten Welle",
    "Bundeskanzlerin",
  ],
];

// const block1 = ["ein-", "zwei-", "drei-", "vier-", "fünf-", "sechs-"];
// const block2 = [
//   "tägige",
//   "wöchige/n",
//   "monatigen/n",
//   "fache/n",
//   "malige/n",
//   "hebigen/n",
// ];
// const block3 = [
//   "harte/n",
//   "soften",
//   "optionalen/n",
//   "intrasparente/n",
//   "alternativlose/n",
//   "unumkehrbare/n",
// ];
// const block4 = [
//   "Wellenbrecher",
//   "Brücken-",
//   "Treppen-",
//   "Wende-",
//   "Impf-",
//   "Ehren-",
// ];
// const block5 = [
//   "Lockdown",
//   "Stopp",
//   "Maßnahme",
//   "Kampagne",
//   "Sprint",
//   "Matrix",
// ];
// const block6 = [
//   "zum Sommer",
//   "auf Weiteres",
//   "zur Bundestagswahl",
//   "2030",
//   "nach den Abiturprüfungen",
//   "in die Puppen",
// ];
// const block7 = [
//   "sofortigen",
//   "nachhaltigen",
//   "allmählichen",
//   "unausweichlichen",
//   "wirtschaftschonenden",
//   "willkürlichen",
// ];
// const block8 = [
//   "Senkung",
//   "Steigerung",
//   "Beendigung",
//   "Halbierung",
//   "Vernichtung",
//   "Beschönigung",
// ];
// const block9 = [
//   "Infektionszahlen",
//   "privaten Treffen",
//   "Wirtschaftsleistung",
//   "Wahlprognosen",
//   "dritten Welle",
//   "Bundeskanzlerin",
// ];

const rollDice = () => {
  return Math.trunc(Math.random() * 6) + 1;
};

const pickWord = (arr) => {
  let dice = rollDice();
  console.log(dice);
  return arr[dice - 1];
};

// for (let i = 0; i < block8.length; i++) {
//   console.log(i, block8[i]);
// }

console.log(woerter[1][2]);

const fullSentence = [];

for (let i = 1; i < 10; i++) {
  let word = woerter[i - 1][rollDice() - 1];
  console.log(word);
  //   console.log(woerter[i][rollDice()]);
  fullSentence[i - 1] = word;
  //   fullSentence.push(pickWord(giveArr));
}

console.log(
  `Was wir jetzt brauchen ist ein/e ${fullSentence[0]} ${fullSentence[1]} ${fullSentence[2]} ${fullSentence[3]} ${fullSentence[4]} bis ${fullSentence[5]} zur ${fullSentence[6]} ${fullSentence[7]} der ${fullSentence[8]}`
);

const sentence = `Was wir jetzt brauchen ist ein/e ${fullSentence[0]}${fullSentence[1]} ${fullSentence[2]} ${fullSentence[3]} ${fullSentence[4]} bis ${fullSentence[5]} zur ${fullSentence[6]} ${fullSentence[7]} der ${fullSentence[8]}`;
// console.log(fullSentence);
headLineEl.textContent = sentence;
