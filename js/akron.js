let currentImageIndex = 0;
const images = [
    "/assets/Akron Pharma/akroncover.png",
    "/assets/Akron Pharma/Enscape_2024-07-30-02-14-20.png",
    "/assets/Akron Pharma/Enscape_2024-07-30-02-17-13.png",
    "/assets/Akron Pharma/V2_BOARD ROOM.png",
    "/assets/Akron Pharma/V3_DIRECTOR-01.png",
    "/assets/Akron Pharma/V6_CEO.png",
    "/assets/Akron Pharma/V7_CEO.png"
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
