let project1 = document.getElementById("pt");
let appButton1 = document.getElementById("abtn");
let screen1 = document.getElementById("screen1");
let appButton2 = document.getElementById("abtn2");
let screen2 = document.getElementById("screen2");

// project1.onmouseover = function(){
//     alert("Click on the buttons below to learn more about the project")
// }

appButton1.onclick = function(){
    let a = document.createElement("p");
    screen1.innerText="";
    a.innerText = "Check for Odd and even numbers"
    screen1.appendChild(a);
    screen1.style.backgroundColor = "rgb(11, 238, 241)";
    a.style.color = "rgb(221, 132, 7)";
    a.style.textAlign = "center";
    a.style.fontSize = "2rem";
    a.style.fontFamily = "monotype corsiva";
    a.style.marginTop = "2.5rem";
    this.style.backgroundColor = "rgb(239, 187, 115)";
    
}

appButton2.onclick = function(){
    let b = document.createElement("p");
    screen2.innerText="";
    b.innerText = "This app is built to check odd and even numbers. This was created with html, css and javascript"
    screen2.appendChild(b);
    screen2.style.backgroundColor = "rgb(11, 238, 241)";
    b.style.color = "rgb(221, 132, 7)";
    b.style.textAlign = "center";
    b.style.fontSize = "2rem";
    b.style.fontFamily = "monotype corsiva";
    b.style.marginTop = "0.5rem";
    this.style.backgroundColor = "rgb(239, 187, 115)";
    
}



// $(document).ready(function(){
//     let appButton = $("#abtn");

//     appButton.click(function(){
//         $("")
//     })
// })