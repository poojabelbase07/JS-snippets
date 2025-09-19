/* Q.2) Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:
-increment() increases the current value by 1 and then returns it.
-decrement() reduces the current value by 1 and then returns it.
-reset() sets the current value to init and then returns it. */

//Solution:

let createCounter = function(init){
    let currvalue = init;
   return{
    increment: function(){
        currvalue++;
        return currvalue;
    },
   
    decrement: function(){
        currvalue--;
        return currvalue;
    },

    reset: function(){
        currvalue = init;
        return currvalue;
    }
   };
};
