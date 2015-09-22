console.clear();

import {drawTarget} from "./testlib";
import {UI} from "./ui.js";
import {Rect} from "./rect.js";

console.log(UI);

let UIs = [];

window.setup = function() {
	console.log("hello, p5");
	createCanvas(640, 360);
	background(50);

	UIs.push(new UI(new Rect(10, 10, 100, 100)));



};


window.draw = function() {
	background(50);
	UIs.forEach( ui => ui.step() );
	// UIs.forEach( ui => ui.draw() );

	_.invoke(UIs, "draw");
};

window.mousePressed = function() {
	UIs = [];
};
