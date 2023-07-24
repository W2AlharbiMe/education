console.log('hello')


function getMax(array) {
	let max = array[0];
	array.forEach((item) => {
		if(item > max) max = item;
	})

	return max;
}


console.log(getMax([1, 2, 3, 4, 5, 50, 6, 10, 100, 1000]));
