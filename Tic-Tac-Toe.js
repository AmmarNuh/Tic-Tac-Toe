//calling rest buttun:
var restart = document.querySelector("#bt");

//grap all squars:
var squars = document.querySelectorAll("td")

// clear all squars fuctions:
function clearBoard() {
    for (let index = 0; index < squars.length; index++) {
        squars[index].textContent = '';
    }
}

restart.addEventListener("click", clearBoard)

function changeIt() {
    if (this.textContent === '') {
        this.textContent = "X";
        this.style.color = "#545454";
    } else if (this.textContent === 'X') {
        this.textContent = "O";
        this.style.color = "#F2EBD2";
    } else {
        this.textContent = '';
    }
}

for (let index = 0; index < squars.length; index++) {
    squars[index].addEventListener("click", changeIt)

}


// cell11.addEventListener("click", function () {
//     if (cell11.textContent === '') {
//         cell11.textContent = "X";
//         cell11.style.color = "#545454";
//     } else if (cell11.textContent === 'X') {
//         cell11.textContent = "O";
//         cell11.style.color = "#F2EBD2";
//     } else {
//         cell11.textContent = '';
//     }
// })


// cell12.addEventListener("click", function () {
//     if (cell12.textContent === '') {
//         cell12.textContent = "X";
//         cell12.style.color = "#545454";
//     } else if (cell12.textContent === 'X') {
//         cell12.textContent = "O";
//         cell12.style.color = "#F2EBD2";
//     } else {
//         cell12.textContent = '';
//     }
// })




// cell13.addEventListener("click", function () {
//     if (cell13.textContent === '') {
//         cell13.textContent = "X";
//         cell13.style.color = "#545454";
//     } else if (cell13.textContent === 'X') {
//         cell13.textContent = "O";
//         cell13.style.color = "#F2EBD2";
//     } else {
//         cell13.textContent = '';
//     }
// })


// // ********


// cell21.addEventListener("click", function () {
//     if (cell21.textContent === '') {
//         cell21.textContent = "X";
//         cell21.style.color = "#545454";
//     } else if (cell21.textContent === 'X') {
//         cell21.textContent = "O";
//         cell21.style.color = "#F2EBD2";
//     } else {
//         cell21.textContent = '';
//     }
// })


// cell22.addEventListener("click", function () {
//     if (cell22.textContent === '') {
//         cell22.textContent = "X";
//         cell22.style.color = "#545454";
//     } else if (cell22.textContent === 'X') {
//         cell22.textContent = "O";
//         cell22.style.color = "#F2EBD2";
//     } else {
//         cell22.textContent = '';
//     }
// })


// cell23.addEventListener("click", function () {
//     if (cell23.textContent === '') {
//         cell23.textContent = "X";
//         cell23.style.color = "#545454";
//     } else if (cell23.textContent === 'X') {
//         cell23.textContent = "O";
//         cell23.style.color = "#F2EBD2";
//     } else {
//         cell23.textContent = '';
//     }
// })


// // ******


// cell31.addEventListener("click", function () {
//     if (cell31.textContent === '') {
//         cell31.textContent = "X";
//         cell31.style.color = "#545454";
//     } else if (cell31.textContent === 'X') {
//         cell31.textContent = "O";
//         cell31.style.color = "#F2EBD2";
//     } else {
//         cell31.textContent = '';
//     }
// })


// cell32.addEventListener("click", function () {
//     if (cell32.textContent === '') {
//         cell32.textContent = "X";
//         cell32.style.color = "#545454";
//     } else if (cell32.textContent === 'X') {
//         cell32.textContent = "O";
//         cell32.style.color = "#F2EBD2";
//     } else {
//         cell32.textContent = '';
//     }
// })


// cell33.addEventListener("click", function () {
//     if (cell33.textContent === '') {
//         cell33.textContent = "X";
//         cell33.style.color = "#545454";
//     } else if (cell33.textContent === 'X') {
//         cell33.textContent = "O";
//         cell33.style.color = "#F2EBD2";
//     } else {
//         cell33.textContent = '';
//     }
// })