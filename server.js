/* A very simple node.js Server which runs on your localhost.

If you have a router and can port forward from it, whole world can connect to your server
It can be used for making personal Website, Blogs etc.

It is for learning purpose

@Author: Enrique miguel  */


var http = require('http');
var fs = require('fs');

/* First we need to create a ERROR response which will POP up on a bad coonnection or wrong file */

function errorresponse (res) {    // Here res is the response the server will send to the user trying to connect to it
	res.writeHead(404 , {"Content-Type": "text/plain"});  // This mean that we are sending a plain text file as a 404 response
	res.write("ERROR 404: Page not found. Try reloading or check your spelling");
	res.end();
}

/* Now in this part we will handle user requests */

function onRequest(req,res) {   // Do not get confused. req is the request user makes and res is the response the server returns

	if(req.method == 'GET' && req.url == "/") {    // used the GET method here. you can use POST and other methods aswell
		
		res.writeHead(200 , {"Content-Type": "text/html"});    // now we are returning a HTML file so used text/html
		fs.createReadStream("./index.html").pipe(res);    // Server will read HTML file index.html and will pipe in the response for user
	  }  else {
	  	errorresponse(res);
	  }

}

http.createServer(onRequest).listen(8000);
console.log("Server is now running \n Test your server at http://localhost:8000")


/* End of Server. Remember it will not work on cloud based application. You will come to know soon that why will it not work on cloud */ 

