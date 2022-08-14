import { BASE_URL, API_KEY, IMAGE_URL } from "./constants.js";
import { getSearchTerm } from './search.js';
// import { clicked } from './index.js';
const movieListView = document.querySelector(".movie_lists");
let moviehtml = "";

fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`)
.then(response => response.json())
.then(data => {
    // console.log(data)
    data.genres.forEach(genre => {
        // console.log(genre.name)
        fetchMoviesListByGeners(genre.id, genre.name);
    })
});

const fetchMoviesListByGeners = (generId, genreName) => {
    fetch(`${BASE_URL}/genre/${generId}/movies?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        appendHtml(genreName, data.results);
    })
    .catch(error => console.log(error));
}

const appendHtml =(genreName, data) => {
    moviehtml += `<div class="movie">`
    moviehtml += `<p>${genreName}</p>`;
    moviehtml += `<button class="preBtn"><img src="images/pre-btn.svg"/></button>`;
    moviehtml += `<button class="nxtBtn" onclick="righty()"><img src="images/nxt-btn.svg"/></button>`
    moviehtml += `<div class="ImageContainer">`
      data.forEach((movies, i)=> {
        moviehtml += `<img class="good" src ="${IMAGE_URL}/${movies.poster_path}" onclick= "movieDetail()"/>`;
    })
    moviehtml += `</div>`
    moviehtml += `</div>`
    // moviehtml += `<script src="js/index.js"></script>`
    // console.log(moviehtml)
    movieListView.innerHTML = moviehtml;  
}

// function search() {
  // getSearchTerm();
  // let response = fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${search_term}`)
  // console.log(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${search_term}`)
  // console.log(getSearchTerm())
// }

// search()






