$(document).on('click','.location-link',function() {
	var url = $(this).attr('data-href');
	$('.my-new-list').remove();
	$.getJSON(url, function( data ) {
		var items = [];
		$.each( data, function( key, val ) {
			if(key == 'residents'){
				$.each( val, function( key1, val1 ) {
					$.getJSON( val1, function( data1 ) {
						$.each( data1, function( key2, val2 ) {
							if(key2 == 'name')
							items.push( "<li class='is-size-5 has-text-centered name has-text-danger' id='" + key2 + "'><span class='has-text-dark is-capitalized has-text-weight-semibold'>" + key2 +" :</span> "+val2 + "</li>" );
							if(key2 == 'status')
							items.push( "<li class='is-size-5 has-text-centered status has-text-primary	' id='" + key2 + "'><span class='has-text-dark is-capitalized has-text-weight-semibold'>" + key2 +" :</span> "+val2 + "</li>" );
						});
						$( "<ul/>", {
							"class": "my-new-list",
							html: items.join( "" )
						}).appendTo( ".result" );
					});
				});
			}
		});
	});
	$('.modal').addClass('is-block');
});
$(document).on('click','.modal-close, .modal-background',function() {
	$('.modal').removeClass('is-block');
});

$(document).on('click','.image-anchor',function() {
    $(this).closest('.column').siblings('.column').find('a.details-info')[0].click();
});

$(document).on('click','.details-info',function() {
	var url = $(this).attr('data-href');
	localStorage.setItem("details-url", url);
	var imgUrl = $(this).parent().siblings('.column').find('img').attr('src');
	localStorage.setItem("imgurl", imgUrl);
});
	
	
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('sw-home.js').then(function(registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
	
	
	
	
	
	