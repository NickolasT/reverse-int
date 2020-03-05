module.exports = function reverse (n) {
	n = n +'';
	let arr = n.split('');
	arr = arr.reverse();
	return arr[0]+arr[1]+arr[2]
}
