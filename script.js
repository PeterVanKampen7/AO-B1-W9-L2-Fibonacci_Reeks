function fibonacci(index)
{
	var num1 = 0;
	var num2 = 1;
	var ans;

	document.write(num1+"<br>"+num2+"<br>");

	for (var i = 2; i < index; i++) 
	{
		ans = num1 + num2;
		document.write(ans+"<br>");
		num1 = num2;
		num2 = ans;
	}
}

fibonacci(20);

function fibonacciAlt(index)
{
	var num1 = 0;
	var num2 = 1;
	var ans;

	if(index == 1)
	{
		return num1;
	}
	else if(index == 2)
	{
		return num2;
	}
	else
	{
		for (var i = 2; i < index; i++) 
		{
			ans = num1 + num2;		
			num1 = num2;
			num2 = ans;
		}
		return ans;
	}
}

for (var i = 1; i <= 20; i++) 
{
	document.write(fibonacciAlt(i)+"<br>");	
}