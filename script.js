let currentIndex = 0;

function init() {
  renderImages();
}

function renderImages() {
  const galleryBox = document.getElementById("gallery");
  galleryBox.innerHTML = "";

  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    galleryBox.innerHTML += generateGalleryContentHTML(i, image);
  }
}

function showDetailView(i) {
  currentIndex = i;
  const image = images[i];
  const detailBox = document.getElementById("detail_box");

  if (detailBox.classList.contains("d-none")){
  detailBox.classList.remove("d-none");
  detailBox.innerHTML = generateDetailContentHTML(i, image);
  detailBox.focus();
}else {
    const img = detailBox.querySelector("img");
    img.src = image.path;
    img.alt = image.alt;
  }
}

function closeDetailView() {
  const detailBox = document.getElementById("detail_box");

  detailBox.classList.add("d-none");
}

function navigateDetailImage(direction) {
  currentIndex += direction;

  if (currentIndex >= images.length) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  showDetailView(currentIndex);
}

function closeBtn() {
  const detailContainer = document.getElementById("detail_box");
  detailContainer.classList.add("d-none");
}

function handleOverlayKeys(event) {
  /*if (event.key === "Escape") {
    closeDetailView();
  }*/

  if (event.key === "ArrowRight") {
   navigateDetailImage(1);
  }

  if (event.key === "ArrowLeft") {
    navigateDetailImage(-1);
  }
}
