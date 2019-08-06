function chuyenDoi() {
	for (var j = 1; j <=5; j++) {
		for (var i = 1; i <=6; i++) {
			var x= 's'+i;
			if(j==1)
			document.getElementById('s'+ i + j).innerHTML= parseInt($("#" + x).text());
			if(j==2)
			document.getElementById('s'+ i + j).innerHTML= parseFloat($("#" + x).text());
			if(j==3)
			document.getElementById('s'+ i + j).innerHTML= Number($("#" + x).text());
			if(j==4)
			document.getElementById('s'+ i + j).innerHTML= +($("#" + x).text());
			if(j==5)
			document.getElementById('s'+ i + j).innerHTML= ($("#" + x).text()) | 0;
		}
	}
}