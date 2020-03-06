var alabamaTotal = 28;
var alaskaTotal = 0;
var arizonaTotal = 0;
var arkansasTotal = 0;


$ (document).ready(function(){
    $("body").on('click', '.top', function(){
      $("nav.menu").toggleClass("menu_show");
    });
    $('#Alabama').on("mouseover", function() {
    $('#current-number').val(alabamaTotal);
  })
});


	