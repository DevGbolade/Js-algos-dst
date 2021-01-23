const fs = require('fs');
const List = require('./list');


const contents = fs.readFileSync('./movies.txt', 'utf8');


const movieStore = loadMovie(contents);

function loadMovie(file) {
    const movies = file.split("\n");
    for (let i = 0; i < movies.length; ++i) {
        movies[i] = movies[i].trim();
    }
    return movies;
}

const movieList = new List();

for(let i = 0; i < movieStore.length; ++i){
    movieList.append(movieStore[i]);
}

console.log(movieList.toString());
movieList.front();
// console.log(movieList.getElement()); // 
// console.log(movieStore);