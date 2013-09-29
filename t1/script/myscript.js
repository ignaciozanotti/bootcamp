$(document).ready(function(event)
{ 

	$( "section:hidden" ).fadeIn( 1000 );
	//document.getElementById("myBtn").onclick=callIt;
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
                	    //alert(data);
                	    var output = '';

        			for (property in data)
        			{
        			  output += property + ': ' + data[property]+'; ';
        			}
        			//alert(output);

                                spanned = spanMe(name,output);

        		      //$('section').text(spanned);
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
        //alert('calling');
        

        //name = $("#alias").val();
        //debbuger;

        $.ajax({
        type: 'POST',
        url: 'http://tweetproxy.ap01.aws.af.cm/search',
        data: {'q': 'html5'},
        dataType: 'jsonp',
                success: function(data)
                { 
                        
                             
                               //alert('success!');
                            //alert(data);
                            var output = '';

                            /*


                                for (statuses in data)
                                {
                                  output += statuses + ': ' + data[statuses]+'; ';
                                }
                                //alert(output);
                                */
                                output += '<blockquote>';


                                var i;
                                for (i = 0; i < data.statuses.length; ++i)
                                {
                                    //output += data.statuses[0].text
                                    //from_user, text, created_at, profile_image_url

                                        output += '<q>';

                                                output += 'status: '+i+'</br>';
                                                output += 'user name: '+data.statuses[i].user.name+'</br>';
                                                output += 'text: '+data.statuses[i].text+'</br>';
                                                output += 'created at: '+data.statuses[i].created_at+'</br>';
                                                output += 'profile image url: '+data.statuses[i].user.profile_image_url+'</br>';

                                        output += '</q></br>';
                                }

                                output += '</blockquote>';
                              


                               $('#task11').html(output);
                               

                               console.log(data.statuses[0]);

                               console.log(data.statuses.length);

                               //var cant = data.statuses.length;







                               

                },
                error: function()
                { 
                        
                        var err = '<span class="error">Server Error</span>';
                        $('#task11').html(err);
                        
                }

                
        
        });


}

