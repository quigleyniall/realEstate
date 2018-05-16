$(document).ready(function(){
  $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 5000000,
        values: [ 0, 5000000 ],
        slide: function( event, ui ) {
          $( "#min" ).val(ui.values[ 0 ])
          $( "#max" ).val(ui.values[ 1 ] );
        }
      });

  $(".third").hide()
  $(".second").hide()

  $(".price").on("click", function(){
    $(".price-search").toggleClass("show-search-details")
    $(".price .fa-caret-down").toggleClass("hide-search-details")
    $(".price .fa-caret-up").toggleClass("show-search-details")
  })
  $(".bedroom").on("click", function(){
    $(".bedroom-search").toggleClass("show-search-details")
    $(".bedroom .fa-caret-down").toggleClass("hide-search-details")
    $(".bedroom .fa-caret-up").toggleClass("show-search-details")
  })
  $(".bathroom").on("click", function(){
    $(".bathroom-search").toggleClass("show-search-details")
    $(".bathroom .fa-caret-down").toggleClass("hide-search-details")
    $(".bathroom .fa-caret-up").toggleClass("show-search-details")
  })
  $(".extras").on("click", function(){
    $(".extras-checkbox").toggleClass("show-search-details")
    $(".extras .fa-caret-down").toggleClass("hide-search-details")
    $(".extras .fa-caret-up").toggleClass("show-search-details")
  })
  $(".type").on("click", function(){
    $(".type-checkbox").toggleClass("show-search-details")
    $(".type .fa-caret-down").toggleClass("hide-search-details")
    $(".type .fa-caret-up").toggleClass("show-search-details")
  })
  $("#first-icon").on("click", function(){
    $(".first").show()
    $(".third").hide()
    $(".second").hide()
    $('html, body').animate({
        scrollTop: $(".search-results").offset().top
    }, 500);
  })
  $("#second-icon").on("click", function(){
    $(".first").hide()
    $(".third").hide()
    $(".second").show()
    $('html, body').animate({
        scrollTop: $(".search-results").offset().top
    }, 500);
  })
  $("#third-icon").on("click", function(){
    $(".first").hide()
    $(".third").show()
    $(".second").hide()
    $('html, body').animate({
        scrollTop: $(".search-results").offset().top
    }, 500);
  })
})
