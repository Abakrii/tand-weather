
import { convertKelvinToCelsius, getTime } from './utils/methods';
const Cell = ({ time, temperature, weather }: any) => (
    <div className="forecast-cell">
        {weather ?
            <span>
                <img src={`http://openweathermap.org/img/w/${weather.icon}.png`} height="50px" width="50px" alt={weather.description} />
            </span>
            : null}
        <span>{getTime(time)}</span>
        <span>{convertKelvinToCelsius(temperature)}&deg;C</span>
    </div>
)
export default Cell
