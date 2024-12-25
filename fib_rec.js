function fib(n) {
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const array = [0, 1];

    for (let i = 3; i <= n; i++) {
        const number = array[i-2] + array[i-3];
        array.push(number);
    }

    return array;
}

function recFib(n, result = [0, 1]) {
   if (n <= 0) return [];
   if (n <= result.length) {
    return result.slice(0, n);
   }

   result.push(result[result.length-1] + result[result.length-2])
   return recFib(n, result);
   
}

function mergeSortArray(array) {
   if (array.length === 1) {
    return array;
   }
    
    const mid = Math.floor(array.length / 2);

    const left = array.slice(0, mid);
    const right = array.slice(mid, array.length);

    return merge(mergeSortArray(left), mergeSortArray(right));
}

function merge(left, right) {
    const sortedArray = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            sortedArray.push(left[i])
            i++;
        } else {
            sortedArray.push(right[j]);
            j++;
        }
    }

    return sortedArray.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSortArray([5, 2, 4, 1, 3, 7, 8]));