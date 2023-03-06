try {
	// Block of code to try
	if (condition) {
		throw "error";
		//    Defines custom error
	}
} catch (error) {
	console.log(error);
	// Block of code handle error
} finally {
	// Block of code to be executed regardless of the try / catch result
}
