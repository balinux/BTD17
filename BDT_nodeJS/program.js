// learn 1
// console.log("HELLO WORLD");

// Learn 2

// var sum = 0;
// var count = 0;

// process.argv.forEach(function (item) {
// 	if (count >1) {
// 		sum += parseInt(item);
// 	}
// 	count++
// });
// console.log(sum);


// Learn 3


// var fs = require('fs');

// var buffer 		= fs.readFileSync(process.argv[2]);
// var jum_String	= buffer.toString().split('\n').length-1;

// console.log(jum_String);


// LEARN 4 

// var fs = require('fs');

// var buffer = fs.readFile(process.argv[2], function(err,data) {
// 	if (err) {
// 		console.log('error',err);
// 		return;
// 	}
// 	jumlahLine = data.toString().split('\n').length-1;

// 	console.log(jumlahLine);
// });

// LEARN 5

var fs 		= require('fs');
var path 	= require('path');

var folder	= process.argv[2];
var ext 	= '.'+ process.argv[3];


fs.readdir(folder, function(err, files) {
	console.log(files);
	if (err) return console.error(err);
	files.forEach(function(file) {
		if (path.extname(file)===ext) {
			console.log(file);
		}
	})
});