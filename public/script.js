//Hides refresh button on load, could be optimized in the future
window.onload = function() {
    document.getElementById("refresh").style.display="none";
};

//Clears all the check boxes
function clearBoxes(){
    var checkedBoxes = document.querySelectorAll('input:checked') //Get all the boxes that are checked
    for (var i = 0; i < checkedBoxes.length; i++) { //Run through each checked box and uncheck it
        checkedBoxes[i].checked = false;
    }
}

// Checks all the checkboxes
function checkBoxes() {
    var uncheckedBoxes = document.querySelectorAll('input[type="checkbox"]:not(:checked)'); // Get all the boxes that are unchecked
    for (var i = 0; i < uncheckedBoxes.length; i++) { // Run through each unchecked box and check it
        uncheckedBoxes[i].checked = true;
    }
}

// Shows the boxes that the average person of average niceness would check off
function avgBoxes() {
    clearBoxes();
    clearPage();

    var uncheckedBoxes = document.querySelectorAll('input[type="checkbox"]:not(:checked)'); // Get all the boxes that are unchecked
    uncheckedBoxes[0].checked = true;
uncheckedBoxes[1].checked = true;
uncheckedBoxes[2].checked = true;
uncheckedBoxes[3].checked = true;
uncheckedBoxes[4].checked = true;
uncheckedBoxes[5].checked = true;
uncheckedBoxes[6].checked = true;
uncheckedBoxes[7].checked = true;
uncheckedBoxes[8].checked = true;
uncheckedBoxes[9].checked = true;
uncheckedBoxes[10].checked = true;
uncheckedBoxes[12].checked = true;
uncheckedBoxes[14].checked = true;
uncheckedBoxes[16].checked = true;
uncheckedBoxes[19].checked = true;
uncheckedBoxes[22].checked = true;
uncheckedBoxes[23].checked = true;
uncheckedBoxes[24].checked = true;
uncheckedBoxes[25].checked = true;
uncheckedBoxes[28].checked = true;
uncheckedBoxes[29].checked = true;
uncheckedBoxes[30].checked = true;
uncheckedBoxes[35].checked = true;
uncheckedBoxes[38].checked = true;
uncheckedBoxes[39].checked = true;
uncheckedBoxes[40].checked = true;

calculateScore();
}


//Calculates your score
function calculateScore() {
    var totalChecked = document.querySelectorAll('input[type="checkbox"]:checked') //Gets all the boxes that were checked
    var score = 50 - totalChecked.length //Subtracts the amount of boxes checked from 100, which results in the score

    //Associates your score with what it says about you
    var meaning;

    // 0-5, nicest person ever:
    if (score < 6) {
        meaning = "Congradulations! A top 1% nice-maxxer, you're on par with some of the nicest people on earth, like Buddha or Pushing P (Positivity).";
    // 6-10:
    } else if (score < 11) {
        meaning = "A top 10% nice-maxxer! You're definitely the most selfless person most people have met.";
    // 11-20:
    } else if (score < 21) {
        meaning = "A top 25% nice-maxxer! You're definitely the nicest of your friend group, and find joy in helping others.";
    // 21-30:
    } else if (score < 31) {
        meaning = "A top 50% nice-maxxer. You're about average nice-ness, which is better than a lot of people!";
    // 31-40:
    } else if (score < 41) {
        meaning = "While you've shown acts of kindness, there's plenty of room to grow! Keep going!";
    // 41 to 50, least nice person ever
    } else {
        meaning = "You are worse than a movie villain. Even Darth Vader probably held the door open for someone before. You need to start nice-maxxing right now.";
    }
    

    var scoreDiv = document.getElementById("score"); //Gets the score div which is where the score is displayed
    var meaningDiv = document.getElementById("meaning"); //Gets the score div which is where the score is displayed
    scoreDiv.innerHTML = "Your Score: " + score.toString() //Sets the div text to your score
    meaningDiv.innerHTML = meaning //Sets the div text to your meaning
    document.getElementById("refresh").style.display="inline"; //Reveals the refresh page button
    document.body.scrollTop = 400; // Scrolls to top of the page for Safari
    document.documentElement.scrollTop = 400; // Scrolls to the top of the page for Chrome, Firefox, IE, and Opera
}

//Clears the page (clear page button)
function clearPage() {
    clearBoxes() //Calls the clearBoxes function to clear all the boxes
    var scoreDiv = document.getElementById("score"); //Gets the score div which is where the score is displayed
    var meaningDiv = document.getElementById("meaning"); //Gets the score div which is where the score is displayed
    scoreDiv.innerHTML = "" //Makes the score div blank
    meaningDiv.innerHTML = "" //Makes the meaning div blank
    document.getElementById("refresh").style.display="none"; //Hides the clear page button button
}