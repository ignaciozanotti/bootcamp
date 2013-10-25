define("scripts/modules/Director",[],function(){function e(e){var t=e?e:"",n=[];this.getName=function(){return t},this.setName=function(e){t=e},this.setQuotes=function(e){n=e},this.getQuotes=function(){return n}}return e.prototype.speak=function(){var e=this.getQuotes(),t=this.getName()+" says: ",n=e[Math.floor(Math.random()*e.length)];return console.log(t+n),[t,n]},e.prototype.toString=function(){return this.getName()},e}),define("scripts/modules/Movie",["./Director"],function(e){function t(e,t){var n=e?e:"",r=t?t:0,i;this.getTitle=function(){return n},this.setTitle=function(e){n=e},this.getYear=function(){return r},this.setYear=function(e){r=e},this.setDirector=function(e){i=e},this.getDirector=function(){return i}}return t.prototype.play=function(){var e="Playing "+this.getTitle()+"...";return console.log(e),e},t.prototype.stop=function(){var e=this.getTitle()+" stopped.";return console.log(e),e},t});