var Spinner = (function(){
    var counter = Symbol('counter');

    function Spinner(){
        this[counter] = 0;
    }

    Spinner.prototype.up = function(){
        return ++this[counter];
    }

    Spinner.prototype.down = function(){
        return --this[counter];
    }

    return Spinner;
})();