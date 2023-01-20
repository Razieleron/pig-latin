function pigLatin(letter) {
  let vowelPigLatinizer = "way";
  return letter + vowelPigLatinizer;
}

function pigLatin(letter) {
  let vowelPigLatinizer = "way";
  let consonantPigLatinizer = "ay";
  if letter = ["a", "e", "i", "o", "u"]
    return letter + vowelPigLatinizer;
  else return letter + consonantPigLatinizer;
}

function pigLatin(letter) {
  let vowelPigLatinizer = "way";
  let consonantPigLatinizer = "ay";
  let quPigLatinizer = "ay"
  if letter = ["a", "e", "i", "o", "u"]
  return letter + vowelPigLatinizer;
  if letter = ["qu"]
  return letter + quPigLatinizer;
  if letter = [any consonant]
  return letter + consonantPigLatinizer;
}

function pigLatin(word) {
  let wordArray = word.split()
  // wordArray = [w, o, r, d]
  wordArray[0] = wordArray[0] + "ay"
  // wordArray = [way, o, r, d]
  let conjugatedWord = wordArray.join("")
  return conjugatedWord
  // conjugatedWord = "wayord"

function pigLatin(quilt) {
  let wordArray = quilt.split("")
  // wordArray = [q, u, i, l, t] 
  if wordArray[0] = (a, e, i, o, u)

    for (let wordArray[wordArray.length] = way)

    then wordArray[0] = wordArray[0] + vowelPigLatinizer
  if wordArray[0] = (q)
    then wordArray[0] = wordArray[1] + quPigLatinizer
  // wordArray = [q, uay, i, l, t]
  else, wordArray[0] = wordArray[0] + consonantPigLatinizer

  let conjugatedWord = wordArray.join("")
  return conjugatedWord:
  // conjugatedWord = quayilt
}

wordArray = word.split
// wordArray = [w, o, r, d]
do thing
// add ay to w so wordArray = [way, o, r, d]
etherealWordArray = []
etherealWordArray.push(wordArray[1])
etherealWordArray.push(wordArray[2])
etherealWordArray.push(wordArray[3])
etherealWordArray.push(wordArray[0])

etherealWordArray = [o, r, d, way]
ConjugatedWord = etherealWordArray.join("");
ConjugatedWord = "ordway"


function pigLatin(me too buddy)
  let sentenceArray = me too buddy.split(" ")
  // sentenceArray = ["me", "too", "buddy"]
  let word1Array = sentenceArray[0].split("")
  // word1Array = [m, e]
  let word2Array = sentenceArray[1].split("")
  // word2Array = [t, o, o]
  let word3Array = sentenceArray[2].split("")
  // word3Array = [b, u, d, d, y]
}

if there is a way where we can separate each character

function pigLatin (word) {
	word.slice(0,0)
  
  if index[0] = "q"
  quick.slice(0,0) + quick.slice(0,1).concat("quay")
  if index[0] = (a, e, i, o, u)
  eye.concat("way")
  else word.slice(0,0)
  return word
  ickqu as output
}

let finishedWord = word.slice(0,0).concat("any consonant + ay")

somebody type something


:::::EXERCISE::::

have a string of x length, say 'macaroni'
move index[0] to the end of the Array


function pigLatin(word)
for (let i= 0; i < word.length; i++) {
  if (word[i].startsWith("qu"){
    word[i].slice(0,2);
  });
}
// so what is word = ? quick -> ick

function pigLatin(word)
for (let i= 0; i < word.length; i++) {
  if (word[i].startsWith("a", "e", "i", "o", "u"){
    word.concat("way");
  });

function pigLatin(word)
for (let i= 0; i < word.length; i++) {
  if (word[i].startsWith(!"qu", !"a", !"e", !"i", !"o", !"u")) {
    word[i].slice(0,1);
  }
}








function convertToPigLatin(sentence) {
  let words = sentence.split(" ");
  let pigLatinWords = words.map(function(word) {
    let firstLetter = word[0];
    return word.slice(1) + firstLetter + "ay";
  });
  return pigLatinWords.join(" ");
}


function convertToPigLatin(sentence) {
  let words = sentence.split(" ");
  let pigLatinWords = words.map(function(word) {
    if(/^[aeiou]/i.test(word)) return word+"way"; // start with vowels
    if(/^qu/i.test(word)) return word.slice(2) + "quay"; // start with qu
    let firstLetter = word[0];
    return word.slice(1) + firstLetter + "ay";
  });
  return pigLatinWords.join(" ");
}




























