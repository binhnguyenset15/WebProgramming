Person = function(ho,ten,tuoi,sothich){
	this.ho = ho;
	this.ten = ten;
	this.tuoi= tuoi
	this.sothich = sothich
};
var person=[
	new Person('ben','le1','18',['ăn','ngủ']),
	new Person('ben','le2','18',['ăn','ngủ']),
	new Person('ben','le3','18',['ăn','ngủ']),
	new Person('ben','le4','18',['ăn','ngủ']),
	new Person('ben','le5','18',['ăn','ngủ']),
];


function inPerson(){
	vt = $('input[name=vt]').val() - 1;
	if( person[vt] != null){
	document.write('Họ: '+ person[vt].ho + '<br>Tên: ' + person[vt].ten + '<br>Tuổi: '+ person[vt].tuoi+ '<br>Sở thích: ');
	soThich(person[vt].sothich);
	}
	else
		document.write('ngu nhu con bo');
}
function soThich(arr){
	for (let item in arr) {
		if(item < arr.length-1)
		document.write(arr[item]+ ', ');
		else
		document.write(arr[item]);
	}
}

function inDanhSachV2(){
	for (sv in sinhvien){
		console.log();
	}
}
function inne(sv){
	for (let i in sv) {
		document.write(sv[i]+ " ");
	}
}
function isThisExist(sv, ten){
	var fIndex=sv.indexOf(ten)
	if(fIndex >=0 ){
		document.write("<br><b>Có </b>"+ ten +"<b> nha</b><br>");
	}else{
		document.write("<br><b>Hong có </b>"+ ten +"<b> nha</b><br>");
	}
}
function inDanhSachSV(){
	var sv = ['ben','binh','ben1','binh1','tam']
		inne(sv)
	document.write("<br>");
	for (var i = 0; i < sv.length; i++) {
		if(i==2){
			sv[i]='tenmoi';
		}
	}
	inne(sv);
	document.write("<br><b> thêm anh ben2</b><br>")
	sv.push("ben2");
	inne(sv);
	document.write("<br><b> xóa anh ben2 vì ngu</b><br>")
	sv.pop(5);
	inne(sv);
	document.write("<br><b> cho anh ben2 lên đầu tại đã khôn lên</b><br>")
	sv.unshift("ben2");
	inne(sv);
	document.write("<br><b> xóa anh ben2 ở đầu vì ngu</b><br>")
	sv.shift();
	inne(sv);
	isThisExist(sv, "ben2")
}


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