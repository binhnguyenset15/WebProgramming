SinhVien = function (HoTen, MSSV, Lop) {
    this.HoTen = HoTen;
    this.MSSV = MSSV;
    this.Lop = Lop;
}

var sinhViens = [
    new SinhVien('benle1', '111', 'Lop 1'),
    new SinhVien('benle2', '222', 'Lop 1'),
    new SinhVien('benle3', '333', 'Lop 2'),
    new SinhVien('benle4', '444', 'Lop 2'),
];

function ShowSinhVien(e) {
    $(".DSSV").empty();
    for (let index in e) {
        var str = `
            <div class="row" id="${(+index + 1)}">
                <div class="col-1">${(+index + 1)}</div>
                <div class="col-4">${(e[index].HoTen)}</div>
                <div class="col-2">${(e[index].MSSV)}</div>
                <div class="col-2">${(e[index].Lop)}</div>
                <div class="col-3">
                    <button id="${(e[index].MSSV)}" class="deleteRow">Delete</button>
                    <button id="${(e[index].MSSV)}" class="editRow">Edit</button>
                </div>
            </div>`;
        $(".DSSV").append(str);
    }
}

function createNewSV() {
    var hoten = $("input[name=HoTen]").val();
    var MSSV = $("input[name=MSSV]").val();
    var Lop = $("select").val();
    $("input[name=HoTen]").val('');
    $("input[name=MSSV]").val('');
    $("select").val('Lop 1');
    var NSV = new SinhVien(hoten, MSSV, Lop);
    sinhViens.unshift(NSV);
    ShowSinhVien(sinhViens);
}

$(function () {
    $("input").prop("required", "true");
    //<--Detele JS-->
    $('.DSSV').on('click', '.deleteRow', function () {
        var MSSV = $(this).attr('id');
        var index = sinhViens.findIndex(x => x.MSSV == MSSV);
        sinhViens.splice(index, 1);
        ShowSinhVien(sinhViens);
    });
    //<--Edit JS-->
    $('.DSSV').on('click', '.editRow', function () {
        var MSSV = $(this).attr('id');
        var index = sinhViens.findIndex(x => x.MSSV == MSSV);
        var sinhvien = sinhViens.find(x => x.MSSV == MSSV);
        $('.form input, .form select').each(function () {
            var name = $(this).attr('name');
            $(this).val(sinhvien[name]);
        });
        var str = `
            <button class="btnSave">Accept</button>
            <button class="btnCancel"" >Cancel</button>
        `;
        $('.form h3').html('Sua Thong Tin Sinh Vien');
        $('.form .col-3').html(str);
        $('.btnSave').on('click', function () {
            var reHT = $('input[name=HoTen]').val();
            var reMSSV = $('input[name=MSSV]').val();
            var reLop = $("select").val();
            var reSV = new SinhVien(reHT, reMSSV, reLop);
            sinhViens[index] = reSV;
            ShowSinhVien(sinhViens);
        });
        $('.btnCancel').on('click', function () {
            var str1 = `
                <div class="row">
                    <h3>Them Sinh Vien</h3>
                </div>
                <div class="row formCreate">
                    <div class="col-9">
                        Ho Ten: <input type="text" name="HoTen" />
                        MSSV:<input type="number" name="MSSV" /><br />
                        Lop:<select name="Lop">
                            <option>Lop 1</option>
                            <option>Lop 2</option>
                        </select>
                    </div>
                    <div class="col-3">
                        <button onclick="createNewSV()">Them</button>
                    </div>
                </div>
            `;
            $('.form').html(str1);
        });
    });
    //<--Ket thuc edit JS-->

    //<--Chon Danh Sach Lop-->
    $('a').on('click', function () {
        var Lop = $(this).attr('value');
        var sinhVienCL = sinhViens.filter(x => x.Lop === Lop);
        ShowSinhVien(sinhVienCL);
    });
    //<--END-->
});