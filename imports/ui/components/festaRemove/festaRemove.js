import angular from 'angular';
import angularMeteor from 'angular-meteor';
import FestasAPI from '../../../api/FestasAPI';

import templateUrl from './festaRemove.html';

class FestaRemove {
    constructor(FestasAPI){
        this._FestasAPI = FestasAPI;
    }

    remove(){
        
        this._FestasAPI.remove(this.festa);
    }
}

const name = 'festaRemove';

export default angular.module(name,[
    angularMeteor,
    FestasAPI.name
]).component(name,{
    templateUrl,
    bindings:{
        festa:'<'
    },
    controllerAs: name,
    controller: FestaRemove
});
