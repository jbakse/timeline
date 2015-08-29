var TRACK_HEIGHT = 20;
var TRACK_SPACING = 25;
var FRAME_WIDTH = 10;
var FRAME_SPACING = 12;

var data = {
	tracks: []
};

data.tracks[0] = new Track();
data.tracks[0].keyFrames.push(new KeyFrame(0, 0));
data.tracks[0].keyFrames.push(new KeyFrame(10, 1));
data.tracks[0].keyFrames.push(new KeyFrame(20, .5));

data.tracks[1] = new Track();
data.tracks[1].keyFrames.push(new KeyFrame(4, 0));
data.tracks[1].keyFrames.push(new KeyFrame(8, 1));
data.tracks[1].keyFrames.push(new KeyFrame(15, .5));



function Track() {
	this.keyFrames = [];
}

function KeyFrame(_frame, _value) {
	this.frame = _frame;
	this.value = _value;
}


function setup() {
	// uncomment this line to make the canvas the full size of the window
	console.log("hi");
	createCanvas(500, 200);
}

function draw() {
	background(50, 50, 50);
	// console.log(data.tracks);



	_.forEach(data.tracks, drawTrack);
}

var drawTrack = function(track, trackPosition, tracks) {
	console.log("track", track);
	noStroke();
	fill(0);
	rect(0, trackPosition * TRACK_SPACING, width, TRACK_HEIGHT);
	_.forEach(track.keyFrames, function(keyFrame) {
		fill(125, 0, 0);
		rect(keyFrame.frame * FRAME_SPACING, trackPosition * TRACK_SPACING, FRAME_WIDTH, TRACK_HEIGHT);
	});
}
