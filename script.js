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

  detailBox.classList.remove("d-none");
  detailBox.innerHTML = generateDetailContentHTML(i, image);
  detailBox.focus();
}

function closeDetailView() {
  const detailBox = document.getElementById("detail_box");

  detailBox.classList.add("d-none");
}

function imageNext() {
  currentIndex++;

  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  showDetailView(currentIndex);
}

function imageBack() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  showDetailView(currentIndex);
}

function closeBtn() {
  const detailContainer = document.getElementById("detail_box");
  detailContainer.classList.add("d-none");
}

function handleOverlayKeys(event) {
  if (event.key === "Escape") {
    closeDetailView();
  }

  if (event.key === "ArrowRight") {
    imageNext();
  }

  if (event.key === "ArrowLeft") {
    imageBack();
  }
}
