let iframe = document.getElementById("ytVideo");

iframe.parentElement.addEventListener("mouseenter", () => {
    iframe.src += "&autoplay=1";

    //for gallery
    function openGallery(index){
        window.location.href = "gallery.html?index=" + index;
    }
});