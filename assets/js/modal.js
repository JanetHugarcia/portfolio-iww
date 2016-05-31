$(document).ready(function(){
	$('.mostrarmodal').click(function(){
		$('.modal').addClass('modalvisible');
	});
	$('.cerrar').click(function(){
		$('.modal').removeClass('modalvisible');
	});
});