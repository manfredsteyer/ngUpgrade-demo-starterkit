import {Component, Inject} from 'angular2/core';
import {upgradeAdapter} from '../upgrade-adapter';
import {PassagierService} from '../services/passagier-service';
import {WarenkorbService} from '../services/warenkorb-service';

@Component({
    selector: 'passagier-suchen',
    templateUrl: 'app/passagier-suchen/passagier-suchen.html'
})
export class PassagierSuchen {
    
    constructor(
        private passagierService: PassagierService, // AngularJS 1.x
        private warenkorbService: WarenkorbService
        ) {
    }
    
    name = "Muster";
    passagiere: Array<any> = [];
    
    search() {
        
        this.passagierService
            .find(this.name)
            .then((passagiere) => {
                this.passagiere = passagiere.data;
            });
    }
    
    info = "PassagierSuchen";
    selectedPassagier;
    
    select(passagier) {
        this.selectedPassagier = passagier;
        this.warenkorbService.passagier = passagier;
    }
}

