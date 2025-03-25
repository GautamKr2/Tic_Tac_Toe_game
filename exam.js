let paragraph = document.querySelector(".content");
let hideShowBtn = document.querySelector("#box1");
let redBtn = document.querySelector("#box2");
let greenBtn = document.querySelector("#box3");
let blueBtn = document.querySelector("#box4");

let btn1 = true;
// hideShowBtn.addEventListener("click", () => {
//     if(btn1) {
//         paragraph.style.display = "none";
//         btn1 = false;
//     }
//     else {
//         paragraph.style.display = "block";
//         btn1 = true;
//     }
// });
redBtn.addEventListener("click", () => {
    paragraph.style.cssText = 'background-Color:red;color:white';
});
greenBtn.addEventListener("click", () => {
    paragraph.style.cssText = "background-Color:green;color:white";
});
blueBtn.addEventListener("click", () => {
    paragraph.style.cssText = "background-Color:blue;color:white";
});

function hide() {
    if(btn1) {
        paragraph.style.display = "none";
        btn1 = false;
    }
    else {
        paragraph.style.display = "block";
        btn1 = true;
    }
}