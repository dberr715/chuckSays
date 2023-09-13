'use strict';

document.addEventListener("DOMContentLoaded", function (){
    console.log("iT bE loAdEd");

const chuckQuote = document.querySelector('#chuckQuote');

   fetch('https://api.chucknorris.io/jokes/random?category=dev')
   .then(function (response){
        return response.json();
    })
    .then(function (data){
        giveMeQuote(data.value, chuckQuote);
        console.log(data);
        return data;
    })
    
});

function giveMeQuote(quote, element) {
    element.innerText = quote;
}