var app={
 inicio: function() {
   this.iniciaFastClick();
   this.iniciaBoton();
  },

  iniciaFastClick: function(){
    FastClick.attach(document.body);
  },

  iniciaBoton: function() {
    var buttonAction = document.querySelector('#button-action');
    buttonAction.addEventListener('click', this.tomarFoto);
  },

  tomarFoto: function () {
    var opciones = {
      quality: 50,
      destinationType: Camera.DestinationType.FILE_URI,
      targetWidth: 300,
      targetHeight: 300,
      correctOrientation: true
    };
    navigator.camera.getPicture(app.fotoTomada, app.errorAlTomarFoto, opciones);
  },

  fotoTomada function(){
    var image = document.querySelector('#foto');
    image.src= imageURI;
  },

  errorAlTomarFoto function(){
    console.log('Fallo al tomar foto o foto cancelada' + message);
  }
};

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
      app.inicio();
    },false);

}
