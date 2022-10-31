const distance = (a, b) => {
	if (!(typeof (a) === 'string' || typeof (a) === 'String'))
		throw Error('InvalidType');
	if (typeof (b) != 'string' && typeof (b) != 'String')
		throw Error('InvalidType');
	n = a.length; a = a.split("");
	m = b.length; b = b.split("");
	let dist = [];
	cost = 0;
	if (n == 0 && m == 0) { return 0; }
	if (n == 0 && m != 0) {
		d = m;
		return d;
	}
	if (n != 0 && m == 0) {
		d = n;
		return d;
	}
	const res = Array(m + 1).fill(null).map(() =>
		Array(n + 1).fill(null));
	for (let i = 0; i <= n; i += 1) {
		res[0][i] = i;
	}
	for (let j = 0; j <= m; j += 1) {
		res[j][0] = j;
	}
	for (let j = 1; j <= m; j += 1) {
		for (let i = 1; i <= n; i += 1) {
			const indicator = a[i - 1] === b[j - 1] ? 0 : 1;
			res[j][i] = Math.min(
				res[j][i - 1] + 1,
				res[j - 1][i] + 1,
				res[j - 1][i - 1] + indicator,
			);
		}
	}
	return res[m][n];


}


module.exports.distance = distance