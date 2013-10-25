	#			regular		grunt	improvements	comments
p1 bootstrap	84			92			+8			use CDN,expire headers, gzip, Etags, cookie-free domains, image optimization
p1 foundation	87			92			+5			use CDN,expire headers, gzip, Etags, cookie-free domains, image optimization
p1 purecss		88			89			+1			image optimization
p2 bootstrap	77			89			+12			gzip, use cookie-free domains, image optimization
p2 foundation	81			83			+2			do not scale images on html (my bad!), image optimization
p2 purecss		85			85			0			image optimization


bootstrap has many .js and .css files worth minification
foundation also has many .js ans .css files but in this case these files are (in most cases) already minified.
purecss has no .js files whatsoever and many external http requests, this scenario causes little or no change after the optimization process.





