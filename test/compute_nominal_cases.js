var dtree = require('../index.js');
var assert = require('assert');
var tree = require('./tree.json');


describe('dtree.compute ', function() {
    it('should return "Girl" when the value {age : 16, sex : "female"}', function() {
        assert.equal(
            "Girl",
            dtree.compute({age : 16, sex : 'female'}, tree));
    });
     it('should return "Boy" when the value {age : 8, sex : "male"}', function() {
        assert.equal(
            "Boy",
            dtree.compute({age : 12, sex : "male"}, tree));
    });
    it('should return "Adult" when the value {age : 20, sex : "male"}', function() {
        assert.equal(
            "Adult",
            dtree.compute({age : 20, sex : "male"}, tree));
    });
});