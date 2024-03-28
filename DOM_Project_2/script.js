var btn = document.getElementById("btn");
var title = document.getElementById("title");

btn.setAttribute("onClick", "Change_color()");

function Change_color() {
    title.setAttribute("style", `background-color: rgb(${Get_Random_Number()}, ${Get_Random_Number()}, ${Get_Random_Number()});`);
}

function Get_Random_Number() {
    const min = 0;
    const max = 255;
    return Math.floor(Math.random() * (max - min + 1) + min);
}


var color = document.getElementById("color");
color.addEventListener("input", function() {
    title.style.backgroundColor = color.value;
})