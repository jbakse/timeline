console.clear();

import {Rect} from "./rect.js";

import {UIManager} from "./uiManager.js";
import {UI} from "./ui.js";
import {Track} from "./track.js";
import {KeyFrame} from "./keyframe.js";

let uiManager = new UIManager();
let tracks = [];

window.setup = function() {
	createCanvas(640, 360);
	background(50);
	let t = new Track(new Rect(0, 10, width, 20));
	tracks.push(t);
	uiManager.add(t);

	let f = new KeyFrame(new Rect(0, 10, 10, 20));
	f.setTrack(t);
	uiManager.add(f);
};


window.draw = function() {
	background(50);
	uiManager.step();
	uiManager.draw();
};
