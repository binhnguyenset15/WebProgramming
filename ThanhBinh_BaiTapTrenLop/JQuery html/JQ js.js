function testJQ() {
    var test1 = $("div > ul > li").first();
    var test2 = $(".qwe").parent();
    console.log(test2.attr("id"));
    var test3 = $(".qwe").parents("#zxc");
    console.log(test3);

    $("#asd").append("<li>4</li>");
    $("#asd").prepend("<li>6</li>");
    $(".qwe").css("color", "red");
    $(".qwe").html("abc");

    var _data;
    $get(
        "http://44.32.20.144",
        {
            "DanhSach": "SV"
        },
        function (data) {
            _data = data;
            console.log(_data);
        },
        "json"
    );
}