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
        $('.form input, .form select').each(function () {
            var name = $(this).attr('name');
            $(this).val(sinhViens[index][name]);
            if (name == 'MSSV') {
                $(this).prop('disabled', true);
            }
        });
        var str = `
            <button class="btnSave">Accept</button>
            <button class="btnCancel"" >Cancel</button>
        `;
        var str1 = `
                <div class="row">
                    <h3>Them Sinh Vien</h3>
                </div>
                <div class="row formCreate">
                    <div class="col-9">
                        Ho Ten: <input type="text" name="HoTen" class="form-control" />
                        MSSV:<input type="number" name="MSSV" class="form-control"/>
                        Lop:<select name="Lop" class="form-control">
                            <option>Lop 1</option>
                            <option>Lop 2</option>
                        </select>
                    </div>
                    <div class="col-3 btnForm">
                        <button onclick="createNewSV()">Add</button>
                    </div>
                </div>`;
        $('.form h3').html('Sua Thong Tin Sinh Vien');
        $('.form .col-3').html(str);
        $('.btnSave').on('click', function () {
            var reHT = $('input[name=HoTen]').val();
            var reMSSV = $('input[name=MSSV]').val();
            var reLop = $("select").val();
            var reSV = new SinhVien(reHT, reMSSV, reLop);
            sinhViens[index] = reSV;
            $('.form').html(str1);
            ShowSinhVien(sinhViens);
        });
        $('.btnCancel').on('click', function () {
            
            $('.form').html(str1);
        });
    });
    //<--Ket thuc edit JS-->

    //<--Chon Danh Sach Lop-->
    $('a').on('click', function () {
        var Lop = $(this).attr('value');
        if (Lop != 'All') {
            var sinhVienCL = sinhViens.filter(x => x.Lop === Lop);
            ShowSinhVien(sinhVienCL);
        }
        else {
            ShowSinhVien(sinhViens);
        }
    });
    //<--END-->
});