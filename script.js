// document.addEventListener("DOMContentLoaded", function){
// Your JS goes here

for(var i = 0; i < 81; i++){
  var body = document.getElementsByTagName('body')[0];
  var div = document.createElement('div');
  body.appendChild(div);
div.style.float ='left';
div.style.paddingBottom = '11.1%';
div.style.width = '11.1%';
div.style.backgroundColor = 'rgb('+ (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) +')'
function flashBox(){
  for(var i = 0; i < 81; i++){
  div.style.backgroundColor = 'rgb('+ (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) +')';
      }
    }   
setInterval(flashBox, 2000);
}
