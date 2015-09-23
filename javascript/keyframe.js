import {Draggable} from "./draggable.js";

export function KeyFrame(bounds) {
	Draggable.call(this, bounds);
	// this.bounds = bounds;
	// this.color = color(150, 150, 250);
	this.track = null;
}


KeyFrame.prototype = Object.create(Draggable.prototype);
KeyFrame.prototype.constructor = KeyFrame;


KeyFrame.prototype.setTrack = function(track) {
	this.track = track;
};


KeyFrame.prototype.mousemove = function(e) {
	Draggable.prototype.mousemove.call(this, e);
	this.bounds.y = this.track.bounds.y;
};


// KeyFrame.prototype.mousedown = function(e) {
// 	console.log(mouseX, mouseY);
// 	if (this.bounds.contains(mouseX, mouseY)) {
// 		console.log("hi");
// 	}
// };
