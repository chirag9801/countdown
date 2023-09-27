const overlay = document.querySelector('.overlay')
const endDate = "28 September 2023 12:00 PM"
document.getElementById('end-date').innerText = endDate; // Use getElementById

const messageElm = document.querySelector('.message');
const messageElm1 = document.querySelector('.mesg');


const inputs = document.querySelectorAll('input')



const clock = function () {
    const end = new Date(endDate)
    const now = new Date();

    const differ = (end - now) / 1000

    if (differ <= 0) {
        clearInterval(interval)
        messageElm.innerText = "Ganpati Bappa Morya";
        messageElm1.innerText = "pudhchya varshi lavkar ya"
        overlay.style.display = 'none';
        return;

    }

    inputs[0].value = (Math.floor(differ / 3600 / 24))  //days
    inputs[1].value = Math.floor(differ / 3600) % 24
    inputs[2].value = Math.round(differ / 60) % 60
    inputs[3].value = Math.round(differ) % 60


}

const interval = setInterval(clock, 1000)
clock()