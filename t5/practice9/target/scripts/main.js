require.config({paths:{jQuery:"lib/jquery"}}),require(["modules/Movie","modules/Director","order!jQuery"],function(e,t){var n="<p>",r=new e("The Godfather",1972);n+="Movie created. Title: "+r.getTitle()+", Year: "+r.getYear(),n+="<br/>";var i=new e("Fear and Loathing in Las Vegas",1998);n+="Movie created. Title: "+i.getTitle()+", Year: "+i.getYear(),n+="<br/>",n+=i.play()+"<br/>",n+=i.stop(),n+="</p>";var s=new t("Terry Gilliam");s.setQuotes(["Cinemoi is the most important television channel in Britain.","So we create a world that isn't true to a realistic naturalistic world, but is truthful.","All I do is hunt. I want to be thrilled. And I'm not being thrilled at the moment. "]),n+="<p>Director created. Name: "+s.getName()+"<br/>",i.setDirector(s),n+="Director of "+i.getTitle()+": "+i.getDirector()+"</p>",$("#log").html(n),$("#quotes").click(function(){var e=i.getDirector().speak();$("#who").html(e[0]),$("#quote").html(e[1])})});