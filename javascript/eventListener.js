// mixin class for automatically adding window listeners if
// handler methods are defined

export function eventListener() {
}

// addEventListeners, creates an event listener on window for 
// every event in _events that has a matching function on this

EventListener.prototype.addEventListeners = function() {
	this._events = { 
		'mousemove': null,
		'mousedown': null,
		'mouseup': null,
		'click': null,
		'mouseover': null,
		'mouseout': null,
		'keydown': null,
		'keyup': null,
		'keypress': null,
		'touchstart': null,
		'touchmove': null,
		'touchend': null,
		'resize': null,
		'blur': null
	};

	for (var e in this._events) {
		var f = this[e];
		if (f) {
			var m = f.bind(this);
			window.addEventListener(e, m);
			this._events[e] = m;
		}
	}
};


// removes events added by addEventListeners
EventListener.prototype.removeEventListeners = function() {
	for (var e in this._events) {
        window.removeEventListener(e, this._events[e]);
    }
};
