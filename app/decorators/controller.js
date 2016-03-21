System.register(['../app-module'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var app_module_1;
    var ControllerConfig;
    function Controller(config) {
        return function (target) {
            var controllerName = config.name || target.constructor.name;
            app_module_1.app.controller(controllerName, target.constructor);
        };
    }
    exports_1("Controller", Controller);
    return {
        setters:[
            function (app_module_1_1) {
                app_module_1 = app_module_1_1;
            }],
        execute: function() {
            ControllerConfig = (function () {
                function ControllerConfig() {
                }
                return ControllerConfig;
            }());
            exports_1("ControllerConfig", ControllerConfig);
        }
    }
});
//# sourceMappingURL=controller.js.map