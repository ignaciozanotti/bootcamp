define("scripts/modules/Director",[],function(){function e(e){var t=e?e:"",n=[];this.getName=function(){return t},this.setName=function(e){t=e},this.setQuotes=function(e){n=e},this.getQuotes=function(){return n}}return e.prototype.speak=function(){var e=this.getQuotes(),t=this.getName()+" says: ",n=e[Math.floor(Math.random()*e.length)];return console.log(t+n),[t,n]},e.prototype.toString=function(){return this.getName()},e});