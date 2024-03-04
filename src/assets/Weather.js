import { variables } from "./Const";

function getWeather(lat, lon){
    let url = `${variables.weatherBase}?lat=${lat}&lon=${lon}&appid=${variables.weatherKey}`;
    console.log(url);
    return fetch(url)
    .then((response) => {
        return response.json();
    })
    .then(data => {
        // console.log(data);
        return data;
    })
    .catch(error => console.log(error));
}

export function getPosition(){
    let promise = new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })
    return promise
    .then((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        return getWeather(lat, lon);
    })
    .catch((error) => {
        console.log(error);
    })
}