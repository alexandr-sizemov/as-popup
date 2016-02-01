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
