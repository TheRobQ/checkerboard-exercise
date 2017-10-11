// document.addEventListener("DOMContentLoaded", function){
// Your JS goes here

for(var i = 0; i < 81; i++){
  var body = document.getElementsByTagName('body')[0];
  var div = document.createElement('div');

div.style.float ='left';
div.style.paddingBottom = '11.1%';
div.style.width = '11.1%';
// if(i % 2 === 0){
//        div.style.backgroundColor = 'black';
//        }
// else {div.style.backgroundColor = 'red'};
div.style.backgroundColor = rgb(234, 23, 35)
body.appendChild(div)
}
