contador = 0;

const currentNumber = document.getElementById('currentNumer');

document.getElementById('decrementNumber').addEventListener('click', function(){
    if(contador >= -9){
        contador--;
        currentNumber.innerHTML = contador;
    } else {
        currentNumber.innerHTML = contador;
    }
    
    if(contador < 0){
        currentNumber.style.color = 'red';
    } else{
        currentNumber.style.color = 'white';
    }
})

document.getElementById('incrementNumber').addEventListener('click', function(){
    if(contador <= 9){
        contador++;
        currentNumber.innerHTML = contador;
    } else {
        currentNumber.innerHTML = contador;
    }   
    if(contador < 0){
        currentNumber.style.color = 'red';
    } else{
        currentNumber.style.color = 'white';
    }
})