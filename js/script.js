/* Date and time start */
const timeElement = document.querySelector('.time');
const datеElement = document.querySelector('.date');
const greeting = document.querySelector('.greeting');

const options = { month: 'long', day: 'numeric', weekday: 'long',timezone: 'UTC' };


/* Greeting start */
function showGreeting() {
    const date =  new Date;
    const hours = date.getHours();
    const getTimeOfDay = () => {
        if (hours >= 0 && hours < 6) {
            return 'Night';
        } else if (hours >= 6 && hours < 12) {
            return 'Morning';
        } else if (hours >= 12 && hours < 18) {
            return 'Day';
        } else {
            return 'Evening';
        }
    }

    const timeOfDay = getTimeOfDay();
    const greetingText = `Good ${timeOfDay}`;
    greeting.textContent = greetingText;
}
/* Greeting end */


/* Date and time start */
function showTime() {
    const date =  new Date;
    const currentDate = date.toLocaleDateString('en-En', options);
    const currentTime = date.toLocaleTimeString();
    timeElement.textContent = currentTime;
    datеElement.textContent = currentDate;  
    showGreeting();
    setTimeout(showTime, 1000);
}

showTime();
/* Date and time end */


/* Local storage start */

function setLocalStorage() {
    localStorage.setItem('name', name.value)
}

window.addEventListener('beforeload', setLocalStorage);

/* Local storage end */
