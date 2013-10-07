




        $(function () {

            $('#query').keypress(function (event) {
                if (event.which == 13) {
                    youtubeSearch();
                }
            });


        });


function youtubeSearch() {

	//$('#results').html("");
	$("body").addClass("loading"); 
	
	query = $("#query").val();
	maxres = 8;
	
	

    $.ajax({
        url: 'http://gdata.youtube.com/feeds/mobile/videos?alt=json-in-script&max-results='+maxres+'&q='+query,
        dataType: 'jsonp',
        success: function (data) {
		
            var row = "";
            for (i = 0; i < data.feed.entry.length; i++) {
			
				videoid = data.feed.entry[i].link[3].href;
				videoid = videoid.replace("http://gdata.youtube.com/feeds/mobile/videos/","");
				videoid = videoid.replace("http://m.youtube.com/details?v=","");
				
				
				videotitle = data.feed.entry[i].media$group.media$title.$t;
				
				if (videotitle.length > 30)
							videotitle = videotitle.substr(0,27)+"...";
			
			
				row += '<div class="pure-u-1-4">';
				row += "<p>" + videotitle + "</p>";
				row += '<p class="loadingVideo"><iframe width="280" height="232" src="//www.youtube.com/embed/'+videoid+'" frameborder="0" allowfullscreen></iframe></p>';
				row += "</div>";
				
				
				
				

				
				console.log(data.feed.entry[i].link[3]);
				
            }

			$('#results').html(row);
						
			//console.log(data.feed.entry[i]);
			
			
			$("body").removeClass("loading"); 
        },
        error: function () {
            alert("Error loading youtube video results");
        }
    });
	
	
    //return false;
	
	
}


