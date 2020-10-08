"use strict"


let letters = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

let myDni = document.querySelector(".my-dni"); // si ponemos en esta parte .value, da undefined, ya que no le hemos indicado aún que haga la lectura al hacer click.

let checkButton = document.querySelector(".my-button");
checkButton.addEventListener("click", function(event){
    console.log(event);

    event.preventDefault();    // hace que no siga el comportamiento por defecto para evitar que se me recargue la página.

    console.log(myDni.value);
    myDni = myDni.value;

    if(Number(myDni.length) === 9){
        let letterAdded = myDni.slice(myDni.length -1);
        let dniNumber = myDni.slice(0, myDni.length -1);
        let resto = Number(dniNumber) % 23;
        let correctLetter = letters[resto];

        // if(letters.includes(letterAdded.toUpperCase())){
        // } else { 
        //     alert("Revisa que el último caracter sea una letra");

        // };
        
        if(correctLetter === letterAdded.toUpperCase()){

            function showCorrect(){
                let correctDni = document.getElementsByClassName("correct")[0]; // getElementsByClassName, getElementsByTagName o querySelectorAll devuelve siempre un array. Tenemos que especiificar a qué elemento del array nos referimos.
                
                correctDni.style.display="block";

                return true;
            };
    
            showCorrect();
            
        } else {
            
            function showIncorrect(){
                let incorrectDni = document.getElementsByClassName("incorrect")[0];

                incorrectDni.style.display="block";
                
                return true;
            };
            
            showIncorrect();
            
        }

    } else {

        function showCharactersMissing(){
            let charactersMissing = document.getElementsByClassName("characters-missing")[0];

            charactersMissing.style.display="block";

            return true;
        };

        showCharactersMissing();
    }

    
});



// console.log(myDni);
// let myDni = document.querySelectorAll('.my-dni').value; // da undefined, variable declarada pero no definida
// function collectInfo(){



// // OK poder escribir algo en el formulario - crear un input con HTML
// // OK cuando hagamos click en comprobar, recoger la info del campo a validar 
// // OK crear una variable que recoja la info del input
// // OK no puede tener más de 9 caracteres - OK en input también
// // OK guardar en variable número
// // OK guardar en variable letra
// // OK no puede tener más de 8 números
// // comprobar que el útimo caracter es una letra
// // no puede tener más de una letra
// // si tiene 8 números o menos, error
// // si tiene más de una letra o no tiene letra, error


// // separar letra de números
// // OK dni % 23 = letras/numeros(1-22)

