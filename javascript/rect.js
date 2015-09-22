export function Rect(x, y, width, height) {
	this.x = x || 0;
	this.y = y || 0;
	this.width = width || 0;
	this.height = height || 0;
}

Rect.prototype.contains = function(x, y) {
	return (x > this.x && x < this.x + this.width && y > this.y && y < this.y + this.height);
};
