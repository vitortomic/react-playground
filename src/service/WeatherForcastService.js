class WeatherForcastService {
    constructor (){}
    async getWeather() {
        return getWeather()
    }
}

const belgradeCoordinates = '44.7866,-20.4489'
const apiKey = 'a3a06963498da7c2543a83600028c56b'
const apiUrl = `https://api.darksky.net/forecast/${apiKey}/${belgradeCoordinates}?units=auto`

const getWeather = async()=>{
    return await (await fetchWeatherFromApi()).json()
}

const fetchWeatherFromApi = ()=>{
    return fetch(apiUrl)
}

export const getWeatherForcast = WeatherForcastService.prototype.getWeather