// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "bootstrap"


document.addEventListener("turbolinks:load", function() {
    var fileInput = document.querySelector("#image-upload");
    var previewContainer = document.querySelector("#image-preview");
  
    fileInput.addEventListener("change", function(event) {
      previewContainer.innerHTML = "";
  
      var files = event.target.files;
      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var reader = new FileReader();
  
        reader.onload = function(e) {
          var image = document.createElement("img");
          image.src = e.target.result;
          image.classList.add("preview-image");
          previewContainer.appendChild(image);
        };
  
        reader.readAsDataURL(file);
      }
    });
  });