(function() {
  'use strict';

  var application = {};

  application.feedback = document.getElementById('feedback');

  application.photoService = function() {
    var apiKey = '2a77b915bc4f3fd5dc2ae316c3d4c28f';
    var galleryId = '72157663337771571';

    return {
      loadPhotos: function(callback) {
        var endpoint = 'https://api.flickr.com/services/rest/?'
          + 'method=flickr.galleries.getPhotos'
          + '&api_key=' + apiKey
          + '&gallery_id='+ galleryId
          + '&format=json&nojsoncallback=1';

        var request = new XMLHttpRequest();
        request.open('GET', endpoint, true);
        request.onload = function() {
          if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);
            if (data.photos && data.photos.photo){
              var originalPhotoList = data.photos.photo;
              callback(data.photos.photo);
            } else {
              application.feedback.textContent = "Error loading photos";
            }
          }
        };
        request.send();
      }
    }
  }; //service

  application.photoController = function() {
    var lightboxDiv = document.getElementById('lightbox-wrapper');
    var currentPhoto = null;

    var createPhotoElement = function(photo) {
        var img = document.createElement('img');
        var src = document.createAttribute('src');
        src.value = 'https://farm'
          + photo.farm +'.staticflickr.com/' + photo.server +'/'
          + photo.id +'_' + photo.secret +'_n.jpg';

        img.setAttributeNode(src);
        img.addEventListener('click', function(){ onClickImage(photo) }, true);
        return img;
    };

    var createPhotoGrid = function(photos) {
      application.feedback.textContent = "Loading...";

      var photoWrapper = document.getElementById('photo-wrapper');
      var photoList = document.createElement('div')
      var prevImg = null;

      photos.forEach(function(photo, index) {
        //set prev and next
        if (index > 0) {
          photos[index - 1].next = photo;
        }
        if (prevImg) {
          photo.previous = prevImg;
        }
        prevImg = photo;

        var img = createPhotoElement(photo);
        photoList.appendChild(img);
      });

      //hit the dom once, not on every photo
      photoWrapper.appendChild(photoList);
      application.feedback.textContent = "";
    };

    var changeCurrentPhoto = function(photo) {
      if (!photo) {
        return;
      }
      currentPhoto = photo;

      var lightboxImg = document.getElementById('lightbox-img');

      var src = document.createAttribute('src');
      src.value = 'https://farm'
        + photo.farm +'.staticflickr.com/' + photo.server +'/'
        + photo.id +'_' + photo.secret +'_c.jpg'

      //update the lightbox image and title
      lightboxImg.setAttributeNode(src);
      document.getElementById('lightbox-title').textContent = photo.title;
    };

    var onClickImage = function(photo) {
      changeCurrentPhoto(photo);
      lightboxDiv.style.display = 'block';
    };

    var onClickLightBoxClose = function() {
      lightboxDiv.style.display = 'none';
    };

    var onClickLightBoxNext = function() {
      if (!currentPhoto) {
        return;
      }
      changeCurrentPhoto(currentPhoto.next);
    };

    var onClickLightBoxPrevious = function() {
      if (!currentPhoto) {
        return;
      }
      changeCurrentPhoto(currentPhoto.previous);
    };

    var addEventListeners = function() {
      var self = this;

      document.getElementById('lightbox-next')
        .addEventListener('click', function(){ onClickLightBoxNext() }, true);

      document.getElementById('lightbox-previous')
        .addEventListener('click', function(){ onClickLightBoxPrevious() }, true);

      document.getElementById('lightbox-close')
        .addEventListener('click', function(){ onClickLightBoxClose() }, true);
    };

    return {
      initialize: function() {
        lightboxDiv = document.getElementById('lightbox-wrapper');
        currentPhoto = null;

        addEventListeners();
        application.photoService().loadPhotos(createPhotoGrid);
      }
    }
  };

  application.photoController().initialize();

})();
