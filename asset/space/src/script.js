$(document).ready(function() {
	var docHeight = $('.space').height(),
			docWidth = $('.space').width(),
			heightMax = docHeight,
			widthMax = docWidth - 4;
	
	for(var i=0; 80 >= i; i++){
		$('.space').append('<div style="left:' + Math.floor( Math.random() * widthMax ) + 'px;top:' + Math.floor( Math.random() * heightMax ) + 'px" class="star '+ i +'"></div>');
	}
});