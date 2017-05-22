var 

s_bird,
s_bg,
s_fg,
s_pipeNorth,
s_pipeSouth,
s_text,
s_score,
s_splash,
s_buttons,
s_numberS,
s_numberB;


function Sprite(img, x, y, width, height) {
	this.img = img;
	this.x = x*2;
	this.y = y*2;
	this.width = width*2;
	this.height = height*2;
};
Sprite.prototype.draw = function(ctx, x, y) {
	ctx.drawImage(this.img, this.x, this.y, this.width, this.height,
		x, y, this.width, this.height);
};

function initSprites(img) {

	s_bird = [
		new Sprite(img, 350, 0, 30, 30),
		new Sprite(img, 350, 30, 30, 30),
		new Sprite(img, 350, 60, 30, 30),
		new Sprite(img, 355, 90, 28, 28),
		new Sprite(img, 350, 120, 30, 25),
		new Sprite(img, 350, 145, 30, 30),
		new Sprite(img, 350, 175, 30, 20),
		new Sprite(img, 350, 195, 30, 30),
		new Sprite(img, 350, 225, 30, 30),
		new Sprite(img, 385, 0, 35, 35),
		new Sprite(img, 385, 35, 35, 40),
		new Sprite(img, 385, 75, 35, 40),
		new Sprite(img, 385, 115, 35, 35),
		new Sprite(img, 385, 150, 35, 35),
		new Sprite(img, 385, 185, 35, 35),
		new Sprite(img, 385, 225, 35, 30),
		new Sprite(img, 418, 0, 25, 40),
		new Sprite(img, 418, 40, 25, 40),
		new Sprite(img, 418, 80, 25, 25),
		new Sprite(img, 418, 120, 25, 35),
		new Sprite(img, 418, 155, 25, 30),
		new Sprite(img, 418, 185, 25, 40),
		new Sprite(img, 418, 225, 25, 25)
	];
	
	s_bg = new Sprite(img,   0, 0, 242, 143);
	s_bg.color = "#70C5CF";
	s_fg = new Sprite(img, 0, 113, 242, 30);
	
	s_pipeNorth = new Sprite(img, 270, 0, 80, 120);
	s_pipeSouth = new Sprite(img, 270, 122, 80, 130);
	
	s_text = {
		Flopps: new Sprite(img, 120, 145, 150, 33),
		GameOver:   new Sprite(img, 120, 180, 95, 20),
		GetReady:   new Sprite(img, 120, 155, 90, 25)
	}
	s_buttons = {
		Rate:  new Sprite(img,  224, 242, 40, 14),
		Menu:  new Sprite(img, 144, 228, 40, 14),
		Share: new Sprite(img, 184, 228, 40, 14),
		Score: new Sprite(img, 184, 242, 40, 14),
		Ok:    new Sprite(img, 224, 228, 40, 14),
		Start: new Sprite(img, 144, 242, 40, 14)
	}

	s_score  = new Sprite(img, 3,  144, 115, 58);
	s_splash = new Sprite(img,   215, 180,  40, 25);

	s_numberS = new Sprite(img, 5, 215, 90,  10);
	s_numberB = new Sprite(img, 5, 215, 90, 10);

	s_numberS.draw = s_numberB.draw = function(ctx, x, y, num) {
		num = num.toString();
		var step = this.width + 2;
		for (var i = 0, len = num.length; i < len; i++) {
			var n = parseInt(num[i]);
			ctx.drawImage(img, step*n, this.y, this.width, this.height,
				x, y, this.width, this.height)
			x += step;
		}
	}
}