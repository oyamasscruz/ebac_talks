AOS.init();

// for this exemple we gonna use new Date function. This property its to recover today date.//
const eventDate = new Date("Oct 10, 2024 20:00:00"); // this constant we set the date event//
const stempEventDate = eventDate.getTime();// whith this constant we set the date as milliseconds//

const countingTheEventTime = setInterval(function() { //now we're gonna set the 
    const now = new Date(); // with you use this function at inspection area, you will see that this proporty returns the date of today//
    const setmpNow = now.getTime(); //as like up here this return the exactly now time in milliseconds//

    const timeWeAreLookingFor = stempEventDate - setmpNow //this constant is the number in milliseconds that means the time between the event and the now//

    const dayInMilliseconds = 1000 * 60 * 60 * 24 // 1000 = 1 second *60 = 1 minute *60 = 1 hour *24 = 1 day//
    const hoursInMilliseconds = 1000 * 60 * 60 // 1000 = 1 second *60 = 1 minute *60 = 1 hour //
    const minutesInMilliseconds = 1000 * 60 //1000 = 1 second *60 = 1 minute //
    const secondsInMilliseconds = 1000//1000 = 1 second

    const daysUntillEvent = Math.floor(timeWeAreLookingFor / dayInMilliseconds); // First, we selected the number in milliseconds that we already set and we divided for this number to descover how many days was left untill event. We use the Math.floor, to round the number down. 78,6 --> 78//
    const hoursUntillEvent = Math.floor((timeWeAreLookingFor % dayInMilliseconds) / hoursInMilliseconds); // to discover how many hours left to event we need the numbers after the "," that we rounded, to recover this number we use %.//
    const minutesUntillEvent = Math.floor((timeWeAreLookingFor % hoursInMilliseconds) /minutesInMilliseconds);
    const secondsUntillEvent = Math.floor((timeWeAreLookingFor % minutesInMilliseconds) / secondsInMilliseconds);

    document.getElementById('timers').innerHTML = `${daysUntillEvent}d ${hoursUntillEvent}h ${minutesUntillEvent}m ${secondsUntillEvent}s`;
    
    if (timeWeAreLookingFor < 0 ) {
        clearInterval(countingTheEventTime);
        document.getElementById('timers').innerHTML = 'Evento expirado';
    }
},1000)