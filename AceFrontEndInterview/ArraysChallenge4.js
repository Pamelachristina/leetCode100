//Challenge 4: Array of Products of All Elements
//Given an array, return an array where each index stores the product 
//of all numbers in the array except the number at the index itself.

function findProduct(arr) {
    let temp = 1,
        product = [];

    for (var i = 0; i < arr.length ; i++) {
        product[i]  = temp;
        temp = temp * arr[i];
    }

    temp = 1;
    for (var i = arr.length - 1; i > -1; i--) {
        product[i] *= temp;
        temp *= arr[i];
    }

    return product
}

console.log(findProduct([1,3,4,5]))