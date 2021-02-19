const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;

// This updates count and total
function changeSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatCount = selectedSeats.length;

    // This creates an array of all selectedSeats by index
    const seatIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

    // Saves above seatIndex to local storage
    localStorage.setItem('selectedSeats', JSON.stringify(seatIndex));

    count.innerText = selectedSeatCount;
    total.innerText = selectedSeatCount * ticketPrice;
}

// Mpvie click event
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    changeSelectedCount();
})

// Seat click event
container.addEventListener('click', e => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
        changeSelectedCount();
    }
})