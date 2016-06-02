var integerBreak = function(n) {
    var result = 0;
    for(var i = 2; i <= Math.ceil(n/2); i++){
        var currentRes = 0;
        var power = Math.floor(n/i);
        console.log('power', power)
        var remainder = n%i;
        console.log('rem', remainder, i)
        if(power < 2) currentRes = i * power;
        else currentRes = Math.pow(i, power -1) * (i+remainder);
        if(currentRes > result){
            result = currentRes;
        }
    }
    return result;
};