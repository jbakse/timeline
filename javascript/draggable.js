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
		this.color = color(0, 0, 255);
	}
	if (this.dragState === DragStates.HOVER) {
		this.color = color(200, 0, 0);
	}
	if (this.dragState === DragStates.DOWN) {
		this.color = color(200, 200, 0);
	}
	if (this.dragState === DragStates.DRAG) {
		this.color = color(0, 200, 0);
	}

};

Draggable.prototype.mousemove = function() {
	

	if (this.dragState === DragStates.IDLE && this.bounds.contains(mouseX, mouseY)) {
		// mouseOver
		this.dragState = DragStates.HOVER;
	}

	if (this.dragState === DragStates.HOVER && !this.bounds.contains(mouseX, mouseY)) {
		// mouseOut
		this.dragState = DragStates.IDLE;
	}

	if (this.dragState === DragStates.DOWN) {
		// dragStart
		this.dragState = DragStates.DRAG;
	}

	if (this.dragState === DragStates.DRAG) {
		// drag
		this.bounds.x = mouseX + this.dragInfo.offsetX;
		this.bounds.y = mouseY + this.dragInfo.offsetY;
	}
};

Draggable.prototype.mousedown = function() {
	if (this.dragState === DragStates.HOVER) {
		// mouseDown
		this.dragState = DragStates.DOWN;
		this.dragInfo = {
			offsetX: this.bounds.x - mouseX,
			offsetY: this.bounds.y - mouseY
		};
	}
};

Draggable.prototype.mouseup = function() {

	if (this.dragState === DragStates.DOWN) {
		// click
	}

	if (this.dragState === DragStates.DRAG) {
		// endDrag
	}

	if (this.bounds.contains(mouseX, mouseY)) {
		this.dragState = DragStates.HOVER;
	}else{
		this.dragState = DragStates.IDLE;
	}

};
