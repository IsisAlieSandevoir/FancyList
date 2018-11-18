/**
 * @author Isis Alié-Sandevoir
 * @company Odicci London
 * @date 14-11-2018
 *
 * This document contains the main functions called to test my object fancyList
 */

var fancyListObject = new fancyList();

console.log(fancyListObject.getItemAt(0));
console.log(fancyListObject.getItemAt(1, 2));

console.log(fancyListObject.addItem(5));
//TODO: problem: rest parameter don't return an array, have to finda way to treat it 
//console.log(fancyListObject.addItems(6, 8, 5));
console.log(fancyListObject.addItems([6, 8, 5]));

//TODO: problem: foreach on the list
console.log(fancyListObject.insertItemAt(1, 8));
//TODO: rest parameter problem not an array
console.log(fancyListObject.insertItemsAt(1, 8, 5));
console.log(fancyListObject.insertItemsAt(1, [2,4]));

console.log(fancyListObject.removeItemAt(1, 8));
console.log(fancyListObject.removeItemsAt(1, 2));

console.log(fancyListObject.removeItem(1));
//TODO: problem: rest parameter not a array
//console.log(fancyListObject.removeItems(1, 2, 8));
console.log(fancyListObject.removeItems([1, 3]));




