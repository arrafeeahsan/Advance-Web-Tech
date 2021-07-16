// const path = require('path');
// const http = require('http');
// const fs = require('fs');

import http from 'http';
import fs from 'fs';
import User from './User.js';  //bracket used for destructering //  ./ for user define module
import Index from './index.js';
import Button from './Button.js';


const user1 = new User('alamin', '1234', 'CSE');

const server = http.createServer((req, res)=>{
	//console.log(req.url);
	//console.log(req.method);

	if(req.url == '/style.css'){
		fs.createReadStream('style.css').pipe(res);
	}

	if(req.url == '/home'){
		console.log('home page');
		//res.write(`<h2>${user1.getName()}</h2>`);
		res.writeHead(200, {'Content-Type': 'text/html'})
		res.write(Index('home', Button('Create')));
		res.end();
		//fs.createReadStream('test.html').pipe(res);
	}



});

server.listen(3000); 
console.log('Http server started at 3000...');

