function TinhTongLe() {
	var a =1;
	var tong=0;
	while(a<=100){
		if (a%2!=0) {
			tong+=a;
		}
		a++;
	}
	document.writeln(tong);
}

var arr=[1,2,3,4,5]
var arr2=[];
function DichNguoc() {
	var a = 4;
	while(a >= 0){
		arr2.push(arr[a]);
		a--;
	}
	console.log(arr2);
}
function intungphan() {
	for(var item in arr){
	console.log(item);
}
}
