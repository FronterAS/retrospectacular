angular.module('retrospectApp')
    .filter('role', function () {
        return function (items, role) {
            var filtered = [];

            angular.forEach(items, function (item) {
                console.log(items, role);

                if (item.role === role) {
                    filtered.push(item);
                }
            });

            return filtered;
        };
    }
);
