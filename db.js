const { Pool, Client } = require('pg');

var state = {
	pool: null
}

exports.connect = function(mode, done) {
	const connectionString = 'postgres://wdjkdcmfjuuoln:645185c40838d2012477d6b1bb7a5a65d4e4c00284d0af7fc8c4e125ad377983@ec2-54-163-255-181.compute-1.amazonaws.com:5432/df5kgm4cigv6fh';
	state.pool = new Pool({
		connectionString: connectionString,
	})
	done();
}

exports.get = function() {
	return state.pool;
}