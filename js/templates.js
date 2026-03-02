function generateGalleryContentHTML(i, image) {
    return /* html */`
    <button class="btimg" onclick="showDetailView(${i})">
        <img src="${image.path}" alt="${image.alt}">
    </button>
    `;
}

function  generateDetailContentHTML(i, image) {
    return /* html */ `
    <div class="img-test">
        <div><button onclick="closeBtn()" class="clbtn">❌CLOSE</button></div>
    <img src="${image.path}" alt="${image.alt}">

    <div class="nextbt">
    <button onclick="imageBack(${i})">⬅️zurück</button>
    <button onclick="imageNext(${i})" style="width:69px">vor➡️</button>
</div>
    </div>
    `;
}