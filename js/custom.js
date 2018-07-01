$(document).ready(function(){
	$('.delete-item').on('click', function(){ 
		$(this).parent().parent().parent().remove();
	});

	$('.remove-item').on('click', function(){ 
		$(this).parent().parent().remove();
	});

	$('.clear').on('click', function(){ 
		$('.content-page .product-item').map(function(item, value) {
		  $(this).remove();
		});
	});

	$('.buy-item').on('click', function(){ 
		var product      = $(this).parent().parent().parent();
		var producItem   = product.data('item');
		var productText  = product[0].outerText;
		var productPrice = productText.split('$')[1];
		var prevSum      = $('.shopping-sum')[0].dataset.sum;
		var newSum       = +productPrice + +prevSum;
		var currHTML 	 = $('.shopping-sum span').html();
		var currency     = $('.shopping-sum span')[0].textContent;
		
		$('.shopping-sum')[0].dataset.sum = newSum;
		$('.shopping-sum').empty();
		$('.shopping-sum').append(currHTML);
		$('.shopping-sum').append(newSum);
	});

	$('#email').blur(function() {
	    var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
	    if (testEmail.test(this.value)){
	    	$(this).removeClass('input-error');
	    	console.log($(this));
	    } else{
	    	$(this).addClass('input-error');
	    	console.log($(this));
	    }
	});
	
});