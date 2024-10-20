let currentImageIndex = 0;
const images = [
    "/assets/Residential Projects/DE_ELE 15.09.2023.png",
    "/assets/Residential Projects/DE_ELE_V2_30062024.jpg",
    "/assets/Residential Projects/Enscape_2023-01-25-23-39-52.png",
    "/assets/Residential Projects/Enscape_2023-01-25-23-45-06.png",
    "/assets/Residential Projects/Enscape_2023-01-26-01-11-53.png",
    "/assets/Residential Projects/Enscape_2023-01-26-01-22-08.png",
    "/assets/Residential Projects/Enscape_2023-02-17-15-01-56.png",
    "/assets/Residential Projects/Enscape_2023-03-13-18-54-18.png",
    "/assets/Residential Projects/Enscape_2023-03-13-22-06-37.png",
    "/assets/Residential Projects/Enscape_2023-04-15-14-05-01.png",
    "/assets/Residential Projects/recidentialcover.png"
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
