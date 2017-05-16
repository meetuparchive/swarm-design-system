build: node_modules
	./node_modules/babel-cli/bin/babel-node.js --presets node6 ./index.js

.PHONY: build
