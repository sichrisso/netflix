import { BASE_URL, API_KEY, IMAGE_URL } from "./constants.js";
import { getSearchTerm } from "./search.js";

const movieListView = document.querySelector(".movie_lists");
const movieInfo = document.querySelector("#title");
let moviehtml = "";

async function getNowPlayingMovie() {
  try {
    let response = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`
    );
    // console
    let { results } = await response.json();
    let output = [];
    let MovieInformation = "";
    let randomNumber = Math.floor(Math.random() * 20);
    console.log(randomNumber);
    if (response.status === 200) {
      results.forEach((movie) => {
        output.push({
          title: movie.title,
          overview: movie.overview,
          background: movie.backdrop_path,
        });
      });
    }

    MovieInformation += ` 
    <h1>${output[randomNumber].title}</h1>
    <p>${output[randomNumber].overview}</p>
  `;
    document.body.style.backgroundImage = `linear-gradient(
        to bottom,
        transparent 0%,
        rgb(26, 25, 25) 100%
      ),url('${IMAGE_URL}/${output[randomNumber].background}')`;
    movieInfo.innerHTML = MovieInformation;
    console.log(output[randomNumber].background);
  } catch (error) {
    console.log("error");
  }
}

getNowPlayingMovie();

fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.genres.forEach((genre) => {
      // console.log(genre.name)
      fetchMoviesListByGeners(genre.id, genre.name);
    });
  });

const fetchMoviesListByGeners = (generId, genreName) => {
  fetch(`${BASE_URL}/genre/${generId}/movies?api_key=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data)
      appendHtml(genreName, data.results);
    })
    .catch((error) => console.log(error));
};

const appendHtml = (genreName, data) => {
  moviehtml += `<div class="movie">`;
  moviehtml += `<p>${genreName}</p>`;
  moviehtml += `<img class="preBtn" src="images/pre-btn.svg"/>`;
  moviehtml += `<img class="nxtBtn"  src="images/nxt-btn.svg"/>`;
  moviehtml += `<div class="ImageContainer">`;
  data.forEach((movies, i) => {
    moviehtml += `<img class="good" src ="${IMAGE_URL}/${movies.poster_path}" onclick= "movieDetail()"/>`;

    if (i == data.length - 1) {
      setTimeout(() => {
        setupScrolling();
      }, 100);
    }
  });
  moviehtml += `</div>`;
  moviehtml += `</div>`;
  // moviehtml += `<script src="js/index.js"></script>`
  // console.log(moviehtml)
  movieListView.innerHTML = moviehtml;
};

// function search() {
// getSearchTerm();
// let response = fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${search_term}`)
// console.log(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${search_term}`)
// console.log(getSearchTerm())
// }

// search()
