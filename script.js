document.getElementById("carta").addEventListener("click", function() {
    this.style.display = "none";
    document.getElementById("contenido").style.display = "block";
    document.getElementById("opciones").style.display = "block";
});

function aceptar() {
    document.getElementById("musica").play();
    document.getElementById("photo-section").style.display = "block"; // Mostrar la sección de la foto
    iniciarCamara();
}

let video = document.getElementById('video');
let canvas = document.getElementById('canvas');
let takePhotoBtn = document.getElementById('take-photo-btn');
let photoFrame = document.getElementById('photo-frame');
let capturedPhoto = document.getElementById('captured-photo');

function iniciarCamara() {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            video.srcObject = stream;
            video.style.display = 'block'; // Mostrar video solo cuando se inicia la cámara
        })
        .catch(function(error) {
            console.error("Error al acceder a la cámara:", error);
        });
}

takePhotoBtn.addEventListener('click', function() {
    let context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    // Convertir la imagen capturada a URL
    let photoData = canvas.toDataURL('image/png');
    capturedPhoto.src = photoData;

    // Mostrar la imagen con el marco y ocultar el video
    photoFrame.style.display = 'block';
    video.style.display = 'none';
});



