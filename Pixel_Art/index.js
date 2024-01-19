/*Initializes variables by selecting specific elements from the HTML document using different methods*/
let container = document.querySelector(".container");
let gridButton = document.getElementById("submit-grid");
let clearGridButton = document.getElementById("clear-grid");
let gridWidth = document.getElementById("width-range");
let gridHeight = document.getElementById("height-range");
let colorButton = document.getElementById("color-input");
let eraseBtn = document.getElementById("erase-btn");
let paintBtn = document.getElementById("paint-btn");
let widthValue = document.getElementById("width-value");
let heightValue = document.getElementById("height-value");

/*Defines an object named events that contains event types for both mouse and touch interactions*/
let events = {
    mouse: {
        down: "mousedown",
        move: "mousemove",
        up: "mouseup"
    },
    touch: {
        down: "touchstart",
        mobe: "touchmove",
        up: "touchend",
    },
};

/*Instantiates an variable and assigns it to an empty string to be updated,
    instantiate two variables assigned a boolean to keep track of the drawing and erasing actions in the code*/
let deviceType = "";

let draw = false;
let erase = false;

/*This line declares a constant isTouchDevice and assigns it an arrow function.*/
const isTouchDevice = () => {
    try {
        document.createEvent("TouchEvent");
        deviceType = "touch";
        return true;
    } catch (e) {
        deviceType = "mouse";
        return false;
    }
};

isTouchDevice();

gridButton.addEventListener("click", () => {
    /*acts as a way to clear or empty the content inside a specific HTML element denoted by the container variable, 
    making it blank or devoid of any visible content*/
    container.innerHTML = "";
    /*iterates a loop based on the value stored in gridHeight.value, increments the counter, and creates a new <div> 
    element for each iteration, assigning the class "gridRow" to each newly created <div> element. */
    let count = 0;
    for (let i = 0; i < gridHeight.value; i++) {
        count += 2;
        let div = document.createElement("div");
        div.classList.add("gridRow");
        /*iterates a loop based on the value stores in gridWidth.value,  */
        for (let j = 0; j < gridWidth.value; j++) {
            count += 2;
            let col = document.createElement("div");
            col.classList.add("gridCol");
            /*ensuring that each element has a unique identifier by appending a changing number to the string "gridCol"*/
            col.setAttribute("id", `gridCol${count}`);
            /*Creates and Drawing and erasing action with a condition when mouse is clicked */
            col.addEventListener(events[deviceType].down, () => {
                draw = true;
                if (erase) {
                    col.style.backgroundColor = "transparent";
                } else {
                    col.style.backgroundColor = colorButton.value;
                }
            });
            /*Creates an action when the mouse is moved*/
            col.addEventListener(events[deviceType].move, (e) => {
                /*Checks whether the device is not a touch device using the isTouchDevice() function */
                let elementId = document.elementFromPoint(
                    !isTouchDevice() ? e.clientX : e.touches[0].clientX,
                    !isTouchDevice() ? e.clientY : e.touches[0].clientY,
                ).id;
                checker(elementId);//assigs the 'id' value to the elementId variable
            });

            col.addEventListener(events[deviceType].up, () => {
                draw = false;
            });

            /*Creates a new column with div element under parent */
            div.appendChild(col);

        }
        /*Creates a new div element with container under parent  */
        container.appendChild(div);

    }
});

/*Declares a function that takes elementId as the parameter */
function checker(elementId) {
    /*Selects all elements in the .gridCol class and stores them in gridColumns */
    let gridColumns = document.querySelectorAll(".gridCol");
    /*Iterates through each element in gridColumns. Checks to see if the id of the current
        current element matches the element id.*/
    gridColumns.forEach((element) => {
        if (elementId == element.id) {
            if (draw && !erase) {
                element.style.backgroundColor = colorButton.value;
            } else if (draw && erase) {
                element.style.backgroundColor = "transparent";
            }
        }
    });
}

/*Event listener with a callback function. When clear grid clicked everything inside the container will turn into an empty string */
clearGridButton.addEventListener("click", () => {
    container.innerHTML = "";
});

/*Event listener with a callback function. Turns on the erase button */
eraseBtn.addEventListener("click", () => {
    erase = true;
});

/*Event listener with a callback function. Turns off the erase button */
paintBtn.addEventListener("click", () => {
    erase = false;
});

/* Event listener with a callback function Updates the content of the widthValue element
    based on teh current value of gridWidth.*/
gridWidth.addEventListener("input", () => {
    widthValue.innerHTML = gridWidth.value < 9 ? `0${gridWidth.value}` : gridWidth.value;
});

/* Event listener with a callback function. Updates the content of the height Value element
    based on the gridHeight value */
gridHeight.addEventListener("input", () => {
    heightValue.innerHTML = gridHeight.value < 9 ? `0${gridHeight.value}` : gridHeight.value;
});

/*Sets up an event handler to execute when the window fully loaded. Sets the value of 
    gridHeight to 0 and the value of gridWidth to 0. */
window.onload = () => {
    gridHeight.value = 0;
    gridWidth.value = 0;
};