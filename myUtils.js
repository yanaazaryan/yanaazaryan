module.exports = {
	isPrime: function(n) {
		if(n <=1) {
			return false;
		}

		let div = 2;

		while(div <= Math.sqrt(n)) {
			if(n % div === 0) {
				return false;
			}

			div++;
		}

		return true;
	},
	printArray:function(array){

		if (array.length===0) {
			console.log("No numbers in between");
		}
		else{
			for (let i=0; i<= length-1; (i++)){
			console.log(array[i]);
			}

		}

	}

}


