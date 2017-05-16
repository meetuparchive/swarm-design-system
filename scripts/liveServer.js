import liveServer from 'live-server';

const params = {
	port: 8181,
	host: '0.0.0.0',
	root: '../build',
	wait: 1000,
};

liveServer.start(params);
