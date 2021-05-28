

import Cell from '../cell'
import { getDate, splitDatasetArray } from './utils/methods'
const Grid = ({ forecast, location, columns }: any) => (
    <div className="data-grid">
        <h2>{`Results for ${location}`}</h2>
        {splitDatasetArray(forecast, columns).map((day: any, dayIndex: any) => {
            return (
                <div key={dayIndex} className="row">
                    <div className="col-12 col-lg-2">
                        <span>{getDate(day.find((interval: null) => interval !== null).dt_txt)}</span>
                    </div>
                    {day.map((interval: any, index: any) => {
                        return (
                            <div key={index} className="col-3 col-lg">
                                {interval ?
                                    <Cell time={interval.dt_txt} temperature={interval.main.temp} weather={interval.weather[0]} />
                                    : null}
                            </div>
                        )
                    }
                    )}
                </div>
            )
        }
        )}
    </div>
);

export default Grid
