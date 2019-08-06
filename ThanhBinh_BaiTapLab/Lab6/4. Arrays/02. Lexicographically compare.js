function soSanh() {
	var m1 = $('input[name=m1]').val();
    var m2 = $('input[name=m2]').val();
    Am1 = m1.split("");
    Am2 = m2.split("");
    var b = true;
    for (var i = 0; i <Am1.length; i++) {
        if(Am1[i]==null && Am2[i] != null){
            b=false;
            document.writeln('<');
            break;
        }
        else if(Am1[i]!=null && Am2[i] == null){
            document.writeln('>');
            b = false;
            break;
        }
        else if(Am1[i] < Am2[i]){
            document.writeln('<');
            b = false;
            break;
        }
        else if(Am1[i] > Am2[i]){
            document.writeln('>');
            b = false;
            break;
        }
    }
    if(b){
    document.writeln('=');
    }
}