// Arrays for testing
const testArrays = [
    [0, 1, 2, 3, 4, 5],              // ascending numbers
    [-2, 4, -6, 8, -10, 12],         // all even numbers
    [1, 3, 5, 7, 9, 11],             // all odd numbers
    [3, -1, 4, 1, 5, -9, 6],         // digits of pi
    [0, 1, undefined, 13, 17],       // undefined values
    [0, 1, null, 13, null]           // null values
];



function sumArray(arr){
    let total = 0;
    for(val of arr){
        total += val;
    }
    console.log("The sum total is: ", total);
    return total;
}

function meanArray(arr){
    
    let total = 0;               
    for (let val of arr) {       
        total += val;
    }
    return total / arr.length;   
}



function doubleArray(arr){
    let result = [];                  
    for (let val of arr) {            
        result.push(val * 2);         
    }
    return result;                    
}


function squareArray(arr){
     let result = [];                   
    for (let val of arr) {           
        result.push(val * val);       
    }
    return result;   
}

function minValue(arr){
     let min = arr[0];
    for (let val of arr){
        if (val < min){
            min = val;
        }
    }
    return min;
}

function maxValue(arr){
    let max = arr[0];
    for (let val of arr){
        if (val > max){
            max = val;
        }
    }
    return max;
}

function countEvens(arr){
      let count = 0;
    for (let val of arr){
        if (val % 2 === 0){
            count++;
        }
    }
    return count;
}

function countPositives(arr){
    let count = 0;
    for (let val of arr){
        if (val > 0){
            count++;
        }
    }
    return count;
}

function filterOdds(arr){
    let oddNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            oddNumbers.push(arr[i]);
        }
    }
    return oddNumbers;
}

function filterNegatives(arr){
    let negatives = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negatives.push(arr[i]);
        }
    }
    return negatives;
}

function negativeExists(arr){
     for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            return true;
        }
    }
    return false;
}

function firstEvenNumber(arr){
     for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            return arr[i];
        }
    }
    return null;
}

function allElementsPositive(arr){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= 0) {
            return false;
        }
    }
    return true;
}

function allElementsDefined(arr){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === undefined || arr[i] === null || arr[i] === "") {
            return false;
        }
    }
    return true;
}
