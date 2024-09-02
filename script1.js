const addDescriptionBtn = document.getElementById('add-description-btn');
const aboutDescription = document.getElementById('about-description');

addDescriptionBtn.addEventListener('click', () => {
    const description = prompt("Enter a description about yourself:");
    if (description) {
        aboutDescription.textContent = description;
    }
});

