const key = '13d24802db392d2fa00515de1f296743';

// const baseURL = 'http://api.lopenweathermap.org/data/2.5/weather?q=Karachi&appid=13d24802db392d2fa00515de1f296743';

// fetch(baseURL)
//     .then((data) => { console.log('response', data.json()) })
//     .catch((error) => {
//         console.log(error);
//     });

const requestCity = async (city) => {
    const baseURL = 'http://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&appid=${key}`;

    //make fetch call (promise call)
    const response = await fetch(baseURL + query);

    //promise data
    const data = await response.json();
    return data;

}
