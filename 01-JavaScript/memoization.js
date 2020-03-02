memoization

/* pure functions
    deterministic
    the output will not change for the given inputs

function add(x,y){
    return x + y;
}

add(10,20) => 30

--------------------

var z = 100

function add(x,y){
    return x + y + z;
}

add(10,20) => 130

z = 1000

add(10,20) => 1030


isPrime(x)

isPrime(10) => //after processing => false

isPrime(11) => //after processing => true

isPrime(10) => //no processing => false

isPrime(10) => //no processing => true */

var isPrime = (function(){
    var cache = {};
    return function isPrime(n){
        if (typeof cache[n] !== 'undefined')
            return cache[n];
        console.log('processing ', n);
        cache[n] = true;
        for(var i=2; i < (n/1); i++)
            if (n % i === 0){
                cache[n] = false;
                break;
            }
        return cache[n];
    }
})();

var isPrime = (function(){
    var cache = {};

    function process(n){
        console.log('processing ', n);
        for(var i=2; i < (n/1); i++)
            if (n % i === 0){
                return false;
            }
        return true;
    }
    return function isPrime(n){
        if (typeof cache[n] === 'undefined')
            cache[n] = process(n);                
        return cache[n];
    }
})();

var isOddOrEven = (function () {
    var cache = {};

    function process(n) {
        console.log('processing ', n);
        return n % 2 === 0 ? 'even' : 'odd';
    }
    return function isPrime(n) {
        if (typeof cache[n] === 'undefined')
            cache[n] = process(n);
        return cache[n];
    }
})();

function memoize( process ) {
    var cache = {};
    return function(n) {
        if (typeof cache[n] === 'undefined')
            cache[n] = process(n);
        return cache[n];
    }
}

var isPrime = memoize(function process(n) {
    console.log('processing ', n);
    for (var i = 2; i < (n / 1); i++)
        if (n % i === 0) {
            return false;
        }
    return true;
});

var isOddOrEven = memoize(function process(n) {
    console.log('processing ', n);
    return n % 2 === 0 ? 'even' : 'odd';
});