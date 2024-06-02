function openModal() {
  document.getElementById('ticketModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('ticketModal').style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == document.getElementById('ticketModal')) {
      closeModal();
  }
}

document.getElementById('ticketForm').onsubmit = function(event) {
  event.preventDefault();

  const ticketName = document.getElementById('ticketName').value;
  const ticketPrice = document.getElementById('ticketPrice').value;

  const ticketContainer = document.querySelector('.ticket-container
