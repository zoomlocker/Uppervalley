// Data from the table
const data = [
    {depth: 0, cumulativeVol: 0},
    {depth: 2, cumulativeVol: 92560},
    {depth: 4, cumulativeVol: 194773},
    {depth: 6, cumulativeVol: 306949},
    {depth: 8, cumulativeVol: 429544},
    {depth: 10, cumulativeVol: 563060},
    {depth: 12, cumulativeVol: 707822},
    {depth: 14, cumulativeVol: 864196},
    {depth: 16, cumulativeVol: 1032685},
    {depth: 16.5, cumulativeVol: 1078713}
];

function calculateVolume() {
    const gaugeReading = parseFloat(document.getElementById("gaugeReading").value);
    const maxVolume = 864196;
    let cumulativeVolumeCubicFeet;
    
    // Linear interpolation based on gauge reading
    for (let i = 1; i < lookupTable.length; i++) {
        if (gaugeReading <= lookupTable[i].depth) {
            cumulativeVolumeCubicFeet = lookupTable[i-1].volume + ((gaugeReading - lookupTable[i-1].depth) * 
            (lookupTable[i].volume - lookupTable[i-1].volume) / (lookupTable[i].depth - lookupTable[i-1].depth));
            break;
        }
    }
    
    const remainingCapacityCubicFeet = maxVolume - cumulativeVolumeCubicFeet;
    const cubicFeetToGallons = 7.48052; // Conversion factor
    const cumulativeVolumeGallons = cumulativeVolumeCubicFeet * cubicFeetToGallons;
    const remainingCapacityGallons = remainingCapacityCubicFeet * cubicFeetToGallons;

    document.getElementById("cumulativeVolumeCubicFeet").innerText = cumulativeVolumeCubicFeet.toFixed(2);
    document.getElementById("remainingCapacityCubicFeet").innerText = remainingCapacityCubicFeet.toFixed(2);
    document.getElementById("cumulativeVolumeGallons").innerText = cumulativeVolumeGallons.toFixed(2);
    document.getElementById("remainingCapacityGallons").innerText = remainingCapacityGallons.toFixed(2);

    // Pie chart using Chart.js
    const ctx = document.getElementById('capacityChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Cumulative Volume (gallons)', 'Remaining Capacity (gallons)'],
            datasets: [{
                data: [cumulativeVolumeGallons, remainingCapacityGallons],
                backgroundColor: ['#36A2EB', '#FFCE56']
            }]
        }
    });
}
