export function drawTarget(x, y, radius) {
	push();
	noStroke();
	fill(255, 0, 0);
	ellipse(x, y, radius*2, radius*2);
	fill(255, 255, 255);
	ellipse(x, y, radius*2 - 10, radius*2 - 10);
	pop();
}
