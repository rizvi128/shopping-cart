function random(){
    const random = document.getElementById('pin-output');
     const randomNumber = Math.floor(1000 + Math.random() * 9000);
     document.getElementById('pin-output').value = randomNumber
     
 
 }
 document.getElementById('submit').addEventListener('click', function(){
     const generatedPin = document.getElementById('pin-output').value;
     const inputNumber = document.getElementById('numOutput').value;
     if(generatedPin == inputNumber || generatedPin == 0 ){
         const submitOutput =document.getElementById('matched');
         submitOutput.style.display = 'block';
         const removeErrorMsg = document.getElementById("error");
         removeErrorMsg.style.display = 'none'; 
         const generatedPin = document.getElementById('pin-output').value = "";
     const inputNumber = document.getElementById('numOutput').value = "";

     }
else if(generatedPin != inputNumber){
    const errorOutput = document.getElementById('error');
    errorOutput.style.display = 'block';
    const removeMatchedMsg = document.getElementById("matched");
    removeMatchedMsg.style.display = 'none';
}
counter();

 })
 function counter(){
     const chance = document.getElementById('count');
     const  count = parseInt(chance.innerText);
     const reduceChance = count - 1 ;
     chance.innerText = reduceChance;
if(chance.innerText == 0){
const removeButton = document.getElementById('submit');
removeButton.style.display = 'none';
}
else if(chance.innerText == 1){
    alert('Careful , you have only one chance. ')
}
 }
 