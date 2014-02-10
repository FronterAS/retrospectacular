describe('The date format filter', function () {
    'use strict';

    var $filter,
        moment;

    beforeEach(function() {
        module('retrospectApp');
        inject(function(_$filter_) {
            $filter = _$filter_;
        });
    });

    it('Should fuzzify datestrings', function () {
        var string = (new Date()).toISOString(),
            result = $filter('someTimeAgo')(string, 'someTimeAgo');

        expect(result).toEqual('a few seconds ago');
    });
});
