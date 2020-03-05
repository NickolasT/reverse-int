module.exports = function reverse (n) {
	n = Math.abs(n);
	n = n +'';
	let arr = n.split('');
	arr = arr.reverse();
	return arr.join('')
}
