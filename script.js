const menuIcon = document.getElementById("burgermenu");
const menuList = document.getElementById("navbar");

menuIcon.addEventListener("click", () =>{
    menuList.classList.toggle("hidden");
});

const images = document.querySelectorAll('.content-image img');
        let currentIndex = 0;
        const containerWidth = document.querySelector('.content-image').offsetWidth;

        function changeImage() {
            // Geser ke gambar berikutnya dengan efek animasi dari kiri ke kanan
            currentIndex = (currentIndex + 1) % images.length;
            images.forEach((image, index) => {
                const newPosition = (index - currentIndex) * containerWidth;
                image.style.transition = 'transform 1s ease-in-out';
                // Perubahan arah translasi dari kiri ke kanan (positive)
                image.style.transform = `translateX(${newPosition}px)`;
            });
        }

        setInterval(changeImage, 3000);
