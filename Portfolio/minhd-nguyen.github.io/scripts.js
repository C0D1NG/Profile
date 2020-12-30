// ONLOAD

window.onload = function () {
	var il = new Il();
	il.beginFlying();
};


// CLASSES

function Il() {
	var talents = ['code', 'test', 'learn', 'think', 'share', 'read'];
	var currentIndex = 0;
	var nextTalent = function() {
		currentIndex = currentIndex + 1 < talents.length ? currentIndex + 1 : 0;
	};
	var talentElement = $('#flyup');
	var flyTalents = function() {
		talentElement.fadeOut(200, function () {
			nextTalent();
			talentElement.text(talents[currentIndex]);
		}).fadeIn(200);
	};
	
	this.beginFlying = function() {
		setInterval(flyTalents, 1200);
	};
	return this;
}
