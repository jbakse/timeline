export function UI(bounds) {
	this.bounds = bounds;
	this.color = color(200, 200, 200);
}

UI.prototype.step = function() {

};

UI.prototype.draw = function() {
	push();
	noStroke();
	fill(this.color);
	rect(this.bounds.x, this.bounds.y, this.bounds.width, this.bounds.height);
	pop();
};
