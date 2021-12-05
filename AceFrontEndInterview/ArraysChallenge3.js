//Challenge 3: Find Two Numbers that Add up to "value"
//Given an array and a number "value", find two numbers from the array that sum to 'value'. 
//Implement your solution in JavaScript and see if your output matches with the correct output.

//1. eliminate all single digits and return double digit values.
//2. compare the value 21 with each double digit until the sample output value of 81 is reached.

//Solution 1 brute force
/* function findSum(arr,value){
   for (i = 0; i < arr.length; i++){
     for(j = i+1; j <arr.length; j++){
         if (arr[i] + arr[j] == value)
             return [arr[i], arr[j]]
         
     }
     
   }
   return false

  
}
console.log(findSum([1, 2, 3, 4], 6))
console.log(findSum([1, 2, 3, 4], 10)) */

/* // Solution 2 Sorting the Array
function binarySearch(arr, item){
    var first = 0, mid;
    var last = arr.length - 1;
    var found = false
    var arrayIndex = -1
    while( (first <= last) && !found){
        mid = Math.floor((first + last) / 2)
        if( arr[mid] == item){
            arrayIndex = mid
            found = true
        }
        else{
            if(item < arr[mid])
                last = mid - 1
            else
                first = mid + 1
        }
    }
    if (found)
         return arrayIndex
     else
         return false
 }
 
 function findSum(arr,value){
    arr.sort(function(a, b) {
         return a - b
     })
 var index;
  for(var j = 0; j<arr.length; j++){
    index = binarySearch(arr,(value-arr[j]))
    if(index!=false && j!=index)
      return [arr[j],value-arr[j]]
  }
   return false;
 }
 
 
 console.log(findSum([1,2,3,4],5))
 console.log(findSum([4,3,2,1],9))
 */

 // Solution 3 Moving indices
 function findSum(arr, value) {

    arr.sort(function(a, b) {
        return a - b
    })

    var index1 = 0,
        index2 = arr.length - 1,
        result = [],
        sum = 0;

    while (index1 != index2) {
        sum = arr[index1] + arr[index2]

        if (sum < value) {
            index1++;
        } else if (sum > value) {
            index2--;
        } else {
            result.push(arr[index1]);
            result.push(arr[index2]);
            return result;

        }
    }
  return false;
}


console.log(findSum([1,2,3,4],5))
console.log(findSum([1,2,3,4],10))

