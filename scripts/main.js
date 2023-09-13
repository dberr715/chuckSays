'use strict';

document.addEventListener("DOMContentLoaded", function (){
    console.log("iT bE loAdEd");

    const fetchQuote = fetch('https://api.chucknorris.io/jokes/random');
    console.log(fetchQuote)
});