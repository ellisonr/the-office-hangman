//array of random phrases, episode names, quotes from The Office
var phraseKey = [
    "conference room, five minutes",
    "that's what she said",
    "pretzel day",
    "i declare bankruptcy",
    "bears. beets. battlestar galactica",
    "did i stutter",
    "diversity day",
    "the dundies",
    "save bandit",
    "keep it simple stupid",
    "it is your birthday",
    "party planning committee",
    "the finer things club",
    "flonkerton",
    "threat level midnight",
    "goodbye toby",
    "lanch party",
    "ryan started the fire",
    "oaky afterbirth",
    "scott's tots",
    "michael scott paper company",
    "dinkin flicka",
    "here comes treble",
    "princess unicorn",
    "vance refrigeration",
    "you know i have soft teeth"
];
//console.log(phraseKey)

//function for returning a random item from the array above
function randomPhrase(){
    var a = Math.floor((Math.random()*phraseKey.length)); //from https://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array
    phraseInPlay = phraseKey[a];
    return phraseInPlay;
}
randomPhrase()
//console.log(phraseInPlay)

//create a function that will split up the random phrase
//provided into separate letters
const separatedPhrase = phraseInPlay.split("");
console.log(separatedPhrase)


//create a function that will display the letters in the
//playing area, but make them hidden at first


//for loop that puts the individual letters of the phrase
//into an array; then if the clicked letter matches a letter
//in the array, make that letter appear in the playing area

