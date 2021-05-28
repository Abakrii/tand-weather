export const getDate = (date: any) => new Date(date).toDateString()
export const splitDatasetArray = (data: any, columns: any): any => {
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