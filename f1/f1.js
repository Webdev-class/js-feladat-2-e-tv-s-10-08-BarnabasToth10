
const APIAdress = 'https://archive-api.open-meteo.com/v1/archive?';
const locations = require('../locations.json')
async function f1 (lat, long, timeStr) {
    const querryStr = APIAdress + `latitude=${lat}&longitude=${long}&start_date=${timeStr}&end_date=${timeStr}&hourly=temperature_2m`;
    console.log(querryStr);
    const rArr = await fetch(querryStr).then(data => data.json());
    console.log(rArr);
    let sum = 0;
    console.log(rArr);
    rArr.hourly.temperature_2m.forEach(element => {
        sum+= element
    });
    return Math.floor(sum / 24);

    
    
}
//"https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m"
module.exports = f1;

f1(locations.Budapest.latitude, locations.Budapest.longitude, "2024-10-03");