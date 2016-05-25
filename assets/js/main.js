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


  //---scroll animation-----
$('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});
//stickky
  var altura = $('.navbar').offset().top;
  
  $(window).on('scroll', function(){
    if ( $(window).scrollTop() > altura ){
      $('.navbar').addClass('menu-fixed');
    } else {
      $('.navbar').removeClass('menu-fixed');
    }
  });
  //-----------------lines-



  jQuery.rnd = function(m,n) {
      m = parseInt(m);
      n = parseInt(n);
      return Math.floor( Math.random() * (n - m + 1) ) + m;
  }
  function lines() {
   $.each($(".particletext.lines"), function(){
      var linecount = ($(this).width()/50)*10;
      for(var i = 0; i <= linecount; i++) {
         $(this).append('<span class="particle" style="top:' + $.rnd(-30,30) + '%; left:' + $.rnd(-10,110) + '%;width:' + $.rnd(1,3) + 'px; height:' + $.rnd(20,80) + '%;animation-delay: -' + ($.rnd(0,30)/10) + 's;"></span>');
      }
   });
  }
  function initparticles() {

   lines();

  }
  

  initparticles();

 
});

