
const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

let data = {
    id: 10
}

let token = jwt.sign(data, '123abc');

console.log(token);

let decoded = jwt.verify(token, '123abc');

console.log('decoded', decoded);

// let message = 'I am number 3';
// let hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// let data = {
//     id: 4
// };
// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// // token.data.is = 5;
// // token.hash = SHA256(JSON.stringify(data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if(resultHash === token.hash){
//     console.log('Data was not changed');
// } else {
//     console.log('Data was changed. Do not trust!');
// }

