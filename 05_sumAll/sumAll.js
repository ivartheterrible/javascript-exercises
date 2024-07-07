const sumAll = function(num1, num2) {
    if (typeof(num1) != "number" || typeof(num2) != "number"){
        return "ERROR";
    } else if (num1 < 0 || num2 < 0){
        return "ERROR";
    }
    
    let total = 0;
    let numArray = [];
    let bigNum = 0;
    let smallNum = 0;

    if(num1 < num2){
        smallNum = num1;
        bigNum = num2;
    } else if(num1 > num2){
        smallNum = num2;
        bigNum = num1;
    }

    for(i=smallNum; i<= bigNum; i++){
        numArray.push(i);
    }

    function forEachNum(item){  
        total += item;
    }

    numArray.forEach(forEachNum)

    return total;
};

// Do not edit below this line
module.exports = sumAll;
