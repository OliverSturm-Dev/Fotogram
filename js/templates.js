function generateGalleryContentHTML(i, image) {
    return /* html */`
    <button onclick="showDetailView(${i})">
        <img src="${image.path}" alt="${image.alt}">
    </button>
    `;
}

function  generateDetailContentHTML(i, image) {
    return /* html */ `
    <div class="img-test">
    <img src="${image.path}" alt="${image.alt}">
    </button>
    `;
}