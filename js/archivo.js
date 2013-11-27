$(document).ready(function(){

		/* abrir el documento */
		$('#carrusel .imagenWeb p').click(function(){
			window.open("Portafolio profecional.pdf");
		});

		/* funcion para el slide flecha derecha */
		$('.flechad').click(function(){
			$('#carrusel ul li').eq(0).animate({marginLeft:"-50%"},"slow",function(){
				$('#carrusel ul').append($('#carrusel ul li').eq(0));
				$(this).css("marginLeft","0%");
			});
		});

		$('.flechai').click(function() {
			$('#carrusel ul li').eq(0).animate({marginLeft:"50%"},"slow",function(){	
				$('#carrusel ul').prepend($('#carrusel ul li').eq($('#carrusel ul li').size()-1));
				$(this).css("marginLeft","0%");
			});
			
		});

	/*  sale el modal  */	
	$(".modal").click(function(e){

		var aside=$('aside');

		aside.show();

		aside.html(
			"<p>Esta sección se encuentra deshabilitada </p>"+
			"<button class='cerrar'>cerrar</button>"
			);

		aside.css({
			"left":"30%",
			"top":"35%",
			"padding":"1%",
			"width":"35%"
		});
		aside.find("button").css({
			"border":"1px solid #e5e5e5",
			"border-radius":"5px"
		});
		$("header,section").css("opacity","0.5");

		
		$("button.cerrar").click(function(){
			aside.hide();
			$("header,section").css("opacity","1");
		});

	});

	/* efecto de los links */
	$('nav a, .subtiar a').on('click',function (e) {
        e.preventDefault();

        var target = this.hash,
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 'slow', 'linear', function () {
            window.location.hash = target;
        });
    });
});