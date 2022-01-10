function display_random_input() {
    var theImages = [{
      src: "./capacitivesensor.jpg",
    }, {
      src: "./phototransistor.jpg",
    }, {
      src: "./piezoinput.jpg",
    },{
        src: "./potentiometer.jpg",
      },{
        src: "./pushbutton.jpg",
      },{
        src: "./temperature.jpg",
      },{
        src: "./tilt.jpg",
      }
];

    var preBuffer = [];
    for (var i = 0, j = theImages.length; i < j; i++) {
      preBuffer[i] = new Image();
      preBuffer[i].src = theImages[i].src;
      preBuffer[i].width = theImages[i].width;
      preBuffer[i].height = theImages[i].height;
    }

    // create random image number
    function getRandomInt(min, max) {
      //  return Math.floor(Math.random() * (max - min + 1)) + min;

      imn = Math.floor(Math.random() * (max - min + 1)) + min;
      return preBuffer[imn];
    }

    // 0 is first image,   preBuffer.length - 1) is  last image

    var newImage = getRandomInt(0, preBuffer.length - 1);

    // remove the previous images
    var images = document.getElementsByTagName('img');
    var l = images.length;
    for (var p = 0; p < l; p++) {
      images[0].parentNode.removeChild(images[0]);
    }
    // display the image  
    newImage.setAttribute('width','40%');
    newImage.setAttribute('height','40%');
    document.body.appendChild(newImage);
  }

  function display_random_output() {
    var theImages = [{
      src: "./led.jpg",
    }, {
      src: "./rgbled.jpg",
    }, {
      src: "./servo.jpg",
    },{
        src: "./dcmotor.jpg",
      },{
        src: "./graphic.jpg",
      },{
        src: "./lcddisplay.jpg",
      },
      {
        src: "./piezooutput.jpg",
      }
];

    var preBuffer = [];
    for (var i = 0, j = theImages.length; i < j; i++) {
      preBuffer[i] = new Image();
      preBuffer[i].src = theImages[i].src;
      preBuffer[i].width = theImages[i].width;
      preBuffer[i].height = theImages[i].height;
    }

    // create random image number
    function getRandomInt(min, max) {
      //  return Math.floor(Math.random() * (max - min + 1)) + min;

      imn = Math.floor(Math.random() * (max - min + 1)) + min;
      return preBuffer[imn];
    }

    // 0 is first image,   preBuffer.length - 1) is  last image

    var newImage = getRandomInt(0, preBuffer.length - 1);

    // remove the previous images
    var images = document.getElementsByTagName('img');
    var l = images.length;
    for (var p = 0; p < l; p++) {
      images[0].parentNode.removeChild(images[0]);
    }
    // display the image  
    newImage.setAttribute('width','40%');
    newImage.setAttribute('height','40%');
    document.body.appendChild(newImage);
  }
