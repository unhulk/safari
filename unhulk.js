var unhulk = (function() {

	var types = ['p'];

	var init = function() {
		//change all text within paragraph tags to lowercase
		types.forEach(changeCase);
		//recapitalize strong'd movie titles
		recapitalize();
	};

	var changeCase = function(type) {
		var nodes = document.getElementsByTagName(type);
		if(nodes) {
			for (var i = 0; i < nodes.length; ++i) {
				var n = nodes[i];
				n.style.textTransform="lowercase";
			}
		}
	};

	var recapitalize = function() {
		var as = document.getElementsByTagName('strong');
		for (var i = 0; i < as.length; ++i) {
			var strong = as[i];
			strong.style.textTransform="capitalize";
		}
	};

	return {
		init: init
	};

})();

// register for message events
safari.self.addEventListener("message", unhulk.init, false);
