var wordOrder = function(text){
	var orderedArray = [];
	var arrayOfWords = text.toLowerCase().split(" ");


	for (var i = 0; i < arrayOfWords.length; i++ ){
		// var word = arrayOfWords.indexOf(arrayOfWords[i]);
		var word = arrayOfWords[i];
		console.log(word)
		var newWord = arrayOfWords[1];
		console.log(newWord);	

		if (word === newWord) {
			orderedArray.push(word + " " + newWord);
			console.log(orderedArray);
		};
		
		
		// if (arrayOfWords.indexOf(word) != -1) {
				// orderedArray.push([word]);
				// console.log(orderedArray);
		// };
		console.log(orderedArray);
	};
}

