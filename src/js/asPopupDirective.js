(function() {
        'use strict';

        angular
            .module('popup')
            .directive('asPopup', asPopup);

        function asPopup() {
            var directive = {
                restrict: 'E',
                scope: {
                    isMinimizeable: '@',
                    isClosed: "=",
                    containment: '@',
                    asWidth: '@',
                    asHeight: '@',
                    color: "@",
                    titleText: "@",
                    titleIcon: "@"
                },
                transclude: true,
                controller: ['$scope', controllerFunc],
                controllerAs: 'asPopupCtrl',
                templateUrl: 'asPopup.html',
                link: linkFunc
            };

            return directive;
            function controllerFunc(scope) {
                scope.isClosed = false;
                scope.isMinimized = false;
            }

            function linkFunc(scope, el, attr) {
            }

        }

})();
