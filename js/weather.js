const API_KEY = "388b3f3251b60d9b36e8929106c212aa";
const sample = config.apiKey;

console.log(typeof sample);

// 성공했을 때
function onGeoOk(position) {
    // 위도값
    const lat = position.coords.latitude;
    const lgt = position.coords.longitude;
    // console.log("You live in", lat, lgt);
    // 주소가져오는 법, &units=metric -> 섭씨온도로 바꾸기
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lgt}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector(".weather dd");
        const city = document.querySelector(".city dd");
        city.innerText = data.name; 
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.")
}

// getCurrentPosition은 두개의 매개변수를 요하는데 첫번째 성공했을때, 두번째 실패했을때
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);