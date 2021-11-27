//indexOf
let arrNames = [`Harry`,`Mark`, `Kris`, `Helen`, `Peter`];
function indexOf(arr, elem, fromIndex = null){
   if (fromIndex >= arr.length - 1) {
     return -1;
   } 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == elem){
            return i;
        }
    }
    return -1;
}
console.log(indexOf(arrNames,`Helen`, 2)); //3
console.log(arrNames.indexOf(`Helen`, 2)); //3

//lastIndexOf
let arrAnimals = [`cat`,`kitten`, `dog`, `elephant`, `bird`];

function lastIndexOf(arr, value, fromIndex = null) {
    let i;
    if (fromIndex < 0){
        i = arr.length + fromIndex 
      } else if(fromIndex === null){
        i = arr.length - 1
      } else {
       i = arr.length - 1 - fromIndex;
      }
    for (i; i >= 0; i--){
        if(arr[i] === value){
        return i;
        }
    }
        return -1;
}
console.log(lastIndexOf(arrAnimals,`dog`,-2)) //2
console.log(arrAnimals.lastIndexOf(`dog`,-2)) //2

//find
let arrNumbers = [1,3,5,2];
  function find(arr, callback){

      for( let i = 0; i < arr.length; i++) {

        if( callback(arr[i], i, arr) ) {
          return arr[i];
        }
      }
    }
    console.log(find(arrNumbers, (item,i,arr) => item % 2 === 0)); //2

//findIndex
function findIndex (arr, callback){
  for(let i = 0; i < arr.length; i++) {

    if( callback(arr[i], i, arr) ) {
      return i;
    }
  }
  return -1;

}
console.log(findIndex(arrNumbers, (item,i,arr) => item % 2 === 0)) //3

//includes
let arrNum = [1,2,3,6,9,5,9,6,7,88,99,22,24,14,15,19] 
function includes(arr, searchElem, fromIndex = 0){ 
  if (fromIndex >= arr.length) return false; 
  if (fromIndex < 0){ 
    fromIndex = arr.length + fromIndex;
  } 
  for(i = fromIndex; i < arr.length; i++) { 
      if (arr[i] === searchElem) return true; 
   } 
  return false;
} 
console.log(includes(arrNum,14,1)) //true
console.log(arrNum.includes(14,1)); //true

//every 

let arrEvery = [2,3,4,0];
function every(arr,callback) {

 for( let i = 0; i < arr.length; i++) {
  if (arr.length === 0) return true;
    if(!callback(arr[i], i, arr) ) {
      return false;
  }
 }
      return true;
  }
console.log(every(arrEvery, (item,i,arr) => item > 1)); //false

 //some

let arrSome = [1,8,6,5];
function some( arr, callback ) {
  if (arr.length === 0) return false;
    for(let i = 0; i < arr.length; i++){

      if(callback(arr[i],i,arr)){
        return true;
      }
    }
  return false;
}
console.log(some(arrSome, (item,i,arr) => item % 2 === 0)); //true

