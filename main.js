document.getElementById("product").addEventListener("click", displayA)
let toggle=false
function displayA() {
    if(toggle===false){
    document.querySelector(".hiddenA").style.display="inline"
    document.querySelector(".hiddenB").style.display=""
    document.getElementById("arrowB").style.transform=""
document.getElementById("company").style.textDecoration=""
    document.querySelector(".hiddenC").style.display=""
    document.getElementById("arrowC").style.transform=""
    document.getElementById("connect").style.textDecoration=""
    document.getElementById("product").style.textDecoration="underline"
    document.getElementById("arrowA").style.transform="rotate(180deg)"
}
else{document.querySelector(".hiddenA").style.display="none"
document.getElementById("arrowA").style.transform=""
document.getElementById("product").style.textDecoration=""}
toggle=!toggle
}

document.getElementById("company").addEventListener("click", displayB)
function displayB() {
    if(toggle===false){
    document.querySelector(".hiddenB").style.display="inline"
    document.querySelector(".hiddenA").style.display=""
    document.getElementById("arrowA").style.transform=""
document.getElementById("product").style.textDecoration=""
    document.querySelector(".hiddenC").style.display=""
    document.getElementById("arrowC").style.transform=""
    document.getElementById("connect").style.textDecoration=""
    document.getElementById("company").style.textDecoration="underline"
    document.getElementById("arrowB").style.transform="rotate(180deg)"
}
else{document.querySelector(".hiddenB").style.display="none"
document.getElementById("arrowB").style.transform=""
document.getElementById("company").style.textDecoration=""}
toggle=!toggle
}

document.getElementById("connect").addEventListener("click", displayC)
function displayC() {
    if(toggle===false){
    document.querySelector(".hiddenC").style.display="inline"
    document.querySelector(".hiddenA").style.display=""
    document.getElementById("arrowA").style.transform=""
document.getElementById("product").style.textDecoration=""
    document.querySelector(".hiddenB").style.display=""
    document.getElementById("arrowB").style.transform=""
document.getElementById("company").style.textDecoration=""
    document.getElementById("connect").style.textDecoration="underline"
    document.getElementById("arrowC").style.transform="rotate(180deg)"
}
else{document.querySelector(".hiddenC").style.display="none"
    document.getElementById("arrowC").style.transform=""
    document.getElementById("connect").style.textDecoration=""}
toggle=!toggle
}

//mobile designs

document.getElementById("mobile-listA").addEventListener("click", openA)
function openA(){
    if(toggle===false){
    document.querySelector(".mobile-hiddenA").style.display="inline-block"
    document.querySelector(".mobile-hiddenB").style.display="none"
    document.getElementById("mobile-listB").style.transform=""
    document.querySelector(".mobile-hiddenC").style.display="none"
    document.getElementById("mobile-listC").style.transform=""
    document.getElementById("mobile-listA").style.transform="rotate(180deg)"
}
else{
    document.querySelector(".mobile-hiddenA").style.display="none"
    document.getElementById("mobile-listA").style.transform=""
}
toggle=!toggle
}
document.getElementById("mobile-listB").addEventListener("click", openB)
function openB(){
    if(toggle===false){
        
    document.querySelector(".mobile-hiddenB").style.display="inline-block"
    document.querySelector(".mobile-hiddenA").style.display="none"
    document.getElementById("mobile-listA").style.transform=""
    document.querySelector(".mobile-hiddenC").style.display="none"
    document.getElementById("mobile-listC").style.transform=""
    document.getElementById("mobile-listB").style.transform="rotate(180deg)"
}
else{
    document.querySelector(".mobile-hiddenB").style.display="none"
    document.getElementById("mobile-listB").style.transform=""
}
toggle=!toggle
}


document.getElementById("mobile-listC").addEventListener("click", openC)
function openC(){
    if(toggle===false){
    document.querySelector(".mobile-hiddenC").style.display="inline-block"
    document.querySelector(".mobile-hiddenA").style.display="none"
    document.getElementById("mobile-listA").style.transform=""
    document.querySelector(".mobile-hiddenB").style.display="none"
    document.getElementById("mobile-listB").style.transform=""
    document.getElementById("mobile-listC").style.transform="rotate(180deg)"
}
else{
    document.querySelector(".mobile-hiddenC").style.display="none"
    document.getElementById("mobile-listC").style.transform=""
}
toggle=!toggle
}
document.getElementById("drop-menu").addEventListener("click", menu)
function menu(){
if(toggle===false){
    document.querySelector(".mobile-drop").style.display="flex"
    document.getElementById("drop-menu").src="images/icon-close.svg"
}
else{document.querySelector(".mobile-drop").style.display=""
        document.getElementById("drop-menu").src="images/icon-hamburger.svg"
        document.querySelector(".mobile-hiddenA").style.display="none"
        document.getElementById("mobile-listA").style.transform=""
        document.querySelector(".mobile-hiddenB").style.display="none"
        document.getElementById("mobile-listB").style.transform=""
        document.querySelector(".mobile-hiddenC").style.display="none"
        document.getElementById("mobile-listC").style.transform=""}
        toggle=!toggle
}