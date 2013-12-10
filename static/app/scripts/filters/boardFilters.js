angular.module('retrospectApp')
    .filter('role', function () {
        return function (items, role) {
            var filtered = [];

            angular.forEach(items, function (item) {
                if (item.role === role) {
                    filtered.push(item);
                }
            });

            return filtered;
        };
    }
);
