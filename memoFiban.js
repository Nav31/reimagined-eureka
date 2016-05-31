// This is a solution for Fib. using memoization

var memoFib = (num) => {
	var memo = {};	
	var normFib = (num) => {
		if (num <= 1) return 1
		else if(Object.keys(memo).includes(num.toString())) {return memo[num]}
		else { 
			memo[num] = normFib(num - 2) + normFib(num - 1);
			return memo[num];
		}
	}	
	return normFib(num);
}
console.log(memoFib());