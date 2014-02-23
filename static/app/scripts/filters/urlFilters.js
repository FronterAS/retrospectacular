/* Based on https://gist.github.com/jakemmarsh/6008983 */
'use strict';
angular.module('retrospectApp')
    .filter('urlToLink', function() {
        var  //URLs starting with http://, https://, or ftp://
            protocolReplacePattern = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim,

            //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
            w3ReplacePattern = /(^|[^\/])(www\.[\S]+(\b|$))/gim,

            //Change email addresses to mailto:: links.
            eMailReplacePattern = /(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/gim;

        return function(text) {
            if (text) {
                angular.forEach(text.match(protocolReplacePattern), function() {
                    text = text.replace(protocolReplacePattern, '<a href="$1" target="_blank">$1</a>');
                });
                angular.forEach(text.match(w3ReplacePattern), function() {
                    text = text.replace(w3ReplacePattern, '$1<a href="http://$2" target="_blank">$2</a>');
                });
                angular.forEach(text.match(eMailReplacePattern), function() {
                    text = text.replace(eMailReplacePattern, '<a href="mailto:$1">$1</a>');
                });
            }

            return text;
        };
    });
