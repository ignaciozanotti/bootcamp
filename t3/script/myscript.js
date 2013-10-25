//**** OBSERVERLIST

function ObserverList()
{
  this.observerList = [];
}

//add to list
ObserverList.prototype.Add = function( obj ){
  return this.observerList.push( obj );
};

//clear the list

ObserverList.prototype.Empty = function(){
  this.observerList = [];
};

//count
ObserverList.prototype.Count = function(){
  return this.observerList.length;
};

//get nth observer
ObserverList.prototype.Get = function( index ){
  if( index > -1 && index < this.observerList.length ){
    return this.observerList[ index ];
  }
};


//insert at index
ObserverList.prototype.Insert = function( obj, index ){
  var pointer = -1;

  if( index === 0 ){
    this.observerList.unshift( obj );
    pointer = index;
  }else if( index === this.observerList.length ){
    this.observerList.push( obj );
    pointer = index;
  }

  return pointer;
};


//get object index
ObserverList.prototype.IndexOf = function( obj, startIndex ){
  var i = startIndex, pointer = -1;

  while( i < this.observerList.length ){
    if( this.observerList[i] === obj ){
      pointer = i;
    }
    i++;
  }

  return pointer;
};

//remove at index
ObserverList.prototype.RemoveAt = function( index ){
  if( index === 0 ){
    this.observerList.shift();
  }else if( index === this.observerList.length -1 ){
    this.observerList.pop();
  }
};

//****************** END OBSERVERLIST



//**** THE SUBJECT


function Subject()
{
  this.observers = new ObserverList();
}

Subject.prototype.AddObserver = function( observer )
{
  this.observers.Add( observer );
};  

Subject.prototype.RemoveObserver = function( observer )
{
  this.observers.RemoveAt( this.observers.IndexOf( observer, 0 ) );
};  

Subject.prototype.Notify = function( context )
{
  var observerCount = this.observers.Count();
  for(var i=0; i < observerCount; i++){
    this.observers.Get(i).Update( context );
  }
};


//*****end SUBJECT



var Observer = function () {};

Observer.prototype = {
   
  Update: function (data) {

        console.log("theObserver says: "+data+".");
    }

};


//*** MIXIN

var Social = function () {};

Social.prototype = {

    
	share: function (name) {

        this.Notify("sharing "+this.getTitle()+" with "+name);
    },

  like: function (name) {

        this.Notify(name+" likes "+this.getTitle());
    }

};

//*****END MIXIN

 
//** EXTEND FUNCTION (inheritance)
 // Extend an object with an extension
 
function extend( extension, obj )
{
  for ( var key in extension )
  {
    obj[key] = extension[key];
  }
}


//*** eND EXTEND FUNCTION



	//the movie prototype   (FOR REFERENCE)

	/*

    var movie = Object.create(null);

    extend(new Subject(),movie);

	movie.name = 'notitle';
	


	movie.setTitle = function (newtitle)
	{

		this.title = newtitle;
	};

    movie.play = function (movie)
  {
    this.Notify("Now playing "+this.title+".");

  };

	movie.stop = function (movie)
	{

		this.Notify(this.title+" stopped.");
	};
	
	*/


var Movie = (function () {

    var title = 'sintitulo';
    var year = 0;
    var foo = 'bar';

    //constructor

    var Movie = function (tit, ani)
    {
      this.title = tit;
      this.year = ani;


      extend(new Subject(), this);
      extend(new Social(), this);
    };


    Movie.prototype.constructor = Movie;

    Movie.prototype.setTitle = function (newTitle)
    {
      this.title = newTitle;
    };

    Movie.prototype.getTitle = function ()
    {
        return this.title;
    };

    Movie.prototype.setYear = function (newYear)
    {
      this.year = newYear;
    };

    Movie.prototype.getYear = function ()
    {
        return this.year;
    };

    Movie.prototype.play = function (movie)
    {
      this.Notify("Now playing "+this.title+".");

    };

    Movie.prototype.stop = function (movie)
    {

      this.Notify(this.title+" stopped.");
    };


    return Movie;


})();

//** DownloadableMovie


var DownloadableMovie = (function () {


    //constructor

    var DownloadableMovie = function (titt, anit)
    {
      extend(new Movie(titt, anit), this);
      //this.setTitle(titt);
     //this.setYear(anit);
    };


    DownloadableMovie.prototype.constructor = DownloadableMovie;

    Movie.prototype.download = function ()
    {

      this.Notify("Downloading "+this.getTitle()+".");
    };


    return DownloadableMovie;


})();

/*



var DownloadableMovie = function () {};

DownloadableMovie.prototype = {
   
  download: function () {

        this.Notify("Downloading "+this.getTitle()+".");
    }

};


//** end DownloadableMovie


*/

//******* INSTANCES

  var terminator = new Movie('terminator', 1984);

  var robocop = new DownloadableMovie('robocop', 1987);

  /*var robocop = new Movie('robocop', 1985);
  extend(new DownloadableMovie(), robocop);
  */
 

  
  var theObserver = new Observer();

    terminator.AddObserver(theObserver);
  	robocop.AddObserver(theObserver);



