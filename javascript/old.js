

// var TRACK_HEIGHT = 20;
// var TRACK_SPACING = 25;
// var FRAME_WIDTH = 10;
// var FRAME_SPACING = 12;

// var data = {
// 	tracks: []
// };

// data.tracks[0] = new Track();
// data.tracks[0].keyFrames.push(new KeyFrame(0, 0));
// data.tracks[0].keyFrames.push(new KeyFrame(10, 1));
// data.tracks[0].keyFrames.push(new KeyFrame(20, .5));

// data.tracks[1] = new Track();
// data.tracks[1].keyFrames.push(new KeyFrame(4, 0));
// data.tracks[1].keyFrames.push(new KeyFrame(8, 1));
// data.tracks[1].keyFrames.push(new KeyFrame(15, .5));



// function Track() {
// 	this.keyFrames = [];
// }

// function KeyFrame(_frame, _value) {
// 	this.frame = _frame;
// 	this.value = _value;
// }


// function setup() {
// 	// uncomment this line to make the canvas the full size of the window
// 	console.log("hi");
// 	createCanvas(500, 200);
// }

// function draw() {
// 	background(50, 50, 50);
// 	// console.log(data.tracks);



// 	_.forEach(data.tracks, drawTrack);
// }

// var drawTrack = function(track, trackPosition, tracks) {
// 	console.log("track", track);
// 	noStroke();
// 	fill(0);
// 	rect(0, trackPosition * TRACK_SPACING, width, TRACK_HEIGHT);
// 	_.forEach(track.keyFrames, function(keyFrame) {
// 		fill(125, 0, 0);
// 		rect(keyFrame.frame * FRAME_SPACING, trackPosition * TRACK_SPACING, FRAME_WIDTH, TRACK_HEIGHT);
// 	});
// }




var sprites = [];



function setup() {
	createCanvas(640, 360);

	for (var i = 0; i < 10; i++) {
		sprites.push(new Draggable(random(width), random(height)));
	}
}

function draw() {
	background(100, 100, 100);


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


