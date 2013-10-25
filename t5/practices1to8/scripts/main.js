require.config({
    paths: {
        jQuery: 'lib/jquery',
    }
});

require(["modules/Movie","modules/Director","order!jQuery"],
    function(Movie,Director) {

        var log = '<p>';
        var thegodfather = new Movie('The Godfather',1972);
        log += "Movie created. Title: "+thegodfather.getTitle() +", Year: "+thegodfather.getYear();
        log += '<br/>'
        var fearvegas = new Movie('Fear and Loathing in Las Vegas',1998);
        log += "Movie created. Title: "+fearvegas.getTitle() +", Year: "+fearvegas.getYear();
        log += '<br/>'
        log += fearvegas.play()+'<br/>';
        log += fearvegas.stop();
        log+='</p>';

        var director = new Director('Terry Gilliam');
        director.setQuotes(["Cinemoi is the most important television channel in Britain.","So we create a world that isn't true to a realistic naturalistic world, but is truthful.","All I do is hunt. I want to be thrilled. And I'm not being thrilled at the moment. "]);
        log+= '<p>Director created. Name: '+director.getName()+'<br/>';
        fearvegas.setDirector(director); 
        log+= "Director of "+fearvegas.getTitle()+": "+fearvegas.getDirector()+"</p>";
        $("#log").html(log);
        
        $("#quotes").click(function(){
            var quote = fearvegas.getDirector().speak();
            $("#who").html(quote[0]);
            $("#quote").html(quote[1]);
        })
    }
	
);