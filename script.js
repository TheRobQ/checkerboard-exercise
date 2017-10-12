document.addEventListener("DOMContentLoaded", function(){
// Your JS goes here

for(var i = 0; i < 81; i++){
  var body = document.getElementsByTagName('body')[0];
  var div = document.createElement('div');

div.style.float ='left';
div.style.paddingBottom = '11.1%';
div.style.width = '11.1%';
if (i % 2 === 0) {
  div.style.backgroundColor = "rgba(255, 0, 0, " + (.019 * (i+3)) + ")";
} else {
  div.style.backgroundColor = "rgba(47, 79, 79, " + (.018 * i) + ")";
}
body.appendChild(div)
}
})
