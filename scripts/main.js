'use strict';
const categoryListElement = document.querySelector('#categoryList');

document.addEventListener("DOMContentLoaded", function (){
    console.log("iT bE loAdEd");

const chuckQuote = document.querySelector('#chuckQuote');

const apiURL = 'https://api.chucknorris.io/jokes/random?category=dev';
   get(apiURL). then(function (response){
        console.log("RESPONSE", response);
        giveMeQuote(response.value, chuckQuote);
   })

   const categoryUrl = "https://api.chucknorris.io/jokes/categories";
   get(categoryUrl).then(function(response){
    makeCatList(response);
   })
    
});

function giveMeQuote(quote, element) {
    element.innerText = quote;
}

function makeCatList (categoryArray) {
    console.log(categoryArray);
    
    const chooseElement = document.createElement('select');
    categoryArray.map(function(category){
        //create option element
        const option = document.createElement('option');
        //define option attribute
        option.value = category;
        option.text = category;
        //append option to the <select>
        chooseElement.appendChild(option);

    });
    //append the <select> to the <form>
    categoryListElement.append(chooseElement);
}

categoryListElement.addEventListener('submit', {
    
})