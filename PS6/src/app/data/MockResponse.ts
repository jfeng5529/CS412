import { Weather } from './Weather'
export const allWeather: Weather[] = [
    {
    lat: 40.68,
    lon: -74.17,
    alt_m: 5,
    alt_ft: 16.4,
    wx_desc: 'Clear skies',
    wx_code: 0,
    wx_icon: 'Clear.gif',
    temp_c: 4.4,
    temp_f: 39.92,
    feelslike_c: -0.97,
    feelslike_f: 30.26,
    humid_pct: 57,
    windspd_mph: 20.51,
},
    {
        lat: 40.68,
        lon: 74.17,
        alt_m: 5,
        alt_ft: 16.4,
        wx_desc: "rainy",
        wx_code: 0,
        wx_icon: 'Rain.gif',
        temp_c: -4.4,
        temp_f: 20.92,
        feelslike_c: -0.97,
        feelslike_f: 30.26,
        humid_pct: 57,
        windspd_mph: 20.51
    },
    {
        lat: 45.68,
        lon: -54.17,
        alt_m: 5,
        alt_ft: 16.4,
        wx_desc: "cloudy",
        wx_code: 0,
        wx_icon: 'Cloudy.gif',
        temp_c: 30.4,
        temp_f: 90.92,
        feelslike_c: 35,
        feelslike_f: 98,
        humid_pct: 57,
        windspd_mph: 20.51
    }
]