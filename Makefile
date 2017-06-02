DEST= ./build

CMD_BABEL_NODE = ./node_modules/babel-cli/bin/babel-node.js --presets node6

# TODO: move metalsmith entry to `scripts`, split into livereload and normal build

build: node_modules
	bash -c "${CMD_BABEL_NODE} ./scripts/build.js"

serve: node_modules
	bash -c "${CMD_BABEL_NODE} ./scripts/serve.js"


.PHONY: build
.PHONY: serve
