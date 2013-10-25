define(["./Director"],function(Director) {
    function Movie (title,year) {
        //Private variables
        var myTitle= title? title : '';
        var myYear = year? year : 0;
        /*var actors = [];*/
        var myDirector;
        
        //Privileged methods (setters and getters)
        this.getTitle= function() {return myTitle;}
        this.setTitle= function(title) {myTitle = title;}
        this.getYear= function() {return myYear;}
        this.setYear= function(year) {myYear = year;}

        /*this.setCast= function(cast) { actors = cast;   }
        this.getCast= function() { return actors; }*/

        this.setDirector= function(director) { myDirector = director;   }
        this.getDirector= function() { return myDirector; }
    }
    // Public methods
       
    Movie.prototype.play = function(){ 
        var msg = 'Playing '+this.getTitle()+'...';
        console.log(msg);
        return msg;
        //$.publish("movies",['play',this.getTitle()]);
    }
    Movie.prototype.stop = function() {
        var msg = this.getTitle()+' stopped.';
        console.log(msg);
        return msg;
        //$.publish("movies",['stop',this.getTitle()]); 
    }
    
    
    return (Movie);
});




