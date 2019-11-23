const diet = require('./diet');

/**
 * Things to achieve
 * The aim of the library is to provide customized diet plan for end users 
 * 
 * Features
 *  - Calculate BMR
 *  - Calculate BMI
 */

 let gowtham = {
     age : 32,
     gender : 'male',
     height : 177,
     weight : 84
 }

 console.log('BMR of Gowtham is');
console.log(diet.bmr(gowtham));

console.log('BMI of gowtham');
console.log(diet.bmi(gowtham));