//
// AngularJS 1.x-Imports
//
System.register(['./ort-filter', './flug-service', './home/home', './flug-suchen/flug-suchen', './flug-edit/flug-edit', './components/validation/ort', './components/validation/async-ort', './components/validation/gdate', './app-module', './passagier-card/passagier-card', './services/passagier-service', './upgrade-adapter'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ort_filter_1, flug_suchen_1, flug_edit_1, ort_1, async_ort_1, gdate_1, app_module_1, passagier_card_1, passagier_service_1, upgrade_adapter_1;
    return {
        setters:[
            function (ort_filter_1_1) {
                ort_filter_1 = ort_filter_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (flug_suchen_1_1) {
                flug_suchen_1 = flug_suchen_1_1;
            },
            function (flug_edit_1_1) {
                flug_edit_1 = flug_edit_1_1;
            },
            function (ort_1_1) {
                ort_1 = ort_1_1;
            },
            function (async_ort_1_1) {
                async_ort_1 = async_ort_1_1;
            },
            function (gdate_1_1) {
                gdate_1 = gdate_1_1;
            },
            function (app_module_1_1) {
                app_module_1 = app_module_1_1;
            },
            function (passagier_card_1_1) {
                passagier_card_1 = passagier_card_1_1;
            },
            function (passagier_service_1_1) {
                passagier_service_1 = passagier_service_1_1;
            },
            function (upgrade_adapter_1_1) {
                upgrade_adapter_1 = upgrade_adapter_1_1;
            }],
        execute: function() {
            //
            // Konfiguration
            //
            app_module_1.app.config(function ($stateProvider, $urlRouterProvider) {
                // Routen definieren
                $urlRouterProvider.otherwise("/home");
                $stateProvider.state('home', {
                    url: '/home',
                    templateUrl: '/app/home/home.html',
                    controller: 'home',
                    controllerAs: 'home'
                }).state('flug-suchen', {
                    url: '/flug-suchen',
                    templateUrl: '/app/flug-suchen/flug-suchen.html',
                    controller: 'flugSuchen',
                    controllerAs: 'flugSuchen'
                }).state('flug-edit', {
                    url: '/flug-edit/:id',
                    templateUrl: '/app/flug-edit/flug-edit.html',
                    controller: 'flugEdit',
                    controllerAs: 'flugEdit'
                });
                /*
                .state('passagier-suchen', {
                    url: '/passagier-suchen',
                    template: '<passagier-suchen></passagier-suchen>'
                });
                */
            });
            //
            // Registrierung von AngularJS-1.x-Elementen
            //
            app_module_1.app.directive('ort', ort_1.OrtValidatorFactory.create);
            app_module_1.app.directive('asyncOrt', async_ort_1.AsyncOrtValidatorFactory.create);
            app_module_1.app.directive('gdate', gdate_1.GDateValidatorFactory.create);
            app_module_1.app.directive('passagierCard', passagier_card_1.PassagierCardFactory.create);
            app_module_1.app.service('passagierService', passagier_service_1.PassagierService);
            // app.controller('home', Home);
            app_module_1.app.controller('flugSuchen', flug_suchen_1.FlugSuchen);
            app_module_1.app.controller('flugEdit', flug_edit_1.FlugEdit);
            app_module_1.app.filter('ort', ort_filter_1.OrtFilter.createFilter);
            app_module_1.app.constant('baseUrl', 'http://www.angular.at');
            //
            // Up- und Downgrade mit ngUpgrade
            //
            //
            // TODO: Im Rahmen dieser Übung werden Sie hier Elemente up- und down-graden
            //
            //
            // Bootstrapping über den upgradeAdapter
            // und nicht wie zuvor über Angular-Anwendung
            //
            // angular.bootstrap(document, ['app']);  // <-- Alt
            upgrade_adapter_1.upgradeAdapter.bootstrap(document.body, ['app']);
        }
    }
});
//# sourceMappingURL=app.js.map