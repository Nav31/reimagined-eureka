

// Question: Implement Quicksort
// How? 1. Pick a pivot Point. 2. Partition 3. Recursion 


var newQuickSort = (arr) => {
	let left = [];
	let right = [];
	if(arr.length <= 1) return arr;
	let random = Math.floor(Math.random() * arr.length);
	let partition = arr[random];
	while(arr.length > 1) {
		if(arr[0] !== partition) {
			var shifted = arr.shift();
			if(shifted > partition) right.push(shifted);
			else left.push(shifted);
		} else {
			var popped = arr.pop();
			if(popped > partition) right.push(popped);
			else left.push(popped);
		}
	}
	return newQuickSort(left).concat(partition, newQuickSort(right));
}










