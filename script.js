let body      = document.querySelector("body");
let main      = document.querySelector("main");
let btn    = document.querySelector(".btn");

// get color selector btn
let selectbtn = document.querySelector(".selectbtn");

// get color popup
let colorpopup = document.querySelector(".popup-content")

// get input fields
let bodycolor = document.getElementById("bodycolor");
let textcolor = document.getElementById("textcolor");
let savebtn    = document.querySelector(".savebtn");

let bgcolor='';
let txtcolor='';

savebtn.addEventListener("click", ()=> {
    colorpopup.classList.remove("show");
})
bodycolor.addEventListener("input", ()=> {
    let body_bg = bodycolor.value;

    bgcolor=body_bg;

    body.style.background = bgcolor;
    
    // for call to action btn
    btn.style.color = bgcolor;

    // for color select btn
    selectbtn.style.color = bgcolor;

    localStorage.setItem("b******",bgcolor);
});
textcolor.addEventListener("input", ()=> {
    let text = textcolor.value;

    txtcolor=text;

    main.style.color = txtcolor;
    
    // for call to action btn
    btn.style.background = txtcolor;

    // for color select btn
    selectbtn.style.background = txtcolor;

    localStorage.setItem("t******",txtcolor);
});
function openpopup() {
    colorpopup.classList.toggle("show");
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
