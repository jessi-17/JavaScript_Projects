function searchmovie(){
    let moviename = document.getElementById("movie").value;
    if (moviename !== "") {
        let result = movies.filter(function (movie) {
            return movie.name.toUpperCase().includes(moviename.toUpperCase());
        });
        displaymovies(result);
    } else {
        // If the search input is empty, display all movies
        displaymovies(movies);
    }
}


let movies = [

    {
        name:"Turning Red",
        poster:"https://m.media-amazon.com/images/I/81o1DHIM4oL._AC_UF1000,1000_QL80_.jpg",
        rating:8.9

    },
    {
        name:"The Dark Knight",
        poster:"https://m.media-amazon.com/images/I/81CLFQwU-WL.jpg",
        rating:9.2
    },

    {
        name:"Goblin",
        poster:"https://m.media-amazon.com/images/M/MV5BZTg0YmQxZTgtMzgwYi00N2NhLTlkMWYtOWYwNDA1YjkxMmViL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMzE4MDkyNTA@._V1_FMjpg_UX1000_.jpg",
        rating:8.9
    },
    {
        name:"Harry Potter and the sorcerer's stone",
        poster:"https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_.jpg",
        rating:8.9

    },
    {
        name:"Oppenheimer",
        poster:"https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg",
        rating:9.3,
    },
    {
        name:"Ford vs Ferrari",
        poster:"https://rukminim2.flixcart.com/image/850/1000/kvzkosw0/poster/y/l/2/medium-ford-vs-ferrari-movie-matte-finish-poster-ppoint7095-original-imag8rk4dpf58e5t.jpeg?q=90",
        rating:9.2
    },

    {
        name:"Cars",
        poster:"https://m.media-amazon.com/images/I/91nG1qkExWL._AC_UF1000,1000_QL80_.jpg",
        rating:8.9
    },
    {
        name:"Jab we met",
        poster:"https://stat4.bollywoodhungama.in/wp-content/uploads/2020/04/75-10.jpg",
        rating:8.9

    },
    {
        name:"Queen Charlotte:A Bridgerton Story",
        poster:"https://m.media-amazon.com/images/M/MV5BNWYwNzhhNzMtMWM2Yi00NzdlLTgxNmUtYWI2YTdiNmFmNzQwXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
        rating:9.3,
    },
    {
        name:"The Breaking Bad",
        poster:"https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg",
        rating:9.2
    },
    {
        name:"Barbie",
        poster:"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/barbie-movie-poster%2C-barbie-poster-design-template-12a00d56bcec24278a7c20c91e5b8f68_screen.jpg?ts=1691097154",
        rating:9.3,
    },
    {
        name:"Money Heist",
        poster:"https://m.media-amazon.com/images/M/MV5BODI0ZTljYTMtODQ1NC00NmI0LTk1YWUtN2FlNDM1MDExMDlhXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_FMjpg_UX1000_.jpg",
        rating:8.9
    }

]

// for (let index = 0; index < movies.length; index++) {
//     const element = movies[index];
//     console.log(element)
// }
function displaymovies(data) {
    document.getElementById("movies").innerHTML = ""; // Clear the HTML before the loop
    let htmlstring = ""; // Initialize the HTML string outside the loop
    for (let i = 0; i < data.length; i++) {
        htmlstring += `    
        <div class="movie">
            <div class="overlay">
                <div class="video"></div>
                <div class="details">
                    <h3>${data[i].name}</h3>
                    <h4>IMBD: ${data[i].rating}</h4>
                    <p>Lorem ,ipsum dolor, sit, amet, consg.</p>
                </div>
            </div>
            <img class="poster" src="${data[i].poster}" alt="">
        </div>`;
    }
    console.log(htmlstring)
    document.getElementById("movies").innerHTML = htmlstring; // Set the innerHTML after the loop
}
displaymovies(movies);


















// let movie = document.createElement("div")
// movie.classList.add("movie")

// let overlay = document.createElement("div")
// overlay.classList.add("overlay")

// movie.appendChild(overlay)
// console.log(movie)