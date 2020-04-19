function divResult(num){
const result=[];

for (let i = 1; i <= num; i++) {
	let isDivisible = false;
	const val = [];

    if (i % 2 == 0) {
		isDivisible = true;
        val.push("yu");
    }
	
	if (i % 3 == 0){
		isDivisible = true;
        val.push("gi");
    }
	
	if (i % 5 == 0){
		isDivisible = true;
        val.push("oh");
    }

	if (isDivisible) {
		result.push(val.join('-'))
	} else {
		result.push(i)
	}
}

console.log(result);
return result;
}
divResult(100);
divResult(560);
