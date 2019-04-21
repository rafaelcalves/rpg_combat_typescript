import chai = require('chai');

var assert = chai.assert;
var expect = chai.expect;

describe('BaseTest', function(){
	it('should pass', function() {
		expect( 1 + 1 ).to.be.equals(2);
	});
})