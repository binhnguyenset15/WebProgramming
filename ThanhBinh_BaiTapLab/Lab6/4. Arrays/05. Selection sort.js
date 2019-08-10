
function NhapSo() {
    var x = document.getElementById('nhapSo');
    var sort = document.getElementById('sort');
    var n = $("input[name=soluong]").val();
    x.innerHTML = '';
    for (var i = 0; i < n; i++) {
        x.appendChild(document.createElement('br'));
        var a = document.createElement('input')
        a.type = 'text';
        a.name = 'm' + i;
        x.append('Nhap So Thu ' + parseInt(i + 1) + ':');
        x.appendChild(a);
        x.appendChild(document.createElement('br'));
    }
    x.appendChild(document.createElement('br'));
    sort.style ='display: block';
}
function Sort() {
    var n = $("input[name=soluong]").val();
    var arr = [];
    for (var i = 0; i < n; i++) {
        arr.push($("input[name=m" + i + "]").val());
    }
    for (var i = 0; i < n; i++) {
        for (var j = i; j < n; j++) {
            if (arr[i] > arr[j]) {
                var d = arr[i];
                arr[i] = arr[j];
                arr[j] = d;
            }
        }
    }
    document.body.append(arr);
}