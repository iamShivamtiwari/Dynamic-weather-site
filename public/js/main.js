// first of all we get the data of the submitBtn and the control of the submit button as submitBtn only.
// Then we add a event listener to this button as "getinfo" which will be listened only when the button is clicked.
// after that we code the eventlistener with a function object "event"
// then we get the cityName form input value through cityVal variable
// then putting a if else statement where in the 'if' condition the cityVal shouldn't match empty value
// if the cityVal is empty then city_name which is a 'p' value in html will get the innertext of "write city name"   
// and will hide the data of the class with it of the class data_hide
// and in else condition statement we will write it in 'try and catch' statement and if there is a error we will catch that through "catch" method
// then we will hide the data in error. otherwise we will move forward
// in try statement we will get the api through url variable and fetch that through response variable
// and get that reponse in 'json' format in data and then convert and get the data in array form as arrdata
// and then put the real value of the temperature and cityname from the api into the their 'id' html 
// and then in a variable we will get the mood of the weather like cloudy sunny 
// then in if else statement we will check the mood and if it matches then set the font awesome icon according to that
// and remove the class data_hide from html



const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp_real_val = document.getElementById("temp_real_val");
const temp_status = document.getElementsByClassName("temp_status");
const datahide = document.querySelector(".middle_layer");

const getInfo = async(event) => {
  event.preventDefault();
  let cityVal = cityName.value;
  if (cityVal === "") {
    city_name.innerText = `Write the city name.`;
    datahide.classList.add("data_hide");
  } else {
    try {
      let url = `api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=637001019c3913c2df213e69e4377d71`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];

      city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
      temp_real_val.innerText = arrData[0].main.temp;

      const tempMood = arrData[0].weather[0].main;

      //    condition to check sunny or cloudy weather
      if (tempMood == "Clear") {
        temp_status.innerHTML =
          "<i class='fas fa-sun' style='color: #eccc68;'></i>";
      } else if (tempMood == "Clouds") {
        temp_status.innerHTML =
          "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
      } else if (tempMood == "Rain") {
        temp_status.innerHTML =
          "<i class='fas fa-cloud-rain' style='color: #04b0be;'></i>";
      } else {
        temp_status.innerHTML =
          "<i class='fas fa-sun' style='color: #eccc68;'></i>";
      }
      datahide.classList.remove("data_hide");
    } catch {
      city_name.innerText = `City name should be properly written.`;
      datahide.classList.add("data_hide");
    }
  }
};

submitBtn.addEventListener("click", getInfo);
