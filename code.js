const notificationCards = document.querySelectorAll('.notification');
const readAllBtn = document.querySelector('#readAll')
const notifCount = document.querySelector('#notifCount')
let count = 0;

readAllBtn.addEventListener('click', () => {
    for (let i = 0; i < notificationCards.length - 1; i++) {
        notificationCards[i].classList.remove('unread')
        console.log(notificationCards[i]);
    }
    notifCount.innerHTML = count;
})



