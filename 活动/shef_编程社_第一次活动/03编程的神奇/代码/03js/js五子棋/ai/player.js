
class Player {
	constructor(params) {
		this.name = params.name || "player1";
		this.draw = params.draw;
		this.canvas = params.canvas;
		this.ai = params.ai;
		this.clickEvent = params.click || function() {};
		this.init();
		this.initEvent();
	}
	init() {
		this.board = [];
		for (var i = 0; i < 15; i++) {
			var b = [];
			for (var j = 0; j < 15; j++) {
				b.push(0);
			}
			this.board.push(b);
		}
	}
	initEvent() {
		var that = this;
		var lock = false;
		this.canvas.addEventListener("click", function(e) {
			that.clickEvent && that.clickEvent(that, e);
		});
	}
	isEmpty(x, y) {
		return this.board[x][y] === 0;
	}
	isWin(point, user) {
		var x = point[0];
		var y = point[1];
		var count = 0;
		var board = this.board;
		// 横排看有没有5个
		for (var i = y - 4; i <= y; i++) {
			count = 0;
			if (i >= 0) {
				for (var j = i; j <= i + 4; j++) {
					if (j >= 15) {
						break;
					}
					if (board[x][j] == user) {
						count++;
					} else {
						break;
					}
				}
				if (count >= 5) {
					return true;
				}
			}
		}
		//竖排看有没有5个
		for (var i = x - 4; i <= x; i++) {
			count = 0;
			if (i >= 0) {
				for (var j = i; j <= i + 4; j++) {
					if (j >= 15) {
						break;
					}
					if (board[j][y] == user) {
						count++;
					} else {
						break;
					}
				}
				if (count >= 5) {
					return true;
				}
			}

		}
		//左上到右下看有没有5个
		for (var i = x - 4, j = y - 4; i <= x, j <= y; i++, j++) {
			count = 0;
			if (i >= 0 && j >= 0) {
				for (var xx = i, yy = j; xx <= i + 4, yy <= j + 4; xx++, yy++) {
					if (xx >= 15 && yy >= 15) {
						break;
					}
					if (board[xx][yy] == user) {
						count++;
					} else {
						break;
					}
				}
				if (count >= 5) {
					return true;
				}
			}
		}
		//右上到左下看有没有5个
		for (var i = x - 4, j = y + 4; i <= x, j <= y; i++, j++) {
			count = 0;
			if (i >= 0 && j < 15) {
				for (var xx = i, yy = j; xx <= i + 4, yy >= j - 4; xx++, yy--) {
					if (xx >= 15 && yy < 0) {
						break;
					}
					if (board[xx][yy] == user) {
						count++;
					} else {
						break;
					}
				}
				if (count >= 5) {
					return true;
				}
			}
		}
		return false;
	}
	getPoint(offsetX, offsetY) {
		var abs = function(num) {
			return Math.abs();
		}
		//四舍五入
		var round = function(num) {
			num = Math.abs(num);
			return Math.round(num);
		};

		var margin = this.draw.margin;
		var padding = this.draw.padding;
		var chessGridWidth = this.draw.chessGridWidth;
		var that = this;
		var x = offsetX;
		var y = offsetY;
		if ((x < that.draw.width - margin) && (x > margin) &&
			(y < that.draw.height - margin) && (y > margin)) {
			var coordinateX = (x - padding) / chessGridWidth;
			var coordinateY = (y - padding) / chessGridWidth;
			return [round(coordinateY), round(coordinateX)];
		} else {
			return null;
		}
	}
}
