let body      = document.querySelector("body");
let main      = document.querySelector("main");
let btn    = document.querySelector(".btn");

// get color selector btn
let selectbtn = document.querySelector(".selectbtn");

// get color popup
let colorpopup = document.querySelector(".color-popup")

// get input fields
let bodycolor = document.getElementById("bodycolor");
let textcolor = document.getElementById("textcolor");
let savebtn    = document.querySelector(".savebtn");

let bgcolor='';
let txtcolor='';


savebtn.addEventListener("click", ()=> {
    let body_bg = bodycolor.value;
    let text = textcolor.value;

    bgcolor=body_bg;
    txtcolor=text;

    body.style.background = bgcolor;
    main.style.color = txtcolor;
    
    // for call to action btn
    btn.style.background = txtcolor;
    btn.style.color = bgcolor;

    // for color select btn
    selectbtn.style.background = txtcolor;
    selectbtn.style.color = bgcolor;

    closepopup();
    localStorage.setItem("b******",bgcolor);
    localStorage.setItem("t******",txtcolor);
})

function openpopup() {
    colorpopup.classList.add("show")
}
function closepopup() {
    colorpopup.classList.remove("show")
}

let setcolors=()=> {
    let bgcolor = localStorage.getItem("b******");
    let txtcolor = localStorage.getItem("t******");

    bodycolor.value = bgcolor;
    textcolor.value = txtcolor;

    body.style.background = bgcolor;
    main.style.color = txtcolor;

    // for call to action btn
    btn.style.background = txtcolor;
    btn.style.color = bgcolor;

    // for color select btn
    selectbtn.style.background = txtcolor;
    selectbtn.style.color = bgcolor;
    console.log()
}

setcolors();