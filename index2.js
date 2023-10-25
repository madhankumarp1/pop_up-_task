var div0 = document.createElement("div0");
div0.className = "0";
var div0sub = document.createElement("div0sub");
div0sub.className = "sub";
var div1 = document.createElement("div1");
div1.className = "1";
div1.innerText = "Modal project";
var button = document.createElement("button");
button.className = "btn1";
button.innerText = "Open Modal";
div0.append(div0sub);
div0sub.append(div1);
div1.append(button);
document.body.append(div0);
var div5 = document.createElement("div5");
div5.className = "5";
var div5sub = document.createElement("div5sub");
div5sub.className = "5sub";
var div6 = document.createElement("div6");
div6.className = "6";
var div7 = document.createElement("div7");
div7.className = "7";
div7.innerText = " Modal content";
var button2 = document.createElement("button");
button2.className = "btn2";
button2.innerText = "x";
div5.append(div5sub);
div5sub.append(div6);
div6.append(button2);
div6.append(div7);
document.body.append(div5);

div0.addEventListener("click", open);
function open() {
  div5.style.display = "block";
  div0.style.display = "none";
}
button2.addEventListener("click", close);
function close() {
  div0.style.display = "block";
  div5.style.display = "none";
}
