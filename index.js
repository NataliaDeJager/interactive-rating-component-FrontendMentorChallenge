// ---- Function that checks the pressed rating buttons, deselects the selected one if another is pressed, and adds or removes style -----------


var ratingButtons = document.querySelectorAll(".rating-btn");

ratingButtons.forEach(element=>{
    element.addEventListener('click', (e) => {
        ratingButtons.forEach(btn => {
            btn.style.backgroundColor = ""
            btn.classList.remove("selected");
        });
        
        e.target.style.backgroundColor = "hsl(217, 12%, 63%)"
        e.target.style.color = "white"
        e.target.classList.add("selected");
      })
    });

// ----------- Function that Hides first card once a rating is submitted, displays the Thank you Card and adds the button value to the text --------------
// This function is called with onclick on the Submit button in the HTML file

function hideAndThanks() {
    var div = document.getElementById("rating-form");
    var thanks = document.getElementById("thanks-div");
    var buttonIsPressed = false;

    ratingButtons.forEach(button => {
        if (button.classList.contains("selected")) {
            var ratingValue = parseInt(button.id) // Turns the ID into a number 
            document.getElementById("orange-text").textContent = "You selected  " + ratingValue +"  out of 5" // Adds the selection to the paragraph
            buttonIsPressed = true;
        }
    });
        
    if (buttonIsPressed) { // If the button is pressed is true then hides the first Card and shows the Thank you card
        div.classList.add("hideOnceSubmitted");
        thanks.classList.add("thanks"); 
    };
};



// some things tried out early on, commented to see my progress.

// for (var i = 0; i < ratingButtons.length; i++) {
//     ratingButtons[i].addEventListener("click", function() {
//         $(ratingButtons[i]).css ({
//             "background-color": "hsl(217, 12%, 63%)",
//         });
//     });
// };

// for (var i = 0; i < ratingButtons.length; i++) {
//     ratingButtons[i].addEventListener("click", function() {
//         ratingButtons[i].style.backgroundColor = "hsl(217, 12%, 63%)";
//     });
// };