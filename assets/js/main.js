$(document).ready(function(){
  //-------------------------
    $(function(){
      $('#containerin').mixItUp();
    });
  //----------------------
	function Opacidad(){
        if ($('#foco').hasClass('white')) {
             $('#foco').fadeTo('slow',0.3)
             $('#foco').removeClass('white');
        }
        else {
        	$('#foco').fadeTo('slow',0.8); 
            $('#foco').addClass('white');
        }
    }

    setInterval(Opacidad, 1000);


  /*How to make the hero section always fill browser window?*/
  $(window).resize(function() {
          $('#hero').height($(window).height());
  }).resize();


  $('.nav-link').on('click', function(e) {
    e.preventDefault();
    var el = $(this).attr('href');
    scrollToElement(el);
  });
  
  $(window).scroll(function() {
    var x = $(window).scrollTop();

    if (x >= 42) {
      $("#navbar").show(200);
    } else {
      $("#navbar").hide(200);
    }

  });

});

