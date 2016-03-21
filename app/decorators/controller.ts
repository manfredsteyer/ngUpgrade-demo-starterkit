import { app } from '../app-module';

export class ControllerConfig {
    name: string;
}

export function Controller(config?: ControllerConfig) {
    
    return function(target) {
        var controllerName = config.name || target.constructor.name;
        app.controller(controllerName, target.constructor);
    }    
    
}

