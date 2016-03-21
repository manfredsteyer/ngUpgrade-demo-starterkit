System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var OrtValidatorFactory;
    return {
        setters:[],
        execute: function() {
            OrtValidatorFactory = (function () {
                function OrtValidatorFactory() {
                }
                OrtValidatorFactory.create = function () {
                    var cities = ['Graz', 'Hamburg', 'Wien'];
                    return {
                        require: 'ngModel',
                        link: function (scope, element, attrs, ngModel) {
                            ngModel.$validators.ort = function (value) {
                                var count = cities
                                    .filter(function (c) { return c == value; })
                                    .length;
                                if (count > 0) {
                                    return true;
                                }
                                else {
                                    return false;
                                }
                            };
                        }
                    };
                };
                return OrtValidatorFactory;
            }());
            exports_1("OrtValidatorFactory", OrtValidatorFactory);
        }
    }
});
//# sourceMappingURL=ort.js.map