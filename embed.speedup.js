// Call from end of body

function speedUpEmbeds()
{
	jQuery("iframe").each(function() {
		var e = jQuery(this);
		var src = e.attr('src');
		var matches = src.match();

		if (matches)
		{
			// youtube
			var vid = matches[1];
			e.replaceWith("<div class='youtube unloaded' data-id='"+vid+"' style='background-image:url(http://i.ytimg.com/vi/"+vid+"/hqdefault.jpg);'><span class='play'></span></div>");
		}

		var matches = src.match(/^(?:https?\:?)?\/\/(?:.*?)(?:vimeo\.com)\/(?:video\/)(.+?)(?:\?|$)/);

		if (matches)
		{
			// vimeo
			var vid = matches[1];

			var replacement = jQuery("<div class='vimeo unloaded' data-id='"+vid+"'><span class='play'></span></div>");

			// load thumbnail via API
			jQuery.ajax({
				type:'GET',
				url: 'http://vimeo.com/api/v2/video/' + vid + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data){
					var thumb = data[0].thumbnail_large;
					replacement.css('background-image', 'url('+ thumb +')');
				}
			});

			e.replaceWith(replacement);
		}
	});

	jQuery(".unloaded").click(function() {
		var e = jQuery(this);
		var vid = jQuery(this).data('id');

		if (e.hasClass('youtube'))
			e.replaceWith('<iframe src="//www.youtube.com/embed/'+vid+'?autoplay=1" allowfullscreen frameborder="0" style="width:'+e.width()+'px;height:'+e.height()+'px;"></iframe>');
		else if (e.hasClass('vimeo'))
			e.replaceWith('<iframe src="//player.vimeo.com/video/'+vid+'?autoplay=1" allowfullscreen frameborder="0" style="width:'+e.width()+'px;height:'+e.height()+'px;"></iframe>');
	});