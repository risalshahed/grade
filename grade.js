function getGrade() {
	var n, g;
	n = document.getElementById("number").value; 
	if(n >= 0 && n < 40) {
		g = "F";
	} else if(n >= 40 && n < 45) {
		g = "D";
	} else if(n >= 45 && n < 50) {
		g = "C";
	} else if(n >= 50 && n < 55) {
		g = "C+";
	} else if(n >= 55 && n < 60) {
		g = "B-";
	} else if(n >= 60 && n < 65) {
		g = "B";
	} else if(n >= 65 && n < 70) {
		g = "B+";
	} else if(n >= 70 && n < 75) {
		g = "A-";
	} else if(n >= 75 && n < 80) {
		g = "A";
	} else if(n >= 80 && n <= 100) {
		g = "A+";
	}
	document.getElementById("demo1").innerHTML = "Your grade is " + g;
}