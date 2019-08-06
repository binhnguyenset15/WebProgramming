function TinhTumLum() {
    var string = $('input[name=so]').val();
	var arr = string.split(" ");
	var min = parseFloat(arr[0]);
	var max = parseFloat(arr[0]);
	var tong = parseFloat(0);
	for (var i = 0; i < arr.length; i++) {
		var num = parseFloat(arr[i])
		if(min > num)
			min = num;
		if(max < num)
			max = num;
		tong += num;
	}
	var avg = tong / arr.length;
	document.writeln('min= '+min);
	document.writeln('max= '+max);
	document.writeln('tong= '+tong);
	document.writeln('avg= '+ avg);
}