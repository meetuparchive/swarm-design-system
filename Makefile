DEST= ./build

CMD_METALSMITH = ./node_modules/babel-cli/bin/babel-node.js --presets node6 ./index.js

# TODO: move metalsmith entry to `scripts`, split into livereload and normal build

serve: node_modules
	bash -c "${CMD_METALSMITH}"


.PHONY: serve
