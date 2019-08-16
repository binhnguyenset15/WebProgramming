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
        var str = `
            <div class="row" id="${(+index + 1)}">
                <div class="col-1">${(+index + 1)}</div>
                <div class="col-4">${(sinhViens[index].HoTen)}</div>
                <div class="col-4">${(sinhViens[index].MSSV)}</div>
                <div class="col-3">
                    <button id="${(sinhViens[index].MSSV)}" class="deleteRow">Delete</button>
                    <button id="${(sinhViens[index].MSSV)}" class="editRow">Edit</button>
                </div>
            </div>`;
        $(".DSSV").append(str);
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
    $("input[name=HoTen]").val('');
    $("input[name=MSSV]").val('');
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

var NoC = 0;
var sortName = 0;
var SortMS = 0;

$(function () {
    $("input").prop("required", "true");
    $('.DSSV').on('click','.deleteRow', function () {
        var MSSV = $(this).attr('id');
        var index = sinhViens.findIndex(x => x.MSSV == MSSV);
        sinhViens.splice(index, 1);
        ShowSinhVien();
    });
    $('.DSSV').on('click', '.editRow', function () {
        var MSSV = $(this).attr('id');
        var index = sinhViens.findIndex(x => x.MSSV == MSSV);
        var str = `
            <div class="col-1" >${(+index + 1)}</div >
            <div class="col-4"><input type="text" name="reHoTen" placeholder="${(sinhViens[index].HoTen)}"/></div>
            <div class="col-4"><input type="number" name="reMSSV" placeholder="${(sinhViens[index].MSSV)}"/></div>
            <div class="col-3">
                <button class="btnSave">Accept</button>
                <button class="Cancel" onclick="ShowSinhVien()" >Cancel</button>
            </div>`;
        $('#' + MSSV).parents('.row').html(str);
        $('.btnSave').on('click', function () {
        var reHT = $('input[name=reHoTen]').val();
        var reMSSV = $('input[name=reMSSV]').val();
        var reSV = new SinhVien(reHT, reMSSV);
        sinhViens[index] = reSV;
        ShowSinhVien();
        });
    });
    $('.setBG').on('click', function () {
        NoC += 1;
        if (NoC == 1)
            $('body').css('background-color', 'coral');
        if (NoC == 2)
            $('body').css('background-color', '#99ff99');
        if (NoC == 3) { 
            $('body').css('background-color', '#99ccff');
            NoC = 0;
        }
        $(".rsBG").css("display", "block")
    });
    $('.rsBG').on('click', function () {
        $('body').css('background-color', 'white');
        $(".rsBG").css("display", "none");
    });
    $('.sortTen').on('click', function () {
        sortName +=1
        if (sortName %2 !=0) {
            sinhViens.sort((a, b) => (a.HoTen > b.HoTen) ? 1 : ((b.HoTen > a.HoTen) ? -1 : 0));
        }
        if (sortName %2 == 0) {
            sinhViens.sort((a, b) => (a.HoTen < b.HoTen) ? 1 : ((b.HoTen < a.HoTen) ? -1 : 0));
        }
        ShowSinhVien();
    });
    $('.sortMSSV').on('click', function () {
        SortMS += 1;
        if (SortMS % 2 != 0) {
            sinhViens.sort((a, b) => (a.MSSV > b.MSSV) ? 1 : ((b.MSSV > a.MSSV) ? -1 : 0));
        }
        if (SortMS % 2 == 0) {
            sinhViens.sort((a, b) => (a.MSSV > b.MSSV) ? -1 : ((b.MSSV > a.MSSV) ? 1 : 0));
        }
        ShowSinhVien();
    });
});


