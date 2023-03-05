const promise = new promise((resolve, reject) => {
	resolve(235);
	reject("No data found");
});

// Resolve Handling
promise.then((data) => {
	console.log(data);
});

// Error Handling
promise.catch((error) => {
	console.log(error);
});

const loadData = async () => {
	const res = await fetch(`url`);
	const data = await res.json();
};
