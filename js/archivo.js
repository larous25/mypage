var inicio = (function(){
  var $pres       = $('a[href=#pres]');
  var $gus        = $('a[href=#gus]');
  var $cos        = $('a[href=#cos]');
  var $carrusel   = $('#carrusel');
  var $flechad    = $(".flechad");
  var $flechai    = $(".flechai");
  var $enlacesNav = $('nav a');
  var $win        = $(window);
  
  var inicio = function(){
    
    var pequeño = window.matchMedia('(max-width:700px)'),
        grande = window.matchMedia('(min-width:1400)');
    
    if(pequeño.matches){
      eventosPequeña();
    }else if(grande.matches){
      eventosEnorme();
    }
    eventos();
  };
  
  /* eventos por default */
  var eventos = function(){
    anadirIndice();
    /* funcionwa para el slide flechas */
    $flechad.click(derecha);
    $flechai.click(izquierda);
    /* para la animacion del menu */
    $enlacesNav.click(enlaceMovimiento);
    /* movimiento del scroll */
    $win.scroll(movimiento);
    /* cambio de pestañas */
    $('.pestanias div h3').click(pestanias);
    /* el encargado del acordeon */
    $('.pesContenido h3').click(colapsar);
  };

  //eventos para pantallas pequeñas
  var eventosPequeña = function(){
  };

  // eventos para pantallas enormes
  var eventosEnorme = function(){    
  };

  var anadirIndice = function(){
    var $ul = $carrusel.children('ul');
    var tamaño = $ul.children('li').length;
    var $div = $('<div class="indice"></div>');
    for (var i = 0; i < tamaño; i++) {
      $div.append('<div class="color"></div>');
    };
    $div.children('div:first-child').addClass('active');
    $ul.parent('div').after($div);
  };

  var enlaceMovimiento = function (e) {
    e.preventDefault();

    var lugar = this.hash,
    $elemento = $(lugar);

    $('html, body').stop().animate({
      'scrollTop': $elemento.offset().top
    }, 'slow', 'linear', function () {
      window.location.hash = elemento;
    });
  };

  var movimiento = function(){
    var primero = parseFloat($('#pres').offset().top);
    var segundo = parseFloat($('#gus').offset().top);
    var tercero = parseFloat($('#cos').offset().top);
    var actual  = parseFloat($win.scrollTop());
    var mitad   = Math.floor(segundo /2);

    if(actual >= primero && actual <= (segundo-mitad-1)){
      $enlacesNav.parent().removeClass('cambia');
      $pres.parent().addClass('cambia');
    }else if(actual >=  (segundo-mitad) && actual <=  (tercero-mitad-1)){
      $enlacesNav.parent().removeClass('cambia');
      $gus.parent().addClass('cambia');
    }else if(actual >=  (tercero-mitad)){
      $enlacesNav.parent().removeClass('cambia');
      $cos.parent().addClass('cambia');
    }
  };

  var izquierda = function(){
    var $color = $('.indice .color.active');
    var $anterior  = $color.prev('.color');
    var obj = {izq : true, selector : 'li:first-child' };
    obj.obj = {marginLeft:"100%" , "opacity":"0"};
    animacion(obj);
    $color.removeClass('active');
    if($anterior.length>0){
      $anterior.addClass('active');
    }else{
      $color = $('.indice .color');
      $color.last().addClass('active');
    }
    
  };

  var derecha = function(){
    var $color = $('.indice .color.active');
    var $siguiente  = $color.next('.color');
    var obj = {izq : false, selector : 'li:last-child'};
    obj.obj = {marginLeft:"-100%" , "opacity":"0"};
    animacion(obj);
    $color.removeClass('active');
    if($siguiente.length>0){
      $siguiente.addClass('active');
    }else{
      $color = $('.indice .color');
      $color.first().addClass('active');
    }

  };

  var pestanias = function(e){
      e.preventDefault();
      var $selt = $(e.target);
      $('.pestanias div').removeClass('active');
      $selt.parent('div').addClass('active');
      $('.pesContenido').removeClass('active');
      $('.'+$selt.attr('data-donde')).addClass('active');
  };

  var colapsar = function(e){
      var $selt = $(e.target);
      if(!$selt.next('.entro').hasClass('active')){
        $('.pesContenido .entro.active').removeClass('active');        
      }
        $($selt).next('div').toggleClass('active');
  };

  function animacion(obj){
    var $ul = $carrusel.children('ul');
    $ul.children('li:first-child').animate(obj.obj,"slow",function(){
      if(obj.izq){
        $ul.append($ul.children(obj.selector));
      }else{
        $ul.prepend($ul.children(obj.selector));
      }
      $(this).css({
        "marginLeft":"0%",
        "opacity":"1"
      });
    });
  }
  
  return {
    inicio:inicio
  };

})();

$(document).ready(inicio.inicio());