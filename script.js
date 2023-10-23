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

const FULL_CAPACITY_CUFT = 864196;
const CUBIC_FEET_TO_GALLONS = 7.48; // Conversion factor

function calculateVolume() {
    const depthInput = parseFloat(document.getElementById('depthGauge').value);
    
    if (isNaN(depthInput)) {
        alert('Please enter a valid number for the depth gauge reading.');
        return;
    }

    let volume = 0;

    if (depthInput <= 0) {
        volume = 0;
    } else if (depthInput >= 16.5) {
        volume = data[data.length - 1].cumulativeVol;
    } else {
        for (let i = 1; i < data.length; i++) {
            if (depthInput <= data[i].depth) {
                // Linear interpolation
                const fraction = (depthInput - data[i-1].depth) / (data[i].depth - data[i-1].depth);
                volume = data[i-1].cumulativeVol + fraction * (data[i].cumulativeVol - data[i-1].cumulativeVol);
                break;
            }
        }
    }

    const remainingCapacityCuFt = FULL_CAPACITY_CUFT - volume;

    document.getElementById('cumulativeVolume').textContent = volume.toFixed(2);
    document.getElementById('capacity').textContent = remainingCapacityCuFt.toFixed(2);
    document.getElementById('cumulativeVolumeGallons').textContent = (volume * CUBIC_FEET_TO_GALLONS).toFixed(2);
    document.getElementById('capacityGallons').textContent = (remainingCapacityCuFt * CUBIC_FEET_TO_GALLONS).toFixed(2);
}

