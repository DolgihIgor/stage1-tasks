/* Date and time start */
const timeElement = document.querySelector('.time');
const datеElement = document.querySelector('.date');
const options = { month: 'long', day: 'numeric', weekday: 'long',timezone: 'UTC' };

function showTime() {
    const date =  new Date;
    const currentDate = date.toLocaleDateString('en-En', options);
    const currentTime = date.toLocaleTimeString();
    timeElement.textContent = currentTime;
    datеElement.textContent = currentDate;  
    setTimeout(showTime, 1000);
}

showTime();
/* Date and time end */