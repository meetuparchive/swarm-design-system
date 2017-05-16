build: node_modules
	./node_modules/babel-cli/bin/babel-node.js --presets node6 ./index.js
	./node_modules/.bin/babel --presets node6 ./templates/js/script.js --source-maps --out-file ./build/script.js --copy-files

.PHONY: build
