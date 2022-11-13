//Sort an array into an unique sort (no repeated values)
//without quadratic time complexity

const uniqueSort = (arr) => {
    const breadcrumbs = {};
    const result = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        if (!breadcrumbs[arr[i]]) {
            result.push(arr[i]);
            breadcrumbs[arr[i]] = true;
        }
    }
    return result.sort((a,b) => a-b) //sorts array little to big
}

//this solution speeds up time complexity BUT...
//this adds a linear space complexity with the breadcrumbs object and the result extra array
//most cases speed > space
