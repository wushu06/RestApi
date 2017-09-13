(function($) {
	/*console.info('The rest api root ', WPsettings.root);
	console.info('The rest api url ', WPsettings.nonce);
	console.info('The rest api id ', WPsettings.current_ID);*/
	const $ENTRYTITLE = $(' h1');
	$ENTRYTITLE.after('<button class="edit-button edit-title">Edit Title</button>');
	$ENTRYTITLE.before('<button  class="edit-title save" style="display: none;">Save Title</button>');
	function runAjax(newTitle){
		$.ajax({
			url: WPsettings.root + 'wp/v2/posts/' + WPsettings.current_ID,
			method: 'POST',
			beforeSend: function(xhr){
				xhr.setRequestHeader('X-WP-Nonce', WPsettings.nonce); // nonce another layer of protection from wordpress
			},
			data: {
				'title': newTitle
			}
		})
	}

	$('.edit-button').click(function(){
		let $originaltitle = $(this).prev($ENTRYTITLE).text();
		$(this).prev($ENTRYTITLE).prev('.save').toggle();
		$(this).prev($ENTRYTITLE).toggle();
		$(this).before('<input id="title-input" type="text">');
		document.querySelector('#title-input').value = $originaltitle;
		
		
		$(this).hide();
		//$(this).prev($ENTRYTITLE).after('<button id="test">test</button>');

	});
	$('.save').click(function(){
		let newTitle = document.querySelector('#title-input').value
		$(this).next($ENTRYTITLE).text(newTitle);
		$(this).next($ENTRYTITLE).toggle();
		$('#title-input').remove();
		$(this).toggle();
		$('.edit-button').show();
		//ajax
		runAjax(newTitle);
		
		
	});
	console.log($(this).prev($('.edit-button')));


})(jQuery);