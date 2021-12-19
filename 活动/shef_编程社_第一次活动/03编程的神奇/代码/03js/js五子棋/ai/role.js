const role = {
	com: 1, //ai
	hum: 2, // »À
	empty: 0,
	reverse: function(r) {
		return r == 1 ? 2 : 1;
	}
}
