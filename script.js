const maxVolume = 1032685; // Maximum capacity in cu.ft.
const gallonConversion = 7.48; // 1 cubic foot equals 7.48 gallons
let currentVolume = 0; // Global variable to store the current volume

const depthToVolume = [
    { depth: 0, cumulativeVol: 0 },
    { depth: 2, cumulativeVol: 92560 },
    { depth: 4, cumulativeVol: 194773 },
    { depth: 6, cumulativeVol: 306949 },
    { depth: 8, cumulativeVol: 429544 },
    { depth: 10, cumulativeVol: 563060 },
    { depth: 12, cumulativeVol: 707822 },
    { depth: 14, cumulativeVol: 864196 },
    { depth: 14.5, cumulativeVol: 1032685 }
];

const depthToArea = [
    { depth: 0, contourArea: 43928.88 },
    { depth: 2, contourArea: 48671.15 },
    { depth: 4, contourArea: 53581.53 },
    { depth: 6, contourArea: 58632.71 },
    { depth: 8, contourArea: 64001.61 },
    { depth: 10, contourArea: 69552.81 },
    { depth: 12, contourArea: 75246.65 },
    { depth: 14, contourArea: 81163.95 },
    { depth: 14.5, contourArea: 81163.95 }
];

function linearInterpolation(arr, inputDepth, prop) {
    let i = 0;
    while (i < arr.length && inputDepth > arr[i].depth) {
        i++;
    }

    if (i === 0) return arr[0][prop];
    if (i === arr.length) return arr[arr.length - 1][prop];

    const x1 = arr[i - 1].depth;
    const y1 = arr[i - 1][prop];
    const x2 = arr[i].depth;
    const y2 = arr[i][prop];

    return ((inputDepth - x1) * (y2 - y1) / (x2 - x1)) + y1;
}

function calculateVolume(depth) {
    return linearInterpolation(depthToVolume, depth, 'cumulativeVol');
}

function calculateRainfall() {
    const gaugeDepth = parseFloat(document.getElementById("gaugeDepth").value);
    const rainfall = parseFloat(document.getElementById("rainfall").value);
    const recharge = rainfall * 2; // as 1 inch of rain = 2 inches of recharge

    currentVolume = calculateVolume(gaugeDepth);
    const currentSurfaceArea = linearInterpolation(depthToArea, gaugeDepth, 'contourArea');
    
    const anticipatedVolume = recharge * currentSurfaceArea;
    const newTotalVolume = currentVolume + anticipatedVolume;
    const newRemainingCapacity = maxVolume - newTotalVolume;

    document.getElementById("currentVolume").textContent = Intl.NumberFormat().format(Math.round(currentVolume)) + " cu.ft.";
    document.getElementById("currentVolumeGallons").textContent = Intl.NumberFormat().format(Math.round(currentVolume * gallonConversion)) + " gallons";
    
    document.getElementById("anticipatedVolume").textContent = Intl.NumberFormat().format(Math.round(anticipatedVolume)) + " cu.ft.";
    document.getElementById("anticipatedVolumeGallons").textContent = Intl.NumberFormat().format(Math.round(anticipatedVolume * gallonConversion)) + " gallons";
    
    document.getElementById("newTotalVolume").textContent = Intl.NumberFormat().format(Math.round(newTotalVolume)) + " cu.ft.";
    document.getElementById("newRemainingCapacity").textContent = Intl.NumberFormat().format(Math.round(newRemainingCapacity)) + " cu.ft.";
}
