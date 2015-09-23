import {UI} from "./ui.js";

export function Track(bounds) {
	this.bounds = bounds;
	this.color = color(0, 0, 0);
}

Track.prototype = Object.create(UI.prototype);
Track.prototype.constructor = Track;
