var Sails = require("sails");

var chai = require('chai');
//var chaiAsPromised = require('chai-as-promised');

//chai.use(chaiAsPromised);

GLOBAL.AssertionError = chai.AssertionError;
GLOBAL.expect = chai.expect;


before(function(done){
	Sails.lift({}, function(err, server){
		if(err)
			return done(err);
		done(err, server);
	});
});

after(function(done){
	Sails.lower(done);
});