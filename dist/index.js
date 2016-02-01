(function() {
        'use strict';
        angular
            .module('popup')
            .directive('asDraggable', asDraggable);

        function asDraggable() {
            var directive = {
                restrict: 'A',
                link: asDraggableLinkFunction
            };
            function asDraggableLinkFunction(scope, el, attrs) {
                var opts = {};
                if(attrs['containment']){
                    opts.containment = attrs['containment'];
                }
                opts.handle = 'div.as-popup-header';
                opts.opacity = 0.75;
                el.draggable(opts);
            }
            return directive;
        }
})();

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

(function() {
        'use strict';
        angular
            .module('popup')
            .directive('asResizeable', asResizeable);

        function asResizeable() {
            var directive = {
                restrict: 'A',
                link: asResizeableLinkFunction
            };
            
            function asResizeableLinkFunction(scope, el, attrs) {
                var opts = {
                    handles:'s, se'
                };
                if (attrs['asHeight']) {
                    opts.minHeight = parseInt(attrs['asHeight']);
                }
                if (attrs['asWidth']) {
                    opts.minWidth = parseInt(attrs['asWidth']);
                    opts.maxWidth = parseInt(attrs['asWidth']);
                }
                el.children('.as-popup').resizable(opts);
            }

            return directive;
        }
        
})();
