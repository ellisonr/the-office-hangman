var phraseKey = ["scranton","pretzel day","bears eat beets","battlestar galactica","did i stutter","diversity day","sabre","dundies","schrute farm","muckduck","chair model",
    "save bandit","it is your birthday","party planning committee","finer things club","flonkerton","threat level midnight","goodbye toby","james trickington",
    "lanch party","ryan started the fire","oaky afterbirth","scott's tots","rundown","dinkin flicka","princess unicorn","dinner party","frolf","voodoo mama juju",
    "jim halpert","pam beesly","dwight schrute","todd packer","the temp","ryan howard","creed bratton","meredith palmer","michael scott","stanley hudson","serenity by jan",
    "phyllis vance","andy bernard","nard dog","erin hannon","plop","magic jordan","gabe lewis","kelly kapoor","the dementors","hirpees","holly flax","jan levinson",
    "toby flenderson","kevin malone","oscar martinez","angela martin","karen filippelli","david wallace","date mike","prison mike","robert california","roy anderson",
    "booze cruise","darryl philbin","charles miner","cousin mose","sprinkles","asap as possible","gift basket","alfredo's pizza","cafe disco","10 inch plasma","big tuna"
];

function randomPhrase(){
    var a = Math.floor((Math.random()*phraseKey.length)); //from https://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array
    phraseInPlay = phraseKey[a];
    return phraseInPlay;
}
randomPhrase()
const separatedPhrase = phraseInPlay.split("");

//for loop that creates a space in the "playing area" for each letter in the separatedPhrase
for (var s=0; s<separatedPhrase.length; s++){
    let placeholderForLetter = document.createElement("div");
    placeholderForLetter.className = "spaceForLetter";
    document.querySelector(".blank-tiles").appendChild(placeholderForLetter);
    displayedLetter = document.createElement("div");
    displayedLetter.setAttribute("data-value",separatedPhrase[s]);
    displayedLetter.className = "displayedLetter";
    displayedLetter.innerHTML = separatedPhrase[s];
    // displayedLetter.style.visibility = "hidden";
    placeholderForLetter.appendChild(displayedLetter);
}
//^creates a div element within each placeholder div from above, then innerHTML sticks the individual letters into each div; append the value of the div into the given placeholder div

const keyButtons = document.querySelectorAll("button")
for(let b=0; b<keyButtons.length; b++){
    keyButtons[b].addEventListener("click",function(e){
        e.preventDefault();
        if(separatedPhrase.includes(e.target.innerHTML)){
            e.target.style.opacity = 0.4;
            e.target.style.border = "3px solid green";
            if(separatedPhrase.includes(e.target.innerHTML)){
                const currLetter = e.target.innerHTML;
                const existingLetters = document.querySelectorAll("[data-value][b]");
                for(let x=0; x<existingLetters.length; x++){
                if(currLetter.includes(existingletters)){
                [data-value].style.visibility="visible";
                }
            }
        }
    }
        else{
            e.target.style.opacity = 0.4;
            e.target.style.border = "3px solid red";
        }
    })
}

// function removeClass(){
//     if(separatedPhrase.includes(displayedLetter.innerHTML)){
//         displayedLetter.classList.remove("hidden");
//     }
// }
// removeClass()

//OTHER ISSUES THAT NEED SETTLING
//on clicking a letter, if it matches, turn off that letter's "display: none"
//i just noticed that i can get the same two random phrases in a row... find a way to disable that

        // if(displayedLetter.innerHTML === " "){
        //     spaceForLetter.style.visibility = "hidden";
        // }

        // let show = e.target;
        // return show;
        // function removeClass(){
        //     var show = getElementByClassName("hidden");
        //     show.classList.remove("hidden");
        // }
        // removeClass()
        //
        // 
        // if(e.target.innerHTML.includes(displayedLetter.innerHTML)){
        //     displayedLetter.style.visibility = "visible";
        // }

        // console.log("you clicked!"+" "+`${keyButtons[j].innerHTML}`) <--testing to see if i'm targeting the buttons correctly