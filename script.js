document.addEventListener('DOMContentLoaded', function() {
    const seatsContainer = document.getElementById('seats-container');
    const bookBtn = document.getElementById('book-btn');
    let bookedSeats = [];
  
    // Function to create seats
    function createSeats() {
      for (let i = 1; i <= 20; i++) {
        const seat = document.createElement('div');
        seat.classList.add('seat');
        seat.textContent = i;
        seatsContainer.appendChild(seat);
      }
    }
  
    // Function to handle seat booking
    function bookSeat(seat) {
      if (!seat.classList.contains('booked')) {
        seat.classList.add('booked');
        bookedSeats.push(seat.textContent);
        console.log('Booked seats:', bookedSeats);
      } else {
        alert('This seat is already booked!');
      }
    }
  
    // Event listener for clicking on a seat
    seatsContainer.addEventListener('click', function(event) {
      if (event.target.classList.contains('seat')) {
        bookSeat(event.target);
      }
    });
  
    // Event listener for booking button
    bookBtn.addEventListener('click', function() {
      alert('Booked seats: ' + bookedSeats.join(', '));
    });
  
    // Initialize
    createSeats();
  });
  