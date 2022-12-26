/**
 * Scope and the var statement
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
 */

var color = "purple";

document.querySelector(".left").style.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;

// color = "rgb(223,123,93)";
document.querySelector(".right").style.backgroundColor = "green";
document.querySelector(".right .color-value").innerHTML = "MotherFucker";

function headingColor() {
  color = "yellow";
  document.querySelector(".title").style.color = color;
}

headingColor();
document.querySelector(".title").style.color = "red";
document.querySelector(".title").innerHTML = "MotherFucker";
