const menuIcon = document.getElementById("burgermenu");
const menuList = document.getElementById("navbar");

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
});
let currentIndex = 0; // Deklarasi currentIndex di luar fungsi

function changeImage() {
    const images = document.querySelectorAll('.content1-image img');
    const containerWidth = document.querySelector('.content1-image').offsetWidth;

    // Geser ke gambar berikutnya dengan efek animasi dari kiri ke kanan
    currentIndex = (currentIndex + 1) % images.length;

    // Atur posisi ulang untuk gambar pertama setelah gambar terakhir
    if (currentIndex === 0) {
        images.forEach(image => {
            image.style.transition = ''; // Hilangkan transisi untuk menghindari animasi saat mengatur ulang posisi
            image.style.transform = `translateX(0)`;
        });
    }

    // Geser posisi awal untuk gambar berikutnya
    let initialPosition = 0;
    images.forEach((image, index) => {
        // Geser gambar ke kiri
        image.style.transition = 'transform 1s ease-in-out';
        image.style.transform = `translateX(-${initialPosition}px)`;
        // Geser posisi awal untuk gambar berikutnya
        initialPosition += containerWidth;
    });
}

setInterval(changeImage, 3000);

