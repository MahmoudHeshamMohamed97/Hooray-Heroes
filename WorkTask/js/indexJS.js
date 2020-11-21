// $("#femaleCharacter, .female").click(function(e){
//     // if i clicked on the female character
//     document.querySelector(".characters").innerHTML=
//     ` <div id="femaleCharacter" class="col-sm-12">
//         <img src="images/I02.png" class="img-fluid" alt="femalePhoto">
//     </div> `;
//     console.log(e);
// });

// $("#maleCharacter, .male").click(function(){
//     // if i clicked on the male character
//     document.querySelector(".characters").innerHTML=
//     `<div id="maleCharacter" class="col-sm-12">
//         <img src="images/I02 (1).png" class="img-fluid" alt="malePhoto">
//     </div>
//     `;

// });

let character = null;
let maleHead = ["images/01.png", "images/03.png", "images/04 (3).png", "images/07.png", "images/08.png"];
let maleBody = ["images/02 (3).png", "images/04.png", "images/05.png", "images/01 (1).png", "images/03 (1).png"];
let maleEye = ["images/06 (3).png", "images/04 (1).png", "images/04 (2).png", "images/05 (1).png", "images/06.png"];
let html = "";
let name = "";
let femaleHead = ["images/02 (2).png","images/03 (2).png","images/04 (4).png","images/06 (1).png","images/08 (1).png"];
let femaleBody = ["images/01 (2).png","images/02.png","images/03 (3).png","images/05 (2).png","images/03 (4).png"];
let femaleEye = ["images/02 (1).png","images/03 (5).png","images/05 (3).png","images/06 (2).png","images/01 (3).png"];



$("#femaleCharacter, .female, #maleCharacter, .male").click(function (e) {

    if (e.target.alt == "femalePhoto" || e.target == document.querySelector(".female")) {
        //If my selction was female display the female character
        document.querySelector(".characters .row").innerHTML =
            `<div id="femaleCharacter" class="col-sm-12">
            <img src="images/I02.png" class="img-fluid" alt="femalePhoto">
            <div class="femaleBody1">
                <img src="images/02.png" class="img-fluid" alt="maleBody">
            </div>
            <div class="femaleEye1">
                <img src="images/02 (1).png" class="img-fluid" alt="maleeye">
            </div>
            <div class="femaleHair1">
                <img src="images/02 (2).png" class="img-fluid" alt="maleHair">
            </div>
        </div>
            `;

        character = 'f';
    }
    else {
        //If my selection was male display the male character
        document.querySelector(".characters .row").innerHTML =
            `<div id="maleCharacter" class="col-sm-12">
            <img src="images/I02 (1).png" class="img-fluid" alt="malePhoto">
            <div class="maleBody1">
                <img src="images/04.png" class="img-fluid" alt="maleBody">
            </div>
            <div class="maleEye1">
                <img src="images/04 (1).png" class="img-fluid" alt="maleeye">
            </div>
            <div class="maleHair1">
                <img src="images/07.png" class="img-fluid" alt="maleHair">
            </div>
        </div>
            `;

        character = 'm';
    }


    // This checks if the user entered the two inputs (Character and Name).
    if (document.querySelector("input").value == "") {
        document.querySelector(".status").innerHTML = "Please Enter the Name";
        document.querySelector("input").focus();
    }
    else {
        //go to next chapter
        secondPhase();
    }

});

// The buttons which fires the next phase.
document.getElementsByClassName("badge-pill")[0].addEventListener("click", function () {
    console.log(document.querySelector(".characters .col-sm-12"));
    console.log(document.querySelector("input").value);
    if (document.querySelector(".characters .col-sm-12") != null && document.querySelector("input").value != "") {
        secondPhase();
    }
    else {
        document.querySelector(".status").innerHTML = "Please Enter the Name Or Choose the Character First";
    }
});


function secondPhase() {
    name = document.getElementsByTagName("input")[0].value;
    document.getElementById("one").classList.remove("active");
    document.getElementById("one").classList.add("finished");
    document.getElementById("two").classList.add("active");
    document.querySelector(".status").innerHTML = "Choose the skin tone.";
    document.querySelector("button").innerHTML = "BROWSE BOOKS";

    if (character == 'm') {

        // if male display the parts can change it

        document.getElementsByClassName("whiteBackground")[0].innerHTML =
            `<ul class="maleColor">
        <li class="headOfMale">
            <i class="far fa-laugh fa-3x"></i>
        </li>
        <li class="bodyOfMale">
            <i class="fas fa-child fa-3x"></i>
        </li>
        <li class="eyeOfMale">
            <i class="far fa-eye fa-3x"></i>
        </li>
    </ul> `;
    displayMaleHair();
    displayMaleBody();
    displayMaleEye();

    }
    else {

        // if female display the parts can change it

        document.getElementsByClassName("whiteBackground")[0].innerHTML =
            `<ul class="femaleColor">
        <li class="headOfFemale">
            <i class="far fa-laugh fa-3x"></i>
        </li>
        <li class="bodyOfFemale">
            <i class="fas fa-child fa-3x"></i>
        </li>
        <li class="eyeOfFemale">
            <i class="far fa-eye fa-3x"></i>
        </li>
    </ul> `;

    
    displayFemaleHair();
    displayFemaleBody();
    displayFemaleEye();

    }

    // Last Phase
    document.getElementsByTagName("button")[0].addEventListener("click",function(){
        lastPhase();
    });

}


function displayMaleHair() {
    document.getElementsByClassName("headOfMale")[0].addEventListener("click", function () {
        html = `<ul class="maleColor">`;
        for (let i = 0; i < maleHead.length; i++) {
            html +=
                `<li class="allHair">
                    <img class="img-fluid" src="` + maleHead[i] + `" alt="EyeColor"/>
            </li>`;
        }
        html += `</ul>`;
        document.getElementsByClassName("whiteBackground")[1].innerHTML = html;
        let lis = document.getElementsByClassName("allHair");
        for(let i=0; i<lis.length; i++){
            lis[i].addEventListener("click",function(){
                document.getElementsByClassName("maleHair1")[0].children[0].attributes[0].value = this.children[0].attributes[1].value;
            });
        };
    });

}
function displayMaleBody() {
    document.getElementsByClassName("bodyOfMale")[0].addEventListener("click", function () {
        html = `<ul class="maleColor">`;
        for (let i = 0; i < maleBody.length; i++) {
            html +=
                `<li class="allBody">
                    <img class="img-fluid" src="` + maleBody[i] + `" alt="EyeColor"/>
            </li>`;
        }
        html += `</ul>`;
        document.getElementsByClassName("whiteBackground")[1].innerHTML = html;
        let lis = document.getElementsByClassName("allBody");
        for(let i=0; i<lis.length; i++){
            lis[i].addEventListener("click",function(){
                document.getElementsByClassName("maleBody1")[0].children[0].attributes[0].value = this.children[0].attributes[1].value;
            });
        };
    });
}
function displayMaleEye() {
    document.getElementsByClassName("eyeOfMale")[0].addEventListener("click", function () {
        html = `<ul class="maleColor">`;
        for (let i = 0; i < maleEye.length; i++) {
            html +=
                `<li class="allEye">
                    <img class="img-fluid" src="` + maleEye[i] + `" alt="EyeColor"/>
            </li>`;
        }
        html += `</ul>`;
        document.getElementsByClassName("whiteBackground")[1].innerHTML = html;
        let lis = document.getElementsByClassName("allEye");
        for(let i=0; i<lis.length; i++){
            lis[i].addEventListener("click",function(){
                document.getElementsByClassName("maleEye1")[0].children[0].attributes[0].value = this.children[0].attributes[1].value;
            });
        };
    });
}

function displayFemaleHair() {
    document.getElementsByClassName("headOfFemale")[0].addEventListener("click", function () {
        html = `<ul class="femaleColor">`;
        for (let i = 0; i < femaleHead.length; i++) {
            html +=
                `<li class="allHair">
                    <img class="img-fluid" src="` + femaleHead[i] + `" alt="EyeColor"/>
            </li>`;
        }
        html += `</ul>`;
        document.getElementsByClassName("whiteBackground")[1].innerHTML = html;
        let lis = document.getElementsByClassName("allHair");
        for(let i=0; i<lis.length; i++){
            lis[i].addEventListener("click",function(){
                document.getElementsByClassName("femaleHair1")[0].children[0].attributes[0].value = this.children[0].attributes[1].value;
            });
        };
    });
}
function displayFemaleBody() {
    document.getElementsByClassName("bodyOfFemale")[0].addEventListener("click", function () {
        html = `<ul class="femaleColor">`;
        for (let i = 0; i < femaleBody.length; i++) {
            html +=
                `<li class="allBody">
                    <img class="img-fluid" src="` + femaleBody[i] + `" alt="EyeColor"/>
            </li>`;
        }
        html += `</ul>`;
        document.getElementsByClassName("whiteBackground")[1].innerHTML = html;
        let lis = document.getElementsByClassName("allBody");
        for(let i=0; i<lis.length; i++){
            lis[i].addEventListener("click",function(){
                document.getElementsByClassName("femaleBody1")[0].children[0].attributes[0].value = this.children[0].attributes[1].value;
            });
        };
    });
}
function displayFemaleEye() {
    document.getElementsByClassName("eyeOfFemale")[0].addEventListener("click", function () {
        html = `<ul class="femaleColor">`;
        for (let i = 0; i < femaleEye.length; i++) {
            html +=
                `<li class="allEye">
                    <img class="img-fluid" src="` + femaleEye[i] + `" alt="EyeColor"/>
            </li>`;
        }
        html += `</ul>`;
        document.getElementsByClassName("whiteBackground")[1].innerHTML = html;
        let lis = document.getElementsByClassName("allEye");
        for(let i=0; i<lis.length; i++){
            lis[i].addEventListener("click",function(){
                document.getElementsByClassName("femaleEye1")[0].children[0].attributes[0].value = this.children[0].attributes[1].value;
            });
        };
    });
}


function lastPhase(){
    document.getElementById("two").classList.remove("active");
    document.getElementById("two").classList.add("finished");
    document.getElementById("three").classList.add("active");
    document.querySelector(".status").innerHTML = "Thanks " + name;
    document.querySelector("button").innerHTML = "A new Character?";
    document.getElementsByClassName("whiteBackground")[0].classList.add("d-none");
    document.getElementsByClassName("whiteBackground")[1].classList.add("d-none");

    handlePositions();


    document.querySelector("button").addEventListener("click",function(){
        location.reload();
    });
}    

function handlePositions(){
    if(character == 'm'){
        document.getElementsByClassName("maleBody1")[0].style.left = "18%";
    document.getElementsByClassName("maleEye1")[0].style.left = "18%";
    document.getElementsByClassName("maleHair1")[0].style.left = "18%";
    }

   else{
    document.getElementsByClassName("femaleBody1")[0].style.left = "18%";
    document.getElementsByClassName("femaleEye1")[0].style.left = "18%";
    document.getElementsByClassName("femaleHair1")[0].style.left = "18%";
   }
}