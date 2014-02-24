describe('The url filter', function () {
    'use strict';

    var $filter;

    beforeEach(function() {
        module('retrospectApp');
        inject(function(_$filter_) {
            $filter = _$filter_;
        });
    });

    it('Should turn plaintext http url into html anchor tag', function () {
        var string = 'this has a http://link.com in it',
            result = $filter('urlToLink')(string, 'urlToLink');

        expect(result).toEqual('this has a <a href="http://link.com" target="_blank">http://link.com</a> in it');
    });

    it('Should turn plaintext www. url into html anchor tag', function () {
        var string = 'this has a www.link.com in it',
            result = $filter('urlToLink')(string, 'urlToLink');

        expect(result).toEqual('this has a <a href="http://www.link.com" target="_blank">www.link.com</a> in it');
    });

    it('Should turn plaintext email address into html anchor tag with mailto: url prefix', function () {
        var string = 'this has a email@foo.com in it',
            result = $filter('urlToLink')(string, 'urlToLink');

        expect(result).toEqual('this has a <a href="mailto:email@foo.com">email@foo.com</a> in it');
    });
});
