function max(num1, num2){
    if(num1>num2){
        return num1;
    }
    else{
        return num2;
    }
}

function maxOfThree(num1, num2, num3){
    if (num1 >= num2 && num1 >= num3){
        return num1;
    }
    else if(num2 >= num1 && num2 >= num3){
        return num2;
    }
    else {
        return num3;
    }
}

function isVowel(string){
    const vowels = ['a', 'e', 'i', 'o', 'u']
    if(string.length > 1){
        return false;
    }
    return vowels.includes(string)
}

function sum(numbers){
    return numbers.reduce(function(accumilator, elem){
        return accumilator+elem;
    },0);

}

function multiply(numbers){
    return numbers.reduce(function(accumilator, elem){
        return accumilator * elem;
    },1);
}

function reverse(string){
    let reversed = []
    for(let i = 0; i <= string.length; i++){
        reversed[i] = string[string.length - i];
    }
    return reversed.join('');
}

function findLongest(strings){
    let longestIndex = 0;
    let longestLength = 0;
    let i;
    for (i = 0; i < strings.length; i ++){
        console.log(strings)
        console.log(strings[i].length)
        if(strings[i].length > longestLength) {
            longestLength = strings[i].length;
            longestIndex = i;
        }
    }
    return strings[i-1];
}

function filterLongWords(words, length){
    return words.filter(function(elem, i, array){
        return elem.length > length;
    });
}



const a = [1,3,5,3,3];
const b = a.map(function(elem, i, array) {
    return elem + 3;
})
const multipyByTen = a.map(function(elem, i, array) {
    return elem * 10;
});
const filterThrees = a.filter(function(elem, i, array) {
    return elem === 3;
});
const multiplyAll = a.reduce(function(accumilator, elem) {
    return accumilator * elem;
},1);

function myFunctionTest(expected, fun){
    if (expected == fun()){
        return "TEST SUCCEDED";
    }
    else{
        return "TEST FAILED";
    }

}

console.log("Expected output of max(20,10) is 10 and  " +
    myFunctionTest(20, function(){return max( 20, 10)}));

console.log("Expected output of maxOfThree(20,10, 30) is 30 and  " +
    myFunctionTest(30, function(){return maxOfThree( 20, 10, 30)}));


console.log("Expected output of vowel('a') is true and  " +
    myFunctionTest(true, function(){return isVowel( 'a')}));

console.log("Expected output of sum([5,4]) is 9 and  " +
    myFunctionTest(9, function(){return sum( [5,4])}));

console.log("Expected output of multiply([5,4]) is 20 and  " +
    myFunctionTest(20, function(){return multiply( [5,4])}));

console.log("Expected output of reverse('cat') is tac and  " +
    myFunctionTest('tac', function(){return reverse( 'cat')}));
console.log("Expected output of findLongest( 'cat', 'hello', 'preserve') is preserve and  " +
    myFunctionTest('preserve', function(){return findLongest( ['cat', 'hello', 'preserve'])}));
console.log("Expected output of filterLongest( 'cat', 'hello', 'preserve') is preserve and  " +
    myFunctionTest(['hello','preserve'], function(){return filterLongWords( ['cat', 'hello', 'preserve'],3)}));