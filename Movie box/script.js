const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTk1NTA1NmI1NDBkNTZkY2MwZWM3MWM3NDY3OTY2ZCIsIm5iZiI6MTc0NzU2MDA4Mi4zNiwic3ViIjoiNjgyOWE2OTIxN2Y0YjljZmM4ZGIyNjBhIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.U48Du0kQepSktn5PfrFRLd7md4wN9JzRYFmR8J_tCCg";

const search_button = document.querySelector("input[type='submit']");
const search_input = document.querySelector("input[type='text']");
const movie_container = document.getElementById("moviecontainer");


search_button.addEventListener("click", async () => {
  const query = search_input.value.trim();
  if (!query) {
    alert("Please enter a movie name.");
    return;
  }
  const result = await searchmovie(query);
  if (result.length > 0) {
    DisplayMovie(result[0]);
  } else {
    movie_container.innerHTML = "No movie found!";
  }
});



async function searchmovie(query) {
  const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}`;
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json;charset=utf-8",
      },
    });
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

function DisplayMovie(movie) {
  const posterPath = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/300x450?text=No+Image";

  movie_container.innerHTML = `
                  <div class="moviecard">
                    <div class="imagedata">
                        <img src="${posterPath}" alt="${movie.title}">
                         <div class="heading">
                            <h1>${movie.original_title}</h1>
                            <div class="sub-info">
                               <p>${movie.adult ? "Above 18" : "Family"}</p>
                                <p>${movie.vote_average}</p>
                                <p>${movie.original_language}</p>
                            </div>
                         </div>
                    </div>
                    <div class="plot">
                        <h4>Plot</h4>
                        <p>${movie.overview}
                        </p>
                    </div>
                </div>`;
}







