function upDate(previewPic){
   
    var image = document.getElementById("image");
    image.style.background = "url(" + previewPic.src + ") #8e68ff";

    image.innerHTML = previewPic.alt;


}

function unDo(){
    
    var image = document.getElementById("image");
    image.style.background = "#8e68ff";

    image.innerHTML = "Hover over an image below to display here.";
   
    
}
$(document).ready(function() {
    $("#tabs").accordion({
        collapsible: true
    });
});

$(document).ready(function(){
    $( function() {
        $(document).tooltip();
      });
});
$(document).ready(function(){
    $('.slider').bxSlider({
      minSlides: 1,
      maxSlides: 1,
      slideWidth: 700,
      adaptiveHeight: true,
      captions: true,
      speed: 1000,
      auto: true
    });
  });