/* Semua JS Dibuat Oleh MUH. ASHARI RASYID didepan laptop berjam-jam
mencari logika sampai buka dokumentasi javascript di w3shools :) */

function validateForm() {
    // Mengambil inputan
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById('message').value;

    // Cek apakah semua field terisi
    if (!name || !dob || !gender || !message) {
        alert('All fields must be filled out');
        return false;
    }

    // menyesuaikan hasil inputan ke output
    document.getElementById('outputNameBanner').textContent = name;
    document.getElementById('outputName').textContent = name;
    document.getElementById('outputDob').textContent = dob;
    document.getElementById('outputGender').textContent = gender;
    document.getElementById('outputMessage').textContent = message;

    alert('Form berhasil di Submit!');
    return false; // Cegah pengiriman formulir jika terdapat kesalahan
}

// Cek Waktu Sekarang Berdasarkan GMT
document.addEventListener('DOMContentLoaded', function () {
    // Deteksi offset zona waktu pengguna dalam menit
    const timezoneOffset = new Date().getTimezoneOffset();

    // Hitung offset GMT
    const gmtOffset = -timezoneOffset / 60;
    let timezone = '';

    // Sesuaikan dengan Zona Pengguna
    if (gmtOffset === 7) {
        timezone = 'GMT+07';
    } else if (gmtOffset === 8) {
        timezone = 'GMT+08';
    } else if (gmtOffset === 9) {
        timezone = 'GMT+09';
    } else {
        timezone = `GMT${gmtOffset >= 0 ? '+' : ''}${gmtOffset}`;
    }

    // Tentukan region zona waktu yang benar
    const timeZoneRegion = {
        'GMT+07': 'Asia/Jakarta',
        'GMT+08': 'Asia/Makassar',
        'GMT+09': 'Asia/Jayapura'
    }[timezone];

    // Tampilkan waktu saat ini sesuai dengan zona waktu pengguna
    const options = {
        timeZone: timeZoneRegion,
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    };

    const currentTime = new Date().toLocaleString('id-ID', options);
    document.getElementById('currentTime').textContent = currentTime;
    document.getElementById('currentTimezone').textContent = timezone;
});

// Navbar Toggle
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.navbar-toggle');
    const nav = document.querySelector('nav');

    toggleButton.addEventListener('click', function () {
        nav.classList.toggle('active');
    });
});
