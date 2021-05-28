

export const convertKelvinToCelsius = (temperature: any) => Math.round(temperature - 273.15);
export const getTime = (date: any) => new Date(date).toLocaleTimeString('en-GB', { hour: 'numeric', minute: 'numeric' })