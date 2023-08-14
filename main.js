const daysElem = document.querySelector('#days');
const hoursElem = document.querySelector('#hours');
const minutesElem = document.querySelector('#minutes');
const secondsElem = document.querySelector('#seconds');

const endDate = new Date ("December 25 2023 00:00:00 GMT+0200");
const endDateInMS = endDate.getTime();

const secondoInMs = 1000;
const minuteInMs = 60 * secondoInMs;
const hourInMs = 60 * minuteInMs;
const dayInMs = 24 * hourInMs;

const counterTimer = setInterval(timer, 1000);

function timer(){
    const nowInMs = new Date().getTime();

    const diff = endDateInMS - nowInMs;

    if (diff > 0){
        daysElem.innerHTML = Math.floor(diff / dayInMs);
        hoursElem.innerHTML = Math.floor ((diff % dayInMs) / hourInMs);
        minutesElem.innerHTML = Math.floor ((diff % hourInMs) / minuteInMs);
        secondsElem.innerHTML = Math.floor ((diff % minuteInMs) / secondoInMs);
    }

    else{
         clearInterval(timer);
         panelElem.innerHTML = "<h1>Buon Natale!🎅</h1>";
    }
    
    
}