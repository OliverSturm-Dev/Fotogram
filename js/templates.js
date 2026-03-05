function generateGalleryContentHTML(i, image) {
  return /* html */ `
    <button class="btimg" onclick="showDetailView(${i})">
        <img src="${image.path}" alt="${image.alt}">
    </button>
    `;
}
function generateDetailContentHTML(i, image) {
  return /* html */ `
    <div class="img-test">
        <div><button onclick="closeBtn()" class="clbtn"><span style="margin-right: 10px;">❌</span><span style="font-size: 18px;">CLOSE</span></button></div>
    <img src="${image.path}" alt="${image.alt}">

    <div class="nextbt">
    <button onclick="navigateDetailImage(-1)"><span style="margin-right: 10px;">⬅️</span><span>zurück</span></button>
    <button onclick="navigateDetailImage(1)"><span  style="margin-right: 10px;">vor</span><span>➡️</span></button>
</div>
    </div>
    `;
}
