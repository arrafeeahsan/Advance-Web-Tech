// const path = require('path');
// const http = require('http');
// const fs = require('fs');

import http from 'http';
import fs from 'fs';
import User from './User.js';  //bracket used for destructering //  ./ for user define module
import Index from './index.js';
import Button from './Button.js';
import userlist from './userlist.js';


const user1 = new User('alamin', '1234', 'CSE');

const users = [
	{name: 'alamin', id: 1, dept: 'SE'},
	{name: 'alami', id: 2, dept: 'CSE'},
	{name: 'alam', id: 3, dept: 'CS'},
	{name: 'ala', id: 4, dept: 'CSI'}
];

const server = http.createServer((req, res)=>{
	//console.log(req.url);
	//console.log(req.method);

	if(req.url == '/edit'){
		res.writeHead(200, {'Content-Type': 'text/html'})
		res.write('Edit Page');
		res.end();
	}

	if(req.url == '/delete'){
		res.writeHead(200, {'Content-Type': 'text/html'})
		res.write('Delete Page');
		res.end();
	}

	if(req.url == '/style.css'){
		fs.createReadStream('style.css').pipe(res);
	}

	if(req.url == '/home'){
		console.log('home page');
		//res.write(`<h2>${user1.getName()}</h2>`);
		res.writeHead(200, {'Content-Type': 'text/html'})
		res.write(Index('Userlist', userlist(users)));
		res.end();
		//fs.createReadStream('test.html').pipe(res);
	}



});

server.listen(3000); 
console.log('Http server started at 3000...');

