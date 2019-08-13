SinhVien = function (hoTen, MSSV) {
    this.hoTen = hoTen;
    this.MSSV = MSSV
}

var SV = [
    new SinhVien("Benle1", "111"),
    new SinhVien("Benle2", "222"),
    new SinhVien("Benle3", "333"),
]
function ShowSinhVien() {
    for (let index in SV) {
        $(".Group-SV").append('<div class="row"><div class= "col-1" >'+(+index+1)+'</div ><div class="col-5">'+SV[index].hoTen+'</div><div class="col-6">'+SV[index].MSSV+'</div></div >');
    }
}
