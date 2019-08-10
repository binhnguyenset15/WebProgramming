function CheckFormByID() {
    var _name = document.getElementById('HoTen');
    if (_name.value.length < 6)
        document.getElementById('check_ten').innerText = 'Ban nhap qua ngan';
    if (document.getElementById('SDT').value.length < 9)
        document.getElementById('check_sdt').innerText = 'Sai SDT';
    if (document.getElementById('email').value != document.getElementById('reEmail').value)
        document.getElementById('check_email').innerText = 'Mail khong giong nhau';
    if (document.getElementById('pass').value != document.getElementById('rePass').value)
        document.getElementById('check_pass').innerText = 'pass khong giong nhau';
}

function CheckForm