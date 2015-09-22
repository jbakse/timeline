import {UI} from "./ui.js";

var DragStates = {
	IDLE: "idle",
	HOVER: "hover",
	DOWN: "down",
	DRAG: "drag"
};
Object.freeze(DragStates);


export function Draggable(bounds) {
	UI.call(this, bounds);
	this.dragState = DragStates.IDLE;
	this.color = color(255, 200, 200);
}

Draggable.prototype = Object.create(UI.prototype);
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
