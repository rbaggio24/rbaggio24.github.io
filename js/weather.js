let weatherDays = [10, 15, 20, 25, 30, -5, 5];
let offerMax = [0, 15, 20, 25, 50];
let dailyOffers = ["forró csoki", "meleg tea", "finom süti", "fagyi", "jéghideg limonádé"]

function weatherWidget() {
    document.getElementById("celsius").innerHTML = weatherDays[parseInt(document.getElementById("weatherday").value)];
    lowestDegree();
    highestDegree();
    averageDegree();
    for (let i = 0; i < offerMax.length; i++) {
        if (weatherDays[parseInt(document.getElementById("weatherday").value)] <= offerMax[i]) {
            document.getElementById("offers").innerHTML = dailyOffers[i];
            break;
        }
    }
};

function lowestDegree() {
    let lowest = weatherDays[0];
    for (let i = 0; i < weatherDays.length; i++) {
        if (weatherDays[i] < lowest) {
            lowest = weatherDays[i];
        }
    }
    document.getElementById("stat1").innerHTML = lowest + " &#8451; (min)";
};

function highestDegree() {
    let highest = weatherDays[0];
    for (let i = 0; i < weatherDays.length; i++) {
        if (weatherDays[i] > highest) {
            highest = weatherDays[i];
        }
    }
    document.getElementById("stat2").innerHTML = highest + " &#8451; (max)";
};

function averageDegree() {
    let sum = 0;
    for (let i = 0; i < weatherDays.length; i++) {
        (sum += weatherDays[i]);
    }
    document.getElementById("stat3").innerHTML = Math.floor(sum / weatherDays.length) + " &#8451; (avg)";
}