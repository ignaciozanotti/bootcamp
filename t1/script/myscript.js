$(document).ready(function(event)
{ 

	$( "section:hidden" ).fadeIn( 1000 );
	$( "#txtfield" ).focus();


});


function spanMe(substring, context)
{
        var ans = context.replace(substring,'<span class="highlight">'+substring+'</span>');

        return ans;
}

function task7()
{
	//alert('calling');
        
        name = $("#alias").val();
        //debbuger;

        $.ajax({
        type: 'POST',
        url: 'http://bootcamp.aws.af.cm/welcome/'+name,
        data: {},
        dataType: 'json',
                success: function(data)
                { 
                	       //alert('success!');
                	    var output = '';

        			for (property in data)
        			{
        			  output += property + ': ' + data[property]+'; ';
        			}
        			//alert(output);

                                spanned = spanMe(name,output);

                               $('#task7').html(spanned);

                },
                error: function()
                { 

                        var err = '<span class="error">Server Error</span>';
                        $('#task7').html(err);
                }

                
        
        });

}

function task11()
{

        $.ajax({
        type: 'POST',
        url: 'http://tweetproxy.ap01.aws.af.cm/search',
        data: {'q': 'html5'},
        dataType: 'jsonp',
                success: function(data)
                { 

                            var output = '';

                                output += '<blockquote>';


                                var i;
                                for (i = 0; i < data.statuses.length; ++i)
                                {

                                        output += '<q>';

                                                output += '<b>status:</b> '+i+'</br>';
                                                output += '<b>user name:</b> '+data.statuses[i].user.name+'</br>';
                                                output += '<b>text:</b> '+data.statuses[i].text+'</br>';
                                                output += '<b>created at:</b> '+data.statuses[i].created_at+'</br>';
                                                output += '<b>profile image url:</b> '+data.statuses[i].user.profile_image_url+'</br>';
                                                output += '<img src="'+data.statuses[i].user.profile_image_url+'" >'

                                        output += '</q></br>';
                                }

                                output += '</blockquote>';
                              


                               $('#task11').html(output);
                               

                               //console.log(data.statuses[0]);

                               //console.log(data.statuses.length);

                },
                error: function()
                { 
                        
                        var err = '<span class="error">Server Error</span>';
                        $('#task11').html(err);
                        
                }

                
        
        });


}

