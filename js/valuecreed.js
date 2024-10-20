let currentImageIndex = 0;
const images = [
    "/assets/Value Creed consulting/Enscape_2023-09-24-22-25-40.png",
    "/assets/Value Creed consulting/Enscape_2023-09-24-23-22-27.png",
    "/assets/Value Creed consulting/boardroom.jpeg",
    "/assets/Value Creed consulting/Enscape_2023-09-24-23-25-49.png",
    "/assets/Value Creed consulting/Enscape_2023-09-24-23-34-02.png",
    "/assets/Value Creed consulting/Enscape_2023-10-03-01-04-01.png",
    "/assets/Value Creed consulting/Enscape_2023-10-03-01-09-03.png",
    "/assets/Value Creed consulting/IMG-20220825-WA0000.jpg",
    "/assets/Value Creed consulting/valuecreedcover.png"
];
const thumbnails = document.querySelectorAll('.thumbnail');

function changeImage(index) {
    const largeImage = document.getElementById('largeImage');
    largeImage.style.opacity = 0; // Fade out effect
    setTimeout(() => {
        largeImage.src = images[index]; // Change the image
        largeImage.style.opacity = 1; // Fade in effect
    }, 500); // Match with CSS transition duration

    // Update the active thumbnail
    thumbnails.forEach((thumb) => thumb.classList.remove('active'));
    thumbnails[index].classList.add('active');

    // Move the thumbnails slider
    slideThumbnails(index);

    // Update the current image index
    currentImageIndex = index;
}

function autoScroll() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0; // Loop back to the first image
    }
    changeImage(currentImageIndex);
    setTimeout(autoScroll, 3000); // Change image every 3 seconds
}

function slideThumbnails(index) {
    const thumbnailSlider = document.getElementById('thumbnailSlider');
    const thumbnailWidth = thumbnails[0].offsetWidth; // Width of each thumbnail
    const sliderWidth = thumbnailSlider.offsetWidth; // Total width of the slider
    const containerWidth = document.querySelector('.thumbnail-container').offsetWidth; // Container width

    // Calculate the offset to center the active thumbnail
    const offset = index * thumbnailWidth - (containerWidth / 2) + (thumbnailWidth / 2);

    // Limit offset within bounds to avoid empty space at ends
    const maxOffset = sliderWidth - containerWidth;
    thumbnailSlider.style.transform = `translateX(-${Math.min(Math.max(0, offset), maxOffset)}px)`;
}

// Initialize the gallery on page load
window.onload = function () {
    changeImage(currentImageIndex);
    autoScroll();
};
