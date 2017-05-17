DEST= ./build

CMD_BABEL_NODE = ./node_modules/babel-cli/bin/babel-node.js --presets node6

# TODO: move metalsmith entry to `scripts`, split into livereload and normal build

build: node_modules
	bash -c "${CMD_BABEL_NODE} ./src/script/metalsmith/build.js"

serve: node_modules
	bash -c "${CMD_BABEL_NODE} ./src/script/metalsmith/serve.js"


.PHONY: build
.PHONY: serve
