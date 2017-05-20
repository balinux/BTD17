var fs 	= require('fs');

var data = fs.readFile('/etc/passwd','utf8', function (err,data) {
	if (err) throw err;
	console.log(data);


}); 