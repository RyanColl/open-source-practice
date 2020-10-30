/* Favourite Movie */
var favouriteMovies = [];
function addFavouriteMovie(movieName){
    if(movieName.includes("The") != 1){
        favouriteMovies.push(movieName);
    } 
}

addFavouriteMovie("Avengers");
addFavouriteMovie("The Spiderman");
addFavouriteMovie("Revenant");
addFavouriteMovie("Ghospel");
addFavouriteMovie("Inception");
addFavouriteMovie("The Titanic");

function printFavmovies(){
    for (var i = 0; i < favouriteMovies.length; i++){
        console.log(favouriteMovies[i]);
    }
}
printFavmovies();