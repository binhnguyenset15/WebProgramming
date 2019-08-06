function checkSo(n) {
	if (n < 2) {
            return console.log('false');
        }
        var squareRoot = Math.sqrt(n);
        for (var i = 2; i <= squareRoot; i++) {
            if (n % i == 0) {
                return console.log('false');
            }
        }
        return console.log('true');
}