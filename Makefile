build: node_modules
	./node_modules/babel-cli/bin/babel-node.js --presets node6 ./index.js

node_modules: package.json
	npm install

.PHONY: build
