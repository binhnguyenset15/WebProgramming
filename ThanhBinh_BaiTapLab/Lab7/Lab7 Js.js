SinhVien = function (HoTen, MSSV) {
    this.HoTen = HoTen;
    this.MSSV = MSSV
}

var sinhViens = [];
function LoadAjax() {
    $.post(
        "http://45.32.20.144",
        {
            "DanhSach": "SV"
        },
        function (data) {
            sinhViens = data;
            ShowSinhVien();
        },
        "json"
    );
}

function ShowSinhVien() {
    $(".DSSV").empty();
    for (let index in sinhViens) {
        $(".DSSV").append('<div class="row" id ="' + (+index + 1) + '"><div class= "col-1" >' + (+index + 1) + '</div ><div class="col-4">' + sinhViens[index].HoTen + '</div><div class="col-4">' + sinhViens[index].MSSV + '</div><div class="col-3"><button id="' + sinhViens[index].MSSV + '" class="deleteRow">Delete</button><button id="' + sinhViens[index].MSSV +'" class="editRow">Edit</button></div></div >');
    }
}


function showForm() {
    $(".formCreate").css("display", "block")
}
function hideForm() {
    $(".formCreate").css("display", "none")
}

function createNewSV() {
    var hoten = $("input[name=HoTen]").val();
    var MSSV = $("input[name=MSSV]").val();
    var NSV = new SinhVien(hoten, MSSV);
    sinhViens.unshift(NSV);
    ShowSinhVien();
    hideForm();
}

//function Del(e) {
//    var _confirm = confirm("Delete ?");
//    if (_confirm) {
//        $(e).parents('.row').remove();
//    }
//}


$(function () {
    $('.DSSV').on('click','.deleteRow', function () {
        var MSSV = $(this).attr('id');
        var index = sinhViens.findIndex(x => x.MSSV == MSSV);
        sinhViens.splice(index, 1);
        ShowSinhVien();
    });
    $('.DSSV').on('click', '.editRow', function () {
        var MSSV = $(this).attr('id');
        var index = sinhViens.findIndex(x => x.MSSV == MSSV);
        $('#' + MSSV).parents('.row').html('<div class="col-1" >' + (+index + 1) + '</div ><div class="col-4"><input type="text" name="reHoTen" placeholder="' + sinhViens[index].HoTen + '"/></div><div class="col-4"><input type="text" name="reMSSV" placeholder="' + sinhViens[index].MSSV +'"/></div><div class="col-3"><button class="btnSave">Accept</button><button class="Cancel" onclick="ShowSinhVien()" >Cancel</button></div>');
        $('.btnSave').on('click', function () {
            var reHT = $('input[name=reHoTen]').val();
            var reMSSV = $('input[name=reMSSV]').val();
            var reSV = new SinhVien(reHT, reMSSV);
            sinhViens[index] = reSV;
            ShowSinhVien();
        });
    });
});


