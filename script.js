//array of random phrases, episode names, quotes from The Office
var phraseKey = ["conference room","that's what she said","pretzel day","i declare bankruptcy","bears eat beets","battlestar galactica","did i stutter","diversity day",
    "the dundies","save bandit","keep it simple stupid","it is your birthday","party planning committee","the finer things club","flonkerton","threat level midnight","goodbye toby",
    "lanch party","ryan started the fire","oaky afterbirth","scott's tots","michael scott paper company","dinkin flicka","princess unicorn","vance refrigeration","dinner party"
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
// console.log(separatedPhrase)

//----------------
//create for loop that creates a space in the "playing area" for each letter in the separatedPhrase
for (var i=0; i<separatedPhrase.length; i++){
    let placeholderForLetter = document.createElement("div");
    placeholderForLetter.className = "spaceForLetter";
    document.querySelector(".blank-tiles").appendChild(placeholderForLetter);
    //placeholderForLetter.style.backgroundColor = "rgb(0,193,239)"; 
    //^applying color to test its covered area
//^for every character in the random phrase, create a div element. this div element
//will have a className of "spaceForletter". target the div with class "blank-tiles"
//and append that with the div that was just created
//----------------
    
//create a function that will display the letters in the
//playing area, but make them hidden at first
    displayedLetter = document.createElement("div");
    displayedLetter.className = "displayedLetter";
    displayedLetter.innerHTML = separatedPhrase[i];
    placeholderForLetter.appendChild(displayedLetter)
    // displayedLetter.style.color = "black";
    // console.log(displayedLetter)
//^the below should create an span element within each placholder div from above
//then I'll use innerHTML to stick the individual letters into each span
//append the value of the span into the given placeholder div
}

//first pass at button event listener
const keyButtons = document.querySelectorAll(".letter")
for(let j=0; j<keyButtons.length; j++){
    keyButtons[j].addEventListener("click",function(e){
        e.preventDefault();
        if(separatedPhrase.includes(e.target.innerHTML)){
            // e.target.style.opacity = 0.4;
            e.target.style.border = "3px solid green";
        }
        // console.log("you clicked!"+" "+`${keyButtons[j].innerHTML}`) <--testing to see if i'm targeting the buttons correctly
        else{
            e.target.style.opacity = 0.4
            e.target.style.border = "3px solid red";
            console.log("that's incorrect!") //this happens if an incorrect letter is picked
        }
    })
}

//OTHER ISSUES THAT NEED SETTLING
//on clicking a letter, if it matches, turn off that letter's "display: none"
//i just noticed that i can get the same two random phrases in a row... find a way to disable that