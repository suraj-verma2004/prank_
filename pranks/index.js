
const a= document.getElementById('ybtn');
a.addEventListener('click', function buttn(){
    alert("Love you tooo"); 
   
});
const b= document.getElementById('title');
b.addEventListener('mouseover', function () {
  
b.innerHTML=`Click Yes`;})
b.addEventListener('mouseout', function () {
  b.innerHTML=`Do you love me???`;});

const button = document.getElementById('nbtn');
button.addEventListener('mouseover', function () {
  button.style.left = `${Math.ceil(Math.random() * 80)}%`;
  button.style.top = `${Math.ceil(Math.random() * 70)}%`;

});

