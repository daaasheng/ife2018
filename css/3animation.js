var face = document.getElementById('face');
face.addEventListener('mouseenter', function () {
    handleHover();
});
face.addEventListener('mouseleave', function () {
    handleHover();
});


function handleHover() {
    document.getElementById('container').classList.toggle('active');
}