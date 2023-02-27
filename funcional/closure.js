/*
   [] Closure é quando uma função 'lembra'
   [] seu escopo léxico, mesmo quando a função
   [] é executada fora desse escopo léxico
*/

const sumXMore3 = require('./closure2');

const x = 3000;
console.log(sumXMore3());
