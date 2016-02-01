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
