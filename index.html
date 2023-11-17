google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawInitialChart);

const maxVolumeCubicYards = 1032685 / 27; // Convert the maximum volume to cubic yards
const gallonConversion = 7.48;
const cubicYardsToCubicFeet = 27;

const depthData = [
    { elevation: 106.5, volume: 41145, depthIncreasePerInch: 3.36 },
    { elevation: 106, volume: 39441, depthIncreasePerInch: 3.72 },
    { elevation: 104.5, volume: 34721, depthIncreasePerInch: 3.93 },
    { elevation: 104, volume: 33204, depthIncreasePerInch: 4.00 },
    { elevation: 102, volume: 27416, depthIncreasePerInch: 4.32 },
    { elevation: 100, volume: 22057, depthIncreasePerInch: 4.67 },
    { elevation: 98, volume: 17115, depthIncreasePerInch: 5.08 },
    { elevation: 96, volume: 12580, depthIncreasePerInch: 5.54 },
    { elevation: 94, volume: 8428, depthIncreasePerInch: 6.07 },
    { elevation: 92, volume: 4644, depthIncreasePerInch: 6.68 },
    { elevation: 90, volume: 1216, depthIncreasePerInch: 7.40 }
];

function drawInitialChart() {
    var data = google.visualization.arrayToDataTable([
        ['Volume', 'Amount'],
        ['Cumulative Volume', 0],
        ['Remaining Capacity', maxVolumeCubicYards * cubicYardsToCubicFeet],
        ['Volume After Rainfall', 0]
    ]);

    var options = {
        title: 'Basin Capacity - Initial State',
        pieHole: 0.4,
        colors: ['#e0e0e0', '#3498db', '#c7ecee'],
        is3D: false,
        pieSliceText: 'none',
        legend: { position: 'none' },
        animation: {
            startup: true,
            duration: 1000,
            easing: 'out',
        }
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}

function calculate() {
    const depth = parseFloat(document.getElementById('depth').value);
    const anticipatedRainfall = parseFloat(document.getElementById('rainfall').value);
    
    const volumeCubicYards = interpolate(depthData, depth, 'elevation', 'volume');
    const depthIncreasePerInch = interpolate(depthData, depth, 'elevation', 'depthIncreasePerInch');
    
    const depthIncrease = depthIncreasePerInch * anticipatedRainfall;
    const newDepth = depth + depthIncrease;
    const newVolumeCubicYards = interpolate(depthData, newDepth, 'elevation', 'volume');

    const volumeCubicFeet = volumeCubicYards * cubicYardsToCubicFeet;
    const volumeGallons = volumeCubicFeet * gallonConversion;
    const remainingCapacityCubicYards = maxVolumeCubicYards - volumeCubicYards;
    const remainingCapacityCubicFeet = remainingCapacityCubicYards * cubicYardsToCubicFeet;
    const remainingCapacityGallons = remainingCapacityCubicFeet * gallonConversion;
    const newVolumeCubicFeet = newVolumeCubicYards * cubicYardsToCubicFeet;
    const newVolumeGallons = newVolumeCubicFeet * gallonConversion;

    document.getElementById('cumulativeVolume').textContent = `${volumeCubicFeet.toFixed(2)} cu.ft. / ${volumeGallons.toFixed(2)} gallons`;
    document.getElementById('remainingCapacity').textContent = `${remainingCapacityCubicFeet.toFixed(2)} cu.ft. / ${remainingCapacityGallons.toFixed(2)} gallons`;
    document.getElementById('anticipatedDepthIncrease').textContent = `${depthIncrease.toFixed(2)} ft`;
    document.getElementById('newVolume').textContent = `${newVolumeCubicFeet.toFixed(2)} cu.ft. / ${newVolumeGallons.toFixed(2)} gallons`;

    drawChart(volumeCubicFeet, remainingCapacityCubicFeet, newVolumeCubicFeet);
}

function interpolate(data, value, keyX, keyY) {
    let i = 0;
    while (i < data.length && value > data[i][keyX]) {
        i++;
    }
    if (i === 0) {
        return data[0][keyY];
    } else if (i === data.length) {
        return data[data.length - 1][keyY];
    }
    const x1 = data[i - 1][keyX];
    const y1 = data[i - 1][keyY];
    const x2 = data[i][keyX];
    const y2 = data[i][keyY];

    return y1 + (y2 - y1) * (value - x1) / (x2 - x1);
}

function drawChart(cumulativeVolume, remainingCapacity, newVolume) {
    var data = google.visualization.arrayToDataTable([
        ['Volume', 'Amount'],
        ['Cumulative Volume', cumulativeVolume],
        ['Remaining Capacity', remainingCapacity],
        ['Volume After Rainfall', newVolume]
    ]);

    var options = {
        title: 'Basin Capacity',
        pieHole: 0.4,
        colors: ['#3498db', '#e74c3c', '#f1c40f']
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}
