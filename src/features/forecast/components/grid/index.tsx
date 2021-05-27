

import Cell from '../cell'
const Grid = ({ forecast, location, columns }: any) => (
    <div className="data-grid">
        <h2>{`Results for ${location}`}</h2>
        {splitDatasetArray(forecast, columns).map((day: any, dayIndex: any) => {
            console.log({ forecast, columns, day, dayIndex })
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
                                    : ''}
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
export const getDate = (date: any) => new Date(date).toDateString()
const splitDatasetArray = (data: any, columns: any): any => {
    if (!Array.isArray(data)) {
        return false
    }

    if (!Number.isInteger(columns) || typeof columns !== 'number') {
        return data
    }

    return Array.from(new Array(data.length / columns).keys(), row => {
        return data.slice(row * columns, (row + 1) * columns)
    })
}
export default Grid
