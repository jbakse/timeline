import {UI} from "./ui.js";

export function UIManager(bounds) {
	this.UIs = [];
	this.addEventListeners();
}

// forward events to this.sendEvents
UIManager.prototype.addEventListeners = function() {
	this._events = [ 
		'mousemove',
		'mousedown',
		'mouseup',
		'click',
		'mouseover',
		'mouseout',
		'keydown',
		'keyup',
		'keypress',
		'touchstart',
		'touchmove',
		'touchend',
		'resize',
		'blur'
	];

	this.boundSendEvents = this.sendEvents.bind(this);
	for (let e of this._events) {
		
		window.addEventListener(e, this.boundSendEvents);
	}
};


// removes events added by addEventListeners
UIManager.prototype.removeEventListeners = function() {
	for (var e in this._events) {
        window.removeEventListener(e, this.boundSendEvents);
    }
};

// send events to managed UIs
UIManager.prototype.sendEvents = function(e) {
	// console.log(e.type);
	
	// find UIs that have methods for this event type
	let targetUIs = _.filter( this.UIs, (ui) => typeof ui[e.type] === "function");
	
	// send them the event
	_.invoke(targetUIs, e.type, e);
};



UIManager.prototype.add = function(ui) {
	if (!(ui instanceof UI)) {
		return false;
	}

	if (this.UIs.indexOf(ui) > -1) {
		return false;
	}
	
	this.UIs.push(ui);
	return true;
};

UIManager.prototype.remove = function(ui) {
	_.pull(this.UIs, ui);
};


UIManager.prototype.step = function() {
	_.invoke(this.UIs, "step");
};

UIManager.prototype.draw = function() {
	_.invoke(this.UIs, "draw");
};
