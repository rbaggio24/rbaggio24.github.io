document.querySelector("#weatherday").addEventListener("change", showTemp);

let weatherDays = new Array();
let currentTemp = 0;

$.getJSON('https://api.openweathermap.org/data/2.5/onecall?lat=47.5&lon=19.04&units=metric&exclude=current,minutely,hourly&appid=80ad945aef5a99c13c4493187d26f66c', function (data) {
    for (let i = 0; i < data.daily.length - 1; i++) {
        var d = new Date(0);
        d.setUTCSeconds(data.daily[i].dt);
        let index = d.getDay();
        index === 0 ? weatherDays.splice(6, 0, Math.round(data.daily[i].temp.day)) : weatherDays.splice(index - 1, 0, Math.round(data.daily[i].temp.day))
    }
    currentTemp = weatherDays[parseInt(document.getElementById("weatherday").value)];
});

window.onload = function () {
    showTemp();
    lowestDegree();
    highestDegree();
    averageDegree();
    showOffer();
};

function calcTemp(element, type, postFix) {
    if (type === "toC") {
        document.getElementById(element).innerHTML = Math.round((parseInt(document.getElementById(element).innerHTML) - 32) / 1.8) + postFix;
    }
    else {
        document.getElementById(element).innerHTML = Math.round((parseInt(document.getElementById(element).innerHTML) * 1.8) + 32) + postFix;
    }
}

function changeTemp(type) {
    calcTemp("celsius", type, type === "toC" ? "&#8451;" : "&#8457;");
    calcTemp("stat1", type, type === "toC" ? "&#8451; (min)" : "&#8457; (min)");
    calcTemp("stat2", type, type === "toC" ? "&#8451; (max)" : "&#8457; (max)");
    calcTemp("stat3", type, type === "toC" ? "&#8451; (avg)" : "&#8457; (avg)");
    (type === "toC") ? document.getElementById('fahr').checked = false : document.getElementById('cel').checked = false;
};

function showTemp() {
    if (document.getElementById('cel').checked === true) {
        document.getElementById("celsius").innerHTML = currentTemp + "&#8451;";
    } else {
        document.getElementById("celsius").innerHTML = Math.round(currentTemp * 1.8) + 32 + "&#8457;";
    }
};

function showOffer() {
    let dailyOffers = ["forró csoki", "meleg tea", "finom süti", "fagyi", "jéghideg limonádé"];
    let offerMax = [0, 15, 20, 25, 50];
    for (let i = 0; i < offerMax.length; i++) {
        if (currentTemp <= offerMax[i]) {
            document.getElementById("offers").innerHTML = dailyOffers[i];
            break;
        }
    }
};

function showStat(element, content) {
    let statElement = document.getElementById(element);
    if (statElement !== null) {
        statElement.innerHTML = content;
    }
};

function lowestDegree() {
    let lowest = weatherDays[0];
    for (let i = 0; i < weatherDays.length; i++) {
        if (weatherDays[i] < lowest) {
            lowest = weatherDays[i];
        }
    }
    showStat("stat1", lowest + " &#8451; (min)");
};

function highestDegree() {
    let highest = weatherDays[0];
    for (let i = 0; i < weatherDays.length; i++) {
        if (weatherDays[i] > highest) {
            highest = weatherDays[i];
        }
    }
    showStat("stat2", highest + " &#8451; (max)");
};

function averageDegree() {
    let sum = 0;
    for (let i = 0; i < weatherDays.length; i++) {
        (sum += weatherDays[i]);
    }
    showStat("stat3", Math.floor(sum / weatherDays.length) + " &#8451; (avg)");
}