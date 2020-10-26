function fibonacci()
{
	var num1 = 0;
	var num2 = 1;
	var ans;

	document.write(num1+"<br>"+num2+"<br>");

	for (var i = 0; i < 18; i++) 
	{
		ans = num1 + num2;
		document.write(ans+"<br>");
		num1 = num2;
		num2 = ans;
	}
}

fibonacci();