$(document).ready(function(){
  $(".fake-map").click(function(){
        $(".name-map").show("slow");
  });
});

//relation.
$(document).ready(function(){
  $( ".drag-r" ).draggable({
      helper: "clone",
      cursor: "crosshair",
      cursorAt: { left: 10},

  stop: function( event, ui ) {
    $(".relation-append-container").toggleClass("relation-append");
    $(".append-newlist-relation").append("<p>#Single</p>");
    $(".drag-r").css("color", "#808080");
    $(".drag-r").css("border", "1px solid #808080");
  }

  });
});

//housing.
$(document).ready(function(){
  $( ".drag-h" ).draggable({
      helper: "clone",
      cursor: "crosshair",
      cursorAt: { left: 10},

  stop: function( event, ui ) {
    $(".housing-append-container").toggleClass("housing-append");
    $(".append-newlist-housing").append("<p>#Apartment</p>");
    $(".drag-h").css("color", "#808080");
    $(".drag-h").css("border", "1px solid #808080");
  }

  });
});

//transport.
$(document).ready(function(){
  $( ".drag-t" ).draggable({
      helper: "clone",
      cursor: "crosshair",

  stop: function( event, ui ) {
    $(".transport-append-container").toggleClass("transport-append");
    $(".append-newlist-transport").append("<p>#Public</p>");
    $(".drag-t").css("color", "#808080");
    $(".drag-t").css("border", "1px solid #808080");
  }

  });
});

//diet.
//diet-basic.
$(document).ready(function(){
  $( ".drag-d-b" ).draggable({
      helper: "clone",
      cursor: "crosshair",
      cursorAt: { left: 10},

  stop: function( event, ui ) {
    $(".diet-append-container").toggleClass("diet-append");
    $(".append-newlist-diet").append("<p>#Restaurant</p>");
    $(".drag-d-b").css("color", "#808080");
    $(".drag-d-b").css("border", "1px solid #808080");
  }

  });
});

$(document).ready(function(){
  $( ".drag-d-m" ).draggable({
      helper: "clone",
      cursor: "crosshair",
      cursorAt: { left: 10},

  stop: function( event, ui ) {
    $(".diet-append-container-m").toggleClass("diet-append-m");
    $(".append-newlist-diet-m").append("<p>#bar</p>");
    $(".drag-d-m").css("color", "#808080");
    $(".drag-d-m").css("border", "1px solid #808080");
  }

  });
});

$(document).ready(function(){
  $( ".drag-d-m2" ).draggable({
      helper: "clone",
      cursor: "crosshair",
      cursorAt: { left: 10},

  stop: function( event, ui ) {
    $(".diet-append-container-m2").toggleClass("diet-append-m2");
    $(".append-newlist-diet-m2").append("<p>#Snacks</p>");
    $(".drag-d-m2").css("color", "#808080");
    $(".drag-d-m2").css("border", "1px solid #808080");
  }

  });
});

//entertain.
$(document).ready(function(){
  $( ".drag-e-m" ).draggable({
      helper: "clone",
      cursor: "crosshair",

  stop: function( event, ui ) {
    $(".entertain-append-container-m").toggleClass("entertain-append-m");
    $(".append-newlist-entertain-m").append("<p>#Movie</p>");
    $(".drag-e-m").css("color", "#808080");
    $(".drag-e-m").css("border", "1px solid #808080");
  }

  });
});

$(document).ready(function(){
  $( ".drag-e-n" ).draggable({
      helper: "clone",
      cursor: "crosshair",

  stop: function( event, ui ) {
    $(".entertain-append-container-n").toggleClass("entertain-append-n");
    $(".append-newlist-entertain-n").append("<p>#Netflix</p>");
    $(".drag-e-n").css("color", "#808080");
    $(".drag-e-n").css("border", "1px solid #808080");
  }

  });
});

$(document).ready(function(){
  $( ".drag-e-u" ).draggable({
      helper: "clone",
      cursor: "crosshair",

  stop: function( event, ui ) {
    $(".entertain-append-container-u").toggleClass("entertain-append-u");
    $(".append-newlist-entertain-u").append("<p>#Museum</p>");
    $(".drag-e-u").css("color", "#808080");
    $(".drag-e-u").css("border", "1px solid #808080");
  }

  });
});

