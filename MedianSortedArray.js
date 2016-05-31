

var findMedianSortedArrays = function(nums1, nums2) {
	var newArr = mergeSort(nums1.concat(nums2));
	if (newArr.length % 2 === 1) {
		return newArr[Math.floor(newArr.length/2)];
	}
	else{
		return (newArr[(newArr.length / 2)-1] + newArr[newArr.length /2]) / 2
	} 
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