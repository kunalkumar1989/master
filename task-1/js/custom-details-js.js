$(document).ready(function() {
	var url = localStorage.getItem("details-url");
	var imgurl = localStorage.getItem("imgurl");
	$('.details-result').remove();
	var reff = document.referrer;
	$.getJSON(url, function( data ) {
		var items = [];
		items.push( "<li class='is-size-5 has-text-centered name has-text-danger'><a class='button has-background-black-bis has-text-primary-light' href='home.html'>Back</a></li>" );
		items.push( "<li class='is-size-5 has-text-centered name has-text-danger'><img src='" + imgurl + "' alt='image'></li>" );
		$.each( data, function( key, val ) {
			if(key == 'id' || key == 'name' || key == 'status' || key == 'species' || key == 'type' || key == 'gender')
			items.push( "<li class='is-size-5 has-text-centered name has-text-danger' id='" + key + "'><span class='has-text-dark is-capitalized has-text-weight-semibold'>" + key +" :</span> "+val + "</li>" );
		});
		$( "<ul/>", {
			"class": "details-result",
			html: items.join( "" )
		}).appendTo( ".container.details" );
		});
});