const key = 'LNARzKeZMGf91q98uuCeeGRyQ8dSGJVE';

const requestCity = async (city) => {
    const baseURL = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const query = `?q=${city}&appid=${key}`;

    //make fetch call (promise call)
    const response = await fetch(baseURL + query);

    //promise data
    const data = await response.json();
    return data;

}
