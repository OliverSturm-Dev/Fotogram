function init() {
    renderImages();
}

function renderImages() {
    const galleryBox = document.getElementById("gallery");
    galleryBox.innerHTML = "";

    for (let i=0; i<images.length; i++){
        const image = images[i];
        galleryBox.innerHTML += generateGalleryContentHTML(i, image) 
    }
}



function showDetailView(i) {
    const image = images[i];
    const detailBox = document.getElementById("detail_box");

    detailBox.classList.remove("d-none");
    detailBox.innerHTML = generateDetailContentHTML(i, image);
}

