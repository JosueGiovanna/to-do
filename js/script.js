$( document ).ready(function(){

	$('#input').keypress(function(e){
        
        if((e.which == 13) && ($("#input").val() != '')) {
            $('#ListaHacer').prepend('<div class="elemento row">'+
              '<span class="column col1">'+$('#input').val()+'</span>'+
              '<div class="column col2"></div>'+
              '<div class="column col3"><span class="hecho"><i class="fas fa-check "></i></span></div>'+
              '</div>');
            $('#input').val('');
        };
        });
	$('#ListaHacer').on("click",".col2",function(e){
		$(this).parent().remove();
	});
	$('#ListaHacer').on("click",".col3",function(e){
		$(this).children("span").toggleClass('hecho');
		$(this).parent().toggleClass('done');
	});
	$('#show-all').click(function(e){
      $('.elemento').removeClass('hecho');
   });
	$('#show-check').click(function(e){
		$('.elemento').removeClass('hecho');
    	$('.elemento').each(function(elementIndex){
      		if($(this).find('.done').length == 0){
         	$(this).addClass('hecho');
       		};
     	});
	});


});