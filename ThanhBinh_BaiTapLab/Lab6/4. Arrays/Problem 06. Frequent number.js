
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
    sort.style = 'display: block';
}
function Find() {
    var n = $("input[name=soluong]").val();
    var arr = [];
    for (var i = 0; i < n; i++) {
        arr.push($("input[name=m" + i + "]").val());
    }

    var so = 0;
    var lanSH = 0;
    var demtam = 0;
    for (var i = 0; i < n; i++)
    {
        demtam = 1;
        for (var j = i + 1; j < n; j++)
        {
            if (arr[j] == arr[i]) {
                demtam++;
            }
        }
        if (demtam > lanSH) {
            lanSH = demtam;
            so = arr[i];
        }
        if (demtam == lanSH)
            if (arr[i] < so)
                so = arr[i];
    }
    var p = document.createElement('p')
    p.innerHTML = 'So xuat hien nhieu nhat la : ' + so + '<br>So lan xuat hien la : ' + lanSH; 
    document.body.append(p);
}