/**
 * Wrap this in an angular service.
 *
 * @return {object}
 */
var HtmlToWiki = (function () {

    var hTag = function (tagName, text) {
            var parts = tagName.split(''),
                hType = parseInt(parts[1], 10),
                markdown = '';

            for (var i = 1; i <= hType;i += 1) {
                markdown += '=';
            }

            return markdown + ' ' + text + ' ' + markdown;
        },

        ulTag = function (items) {

        },

        parseHtml = function (html) {

        };

    return {
        'parseHtml': parseHtml
    };
}());
