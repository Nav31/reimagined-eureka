

var mergeKLists = function(lists) {
    if(lists.length < 1) return lists;
    
    return mergeSort(flatten(lists));
    
};


function flatten(array) {
    var resArray = [];
        for(var i = 0; i < array.length ; i++){
            if(Array.isArray(array[i])) resArray = resArray.concat(flatten(array[i]));
            else resArray = resArray.concat(array[i]);
        }
        return resArray;
    }
    
    
    
    
function merge(arr1, arr2) {
	var result = [];
	while(arr1.length > 0 && arr2.length > 0) {
		if(arr1[0] > arr2[0]) {
			result.push(arr2.shift());
		} else {
			result.push(arr1.shift());
		}
	}
	result = result.concat(arr1.length ? arr1 : arr2);
	return result;
}

function mergeSort(arr) {
	if (arr.length <= 1) return arr;
	var midPoint = Math.floor(arr.length / 2);
	var left = arr.slice(0,midPoint);
	var right = arr.slice(midPoint);
	return merge(mergeSort(left), mergeSort(right));
}