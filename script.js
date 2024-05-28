document.addEventListener('DOMContentLoaded', function() {
    const navbarNav = document.getElementById('navbar-nav');
    const homeSection = document.getElementById('home');
    const aboutSection = document.getElementById('about');
    // tambahkan id dan variabel untuk bagian yang lain jika diperlukan

    // Tambahkan event listener ke setiap item navbar
    navbarNav.addEventListener('click', function(event) {
        if (event.target.classList.contains('nav-link')) {
            const targetId = event.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            // Tambahkan class 'slide-in' ke target section
            targetSection.classList.add('slide-in');

            // Hapus class 'slide-in' setelah animasi selesai
            setTimeout(function() {
                targetSection.classList.remove('slide-in');
            }, 500); // Sesuaikan dengan durasi animasi (dalam milidetik)
        }
    });
});
