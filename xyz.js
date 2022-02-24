async function getData(url = '',) {
    const response = await fetch(url);
        
       
    
    return response.json();
}

getData("https://www.themealdb.com/api/json/v1/1/search.php?s=egg")
.then(data => {
    hk.innerHTML = data.meals[3].strMeal;
});
getData("https://www.themealdb.com/api/json/v1/1/search.php?s=Chicken")
.then(data => {
    k.innerHTML = data.meals[0].strMeal;
});
getData("https://www.themealdb.com/api/json/v1/1/search.php?s=Biryani")
.then(data => {
    bi.innerHTML = data.meals[0].strMeal;
});