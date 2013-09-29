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
        //dataType: 'json',
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
                               $('#task11').html(spanned);
                               

                },
                error: function()
                { 
                        
                        var err = '<span class="error">Server Error</span>';
                        $('#task11').html(err);
                        
                }

                
        
        });


}

