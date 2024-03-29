//Challenge 2: Merge Two Sorted Arrays
//Given two sorted arrays, merge them into one array that is sorted. 
//Implement the solution in JavaScript to see if your code runs successfully!

function mergeArrays(arr1, arr2) {
    var merged = [];
    var i = 0,
        j = 0;
  //Traverse both arrays and insert smaller value from arr1 or arr2
  //into result array and then increment that array index.
 //If an array is completely traversed, while other one is left then just
 //copy all the remaining elements into result array
    while ((i < arr1.length) && (j < arr2.length)) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }

    }

    if (i <= (arr1.length - 1)) {
        arr1.splice(0, i)
        merged = merged.concat(arr1);
    } else if (j <= (arr2.length - 1)) {
        arr2.splice(0, j)
        merged = merged.concat(arr2)

    }


    return merged;
}
console.log(mergeArrays([4,5,6],[-2,-1,0,7]))