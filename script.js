const overlay  = document.getElementById('overlay');
const openBtn  = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');

// Tap the envelope -> open the letter
openBtn.addEventListener('click', () => {
  overlay.classList.add('open');
  overlay.querySelector('.letter').scrollTop = 0; // start at the top
});

// Tap "tap to close" -> close the letter
closeBtn.addEventListener('click', () => {
  overlay.classList.remove('open');
});

// Esc key also closes it
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') overlay.classList.remove('open');
});