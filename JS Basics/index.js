"use strict"

const students = ['Alamin', 'Abir', 'Rakib', 'Rabbi'];

// const newarray = students.filter(function(std){

// 	return std[0] == 'A';

// });

// const newarray = students.filter(std=>std[0] == 'A');

// console.log(newarray); 

/*const student = {
	id: 1,
	name: 'alamin',
	email: 'alamin@aiub.edu'
}

//object destruture 
const {id, name:myname, email.myemail} = student; 

console.log(myname);
console.log(myemail);*/

/*console.log('No delay...');
setTimeout(function(){
	console.log('3s delay...');
}, 3000);

console.log('No delay...');*/


// require('./student')

/*const p = new Promise((resolve, reject)=>{
	let sum = 10; 

	if (sum == 10) {
		setTimeout(()=>{
			resolve('true');
		}, 2000); 
	}else{
		reject('false');
	}
});*/




//then works when call resolve and catch works when reject called
// p.then(message=>{
// 	console.log(message);
// }).catch(error=>{
// 	console.log(error);
// });


// function sum(a, b){
// 	return new Promise((resolve, reject)=>{
// 		if (a !== 0 && b !== 0) {

// 			setTimeout(()=>{
// 				let sum = a+b;
// 				resolve(sum);
// 			}, 2000);
			
// 		}else{
// 			reject(0);
// 		}
// 	});
// }

// sum(4, 6)
// .then(msg=>{
// 	console.log(msg);
// })
// .catch(error=>{
// 	console.log(error);
// });

// async function mytask(a, b){

// 	let total = await sum(a, b);  // when a function returns a promise we use await
// 	console.log(`Total value is: ${total}`);
// } 

// mytask(10, 20);

// mytask(5, 6).then(msg=>{
// 	console.log(msg);
// }).catch(error=>{
// 	console.log(error);
// });
//console.log(mytask(5, 8));



/*import {student} = from './student';

const s1 = new Student('alamin', 'alamin@aiub.edu', 'CSE');
console.log(s1.getName());*/


 
/*const f2 = function(f){
	
	let sum = 10;
	setTimeout(()=>{
		f(sum);
	}, 3000);
	
	console.log('Function 2');
}

f2(function(sum){

	console.log(`Value is: ${sum}`);
});*/

/*function sum2(a, b){
	if (a !== 0 && b !== 0) {
			setTimeout(()=>{
				let sum = a+b;
				return sum;
			}, 3000);
	}else{
		return 'error';
	}
}

function mytask2(a, b){
	let total = sum2(a,b);
	console.log(`Total value is: ${total}`);
}

mytask2(10,30);
console.log('Another task....');



*/

//import {Student, id} from './student';
import Student from './student';


const s1 = new Student('alamin', 'alamin@aiub.edu', 'CSE');
console.log(s1.getName());







