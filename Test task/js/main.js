$(document).ready(function(){//
    $('input').hover(
      function(){
        $(this).prev().addClass('hover');
      },
      function(){
        $(this).prev().removeClass('hover');
      }
    );
    
	var mySwiper = new Swiper ('.swiper-container', {
		direction: 'horizontal',
		loop: false,
		paginationClickable:true,
		pagination: '.swiper-pagination'
	}); 
	


});
