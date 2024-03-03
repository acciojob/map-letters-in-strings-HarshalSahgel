//your JS code here. If required.
const mapLetter = (str) =>{

	const obj = {};

	for(let i = 0; i < str.length; i++){
		const char = str[i];
		obj[char] = obj[char] || [];
		obj[char].push(i);
	}

	return obj;
}
    
const str = prompt("Enter the string");
console.log(mapLetter(str.trim()));