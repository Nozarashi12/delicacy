
function getRecipe() {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res => {
            return res.json();
        })
        .then(data => {
            document.querySelector(".random").innerHTML =
                `<h2 class="title2">Random Recipe</h2>
                <div class="rndimg">
                    <img class="recipe" src="${data.meals[0].strMealThumb}">
                    <p class="rname">${data.meals[0].strMeal}</p>
                </div>`;
        })
        .catch(error => {
            console.log("Recipe not found");
        });
}

getRecipe();




document.querySelector(".btn").addEventListener("click", getCat)

function getCat() {
    const catname = document.querySelector(".search").value;
    const cat_URL = (`https://www.themealdb.com/api/json/v1/1/filter.php?c=${catname}`);
    fetch(cat_URL)
        .then(res => res.json())
        .then(data => {
            document.querySelector(".searchb4").innerHTML =
                `<h2 class="b4meals">Popular Dishes by ${catname}</h2>
            <div class="mealimg">
            <img class="meals" src="${data.meals[0].strMealThumb}">
            <p class="lastp">${data.meals[0].strMeal}</p>
            <img class="meals" src="${data.meals[1].strMealThumb}">
            <p class="lastp">${data.meals[1].strMeal}</p>
            <img class="meals" src="${data.meals[2].strMealThumb}">
            <p class="lastp">${data.meals[2].strMeal}</p>
            <img class="meals" src="${data.meals[3].strMealThumb}">
            <p class="lastp">${data.meals[3].strMeal}</p>
         </div>`;
            // console.log(data);
        })
        .catch(error => {
            console.log("Error fetching category");
        });


};


getCat();
