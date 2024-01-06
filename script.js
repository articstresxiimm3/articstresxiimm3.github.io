// Awal Navbar
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
  nav.classList.toggle('slide');
});
// Akhir Navbar

// Awal Preloader
document.addEventListener('DOMContentLoaded', function () {
  var splashVideo = document.getElementById('splashVideo');

  // Menangani peristiwa selesai diputar
  splashVideo.addEventListener('ended', function () {
    // Menyembunyikan splash screen
    document.querySelector('.splash-screen').style.display = 'none';
  });

  // Menangani peristiwa durasi video habis
  splashVideo.addEventListener('timeupdate', function () {
    // Durasi video
    var duration = splashVideo.duration;

    // Waktu saat ini
    var currentTime = splashVideo.currentTime;

    // Jika waktu saat ini lebih besar atau sama dengan durasi video
    if (currentTime >= duration) {
      // Menyembunyikan splash screen
      document.querySelector('.splash-screen').style.display = 'none';
    }
  });
});

// Contact
const scriptURL = 'https://script.google.com/macros/s/AKfycbwnp872IE9Em0gawujqFiyN7FA0LUd_epOq_QOaWtNAgq3NHepLXu2V4nsPyjVkWP45aQ/exec';
const form = document.forms['articstres-xiimm3-form'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // Pas tombol submit diklik
  // Tampilkan tombol loading, hilangkan tomboil kirim
  btnLoading.classList.toggle('d-none');
  btnKirim.classList.toggle('d-none');
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      // Tampilkan tombol kirim, hilangkan tomboil loading
      btnLoading.classList.toggle('d-none');
      btnKirim.classList.toggle('d-none');
      // Tampilkan alert
      myAlert.classList.toggle('d-none');
      // Reset Form
      form.reset();
      console.log('Success!', response);
    })
    .catch((error) => console.error('Error!', error.message));
});
// Akhir Contact
