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
function imageNext(i) {
    let nextIndex = i + 1;
  if (i >= images.length - 1) {
    nextIndex = 0;
  }

  showDetailView(nextIndex);
}
function imageBack(i) {
    let nextIndex = i - 1;
  if (i === 0) {
    nextIndex = images.length - 1;
  }

  showDetailView(nextIndex);
}
function closeBtn() {
   const detailContainer = document.getElementById("detail_box");
    detailContainer.classList.add("d-none");
}
