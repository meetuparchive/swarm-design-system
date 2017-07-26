const handlebarsHelpers = {
	debug: function(optionalValue) {
		// console.log("Current Context");
		// console.log("====================");
		// console.log(this);

		if (optionalValue) {
			console.log("Value");
			console.log("====================");
			console.log(optionalValue);
		}
	},

	json: function(context) {
		var cache = [];
		var string = JSON.stringify(context, function(key, value) {
			if (typeof value === 'object' && value !== null) {
				if (cache.indexOf(value) !== -1) {
					// Circular reference found, discard key
					return;
				}
				// Store value in our collection
				cache.push(value);
			}
			return value;
		});
		cache = null; // Enable garbage collection
		return string;
	},

	if_eq: function(a, b, opts) {
		if(a == b)
			return opts.fn(this);
		else
			return opts.inverse(this);
	},

	unless_eq: function(a, b, opts) {
		if(a !== b)
			return opts.fn(this);
		else
			return opts.inverse(this);
	},

	log: function(content) {
		console.log(content);
	},

	csvToSubnav: function(context) {
		var arr = context.split(', ');

		return ('<ul>') + arr.map(function(item) {
			if (typeof item !== 'string') {
				item = options.fn(item);
			}

			var itemHash = item.replace(/\s+/g, '-').toLowerCase();

			return '<li><a href=#"' + itemHash + '" title="' + item + '">' + item + '</a></li>';
		}).join('\n') + '</ul>';
	},

	arrToStr: function(arr) {
		// console.log(arr, arr.toString());
		return arr.toString();
	}
}

export default handlebarsHelpers;
