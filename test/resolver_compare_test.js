var resolver = require('../src/resolver.js');
var assert = require('assert');



describe('resolver.compare ', function() {
    it('should return "true" when attr = 10 , arg = {eq : 10}',
    function() {
        assert.equal(
            true,
            resolver.compare(10 , {eq : 10})
        );
    });
    it('should return "true" when attr = 10 , arg = {gt : 7}',
    function() {
        assert.equal(
            true,
            resolver.compare(10 , {gt : 7})
        );
    });
    it('should return "false" when attr = 10 , arg = {gt_eq : 5 , lt : 9} ',
    function() {
        assert.equal(
            false,
            resolver.compare(10 , {gt_eq : 5 , lt : 9})
        );
    });
});
