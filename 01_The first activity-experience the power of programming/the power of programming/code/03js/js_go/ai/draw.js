class Draw {
	constructor(params) {
		this.ctx = params.ctx;
		if (typeof params.canvas == "string") {
			this.canvas = document.querySelector(params.canvas);
		} else {
			this.canvas = params.canvas;
		}
		this.color = [
			["#D1D1D1", "#F9F9F9"], //白
			["#0A0A0A", "#636766"] //黑
		];
		this.init();
	}
	setColor(first) {
		first = first || 2;
		if (first == 1) {
			this.color = [
				["#0A0A0A", "#636766"], //黑
				["#D1D1D1", "#F9F9F9"], //白
			];
		} else if (first == 2) {
			this.color = [
				["#D1D1D1", "#F9F9F9"], //白
				["#0A0A0A", "#636766"] //黑
			];
		}
	}
	init() {
		this.constant = 15; //格子线数
		this.width = 750;
		this.height = 750;
		this.canvas.width = this.width;
		this.canvas.height = this.height;
		this.chessGridWidth = 50;
		this.chessWidth = 20; //棋子半径
		this.padding = 25;
		this.margin = 18;
		this.dots = [
			[3, 3],
			[11, 3],
			[7, 7],
			[3, 11],
			[11, 11]
		];
		// 画棋盘
		this.drawChessBoard();
	}
	restart() {
		this.drawChessBoard();
	}
	drawChessBoard() {
		var ctx = this.ctx;
		var chessGridWidth = this.chessGridWidth;
		this.ctx.clearRect(0, 0, this.width, this.height);
		var padding = this.padding;
		for (var i = 0; i < this.constant; i++) {
			ctx.beginPath();
			ctx.strokeStyle = "black";
			ctx.moveTo(padding + i * chessGridWidth, padding);
			ctx.lineTo(padding + i * chessGridWidth, this.width - padding);
			ctx.stroke();
			ctx.beginPath();
			ctx.moveTo(padding, padding + i * chessGridWidth);
			ctx.lineTo(this.height - padding, padding + i * chessGridWidth);
			ctx.stroke();
		}
		var dots = this.dots;
		for (var j = 0; j < dots.length; j++) {
			var dot = dots[j];
			ctx.beginPath();
			ctx.fillStyle = "black";
			ctx.arc(padding + dot[0] * chessGridWidth, padding + dot[1] * chessGridWidth, 12, 0, 2 * Math.PI);
			ctx.fill();
		}
		ctx.beginPath();
		ctx.strokeStyle = "black";
		ctx.rect(this.margin, this.margin, this.width - 2 * this.margin, this.height - 2 * this.margin);
		ctx.stroke();
	}
	drawCurrectPoint(lastpoint, point, user) {
		if (lastpoint) {
			this.drawPoint(lastpoint.point, lastpoint.user, this.chessWidth);
		}
		this.drawCircle(point, this.chessWidth - 1);
		this.drawPoint(point, user, this.chessWidth - 2);
	}
	drawCircle(point, radius) {
		var ctx = this.ctx;
		var padding = this.padding;
		var chessGridWidth = this.chessGridWidth;
		ctx.beginPath();
		ctx.strokeStyle = "red";
		ctx.arc(padding + point[1] * chessGridWidth, padding + point[0] * chessGridWidth, radius, 0, 2 * Math.PI);
		ctx.stroke();
	}
	drawPoint(point, user, radius) {
		var ctx = this.ctx;
		var padding = this.padding;
		var chessGridWidth = this.chessGridWidth;
		ctx.beginPath();
		ctx.arc(padding + point[1] * chessGridWidth, padding + point[0] * chessGridWidth, radius, 0, 2 * Math.PI);
		var g = ctx.createRadialGradient(padding + point[1] * chessGridWidth, padding + point[0] *
			chessGridWidth, radius, padding + point[1] * chessGridWidth, padding + point[0] *
			chessGridWidth, 0); //设置渐变
		var color = this.color;
		switch (user) {
			case 1: //ai
				var c = color[0];
				g.addColorStop(0, c[0]);
				g.addColorStop(1, c[1]);
				break;
			case 2: //玩家
				var c = color[1];
				g.addColorStop(0, c[0]);
				g.addColorStop(1, c[1]);
				break;
			default:
				break;
		}
		ctx.fillStyle = g;
		ctx.fill();
	}
}
