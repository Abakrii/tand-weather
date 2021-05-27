export const convertKelvinToCelsius = (temperature: any) => Math.round(temperature - 273.15)

export const getTime = (date: any) => new Date(date).toLocaleTimeString('en-GB', { hour: 'numeric', minute: 'numeric' })
const Cell = ({ time, temperature, weather }: any) => (
    <div className="forecast-cell">
        {weather ?
            <span>
                <img src={`http://openweathermap.org/img/w/${weather.icon}.png`} height="50px" width="50px" alt={weather.description} />
            </span>
            : ''}
        <span>{getTime(time)}</span>
        <span>{convertKelvinToCelsius(temperature)}&deg;C</span>
    </div>
)

export default Cell
