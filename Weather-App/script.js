const search = document.getElementById("btn");
const inputQuery = document.querySelector("input[type='text']");
const localtime = document.getElementById("localtime");
const weatherContainer = document.getElementById("weather-Container");
//fetch call: - http://api.weatherapi.com/v1/current.json?key=4daf6956a8314ec3b01183517251905&q=nakodar

weatherContainer.innerHTML=''
function DisplayReport(data){
    localtime.innerHTML = data.location.localtime;
    localtime.style.fontSize="1rem";
    weatherContainer.innerHTML = `
      <div class="weather-report">
          <div class="city">
              <h1>${data.location.name}</h1>
          </div>
          <div class="temperature">
              <h1>${data.current.temp_c}°C</h1>
          </div>
          <div class="visual-data">
              <img src="${data.current.condition.icon}" alt="cloud">
              <h1>${data.current.text}</h1>
          </div>
          <div class="Detailed-information">
              <div class="humidity">
                  <div class="row-1">
                      <i class="fa-solid fa-temperature-three-quarters"></i>
                      <h2>Humidity</h2>
                  </div>
                  <div class="row-2">
                      <h1>${data.current.humidity}</h1>
                  </div>
              </div>
              <div class="feelslike">
                  <div class="row-1">
                      <i class="fa-solid fa-droplet"></i>
                      <h2>Feels like</h2>
                  </div>
                  <div class="row-2">
                      <h1>${data.current.feelslike_c}°C</h1>
                  </div>
              </div>
          </div>
      </div>
      
      `;
}
search.addEventListener("click", async () => {
const location = inputQuery.value.trim();
if(!location){
    alert("Enter a location to search");
    return; 
}
const url = `http://api.weatherapi.com/v1/current.json?key=4daf6956a8314ec3b01183517251905&q=${location};`
try{
    const response = await fetch(url);
    if(!response.ok){
        throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    DisplayReport(data);
}catch(error){
    console.log(error);
    alert("Could not reterieve weather data. please try again.")
}
});