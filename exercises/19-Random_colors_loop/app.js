function getColor(colorNumber=0)
{
	//make sure parameter is a number and not a string by converting the value to int:
	colorNumber = parseInt(colorNumber);
	switch(colorNumber){
		case 1: return "red"; 
				break;
		case 2: return "yellow"; 
				break;
		case 3: return "blue"; 
				break;
		case 4: return "green"; 
				break;
		default: return "black"; 
				 break;
	}
}	
	//your loop here
function colorNumber(){
	var randomNumber = Math.floor(Math.random(1,4)*10);
		return randomNumber();
}
console.log(colorNumber);

	function getAllStudentColors(){
		for (var student=0; student<=10; student++){
			if(randomNumber === 1){
				return("red");
			}else if (randomNumber ===2){
				return("yellow");
			}else if (randomNumber === 3){
				return("blue")
			}else if (randomNumber === 4){
				return("green");
			}else {
				return("black");
			}
		}
		
	var exampleColor = getColor();
}

//call the function below with the number of students in the class and print on the console
getAllStudentColors();

