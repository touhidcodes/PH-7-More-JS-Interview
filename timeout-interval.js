const timeoutId = setTimeout(() => {
	console.log("lazy logged");
}, 5000);

clearTimeout(timeoutId);

let num = 0;
const intervalId = setInterval(() => {
	console.log(++num);
}, 1000);

clearInterval(intervalId);
