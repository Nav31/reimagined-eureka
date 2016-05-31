["[1,2,3,44,5,]", "7", "8"]

var BinarySearchTreeLCA = (strArr) => {
	let array = strArr[0];
	array = array.replace(/[\[\]]/g, '');
	array = array.split(',');
	let last = +strArr.pop();
	let sec2last = +strArr.pop();
	for(var i = array.length - 1; i >= 0; i--){
		if(array[i] > sec2last && array[i] < last) {
			return array[i];
		}
	}
	return false;
}