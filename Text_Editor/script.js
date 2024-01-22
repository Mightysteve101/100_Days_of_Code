let optionsButton = document.querySelectorAll(".options-button");
let advancedOptionButton = document.querySelectorAll(".adv-options-button");
let fontName = document.getElementById("fontName");
let fontSizeRef = document.getElementById("fontSize");
let writingArea = document.getElementById("text-input");
let linkButton = document.getElementById("createLink");
let alignButtons = document.querySelectorAll(".align");
let spacingButtons = document.querySelectorAll(".spacing");
let formatButtons = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll(".script");

let fontList = [
    "Arial",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Courier New",
    "Cursive",
]

const initializer = () =>{
    highlighter(alignButtons,true);
    highlighter(spacingButtons, true);
    highlighter(formatButtons, false);
    highlighter(scriptButtons, true);
}
