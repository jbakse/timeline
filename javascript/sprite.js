var sprites = [];



function setup() {
	createCanvas(640, 360);

	for (var i = 0; i < 10; i++) {
		sprites.push(new Draggable(random(width), random(height)));
	}
}

function draw() {
	background(50, 50, 50);


	_.invoke(sprites, "step");
	_.invoke(sprites, "draw");
}

function mouseMoved() {
	_.invoke(sprites, "mouseMoved");
}

function mouseDragged() {
	_.invoke(sprites, "mouseDragged");
}

function mousePressed() {
	_.invoke(sprites, "mousePressed");
}

function mouseReleased() {
	_.invoke(sprites, "mouseReleased");
}

function mouseClicked() {
	_.invoke(sprites, "mouseClicked");
}


var Sprite = function(x, y) {
	this.x = x || 0;
	this.y = y || 0;
	this.localBounds = new Bounds(-10, -10, 20, 20);
	this.color = color(200, 200, 200);
};

Sprite.prototype.step = function() {

};

Sprite.prototype.draw = function() {
	fill(this.color);
	ellipseMode(CORNER);
	ellipse(this.x + this.localBounds.left, this.y + this.localBounds.top, this.localBounds.width, this.localBounds.height);
};



var Bounds = function(left, top, width, height) {
	this.left = left || 0;
	this.top = top || 0;
	this.width = width || 0;
	this.height = height || 0;
};

Bounds.prototype.contains = function(x, y) {
	return (x > this.left && x < this.left + this.width && y > this.top && y < this.top + this.height);
};


var DragStates = {
	IDLE: "idle",
	HOVER: "hover",
	DOWN: "down",
	DRAG: "drag"
};
Object.freeze(DragStates);


var Draggable = function(x, y) {
	Sprite.call(this, x, y);
	this.dragState = DragStates.IDLE;
	this.color = color(255, 200, 200);



};

Draggable.prototype = Object.create(Sprite.prototype);
Draggable.prototype.constructor = Draggable;



Draggable.prototype.step = function() {

	if (this.dragState === DragStates.IDLE) {
		this.color = color(100, 0, 0);
	}
	if (this.dragState === DragStates.HOVER) {
		this.color = color(200, 0, 0);
	}
	if (this.dragState === DragStates.DOWN) {
		this.color = color(100, 100, 0);
	}
	if (this.dragState === DragStates.DRAG) {
		this.color = color(200, 200, 0);
	}

};

Draggable.prototype.mouseMoved = function() {
	var localMouseX = mouseX - this.x;
	var localMouseY = mouseY - this.y;

	if (this.dragState === DragStates.IDLE && this.localBounds.contains(localMouseX, localMouseY)) {
		// mouseOver
		this.dragState = DragStates.HOVER;
	}

	if (this.dragState === DragStates.HOVER && !this.localBounds.contains(localMouseX, localMouseY)) {
		// mouseOut
		this.dragState = DragStates.IDLE;
	}
};

Draggable.prototype.mouseDragged = function() {
	if (this.dragState === DragStates.DOWN) {
		// dragStart
		this.dragState = DragStates.DRAG;
	}

	if (this.dragState === DragStates.DRAG) {
		// drag
		this.x = mouseX + this.dragInfo.offsetX;
		this.y = mouseY + this.dragInfo.offsetY;
	}
};

Draggable.prototype.mousePressed = function() {
	var localMouseX = mouseX - this.x;
	var localMouseY = mouseY - this.y;


	if (this.dragState === DragStates.HOVER) {
		// mouseDown
		this.dragState = DragStates.DOWN;
		this.dragInfo = {
			offsetX: -localMouseX,
			offsetY: -localMouseY
		};
	}

};

Draggable.prototype.mouseReleased = function() {

	var localMouseX = mouseX - this.x;
	var localMouseY = mouseY - this.y;

	if (this.dragState === DragStates.DOWN) {
		// click
	}

	if (this.dragState === DragStates.DRAG) {
		// endDrag
	}

	if (this.localBounds.contains(localMouseX, localMouseY)) {
		this.dragState = DragStates.HOVER;
	}else{
		this.dragState = DragStates.IDLE;
	}

};

Draggable.prototype.draw = function() {
	fill(this.color);
	ellipseMode(CORNER);
	ellipse(this.x + this.localBounds.left, this.y + this.localBounds.top, this.localBounds.width, this.localBounds.height);
};
