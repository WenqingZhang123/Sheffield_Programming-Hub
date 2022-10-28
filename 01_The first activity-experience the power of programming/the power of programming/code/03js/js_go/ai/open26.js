var open26 = function() {
	let getBoard1 = function() {
		return [
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		]
	}

	const open26 = {}

	// 疏
	open26.shuyue = function() {
		var board = getBoard1();
		board[5][5] = 1;
		board.name = '疏月';
		return board;
	}

	// 溪
	open26.xiyue = function() {
		var board = getBoard1();
		board[5][6] = 1;
		board.name = '溪月';
		return board;
	}

	// 寒
	open26.hanyue = function() {
		var board = getBoard1();
		board[5][7] = 1;
		board.name = '寒月';
		return board;
	}

	// 残
	open26.canyue = function() {
		var board = getBoard1();
		board[6][5] = 1;
		board.name = '残月';
		return board;
	}

	// 花
	open26.huayue = function() {
		var board = getBoard1();
		board[6][6] = 1;
		board.name = '花月';
		return board;
	}

	// 金
	open26.jinyue = function() {
		var board = getBoard1();
		board[7][5] = 1;
		board.name = '金月';
		return board;
	}

	// 雨
	open26.yuyue = function() {
		var board = getBoard1();
		board[7][6] = 1;
		board.name = '雨月';
		return board;
	}

	// 新
	open26.xinyue = function() {
		var board = getBoard1();
		board[8][5] = 1;
		board.name = '新月';
		return board;
	}

	// 丘
	open26.qiuyue = function() {
		var board = getBoard1();
		board[8][6] = 1;
		board.name = '丘月';
		return board;
	}

	// 松
	open26.songyue = function() {
		var board = getBoard1();
		board[8][7] = 1;
		board.name = '松月';
		return board;
	}

	// 游
	open26.youyue = function() {
		var board = getBoard1();
		board[9][5] = 1;
		board.name = '游月';
		return board;
	}

	// 山
	open26.shanyue = function() {
		var board = getBoard1();
		board[9][6] = 1;
		board.name = '山月';
		return board;
	}

	// 瑞
	open26.ruiyue = function() {
		var board = getBoard1();
		board[9][7] = 1;
		board.name = '瑞月';
		return board;
	}

	let getBoard2 = function() {
		return [
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		]
	}

	// 流
	open26.liuyue = function() {
		var board = getBoard2();
		board[5][5] = 1;
		board.name = '流月';
		return board;
	}

	// 水
	open26.shuiyue = function() {
		var board = getBoard2();
		board[5][6] = 1;
		board.name = '水月';
		return board;
	}

	// 恒
	open26.hengyue = function() {
		var board = getBoard2();
		board[5][7] = 1;
		board.name = '恒月';
		return board;
	}

	// 峡
	open26.xiayue = function() {
		var board = getBoard2();
		board[5][8] = 1;
		board.name = '峡月';
		return board;
	}

	// 长
	open26.changyue = function() {
		var board = getBoard2();
		board[5][9] = 1;
		board.name = '长月';
		return board;
	}

	// 岚
	open26.lanyue = function() {
		var board = getBoard2();
		board[6][5] = 1;
		board.name = '岚月';
		return board;
	}

	// 浦
	open26.puyue = function() {
		var board = getBoard2();
		board[6][6] = 1;
		board.name = '浦月';
		return board;
	}

	// 云
	open26.yunyue = function() {
		var board = getBoard2();
		board[6][7] = 1;
		board.name = '云月';
		return board;
	}

	// 明
	open26.mingyue = function() {
		var board = getBoard2();
		board[7][5] = 1;
		board.name = '明月';
		return board;
	}

	// 银
	open26.yinyue = function() {
		var board = getBoard2();
		board[7][6] = 1;
		board.name = '银月';
		return board;
	}

	// 名
	open26.ming2yue = function() {
		var board = getBoard2();
		board[8][5] = 1;
		board.name = '名月';
		return board;
	}

	// 斜
	open26.xieyue = function() {
		var board = getBoard2();
		board[8][6] = 1;
		board.name = '斜月';
		return board;
	}

	// 慧
	open26.huiyue = function() {
		var board = getBoard2();
		board[9][5] = 1;
		board.name = '慧月';
		return board;
	}

	return open26;
}();
