
describe("Testing banned words function",function(){
    it("Checking if a string object has a filter method",function(){
        assert.notEqual(String.prototype.filter,undefined);
    })
    it("Check if it returns the string itself if argument is empty",function(){
        let str="no mas";
        assert.equal(str.filter(""),str);
    })
    it("should remove word not if given this word is not nice",function(){
        let str="this house is not nice!";
        assert.equal(str.filter("not"),"this house is nice!");
    })
})

describe("Testing bubblesort function",function(){
    it("Checking if array has bubble sort",function(){
        assert.notEqual(Array.prototype.bubbleSort,undefined);
    })
    it("Check if it returns the string itself if no args passed",function(){
        let arg=[1,2,3,4,5];
        assert.deepEqual(arg.bubbleSort(),arg);
    })
    it("should reverse when passed an array",function(){
        let arg=[43,32,21,12];
        assert.deepEqual(arg.bubbleSort(),[12,21,32,43])
    })

})

describe("Test if teacher inherits from person",function(){
    it("Lets see if teafcher inherited describe mehtod from person",function(){
        assert.notEqual(Teacher.prototype.describe,undefined);
    });
})