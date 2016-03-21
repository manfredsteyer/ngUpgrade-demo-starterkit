//
// AngularJS 1.x-Imports
//

import { FlugService } from './services/flug-service';
import * as angular from 'angular';
import { OrtFilter } from './ort-filter';
import './flug-service';
import {Home} from './home/home';
import {FlugSuchen} from './flug-suchen/flug-suchen';
import {FlugEdit} from './flug-edit/flug-edit';
import { OrtValidatorFactory } from './components/validation/ort';
import { AsyncOrtValidatorFactory } from './components/validation/async-ort';
import { GDateValidatorFactory } from './components/validation/gdate';
import { app } from './app-module';

//
// Angular 2-Imports
//

import {PassagierSuchen} from './passagier-suchen/passagier-suchen';
import {FlugCard } from './flug-card/flug-card';
import {PassagierCardFactory} from './passagier-card/passagier-card';
import {PassagierService} from './services/passagier-service';
import {WarenkorbService} from './services/warenkorb-service';
import {Warenkorb} from './warenkorb/warenkorb';
import {HTTP_PROVIDERS} from 'angular2/http';

import {upgradeAdapter} from './upgrade-adapter';

//
// Konfiguration
//

app.config(function ($stateProvider, $urlRouterProvider) {

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

app.directive('ort', OrtValidatorFactory.create);
app.directive('asyncOrt', AsyncOrtValidatorFactory.create);
app.directive('gdate', GDateValidatorFactory.create);

app.directive('passagierCard', PassagierCardFactory.create);
app.service('passagierService', PassagierService);

app.controller('home', Home);
app.controller('flugSuchen', FlugSuchen);
app.controller('flugEdit', FlugEdit);
app.filter('ort', OrtFilter.createFilter)
app.constant('baseUrl', 'http://www.angular.at');

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
upgradeAdapter.bootstrap(document.body, ['app']);
