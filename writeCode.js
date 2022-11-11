// 1- runtime: O(n^2)  space complexity: O(1)

function sumZero(arr){
    for (let i =0; i < arr.length; i++){
        for (let k = (i + 1); k < arr.length; k++) {
            if (arr[i] + arr[k] === 0){
                return true
            }else{
                return false
            }
        }
    }
}
// console.log(sumZero([1, -1, 3, 7]))



// 2- runtime: O(n^2)     space complexity: O(1)

function uniqueChar(string){
    for (let i = 0; i < string.length; i++){
        for (let j = (i + 1); j < string.length; j++){
            if (string[i] === string[j]){
                return false
            }
        
        } 
    }
    return true
}
// console.log(uniqueChar('moonday'))

//3- runtime: O(n)     space complexity: O(1)

alphabets = 'abcdefghijklmnopqrstuvwxyz'.split("");

function isPangram(string) {
    string = string.toLowerCase();
    return alphabets.every(x => string.includes(x));
}

// console.log(isPangram("Detect Pangram"));
// console.log(isPangram("The quick brown fox jumps over the lazy dog!"))


//4- runtime: O(n)    space complexity: O(1)

function longestString(array)
  {
    let maxStr = array[0].length
    let answer = array[0]
    for (let i = 1; i < array.length; i++) {
        let max = array[i].length
        if (max > maxStr) {
            answer = array[i]
            maxStr = max
        }
    }
    return answer.length
}
console.log(longestString(["hi", "hello"]))
