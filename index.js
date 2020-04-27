'use strict'

function getRecipe() {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(resoponseJson => console.log(resoponseJson))
    .catch(error => `Sorry, cant find the right recipe.`)
}

$(getRecipe())